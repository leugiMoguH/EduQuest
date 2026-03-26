# EduQuest

## Stack
Vanilla HTML + CSS + JavaScript. No framework, no build step.

## Project Structure
- `assets/css/styles.css` — global styles
- `assets/js/app.js` — main app logic
- `assets/js/content-expansion.js` — game content/data

## Key Rules
- Read only the relevant section of a file — avoid reading entire large files
- No libraries unless user explicitly requests them
- Keep JS modular: one responsibility per function
- CSS: mobile-first, BEM naming where applicable

## Context Efficiency
- Use `/compact` before context fills up
- Skip subagents for simple edits — edit directly
- Extended thinking: disable (Alt+T) for simple tasks
