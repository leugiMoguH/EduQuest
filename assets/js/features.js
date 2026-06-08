// ──────────────────────────────────────────────────────────────────────────────
// EduQuest features.js — v1
// Carregado DEPOIS de app.js. Usa globals: state, saveState, showToast, addGems,
// addGlobalXP, CG, launchConfetti, playSound, vibrate, updateHUD, buildShop,
// buildAch, GAMES, pendingGameLaunch, launchGameWithDiff, showScreen, updateEdu
// ──────────────────────────────────────────────────────────────────────────────

(function (w) {
  'use strict';

  // ──────────────────────────────────────────────────────────────────────────
  // UTIL
  // ──────────────────────────────────────────────────────────────────────────

  function today() { return new Date().toISOString().slice(0, 10); }

  function getMonday() {
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff)).toISOString().slice(0, 10);
  }

  function showFloatingBadge(text, color) {
    let el = document.getElementById('eq-mult-badge');
    if (!el) {
      el = document.createElement('div');
      el.id = 'eq-mult-badge';
      el.className = 'eq-mult-badge';
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.style.background = color;
    el.classList.remove('eq-mult-show');
    void el.offsetWidth;
    el.classList.add('eq-mult-show');
    setTimeout(() => el.classList.remove('eq-mult-show'), 1900);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 1 + 2 + 3 + 7 — SCORE ANSWER WRAPPER
  // Combina: Hot Streak Multiplier, Close Call Bonus, "Almost!", EDU reactions
  // ──────────────────────────────────────────────────────────────────────────

  let _consecWrongs = 0;
  let _vsEduScore = 0;
  let _vsEduTotal = 0;

  const _origScoreAnswer = w.scoreAnswer;
  w.scoreAnswer = function (ok) {
    const timeLeft = CG ? (CG.timeLeft || 0) : 0;
    const diff = CG ? (CG.diff || 1) : 1;
    const isCloseCall = ok && timeLeft > 0 && timeLeft <= 2;
    const isAlmost = !ok && timeLeft >= 0 && timeLeft <= 2;

    _origScoreAnswer.call(w, ok);

    // Vs EDU simulation
    _vsEduTotal++;
    const eduAcc = diff <= 1 ? 0.85 : diff <= 2 ? 0.65 : diff <= 3 ? 0.45 : diff <= 4 ? 0.30 : 0.18;
    if (Math.random() < eduAcc) _vsEduScore++;
    updateVsEduDisplay();

    if (ok) {
      _consecWrongs = 0;
      const streak = CG ? CG.streak : 0;

      // Hot streak milestones
      if (streak === 3) showFloatingBadge('🔥 x3 COMBO!', '#f59e0b');
      if (streak === 6) { showFloatingBadge('⚡ x6 +5💎', '#7c3aed'); w.addGems(5); }
      if (streak === 9) { showFloatingBadge('🌟 x9 INSANO! +10💎', '#06b6d4'); w.addGems(10); w.launchConfetti && w.launchConfetti(60); }
      if (streak > 9 && streak % 3 === 0) { w.addGems(5); showFloatingBadge('🚀 x' + streak + ' +5💎', '#e11d48'); }

      // Close-call lightning bonus
      if (isCloseCall) {
        w.addGems(3);
        w.showToast('⚡ Resposta Relâmpago! +3💎');
      }
    } else {
      _consecWrongs++;

      // "Almost!" — wrong answer with very little time left
      if (isAlmost) {
        showAlmostToast();
      }

      // EDU reacts after 3 consecutive wrongs
      if (_consecWrongs >= 3) {
        _consecWrongs = 0;
        const msgs = ['Não desistas! 😤 Todos erram!', 'Continua! 💪 Tu consegues!', 'Errar é aprender! 😊'];
        const el = document.getElementById('eduText');
        if (el) el.textContent = msgs[Math.floor(Math.random() * msgs.length)];
      }
    }
  };

  function showAlmostToast() {
    let el = document.getElementById('almostToast');
    if (!el) return;
    el.classList.remove('almost-show');
    void el.offsetWidth;
    el.classList.add('almost-show');
    setTimeout(() => el.classList.remove('almost-show'), 2200);
  }

  function updateVsEduDisplay() {
    const el = document.getElementById('eq-vs-edu');
    if (!el || !CG) return;
    const myScore = CG.correct || 0;
    el.textContent = `🤖 EDU: ${_vsEduScore}`;
    el.style.color = myScore > _vsEduScore ? '#10b981' : myScore < _vsEduScore ? '#ef4444' : '#94a3b8';
  }

  // Reset Vs EDU on new game
  const _origShowScreen = w.showScreen;
  w.showScreen = function (id) {
    _origShowScreen.call(w, id);
    if (id === 'resultScreen') onResultScreen();

    // Nightmare: hide power-ups + Duplo XP activation
    if (['gameScreen', 'mathScreen', 'geoScreen', 'wordScreen', 'fofScreen'].includes(id)) {
      // Apply Duplo XP buff from shop
      if (CG && !CG._doubleApplied && (state.powerups || {}).double2x > 0) {
        state.powerups.double2x--;
        CG.double2x = true;
        CG._doubleApplied = true;
        saveState();
        w.updateHUD && w.updateHUD();
        setTimeout(() => w.showToast('2️⃣✖️ Duplo XP ativo neste jogo!'), 800);
      }
      setTimeout(() => {
        const pu = document.getElementById('gamePowerupBar');
        if (pu) pu.style.display = (CG && CG.diff === 5) ? 'none' : '';
        updateDifficultyBadge();
      }, 50);
    }
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 4 — DAILY FREE HINT
  // ──────────────────────────────────────────────────────────────────────────

  function initDailyFreeHint() {
    const t = today();
    if (!state._freeHintDate || state._freeHintDate !== t) {
      state._freeHintDate = t;
      state.powerups = state.powerups || {};
      state.powerups.hint = (state.powerups.hint || 0) + 1;
      saveState();
      setTimeout(() => w.showToast('🎁 Dica diária gratuita adicionada! 🔍'), 1800);
    }
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 5 — STREAK FREEZE (day-streak protection)
  // ──────────────────────────────────────────────────────────────────────────

  const _origInitDayStreak = w.initDayStreak;
  w.initDayStreak = function () {
    const last = state.lastPlayDate || '';
    const t = today();
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

    // Would the streak reset? (last play was before yesterday)
    if (last && last !== t && last !== yesterday) {
      if ((state.powerups || {}).streakFreeze > 0) {
        state.powerups.streakFreeze--;
        // Fake "last played yesterday" so initDayStreak keeps the streak
        state.lastPlayDate = yesterday;
        saveState();
        _origInitDayStreak.call(w);
        setTimeout(() => w.showToast('❄️ Streak Freeze usado! Streak mantida! 🔥'), 2200);
        return;
      }
    }
    _origInitDayStreak.call(w);
  };

  const _origBuildShop = w.buildShop;
  w.buildShop = function () {
    _origBuildShop.call(w);
    _appendShopItems();
  };

  function _appendShopItems() {
    const r = document.getElementById('shopRow');
    if (!r) return;

    const items = [
      {
        id: 'streakFreeze', icon: '❄️🔥', name: 'Streak Freeze',
        desc: 'Protege streak diária', cost: 30,
        get count() { return (state.powerups || {}).streakFreeze || 0; },
        buy() {
          if ((state.gems || 0) < 30) { w.showToast('💎 Gems insuficientes!'); return; }
          state.gems -= 30;
          state.powerups = state.powerups || {};
          state.powerups.streakFreeze = ((state.powerups.streakFreeze) || 0) + 1;
          saveState(); updateHUD(); w.showToast('❄️🔥 Streak Freeze comprado!'); w.buildShop();
        }
      },
      {
        id: 'double2x', icon: '2️⃣✖️', name: 'Duplo XP',
        desc: 'Próximo jogo = 2x XP', cost: 20,
        get count() { return (state.powerups || {}).double2x || 0; },
        buy() {
          if ((state.gems || 0) < 20) { w.showToast('💎 Gems insuficientes!'); return; }
          state.gems -= 20;
          state.powerups = state.powerups || {};
          state.powerups.double2x = ((state.powerups.double2x) || 0) + 1;
          saveState(); updateHUD(); w.showToast('2️⃣✖️ Duplo XP comprado!'); w.buildShop();
        }
      }
    ];

    items.forEach(it => {
      if (r.querySelector('[data-fid="' + it.id + '"]')) return; // already added
      const d = document.createElement('div');
      d.className = 'shop-item';
      d.dataset.fid = it.id;
      d.innerHTML = `<span class="shop-icon">${it.icon}</span><div class="shop-name">${it.name}</div><div style="font-size:.6rem;color:var(--text2);margin-bottom:4px">${it.desc}</div><span class="shop-cost">💎${it.cost}</span><div class="shop-owned">Tens: ${it.count}</div>`;
      d.addEventListener('click', () => it.buy());
      r.appendChild(d);
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 6 — STREAK MILESTONE ANIMATIONS
  // ──────────────────────────────────────────────────────────────────────────

  function checkStreakMilestones() {
    const streak = state.dayStreak || 1;
    const pill = document.getElementById('dayStreakPill');
    if (!pill) return;

    pill.classList.remove('streak-7', 'streak-14', 'streak-30');
    if (streak >= 30) pill.classList.add('streak-30');
    else if (streak >= 14) pill.classList.add('streak-14');
    else if (streak >= 7) pill.classList.add('streak-7');

    const milestones = [
      [7,  '🔥 7 dias consecutivos! Incrível!'],
      [14, '🌟 14 dias! Estás em chamas! 🔥'],
      [30, '🏆 30 DIAS! LENDÁRIO! 🌟🌟🌟'],
    ];
    milestones.forEach(([n, msg]) => {
      const key = '_ms' + n;
      if (streak >= n && !state[key]) {
        state[key] = true; saveState();
        setTimeout(() => { w.showToast(msg); if (n >= 14) w.launchConfetti && w.launchConfetti(100); }, 2000);
      }
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 7 — EDU MASCOT REACTIONS (updateEdu wrapper)
  // ──────────────────────────────────────────────────────────────────────────

  const _origUpdateEdu = w.updateEdu;
  w.updateEdu = function () {
    _origUpdateEdu && _origUpdateEdu.call(w);
    // Inject personalised tip 30% of the time
    if (Math.random() > 0.3) return;
    const el = document.getElementById('eduText');
    if (!el) return;

    const streak = state.dayStreak || 1;
    const tc = state.totalCorrect || 0;
    const favGame = getMostPlayedGame();
    const gameInfo = favGame && w.GAMES && w.GAMES.find(g => g.id === favGame);

    const pool = streak >= 14 ? [
      `${streak} dias consecutivos! 🔥 És imparável!`,
      `Streak de ${streak} dias! 🌟 Impressionante!`,
    ] : tc > 100 ? [
      `${tc} respostas certas! 🧠 Génio!`,
      gameInfo ? `Dominas o ${gameInfo.name}! ${gameInfo.emoji} Tenta outro jogo!` : 'Continua a explorar!',
    ] : [
      'O conhecimento é poder! 💡 Vamos explorar?',
      'Cada pergunta certa torna-te mais inteligente! 🚀',
      'Tenta um jogo novo hoje! 🎯',
    ];
    el.textContent = pool[Math.floor(Math.random() * pool.length)];
  };

  function getMostPlayedGame() {
    const games = state.gamesPlayed || [];
    if (!games.length) return null;
    const counts = {};
    games.forEach(g => counts[g] = (counts[g] || 0) + 1);
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 8 — ACHIEVEMENT SOCIAL COPY
  // ──────────────────────────────────────────────────────────────────────────

  const _origBuildAch = w.buildAch;
  w.buildAch = function () {
    _origBuildAch.call(w);
    document.querySelectorAll('.badge-card.earned').forEach(card => {
      if (card.dataset.shareable) return;
      card.dataset.shareable = '1';
      card.style.cursor = 'pointer';
      card.title = 'Toca para copiar e partilhar!';
      card.addEventListener('click', () => {
        const name = card.querySelector('.badge-name')?.textContent || 'conquista';
        const icon = card.querySelector('.badge-icon')?.textContent || '🏅';
        const txt = `${icon} Conquistei "${name}" no EduQuest! ⭐ Nível ${state.globalLevel} · 🔥 ${state.dayStreak} dias. Consegues superar?`;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(txt).then(() => w.showToast('📋 Copiado! Partilha com os teus amigos!'));
        } else {
          w.showToast('Copia: ' + txt.slice(0, 60) + '…');
        }
      });
    });
  };

  // ──────────────────────────────────────────────────────────────────────────
  // 9 — SHAREABLE SCORE CARD (Canvas API)
  // ──────────────────────────────────────────────────────────────────────────

  function generateShareCard(gameTitle, correct, total, xp, level, streak, diff) {
    const canvas = document.createElement('canvas');
    canvas.width = 640; canvas.height = 340;
    const ctx = canvas.getContext('2d');

    // BG gradient
    const grad = ctx.createLinearGradient(0, 0, 640, 340);
    grad.addColorStop(0, '#0d0d1a'); grad.addColorStop(1, '#1a0a2e');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 640, 340);

    // Border glow
    ctx.strokeStyle = '#7c3aed'; ctx.lineWidth = 3;
    ctx.strokeRect(4, 4, 632, 332);

    // Logo
    ctx.font = 'bold 26px "Fredoka One", Arial'; ctx.fillStyle = '#a855f7';
    ctx.fillText('EduQuest', 30, 48);

    // Difficulty badge
    const diffLabels = ['', '🌱 Fácil', '⚡ Médio', '🔥 Difícil', '💀 Expert', '☠️ Nightmare'];
    const diffLabel = diffLabels[Math.min(diff || 1, 5)] || '';
    ctx.font = 'bold 14px Arial'; ctx.fillStyle = '#94a3b8';
    ctx.fillText(diffLabel, 500, 48);

    // Game title
    ctx.font = 'bold 22px Arial'; ctx.fillStyle = '#e2e8f0';
    ctx.fillText(gameTitle, 30, 90);

    // Score — big
    ctx.font = 'bold 96px "Fredoka One", Arial';
    const pct = total > 0 ? correct / total : 0;
    ctx.fillStyle = pct >= 0.9 ? '#10b981' : pct >= 0.7 ? '#f59e0b' : '#ef4444';
    ctx.fillText(correct + '/' + total, 30, 200);

    // Stars
    const stars = pct >= 0.9 ? '⭐⭐⭐' : pct >= 0.7 ? '⭐⭐' : '⭐';
    ctx.font = '32px Arial'; ctx.fillText(stars, 310, 190);

    // Stats row
    ctx.font = '18px Arial'; ctx.fillStyle = '#94a3b8';
    ctx.fillText('⚡ ' + xp + ' XP  ·  ⭐ Nível ' + level + '  ·  🔥 ' + streak + ' dias', 30, 250);

    // CTA
    ctx.font = 'bold 15px Arial'; ctx.fillStyle = '#7c3aed';
    ctx.fillText('Consegues superar? Joga em EduQuest!', 30, 305);

    return canvas;
  }

  function shareScore() {
    if (!CG) return;
    const gameEl = document.getElementById('gameTitle');
    const gameTitle = gameEl ? gameEl.textContent : 'EduQuest';
    const correct = CG.correct || 0;
    const total = CG.total || 10;
    const xp = CG.xpEarned || 0;

    const canvas = generateShareCard(gameTitle, correct, total, xp, state.globalLevel || 1, state.dayStreak || 1, CG.diff || 1);

    const shareText = `Fiz ${correct}/${total} em ${gameTitle}! ⭐ Nível ${state.globalLevel} 🔥 ${state.dayStreak} dias · EduQuest`;

    canvas.toBlob(blob => {
      if (navigator.share && blob) {
        navigator.share({
          title: 'EduQuest', text: shareText,
          files: [new File([blob], 'eduquest.png', { type: 'image/png' })]
        }).catch(() => _downloadCanvas(canvas));
      } else {
        _downloadCanvas(canvas);
      }
    }, 'image/png');
  }
  w.shareScore = shareScore; // expose for onclick

  function _downloadCanvas(canvas) {
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/png');
    a.download = 'eduquest-score.png';
    a.click();
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 10 — LOCAL LEADERBOARD
  // ──────────────────────────────────────────────────────────────────────────

  const LB_KEY = 'eq_lb_v1';

  function getLB() {
    try { return JSON.parse(localStorage.getItem(LB_KEY) || '{}'); }
    catch { return {}; }
  }

  function updateLB(gameId, correct, total, diff) {
    const lb = getLB();
    if (!lb[gameId]) lb[gameId] = [];
    lb[gameId].push({ score: correct, total, diff: diff || 1, date: new Date().toLocaleDateString('pt-PT') });
    lb[gameId].sort((a, b) => b.score - a.score || b.diff - a.diff);
    lb[gameId] = lb[gameId].slice(0, 5);
    localStorage.setItem(LB_KEY, JSON.stringify(lb));
    return lb[gameId];
  }

  function renderLB(gameId) {
    const el = document.getElementById('eq-leaderboard');
    if (!el) return;
    const lb = getLB();
    const entries = (lb[gameId] || []).slice(0, 3);
    if (!entries.length) { el.style.display = 'none'; return; }

    const medals = ['🥇', '🥈', '🥉'];
    el.style.display = 'block';
    el.innerHTML = '<div class="eq-lb-title">🏆 Os teus melhores resultados</div>' +
      entries.map((e, i) =>
        `<div class="eq-lb-row"><span>${medals[i]}</span><span class="eq-lb-score">${e.score}/${e.total}</span><span class="eq-lb-diff">${['', '🌱', '⚡', '🔥', '💀', '☠️'][e.diff] || ''}</span><span class="eq-lb-date">${e.date}</span></div>`
      ).join('');
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 11 — WEEKLY CHALLENGE
  // ──────────────────────────────────────────────────────────────────────────

  const WEEKLY_GAMES = ['capital', 'code', 'space', 'english', 'body', 'animal', 'music', 'lit', 'olympic', 'geo'];

  function initWeeklyChallenge() {
    const weekStart = getMonday();
    const weekNum = Math.floor(Date.now() / (7 * 24 * 3600 * 1000));
    const gameId = WEEKLY_GAMES[weekNum % WEEKLY_GAMES.length];

    if (!state._weekChallenge || state._weekChallenge.weekStart !== weekStart) {
      state._weekChallenge = { weekStart, gameId, completed: false };
      saveState();
    }
    _renderWeeklyCard();
  }

  function _renderWeeklyCard() {
    const existing = document.getElementById('eq-weekly-card');
    if (existing) existing.remove();

    const wc = state._weekChallenge;
    if (!wc) return;
    const gameId = wc.gameId;
    const gameInfo = (w.GAMES || []).find(g => g.id === gameId) || { name: gameId, emoji: '🎯' };

    const card = document.createElement('div');
    card.id = 'eq-weekly-card';
    card.className = 'eq-weekly-card' + (wc.completed ? ' completed' : '');
    card.innerHTML = `
      <div class="eq-weekly-left">
        <div class="eq-weekly-icon">📅</div>
        <div>
          <div class="eq-weekly-title">Desafio da Semana${wc.completed ? ' ✅' : ''}</div>
          <div class="eq-weekly-desc">${gameInfo.emoji} ${gameInfo.name} · Difícil · 8+/10</div>
        </div>
      </div>
      <div class="eq-weekly-right">
        <div class="eq-weekly-reward">+50💎</div>
        ${!wc.completed
          ? `<button class="eq-weekly-btn" id="eq-weekly-btn">JOGAR</button>`
          : `<div class="eq-weekly-done">COMPLETO!</div>`}
      </div>`;

    const survivorCard = document.getElementById('survivorCard');
    if (survivorCard && survivorCard.parentNode) {
      survivorCard.parentNode.insertBefore(card, survivorCard);
    }

    if (!wc.completed) {
      document.getElementById('eq-weekly-btn')?.addEventListener('click', () => {
        w.playSound && w.playSound('click');
        state._weeklyGamePending = gameId;
        saveState();
        w.launchGameWithDiff(gameId, 3);
      });
    }
  }

  function checkWeeklyCompletion() {
    const wc = state._weekChallenge;
    if (!wc || wc.completed) return;
    if (!state._weeklyGamePending || state._weeklyGamePending !== (CG && CG.id)) return;
    if (!CG || CG.correct < 8) { state._weeklyGamePending = null; saveState(); return; }

    wc.completed = true;
    state._weeklyGamePending = null;
    saveState();
    w.addGems(50);
    setTimeout(() => {
      w.showToast('📅 Desafio da Semana completo! +50💎 🎉');
      w.launchConfetti && w.launchConfetti(120);
      _renderWeeklyCard();
    }, 500);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 12 — CHALLENGE FRIEND URL
  // ──────────────────────────────────────────────────────────────────────────

  function addChallengeFriendBtn() {
    if (document.getElementById('eq-challenge-friend-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'eq-challenge-friend-btn';
    btn.className = 'big-btn secondary';
    btn.textContent = '🔗 Desafiar Amigo';
    btn.style.marginTop = '8px';

    btn.addEventListener('click', () => {
      if (!CG) return;
      const url = location.origin + location.pathname +
        '?ch=' + (CG.id || '') + '&s=' + (CG.correct || 0) + '&t=' + (CG.total || 10);
      const text = `Fiz ${CG.correct || 0}/${CG.total || 10} em EduQuest! Consegues superar? 🎓`;
      if (navigator.share) {
        navigator.share({ title: 'EduQuest – Desafio!', text, url }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text + ' ' + url);
        w.showToast('🔗 Link copiado! Partilha com os teus amigos!');
      }
    });

    const homeBtn = document.getElementById('resultHomeBtn');
    if (homeBtn) homeBtn.parentNode.insertBefore(btn, homeBtn);
  }

  function checkChallengeUrl() {
    const params = new URLSearchParams(location.search);
    const ch = params.get('ch');
    if (!ch) return;

    const score = parseInt(params.get('s') || 0);
    const total = parseInt(params.get('t') || 10);
    const gameInfo = (w.GAMES || []).find(g => g.id === ch) || { name: ch, emoji: '🎯' };

    const banner = document.getElementById('eq-challenge-banner');
    if (!banner) return;

    banner.innerHTML = `
      <div class="eq-cb-text">🏆 <strong>Desafio recebido!</strong> Bate ${score}/${total} em ${gameInfo.emoji} ${gameInfo.name}</div>
      <button class="eq-cb-btn" id="eq-cb-play">Aceitar! 🎯</button>
      <button class="eq-cb-close" id="eq-cb-close">✕</button>`;
    banner.style.display = 'flex';

    document.getElementById('eq-cb-play')?.addEventListener('click', () => {
      banner.style.display = 'none';
      w.launchGameWithDiff(ch, null);
    });
    document.getElementById('eq-cb-close')?.addEventListener('click', () => {
      banner.style.display = 'none';
    });

    // Clean URL
    history.replaceState({}, '', location.pathname);
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 13 — FIRST-SESSION ONBOARDING
  // ──────────────────────────────────────────────────────────────────────────

  const ONBOARD_STEPS = [
    { icon: '⏱️', title: 'Responde rápido!', desc: 'Cada pergunta tem um timer. Responde antes do tempo acabar para ganhar bónus!' },
    { icon: '🔥', title: 'Constrói Streaks!', desc: 'Respostas certas seguidas dão mais XP e Gems. Aos x3, x6 e x9 ganhas bónus especiais!' },
    { icon: '💎', title: 'Usa Power-ups!', desc: 'Gasta Gems na Loja para comprar Dicas, Escudos e Streak Freezes. Começaste com alguns gratuitos!' },
  ];

  function initOnboarding() {
    if (state._onboarded) return;
    const ov = document.getElementById('eq-onboarding');
    if (!ov) return;

    let step = 0;

    function render() {
      const s = ONBOARD_STEPS[step];
      const iconEl = document.getElementById('eq-onboard-icon');
      const titleEl = document.getElementById('eq-onboard-title');
      const descEl = document.getElementById('eq-onboard-desc');
      const dotsEl = document.getElementById('eq-onboard-dots');
      const btnEl = document.getElementById('eq-onboard-btn');
      if (iconEl) iconEl.textContent = s.icon;
      if (titleEl) titleEl.textContent = s.title;
      if (descEl) descEl.textContent = s.desc;
      if (dotsEl) dotsEl.innerHTML = ONBOARD_STEPS.map((_, i) =>
        `<span class="eq-onboard-dot${i === step ? ' active' : ''}"></span>`).join('');
      if (btnEl) btnEl.textContent = step < ONBOARD_STEPS.length - 1 ? 'Próximo →' : 'Vamos jogar! 🚀';
    }

    ov.style.display = 'flex';
    render();

    document.getElementById('eq-onboard-btn')?.addEventListener('click', () => {
      step++;
      if (step >= ONBOARD_STEPS.length) {
        ov.style.display = 'none';
        state._onboarded = true;
        saveState();
      } else {
        render();
      }
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 14 — PROGRESSIVE DIFFICULTY GATING (Expert / Nightmare)
  // ──────────────────────────────────────────────────────────────────────────

  // Extend getTimerForDiff for d=4 and d=5
  const _origGetTimer = w.getTimerForDiff;
  w.getTimerForDiff = function (base, diff) {
    if (diff === 4) return Math.max(6, base - 8);
    if (diff === 5) return 6;
    return _origGetTimer.call(w, base, diff);
  };

  // Extend pickQuestionsByDiff for d=4 and d=5
  const _origPickByDiff = w.pickQuestionsByDiff;
  w.pickQuestionsByDiff = function (bank, diff) {
    if (diff === 4) {
      const d4 = bank.filter(q => q.d === 4);
      if (d4.length >= 4) return d4;
      return bank.filter(q => q.d === 3);
    }
    if (diff === 5) {
      const d5 = bank.filter(q => q.d === 5);
      if (d5.length >= 4) return d5;
      const d4 = bank.filter(q => q.d === 4);
      if (d4.length >= 4) return d4;
      return bank.filter(q => q.d === 3);
    }
    return _origPickByDiff.call(w, bank, diff);
  };

  function updateDifficultyGating() {
    const level = state.globalLevel || 1;
    const expertBtn = document.getElementById('diffExpert');
    const nightmareBtn = document.getElementById('diffNightmare');
    const lockE = document.getElementById('diffExpertLock');
    const lockN = document.getElementById('diffNightmareLock');

    if (expertBtn) {
      const unlocked = level >= 10;
      expertBtn.disabled = !unlocked;
      expertBtn.classList.toggle('diff-locked', !unlocked);
      if (lockE) lockE.textContent = unlocked ? '' : '🔒 Nível 10';
    }
    if (nightmareBtn) {
      const unlocked = level >= 20;
      nightmareBtn.disabled = !unlocked;
      nightmareBtn.classList.toggle('diff-locked', !unlocked);
      if (lockN) lockN.textContent = unlocked ? '' : '🔒 Nível 20';
    }
  }

  // Hook Expert/Nightmare buttons (global pendingGameLaunch + launchGameWithDiff)
  function initDiffButtons() {
    document.getElementById('diffExpert')?.addEventListener('click', () => {
      if ((state.globalLevel || 1) < 10) { w.showToast('🔒 Nível 10 necessário!'); return; }
      const id = pendingGameLaunch;
      document.getElementById('diffOverlay').style.display = 'none';
      pendingGameLaunch = null;
      if (id) w.launchGameWithDiff(id, 4);
    });
    document.getElementById('diffNightmare')?.addEventListener('click', () => {
      if ((state.globalLevel || 1) < 20) { w.showToast('🔒 Nível 20 necessário!'); return; }
      const id = pendingGameLaunch;
      document.getElementById('diffOverlay').style.display = 'none';
      pendingGameLaunch = null;
      if (id) w.launchGameWithDiff(id, 5);
    });
    updateDifficultyGating();
  }

  // Show difficulty badge in game header
  function updateDifficultyBadge() {
    let el = document.getElementById('eq-diff-badge');
    if (!el) return;
    if (!CG || !CG.diff || CG.diff <= 3) { el.style.display = 'none'; return; }
    el.style.display = 'inline-flex';
    el.textContent = CG.diff === 4 ? '💀 EXPERT' : '☠️ NIGHTMARE';
    el.className = 'eq-diff-badge ' + (CG.diff === 4 ? 'expert' : 'nightmare');
  }

  // ──────────────────────────────────────────────────────────────────────────
  // EXPERT CONTENT PATCH — push d:4/d:5 questions from EXPERT_CONTENT into QB
  // ──────────────────────────────────────────────────────────────────────────

  function patchExpertContent() {
    const ec = window.EXPERT_CONTENT;
    if (!ec || !w.QB) return;
    Object.keys(ec).forEach(game => {
      if (w.QB[game]) w.QB[game].push(...ec[game]);
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 17 — AVATAR CUSTOMIZATION (EDU skins)
  // ──────────────────────────────────────────────────────────────────────────

  const SKINS = [
    { id: 'default', emoji: '🤖', name: 'Clássico',  cost: 0  },
    { id: 'lion',    emoji: '🦁', name: 'Leão',      cost: 15 },
    { id: 'cat',     emoji: '🐱', name: 'Gato',      cost: 15 },
    { id: 'dragon',  emoji: '🐉', name: 'Dragão',    cost: 30 },
    { id: 'alien',   emoji: '👽', name: 'Alien',     cost: 50 },
  ];

  function applyEquippedSkin() {
    const skin = SKINS.find(s => s.id === (state._equippedSkin || 'default')) || SKINS[0];
    const el = document.querySelector('.edu-avatar');
    if (el) el.textContent = skin.emoji;
  }

  function buildAvatarGrid() {
    const grid = document.getElementById('eq-avatar-grid');
    if (!grid) return;
    const equipped = state._equippedSkin || 'default';
    const unlocked = state._unlockedSkins || ['default'];

    grid.innerHTML = SKINS.map(skin => {
      const isEquipped = skin.id === equipped;
      const isOwned = unlocked.includes(skin.id);
      const cls = 'eq-skin-card' + (isEquipped ? ' equipped' : '') + (!isOwned ? ' locked' : '');
      const costHtml = !isOwned ? `<div class="eq-skin-cost">💎${skin.cost}</div>` : '';
      const statusTxt = isEquipped ? '✅ Equipado' : isOwned ? 'Toca p/ equipar' : '';
      return `<div class="${cls}" data-skin="${skin.id}">
        <div class="eq-skin-emoji">${skin.emoji}</div>
        <div class="eq-skin-name">${skin.name}</div>
        ${costHtml}
        <div class="eq-skin-status">${statusTxt}</div>
      </div>`;
    }).join('');

    grid.querySelectorAll('.eq-skin-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.skin;
        const skin = SKINS.find(s => s.id === id);
        if (!skin) return;
        const ownedList = state._unlockedSkins || ['default'];
        if (!ownedList.includes(id)) {
          if ((state.gems || 0) < skin.cost) { w.showToast('💎 Gems insuficientes!'); return; }
          state.gems -= skin.cost;
          state._unlockedSkins = [...ownedList, id];
          w.updateHUD && w.updateHUD();
          w.showToast(`${skin.emoji} ${skin.name} desbloqueado!`);
        }
        state._equippedSkin = id;
        saveState();
        applyEquippedSkin();
        buildAvatarGrid();
      });
    });
  }

  function initAvatarModal() {
    applyEquippedSkin();
    document.querySelector('.edu-avatar')?.addEventListener('click', () => {
      const modal = document.getElementById('eq-avatar-modal');
      if (modal) { buildAvatarGrid(); modal.style.display = 'flex'; }
    });
    document.getElementById('eq-avatar-close')?.addEventListener('click', () => {
      document.getElementById('eq-avatar-modal').style.display = 'none';
    });
    document.getElementById('eq-avatar-modal')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
    });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // 18 — END-OF-WEEK REPORT (Sunday popup)
  // ──────────────────────────────────────────────────────────────────────────

  function updateWeekStats() {
    if (!CG) return;
    const weekStart = getMonday();
    if (!state._weekStats || state._weekStats.weekStart !== weekStart) {
      state._weekStats = { weekStart, games: 0, xp: 0, correct: 0, total: 0 };
    }
    state._weekStats.games++;
    state._weekStats.xp += CG.xpEarned || 0;
    state._weekStats.correct += CG.correct || 0;
    state._weekStats.total += CG.total || 0;
    saveState();
  }

  function checkWeeklyReport() {
    if (new Date().getDay() !== 0) return;
    const todayStr = today();
    if (state._weekReportShown === todayStr) return;
    const ws = state._weekStats;
    if (!ws || ws.games === 0) return;
    state._weekReportShown = todayStr;
    saveState();
    setTimeout(() => showWeeklyReport(ws), 4000);
  }

  function showWeeklyReport(ws) {
    const modal = document.getElementById('eq-week-report');
    const statsEl = document.getElementById('eq-week-stats');
    if (!modal || !statsEl) return;
    const pct = ws.total > 0 ? Math.round((ws.correct / ws.total) * 100) : 0;
    statsEl.innerHTML =
      `<div class="eq-week-stat"><div class="eq-week-stat-val">${ws.games}</div><div class="eq-week-stat-label">Jogos</div></div>` +
      `<div class="eq-week-stat"><div class="eq-week-stat-val">${ws.correct}</div><div class="eq-week-stat-label">Certas</div></div>` +
      `<div class="eq-week-stat"><div class="eq-week-stat-val">${ws.xp}</div><div class="eq-week-stat-label">XP ganho</div></div>` +
      `<div class="eq-week-stat"><div class="eq-week-stat-val">${pct}%</div><div class="eq-week-stat-label">Precisão</div></div>`;
    modal.style.display = 'flex';

    document.getElementById('eq-week-close')?.addEventListener('click', () => {
      modal.style.display = 'none';
    }, { once: true });

    document.getElementById('eq-week-share')?.addEventListener('click', () => {
      const text = `📊 A minha semana no EduQuest:\n🎮 ${ws.games} jogos · ✅ ${ws.correct} certas · ⚡ ${ws.xp} XP · 🎯 ${pct}% precisão\n🔥 ${state.dayStreak || 1} dias de streak! Consegues superar?`;
      if (navigator.share) {
        navigator.share({ title: 'EduQuest – Semana', text }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(text);
        w.showToast('📋 Copiado!');
      }
    }, { once: true });
  }

  // ──────────────────────────────────────────────────────────────────────────
  // RESULT SCREEN HOOK (via showScreen wrapper)
  // ──────────────────────────────────────────────────────────────────────────

  function onResultScreen() {
    if (!CG) return;

    // Vs EDU comparison
    renderVsEduResult();

    // Weekly stats
    updateWeekStats();

    // Leaderboard
    updateLB(CG.id || '', CG.correct || 0, CG.total || 10, CG.diff || 1);
    renderLB(CG.id || '');

    // Weekly challenge check
    checkWeeklyCompletion();

    // Add buttons
    addChallengeFriendBtn();
    addShareCardBtn();

    // Reset Vs EDU
    _vsEduScore = 0; _vsEduTotal = 0;
  }

  function addShareCardBtn() {
    if (document.getElementById('eq-share-card-btn')) return;
    const btn = document.createElement('button');
    btn.id = 'eq-share-card-btn';
    btn.className = 'big-btn secondary';
    btn.textContent = '📸 Partilhar Resultado';
    btn.style.marginTop = '8px';
    btn.addEventListener('click', () => { w.playSound && w.playSound('click'); shareScore(); });
    const homeBtn = document.getElementById('resultHomeBtn');
    if (homeBtn) homeBtn.parentNode.insertBefore(btn, homeBtn);
  }

  function renderVsEduResult() {
    const el = document.getElementById('eq-vs-edu-result');
    if (!el || !CG) return;
    const myScore = CG.correct || 0;
    const total = CG.total || 10;
    const eduFinal = _vsEduScore;

    let msg, color;
    if (myScore > eduFinal) { msg = `Tu: ${myScore} · EDU: ${eduFinal} · 🎉 Bateste o EDU!`; color = '#10b981'; }
    else if (myScore === eduFinal) { msg = `Tu: ${myScore} · EDU: ${eduFinal} · 🤝 Empate!`; color = '#f59e0b'; }
    else { msg = `Tu: ${myScore} · EDU: ${eduFinal} · 🤖 EDU ganhou desta vez!`; color = '#ef4444'; }

    el.textContent = msg;
    el.style.color = color;
    el.style.display = 'block';
  }

  // ──────────────────────────────────────────────────────────────────────────
  // INIT — runs after DOM + app.js ready
  // ──────────────────────────────────────────────────────────────────────────

  function initFeatures() {
    initDailyFreeHint();
    initOnboarding();
    initWeeklyChallenge();
    checkStreakMilestones();
    checkChallengeUrl();
    initDiffButtons();
    updateDifficultyGating();
    patchExpertContent();
    initAvatarModal();
    checkWeeklyReport();
    // Add Vs EDU score to game screen
    const roundInfo = document.querySelector('#gameScreen .round-info');
    if (roundInfo && !document.getElementById('eq-vs-edu')) {
      const badge = document.createElement('div');
      badge.id = 'eq-vs-edu';
      badge.className = 'streak-badge';
      badge.textContent = '🤖 EDU: 0';
      badge.style.display = 'none';
      roundInfo.appendChild(badge);
    }
  }

  // Expose for app.js init call
  w.initFeatures = initFeatures;

}(window));
