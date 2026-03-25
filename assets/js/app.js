// EduQuest Questions Bank
// Format: {v:"visual/emoji", t:"question text", o:["opt1","opt2","opt3","opt4"], c:"correct option", f:"fun fact", d:1-3}
// d: 1=easy, 2=medium, 3=hard

const QB = {

// ================================================================
// CAPITAL HUNT
// ================================================================
capital: [
  // d:1 easy
  {v:"🇵🇹",t:"Qual é a capital de Portugal?",o:["Porto","Lisboa","Coimbra","Faro"],c:"Lisboa",f:"Lisboa é uma das cidades mais antigas da Europa, com mais de 3000 anos!",d:1},
  {v:"🇫🇷",t:"Qual é a capital da França?",o:["Lyon","Marselha","Paris","Nice"],c:"Paris",f:"Paris tem 130 museus e recebe 30 milhões de turistas por ano!",d:1},
  {v:"🇩🇪",t:"Qual é a capital da Alemanha?",o:["Munique","Berlim","Hamburgo","Colónia"],c:"Berlim",f:"O Muro de Berlim dividiu a cidade por 28 anos (1961-1989)!",d:1},
  {v:"🇯🇵",t:"Qual é a capital do Japão?",o:["Osaka","Quioto","Tóquio","Hiroshima"],c:"Tóquio",f:"Tóquio é a maior metrópole do mundo com 37 milhões de habitantes!",d:1},
  {v:"🇧🇷",t:"Qual é a capital do Brasil?",o:["São Paulo","Rio de Janeiro","Brasília","Salvador"],c:"Brasília",f:"Brasília foi construída de raiz em apenas 4 anos (1956-1960)!",d:1},
  {v:"🇮🇹",t:"Qual é a capital de Itália?",o:["Milão","Florença","Veneza","Roma"],c:"Roma",f:"Roma é chamada a 'Cidade Eterna' e tem 28 séculos de história!",d:1},
  {v:"🇪🇸",t:"Qual é a capital de Espanha?",o:["Barcelona","Sevilha","Madrid","Valência"],c:"Madrid",f:"Madrid é a capital mais alta da Europa, a 667 metros de altitude!",d:1},
  {v:"🇬🇧",t:"Qual é a capital do Reino Unido?",o:["Manchester","Edimburgo","Cardiff","Londres"],c:"Londres",f:"Londres foi fundada pelos romanos há 2000 anos com o nome Londinium!",d:1},
  {v:"🇺🇸",t:"Qual é a capital dos EUA?",o:["Nova Iorque","Los Angeles","Washington D.C.","Chicago"],c:"Washington D.C.",f:"Washington D.C. não é um estado — é um Distrito federal autónomo!",d:1},
  {v:"🇨🇳",t:"Qual é a capital da China?",o:["Xangai","Hong Kong","Guangzhou","Pequim"],c:"Pequim",f:"Pequim tem 3000 anos de história e foi capital da China durante 700 anos!",d:1},
  {v:"🇷🇺",t:"Qual é a capital da Rússia?",o:["São Petersburgo","Novosibirsk","Cazã","Moscovo"],c:"Moscovo",f:"Moscovo tem a rede de metro mais profunda do mundo — até 84 metros!",d:1},
  {v:"🇦🇺",t:"Qual é a capital da Austrália?",o:["Sydney","Melbourne","Brisbane","Camberra"],c:"Camberra",f:"Camberra foi construída de raiz como capital de compromisso entre Sydney e Melbourne!",d:1},
  {v:"🇨🇦",t:"Qual é a capital do Canadá?",o:["Toronto","Vancouver","Montreal","Ottawa"],c:"Ottawa",f:"Ottawa tem o maior canal de patinagem no gelo do mundo no inverno!",d:1},
  {v:"🇲🇽",t:"Qual é a capital do México?",o:["Guadalajara","Monterrey","Cancún","Cidade do México"],c:"Cidade do México",f:"A Cidade do México está construída sobre o lago seco de Texcoco!",d:1},
  {v:"🇮🇳",t:"Qual é a capital da Índia?",o:["Mumbai","Calcutá","Chennai","Nova Deli"],c:"Nova Deli",f:"Nova Deli tem 32 milhões de habitantes — uma das maiores cidades do mundo!",d:1},
  {v:"🇦🇷",t:"Qual é a capital da Argentina?",o:["Córdoba","Rosário","Mendoza","Buenos Aires"],c:"Buenos Aires",f:"Buenos Aires significa 'Bons Ares' — nome dado pelos colonizadores espanhóis!",d:1},
  {v:"🇪🇬",t:"Qual é a capital do Egito?",o:["Alexandria","Luxor","Assuão","Cairo"],c:"Cairo",f:"O Cairo é a maior cidade de África, com 21 milhões de habitantes!",d:1},
  {v:"🇿🇦",t:"Qual é a capital executiva da África do Sul?",o:["Joanesburgo","Cidade do Cabo","Durban","Pretória"],c:"Pretória",f:"A África do Sul tem 3 capitais! Pretória (executiva), Cidade do Cabo (legislativa), Bloemfontein (judicial)!",d:1},
  {v:"🇰🇷",t:"Qual é a capital da Coreia do Sul?",o:["Busan","Incheon","Daegu","Seul"],c:"Seul",f:"Seul tem 10 milhões de habitantes e é um dos maiores centros tecnológicos do mundo!",d:1},
  {v:"🇬🇷",t:"Qual é a capital da Grécia?",o:["Salónica","Patras","Heraclião","Atenas"],c:"Atenas",f:"Atenas é a cidade habitada continuamente há mais tempo na Europa — 3000 anos!",d:1},

  // d:2 medium
  {v:"🇳🇱",t:"Qual é a capital dos Países Baixos?",o:["Roterdão","Utreque","Amesterdão","Haia"],c:"Amesterdão",f:"Amesterdão tem mais canais que Veneza e mais pontes que Paris!",d:2},
  {v:"🇧🇪",t:"Qual é a capital da Bélgica?",o:["Antuérpia","Gante","Bruges","Bruxelas"],c:"Bruxelas",f:"Bruxelas alberga a sede da NATO e da União Europeia!",d:2},
  {v:"🇵🇱",t:"Qual é a capital da Polónia?",o:["Cracóvia","Gdansk","Poznan","Varsóvia"],c:"Varsóvia",f:"Varsóvia foi quase completamente destruída na 2.ª Guerra e reconstruída tijolo a tijolo!",d:2},
  {v:"🇸🇪",t:"Qual é a capital da Suécia?",o:["Gotemburgo","Malmö","Uppsala","Estocolmo"],c:"Estocolmo",f:"Estocolmo é construída sobre 14 ilhas ligadas por 57 pontes!",d:2},
  {v:"🇳🇴",t:"Qual é a capital da Noruega?",o:["Bergen","Trondheim","Stavanger","Oslo"],c:"Oslo",f:"Oslo é uma das cidades mais sustentáveis do mundo — 50% dos carros são elétricos!",d:2},
  {v:"🇨🇭",t:"Qual é a capital da Suíça?",o:["Zurique","Genebra","Basileia","Berna"],c:"Berna",f:"Berna significa 'urso' em alemão — e há ursos vivos no centro da cidade!",d:2},
  {v:"🇦🇹",t:"Qual é a capital da Áustria?",o:["Salzburgo","Graz","Linz","Viena"],c:"Viena",f:"Viena foi eleita várias vezes a cidade com melhor qualidade de vida do mundo!",d:2},
  {v:"🇹🇷",t:"Qual é a capital da Turquia?",o:["Istambul","Esmirna","Bursa","Ancara"],c:"Ancara",f:"Istambul é mais famosa mas Ancara é a capital desde 1923!",d:2},
  {v:"🇸🇦",t:"Qual é a capital da Arábia Saudita?",o:["Meca","Medina","Jeddah","Riade"],c:"Riade",f:"Riade significa 'jardins' em árabe — no meio do deserto!",d:2},
  {v:"🇮🇱",t:"Qual é a capital de Israel?",o:["Tel Aviv","Haifa","Beer Sheva","Jerusalém"],c:"Jerusalém",f:"Jerusalém é cidade sagrada para o Judaísmo, Cristianismo e Islamismo!",d:2},
  {v:"🇹🇭",t:"Qual é a capital da Tailândia?",o:["Chiang Mai","Phuket","Pattaya","Banguecoque"],c:"Banguecoque",f:"O nome oficial de Banguecoque em tailandês tem 168 letras — o maior nome de cidade do mundo!",d:2},
  {v:"🇮🇩",t:"Qual é a capital da Indonésia?",o:["Surabaia","Bali","Bandung","Jacarta"],c:"Jacarta",f:"A Indonésia está a mudar a capital para Nusantara devido ao afundamento de Jacarta!",d:2},
  {v:"🇲🇾",t:"Qual é a capital da Malásia?",o:["Penang","Johor Bahru","Malaca","Kuala Lumpur"],c:"Kuala Lumpur",f:"Kuala Lumpur tem as Torres Petronas, que foram o edifício mais alto do mundo em 1998!",d:2},
  {v:"🇵🇭",t:"Qual é a capital das Filipinas?",o:["Cebu","Davao","Quezon City","Manila"],c:"Manila",f:"A área metropolitana de Manila é uma das mais densamente povoadas do mundo!",d:2},
  {v:"🇵🇰",t:"Qual é a capital do Paquistão?",o:["Karachi","Lahore","Peshawar","Islamabade"],c:"Islamabade",f:"Islamabade foi construída de raiz na década de 1960 para substituir Karachi como capital!",d:2},
  {v:"🇧🇩",t:"Qual é a capital do Bangladesh?",o:["Chittagong","Khulna","Rajshahi","Daca"],c:"Daca",f:"Daca é uma das cidades mais densas do mundo — 44.000 pessoas por km²!",d:2},
  {v:"🇺🇦",t:"Qual é a capital da Ucrânia?",o:["Lviv","Kharkiv","Odessa","Kiev"],c:"Kiev",f:"Kiev é uma das cidades mais antigas da Europa, fundada no século V!",d:2},
  {v:"🇵🇹",t:"Qual era a capital do Brasil colónia portuguesa?",o:["São Paulo","Rio de Janeiro","Salvador","Recife"],c:"Salvador",f:"Salvador foi capital do Brasil de 1549 a 1763, depois substituída pelo Rio de Janeiro!",d:2},
  {v:"🇨🇿",t:"Qual é a capital da República Checa?",o:["Brno","Ostrava","Plzeň","Praga"],c:"Praga",f:"Praga é chamada a 'Cidade das 100 Torres' e foi poupada à destruição na 2.ª Guerra!",d:2},
  {v:"🇭🇺",t:"Qual é a capital da Hungria?",o:["Debrecen","Miskolc","Pécs","Budapeste"],c:"Budapeste",f:"Budapeste é na verdade duas cidades unidas: Buda e Peste, separadas pelo Danúbio!",d:2},

  // d:3 hard
  {v:"🇧🇾",t:"Qual é a capital da Bielorrússia?",o:["Grodno","Brest","Vitebsk","Minsk"],c:"Minsk",f:"Minsk foi quase completamente destruída na 2.ª Guerra — 80% dos edifícios demolidos!",d:3},
  {v:"🇰🇿",t:"Qual é a capital do Cazaquistão?",o:["Almaty","Shymkent","Karaganda","Astana"],c:"Astana",f:"Astana (antes Nur-Sultan) tem uma arquitectura futurista única no meio das estepes!",d:3},
  {v:"🇺🇿",t:"Qual é a capital do Uzbequistão?",o:["Samarcanda","Bukhara","Namangan","Taskent"],c:"Taskent",f:"Taskent tem o único metro da Ásia Central — inaugurado em 1977!",d:3},
  {v:"🇲🇳",t:"Qual é a capital da Mongólia?",o:["Erdenet","Darkhan","Choibalsan","Ulaanbaatar"],c:"Ulaanbaatar",f:"Ulaanbaatar é a capital mais fria do mundo, com -40°C no inverno!",d:3},
  {v:"🇬🇪",t:"Qual é a capital da Geórgia?",o:["Kutaisi","Batumi","Rustavi","Tbilisi"],c:"Tbilisi",f:"Tbilisi tem uma das alfabetizações mais antigas do mundo — desde o século V!",d:3},
  {v:"🇦🇲",t:"Qual é a capital da Arménia?",o:["Gyumri","Vanadzor","Vagharshapat","Erevan"],c:"Erevan",f:"Erevan é uma das cidades habitadas continuamente mais antigas do mundo — 782 a.C.!",d:3},
  {v:"🇦🇿",t:"Qual é a capital do Azerbaijão?",o:["Ganja","Sumqayit","Mingachevir","Baku"],c:"Baku",f:"Baku está abaixo do nível do mar e tem uma das maiores reservas de petróleo do mundo!",d:3},
  {v:"🇲🇩",t:"Qual é a capital da Moldávia?",o:["Bălți","Tiraspol","Cahul","Chisinau"],c:"Chisinau",f:"Moldávia é o maior produtor de vinho per capita do mundo!",d:3},
  {v:"🇧🇦",t:"Qual é a capital da Bósnia-Herzegovina?",o:["Mostar","Banja Luka","Tuzla","Sarajevo"],c:"Sarajevo",f:"Sarajevo foi palco do assassinato que desencadeou a 1.ª Guerra Mundial em 1914!",d:3},
  {v:"🇦🇱",t:"Qual é a capital da Albânia?",o:["Durrës","Vlorë","Shkodër","Tirana"],c:"Tirana",f:"Tirana é a única capital europeia que não tem McDonald's!",d:3},
  {v:"🇲🇰",t:"Qual é a capital da Macedónia do Norte?",o:["Bitola","Kumanovo","Tetovo","Skopje"],c:"Skopje",f:"Skopje foi quase destruída por um terramoto em 1963 e reconstruída com ajuda internacional!",d:3},
  {v:"🇲🇪",t:"Qual é a capital do Montenegro?",o:["Nikšić","Bar","Herceg Novi","Podgorica"],c:"Podgorica",f:"Montenegro significa 'Montanha Negra' em italiano — nome dado pelos venezianos!",d:3},
  {v:"🇷🇸",t:"Qual é a capital da Sérvia?",o:["Novi Sad","Niš","Kragujevac","Belgrado"],c:"Belgrado",f:"Belgrado significa 'Cidade Branca' em eslavo e foi capital de vários impérios!",d:3},
  {v:"🇧🇬",t:"Qual é a capital da Bulgária?",o:["Plovdiv","Varna","Burgas","Sófia"],c:"Sófia",f:"Sófia é a segunda capital mais alta da Europa, a 550 metros de altitude!",d:3},
  {v:"🇸🇮",t:"Qual é a capital da Eslovénia?",o:["Maribor","Celje","Kranj","Liubliana"],c:"Liubliana",f:"Liubliana é uma das capitais europeias mais verdes — 40% da cidade são parques!",d:3},
  {v:"🇸🇰",t:"Qual é a capital da Eslováquia?",o:["Košice","Prešov","Žilina","Bratislava"],c:"Bratislava",f:"Bratislava é a única capital do mundo que faz fronteira com dois países!",d:3},
  {v:"🇱🇻",t:"Qual é a capital da Letónia?",o:["Daugavpils","Jelgava","Jūrmala","Riga"],c:"Riga",f:"Riga tem o maior centro histórico medieval da região báltica!",d:3},
  {v:"🇱🇹",t:"Qual é a capital da Lituânia?",o:["Kaunas","Klaipėda","Šiauliai","Vilnius"],c:"Vilnius",f:"Vilnius tem o maior bairro histórico barroco do norte da Europa!",d:3},
  {v:"🇪🇪",t:"Qual é a capital da Estónia?",o:["Tartu","Narva","Pärnu","Tallinn"],c:"Tallinn",f:"Tallinn tem o melhor centro histórico medieval da Europa do Norte, classificado pela UNESCO!",d:3},
  {v:"🇮🇸",t:"Qual é a capital da Islândia?",o:["Akureyri","Keflavík","Ísafjörður","Reiquiavique"],c:"Reiquiavique",f:"Reiquiavique é a capital mais setentrional do mundo!",d:3},
  {v:"🇲🇹",t:"Qual é a capital de Malta?",o:["Birkirkara","Mosta","Sliema","Valeta"],c:"Valeta",f:"Valeta é a menor capital da UE com apenas 5.800 habitantes e 1km²!",d:3},
  {v:"🇱🇺",t:"Qual é a capital do Luxemburgo?",o:["Esch-sur-Alzette","Differdange","Dudelange","Luxemburgo"],c:"Luxemburgo",f:"Luxemburgo é um dos países mais ricos do mundo com PIB per capita de $140.000!",d:3},
  {v:"🇦🇩",t:"Qual é a capital de Andorra?",o:["Sant Julià","Escaldes","Encamp","Andorra la Vella"],c:"Andorra la Vella",f:"Andorra la Vella é a capital mais alta da Europa, a 1023 metros!",d:3},
  {v:"🇸🇲",t:"Qual é a capital de São Marinho?",o:["Borgo Maggiore","Serravalle","Domagnano","San Marino"],c:"San Marino",f:"São Marinho é o país mais antigo do mundo — fundado em 301 d.C.!",d:3},
  {v:"🇲🇨",t:"Qual é a capital do Mónaco?",o:["Monte Carlo","La Condamine","Fontvieille","Mónaco"],c:"Mónaco",f:"Mónaco é o segundo menor país do mundo — apenas 2km²!",d:3},
  {v:"🇻🇦",t:"Qual é a capital do Vaticano?",o:["São Pedro","Sistina","Laterano","Cidade do Vaticano"],c:"Cidade do Vaticano",f:"O Vaticano é o menor país do mundo — apenas 44 hectares!",d:3},
  {v:"🇱🇮",t:"Qual é a capital de Liechtenstein?",o:["Vaduz","Schaan","Balzers","Triesen"],c:"Vaduz",f:"Liechtenstein é um dos dois países do mundo rodeados por países sem saída para o mar!",d:3},
  {v:"🇫🇯",t:"Qual é a capital das Fiji?",o:["Nadi","Lautoka","Suva","Labasa"],c:"Suva",f:"Suva é uma das cidades mais chuvosas do Pacífico Sul, com 3.000mm de chuva por ano!",d:3},
  {v:"🇵🇬",t:"Qual é a capital da Papua Nova Guiné?",o:["Lae","Mount Hagen","Madang","Port Moresby"],c:"Port Moresby",f:"Papua Nova Guiné tem mais de 850 línguas — a maior diversidade linguística do mundo!",d:3},
  {v:"🇻🇺",t:"Qual é a capital de Vanuatu?",o:["Luganville","Isangel","Lakatoro","Port Vila"],c:"Port Vila",f:"Vanuatu tem 83 ilhas e os seus habitantes falam 113 línguas diferentes!",d:3},
],

// ================================================================
// CODE BREAKER
// ================================================================
code: [
  // d:1
  {v:"💻",t:"O que significa 'HTML'?",o:["HyperText Markup Language","High Tech Modern Language","Hyper Transfer Markup Link","Home Tool Markup Language"],c:"HyperText Markup Language",f:"HTML foi inventado por Tim Berners-Lee em 1991 no CERN!",d:1},
  {v:"🔢",t:"Quantos bits tem 1 byte?",o:["4","16","8","2"],c:"8",f:"1 byte = 8 bits. Um byte pode representar 256 valores diferentes (0 a 255)!",d:1},
  {v:"🖥️",t:"O que significa 'CPU'?",o:["Central Processing Unit","Computer Power Unit","Core Program Utility","Central Power Usage"],c:"Central Processing Unit",f:"A CPU é o 'cérebro' do computador — executa milhões de instruções por segundo!",d:1},
  {v:"🌐",t:"O que é o 'WiFi'?",o:["Wireless Fidelity","Wide Field Internet","Wireless File Interface","World Fiber Internet"],c:"Wireless Fidelity",f:"O WiFi usa ondas de rádio de 2.4GHz ou 5GHz para transmitir dados sem fios!",d:1},
  {v:"💡",t:"O que é um 'algoritmo'?",o:["Um vírus","Uma sequência de instruções","Uma linguagem","Um processador"],c:"Uma sequência de instruções",f:"Até uma receita de culinária é um algoritmo — passos ordenados para um resultado!",d:1},
  {v:"🔐",t:"O que significa 'URL'?",o:["Universal Resource Locator","Unified Register Link","Universal Remote Location","User Resource Link"],c:"Universal Resource Locator",f:"O URL é o endereço único de uma página na internet!",d:1},
  {v:"🖥️",t:"O que é a 'RAM'?",o:["Read Access Memory","Random Access Memory","Rapid Application Memory","Remote Access Module"],c:"Random Access Memory",f:"A RAM é memória temporária — quando desligas o computador, perde tudo!",d:1},
  {v:"🤖",t:"O que significa 'IA'?",o:["Internet Automatizada","Inteligência Artificial","Interface Avançada","Integração Algorítmica"],c:"Inteligência Artificial",f:"A IA simula inteligência humana: aprendizagem, raciocínio e resolução de problemas!",d:1},
  {v:"📱",t:"O que é um 'bug' em programação?",o:["Um vírus","Um erro no código","Uma funcionalidade","Um processador"],c:"Um erro no código",f:"A palavra 'bug' vem de uma mariposa encontrada num computador em 1947!",d:1},
  {v:"🌐",t:"O que é 'open source'?",o:["Software pago","Código fonte público","Software secreto","App móvel"],c:"Código fonte público",f:"Linux, Python e Firefox são open source — qualquer pessoa pode contribuir!",d:1},
  {v:"🔢",t:"Qual é o número 10 em binário?",o:["0101","1100","1010","1000"],c:"1010",f:"Em binário: 8+2=10, por isso 1010. Os computadores só 'sabem' 0 e 1!",d:1},
  {v:"💻",t:"O que é o 'Python'?",o:["Um vírus","Uma linguagem de programação","Um sistema operativo","Um processador"],c:"Uma linguagem de programação",f:"Python foi criado em 1991. O nome é uma homenagem ao grupo de comédia Monty Python!",d:1},
  {v:"☁️",t:"O que é 'cloud computing'?",o:["Computação sobre o tempo","Usar servidores remotos","Tipo de processador","Software gráfico"],c:"Usar servidores remotos",f:"A 'nuvem' é simplesmente o computador de outra pessoa — acessível pela internet!",d:1},
  {v:"🔒",t:"O que é 'phishing'?",o:["Tipo de codificação","Tentativa de roubar dados por engano","Protocolo de rede","Linguagem de programação"],c:"Tentativa de roubar dados por engano",f:"Phishing usa emails ou sites falsos para roubar passwords e dados pessoais!",d:1},
  {v:"📱",t:"O que faz o comando 'print' em Python?",o:["Imprime no papel","Mostra texto no ecrã","Guarda um ficheiro","Cria uma variável"],c:"Mostra texto no ecrã",f:"'Hello, World!' é tradicionalmente o primeiro programa que se aprende em qualquer linguagem!",d:1},

  // d:2
  {v:"🔢",t:"Qual é o número 255 em binário?",o:["11111100","11111110","11111111","10000000"],c:"11111111",f:"11111111 em binário = 255. É o máximo de um byte com todos os 8 bits a 1!",d:2},
  {v:"🔐",t:"O que significa 'HTTPS'?",o:["HyperText Transfer Protocol Secure","High Tech Transfer Protocol","Hyper Transfer Tech Protocol Suite","HyperText Terminal Protocol System"],c:"HyperText Transfer Protocol Secure",f:"O 'S' no HTTPS significa 'Secure' — os dados viajam encriptados entre ti e o servidor!",d:2},
  {v:"📱",t:"O que significa 'API'?",o:["Application Programming Interface","Advanced Program Integration","Automated Process Interface","Application Protocol Internet"],c:"Application Programming Interface",f:"As APIs permitem que aplicações diferentes comuniquem entre si, como uma 'tomada universal'!",d:2},
  {v:"🗂️",t:"O que é uma 'base de dados'?",o:["Um disco rígido","Coleção organizada de dados","Um tipo de vírus","Uma linguagem"],c:"Coleção organizada de dados",f:"SQL (Structured Query Language) é a linguagem mais usada para gerir bases de dados!",d:2},
  {v:"⌨️",t:"Quem criou o Linux?",o:["Bill Gates","Steve Jobs","Linus Torvalds","Mark Zuckerberg"],c:"Linus Torvalds",f:"Linus Torvalds criou o Linux em 1991 com apenas 21 anos como projeto pessoal!",d:2},
  {v:"🔢",t:"Em que base numérica trabalham os computadores?",o:["Base 10","Base 8","Base 16","Base 2"],c:"Base 2",f:"Computadores usam base 2 porque os transístores têm dois estados: ligado (1) ou desligado (0)!",d:2},
  {v:"💻",t:"O que é 'JavaScript'?",o:["Uma versão do Java","Linguagem de programação para web","Um sistema operativo","Tipo de base de dados"],c:"Linguagem de programação para web",f:"JavaScript não tem nada a ver com Java! Foi criado em apenas 10 dias em 1995!",d:2},
  {v:"🖱️",t:"O que é 'UX Design'?",o:["Design de uniformes","Experiência do utilizador","Código visual","Design de hardware"],c:"Experiência do utilizador",f:"UX = User Experience. Bom UX torna aplicações fáceis e agradáveis de usar!",d:2},
  {v:"🔒",t:"O que é a 'encriptação'?",o:["Compressão de ficheiros","Converter dados em código secreto","Backup de dados","Atualização de software"],c:"Converter dados em código secreto",f:"A encriptação protege as tuas mensagens, pagamentos e passwords online!",d:2},
  {v:"💾",t:"O que é 'debugging'?",o:["Programar mais rápido","Encontrar e corrigir erros","Escrever novo código","Testar performance"],c:"Encontrar e corrigir erros",f:"Debugging é como ser detetive — procuras pistas até encontrar o culpado (o bug)!",d:2},
  {v:"📡",t:"O que é 'Bluetooth'?",o:["Tecnologia de satélite","Comunicação sem fios a curta distância","Tipo de cabo","Linguagem de programação"],c:"Comunicação sem fios a curta distância",f:"Bluetooth foi nomeado em honra do rei viking Harald 'Dente Azul' que uniu tribos!",d:2},
  {v:"🔢",t:"Qual é o número 5 em binário?",o:["101","110","100","111"],c:"101",f:"5 em binário: 4+1 = 101. Cada posição vale o dobro da anterior!",d:2},
  {v:"💻",t:"O que é 'machine learning'?",o:["Ensinar máquinas manualmente","Sistemas que aprendem com dados","Robótica industrial","Programação automática"],c:"Sistemas que aprendem com dados",f:"O machine learning permite ao Netflix recomendar filmes e ao Spotify sugerir músicas!",d:2},
  {v:"🌐",t:"O que é 'latência' numa rede?",o:["Velocidade máxima","Atraso na transmissão de dados","Quantidade de dados","Segurança da rede"],c:"Atraso na transmissão de dados",f:"Baixa latência é crucial nos jogos online — 10ms de diferença pode ser decisivo!",d:2},
  {v:"☁️",t:"O que é um 'servidor'?",o:["Um utilizador especial","Computador que fornece serviços a outros","Tipo de base de dados","Linguagem de programação"],c:"Computador que fornece serviços a outros",f:"Os servidores do Google processam mais de 8.5 mil milhões de pesquisas por dia!",d:2},

  // d:3
  {v:"🔢",t:"Quantos bytes tem 1 gigabyte?",o:["1.000.000","1.048.576","1.073.741.824","1.000.000.000"],c:"1.073.741.824",f:"1 GB = 2³⁰ = 1.073.741.824 bytes. A diferença entre 10³ e 2¹⁰ causa muita confusão!",d:3},
  {v:"🔐",t:"O que é a cifra RSA?",o:["Cifra de substituição","Criptografia de chave pública","Tipo de vírus","Protocolo de email"],c:"Criptografia de chave pública",f:"RSA usa dois números primos enormes. Factorizar esses números levaria milénios mesmo com os melhores computadores!",d:3},
  {v:"💻",t:"O que é 'recursão' em programação?",o:["Loop infinito","Função que se chama a si mesma","Tipo de variável","Erro de memória"],c:"Função que se chama a si mesma",f:"Recursão é quando uma função se chama a si mesma. Para entender recursão, primeiro tens de entender recursão!",d:3},
  {v:"🔢",t:"O que é um 'número hexadecimal'?",o:["Base 10","Base 8","Base 12","Base 16"],c:"Base 16",f:"Hexadecimal usa 0-9 e A-F. As cores CSS usam hex: #FF0000 é vermelho puro!",d:3},
  {v:"🧠",t:"O que é 'deep learning'?",o:["Programação manual","Redes neurais artificiais multicamadas","Base de dados complexa","Tipo de processador"],c:"Redes neurais artificiais multicamadas",f:"O deep learning inspira-se no cérebro humano. Usa-se para reconhecimento facial, tradução automática e muito mais!",d:3},
  {v:"🔒",t:"O que é 'autenticação de dois fatores' (2FA)?",o:["Dois passwords diferentes","Dois métodos de verificação de identidade","Dois utilizadores","Dois certificados"],c:"Dois métodos de verificação de identidade",f:"2FA combina algo que sabes (senha) + algo que tens (telemóvel) ou és (biometria)!",d:3},
  {v:"📊",t:"O que é 'complexidade O(n)'?",o:["Tamanho do código","Tempo cresce linearmente com a entrada","Número de erros","Uso de memória fixo"],c:"Tempo cresce linearmente com a entrada",f:"Notação Big-O descreve como o tempo de execução escala. O(n²) é muito pior que O(n) para dados grandes!",d:3},
  {v:"🌐",t:"O que é um 'protocolo TCP/IP'?",o:["Sistema operativo de rede","Conjunto de regras para transmissão de dados","Tipo de firewall","Linguagem de rede"],c:"Conjunto de regras para transmissão de dados",f:"TCP/IP é a 'língua' da internet — define como os dados são enviados e recebidos!",d:3},
  {v:"💾",t:"O que é 'memória virtual'?",o:["RAM extra comprada","Usar disco como extensão de RAM","Memória do GPU","Cache do processador"],c:"Usar disco como extensão de RAM",f:"Quando a RAM esgota, o sistema usa o disco como memória extra — mas muito mais lento!",d:3},
  {v:"🔐",t:"O que é 'steganografia'?",o:["Tipo de criptografia","Esconder mensagens dentro de outros dados","Estudo de selos","Tipo de vírus"],c:"Esconder mensagens dentro de outros dados",f:"Steganografia esconde mensagens em imagens ou áudio. Diferente da criptografia que 'embaralha' — esta 'esconde'!",d:3},
  {v:"🧮",t:"O que é um 'compilador'?",o:["Editor de texto","Converte código fonte em código máquina","Tipo de antivírus","Motor de busca"],c:"Converte código fonte em código máquina",f:"Um compilador traduz código humano (Python, C++) para linguagem que o processador entende diretamente!",d:3},
  {v:"🌐",t:"O que é 'DNS'?",o:["Tipo de vírus","Sistema que converte nomes de domínio em IPs","Protocolo de email","Tipo de firewall"],c:"Sistema que converte nomes de domínio em IPs",f:"O DNS é a 'lista telefónica' da internet — converte 'google.com' no IP 142.250.185.78!",d:3},
  {v:"📊",t:"O que é 'SQL injection'?",o:["Tipo de linguagem","Ataque que insere código malicioso em queries","Função de bases de dados","Tipo de encriptação"],c:"Ataque que insere código malicioso em queries",f:"SQL injection é um dos ataques mais comuns. Pode comprometer bases de dados inteiras com uma linha de código!",d:3},
  {v:"🔢",t:"O que é o 'sistema de complemento para dois'?",o:["Sistema de cor","Representar números negativos em binário","Tipo de compressão","Sistema de ficheiros"],c:"Representar números negativos em binário",f:"Complemento para dois é como os computadores guardam números negativos — inverte todos os bits e soma 1!",d:3},
  {v:"🧠",t:"O que é 'blockchain'?",o:["Tipo de vírus","Registo distribuído imutável em cadeia","Sistema de pagamento apenas","Motor de busca"],c:"Registo distribuído imutável em cadeia",f:"Blockchain é como um livro de registos partilhado por milhares de computadores — quase impossível de falsificar!",d:3},
],

// ================================================================
// ENGLISH QUEST
// ================================================================
english: [
  // d:1
  {v:"🇬🇧",t:"Como se diz 'maçã' em inglês?",o:["Orange","Apple","Mango","Grape"],c:"Apple",f:"'An apple a day keeps the doctor away!' — famoso ditado inglês sobre comer saudável!",d:1},
  {v:"🇬🇧",t:"Como se diz 'cão' em inglês?",o:["Cat","Bird","Dog","Fish"],c:"Dog",f:"'Dog' ao contrário é 'God'. Os cães foram os primeiros animais domesticados — há 15.000 anos!",d:1},
  {v:"🇬🇧",t:"Como se diz 'escola' em inglês?",o:["Home","Work","Hospital","School"],c:"School",f:"'School' vem do grego 'skholē' que significava... tempo livre! Os gregos estudavam por prazer!",d:1},
  {v:"🇬🇧",t:"Como se diz 'água' em inglês?",o:["Fire","Earth","Water","Air"],c:"Water",f:"'Water' vem do inglês antigo 'wæter'. 71% da Terra é coberta de água!",d:1},
  {v:"🇬🇧",t:"Como se diz 'livro' em inglês?",o:["Look","Book","Cook","Hook"],c:"Book",f:"'To book' também significa reservar! 'I booked a table' = reservei uma mesa!",d:1},
  {v:"🇬🇧",t:"Como se diz 'amigo' em inglês?",o:["Family","Enemy","Friend","Stranger"],c:"Friend",f:"'Friend' tem 'end' no meio. Os verdadeiros amigos estão lá mesmo no final!",d:1},
  {v:"🇬🇧",t:"Como se diz 'sol' em inglês?",o:["Moon","Star","Sky","Sun"],c:"Sun",f:"'Sun' aparece em 'Sunday' — o dia do sol! Os dias da semana em inglês vêm de astros e deuses!",d:1},
  {v:"🇬🇧",t:"Como se diz 'feliz' em inglês?",o:["Sad","Angry","Tired","Happy"],c:"Happy",f:"'Happy' vem do nórdico antigo 'happ' = sorte. Ser feliz era ter sorte!",d:1},
  {v:"🇬🇧",t:"Como se diz 'casa' em inglês?",o:["Hotel","Flat","House","Room"],c:"House",f:"'House' = edifício físico. 'Home' = onde te sentes em casa. A diferença é emocional!",d:1},
  {v:"🇬🇧",t:"Complete: 'She ___ to school every day.'",o:["go","goes","going","went"],c:"goes",f:"Com he/she/it no presente simples, o verbo recebe sempre 's' ou 'es'!",d:1},
  {v:"🇬🇧",t:"Como se diz 'gato' em inglês?",o:["Rat","Dog","Cat","Bat"],c:"Cat",f:"Os gatos dormem 16 horas por dia! 'Cat nap' em inglês significa uma sesta rápida!",d:1},
  {v:"🇬🇧",t:"Complete: 'There ___ three birds on the roof.'",o:["was","is","were","are"],c:"were",f:"'Were' com plural (birds). 'Was' com singular. Regra simples do verbo 'to be' no passado!",d:1},
  {v:"🇬🇧",t:"O que significa 'big' em português?",o:["Pequeno","Grande","Rápido","Lento"],c:"Grande",f:"'Big', 'Large', 'Great', 'Huge' — todos grandes, mas em contextos diferentes!",d:1},
  {v:"🇬🇧",t:"Como se diz 'obrigado' em inglês?",o:["Sorry","Please","Hello","Thank you"],c:"Thank you",f:"'Thanks' é mais informal. 'Thank you very much' é mais formal e educado!",d:1},
  {v:"🇬🇧",t:"Complete: '___ is your name?'",o:["Who","Where","What","How"],c:"What",f:"'What is your name?' = Como te chamas? 'My name is...' é a resposta!",d:1},

  // d:2
  {v:"🇬🇧",t:"O que significa 'resilience'?",o:["Desistir","Recuperar de dificuldades","Ser tímido","Grande velocidade"],c:"Recuperar de dificuldades",f:"'Resilience' do latim 'resilire' = saltar para trás. Como uma bola de borracha!",d:2},
  {v:"🇬🇧",t:"Complete: 'I have been studying ___ two hours.'",o:["since","during","for","while"],c:"for",f:"'For' com duração (for 2 hours). 'Since' com ponto de início (since 3pm)!",d:2},
  {v:"🇬🇧",t:"O que significa 'serendipity'?",o:["Tristeza","Descoberta feliz por acaso","Pôr do sol belo","Grande força"],c:"Descoberta feliz por acaso",f:"'Serendipity' foi inventada por Horace Walpole em 1754, baseado num conto persa!",d:2},
  {v:"🇬🇧",t:"Complete: 'She is ___ than her brother.'",o:["more tall","tallest","taller","tall"],c:"taller",f:"Comparativo com adjetivos curtos: adiciona '-er'. Tall → taller, big → bigger!",d:2},
  {v:"🇬🇧",t:"O que significa 'knowledge'?",o:["Notícia","Ignorância","Conhecimento","Opinião"],c:"Conhecimento",f:"O 'k' em 'knowledge' é mudo! Pronuncia-se 'nolij'. O inglês tem muitas letras mudas!",d:2},
  {v:"🇬🇧",t:"Complete: 'I ___ never been to London.'",o:["have","has","had","am"],c:"have",f:"Present perfect: I/You/We/They + 'have'. He/She/It + 'has'. 'Have never been' = nunca fui!",d:2},
  {v:"🇬🇧",t:"O que significa 'ephemeral'?",o:["Eterno","De curta duração","Muito belo","Misterioso"],c:"De curta duração",f:"'Ephemeral' do grego 'ephemeros' — que dura apenas um dia. Flores efémeras, memórias efémeras!",d:2},
  {v:"🇬🇧",t:"Qual é o plural correto de 'tooth'?",o:["Tooths","Teeths","Teeth","Toothes"],c:"Teeth",f:"'Tooth' → 'Teeth' é irregular! Goose → Geese, Mouse → Mice, Foot → Feet também!",d:2},
  {v:"🇬🇧",t:"O que é um 'oxymoron'?",o:["Animal exótico","Duas palavras contraditórias juntas","Frase muito longa","Tipo de poema"],c:"Duas palavras contraditórias juntas",f:"'Deafening silence', 'bittersweet', 'clearly confused' são oxymorons!",d:2},
  {v:"🇬🇧",t:"Complete: '___ did you go last summer?'",o:["Where","When","What","Why"],c:"Where",f:"'Where did you go?' = Onde foste? Pergunta no passado simples: did + sujeito + verbo base!",d:2},
  {v:"🇬🇧",t:"O que significa 'ubiquitous'?",o:["Raro","Presente em todo o lado","Muito antigo","Extremamente alto"],c:"Presente em todo o lado",f:"'Ubiquitous' do latim 'ubique' — em todo o lado! Wi-Fi é ubíquo nas cidades modernas!",d:2},
  {v:"🇬🇧",t:"O que significa 'procrastinate'?",o:["Trabalhar muito","Adiar tarefas","Celebrar","Concentrar-se"],c:"Adiar tarefas",f:"'Procrastinate' vem do latim 'pro' (para a frente) + 'cras' (amanhã). Deixar para amanhã!",d:2},
  {v:"🇬🇧",t:"Complete: 'I am looking ___ my keys.'",o:["at","after","for","into"],c:"for",f:"'Look for' = procurar. 'Look at' = olhar para. 'Look after' = tomar conta. Phrasal verbs são importantes!",d:2},
  {v:"🇬🇧",t:"O que significa 'melancholy'?",o:["Grande alegria","Tristeza profunda","Raiva intensa","Surpresa total"],c:"Tristeza profunda",f:"Na medicina antiga, 'melancholy' vinha de excesso de 'bile negra'!",d:2},
  {v:"🇬🇧",t:"O que é um 'synonym'?",o:["Palavra oposta","Palavra com mesmo significado","Palavra que rima","Letra muda"],c:"Palavra com mesmo significado",f:"Happy, joyful, cheerful são sinónimos! O inglês tem muitos sinónimos vindos do francês e latim!",d:2},

  // d:3
  {v:"🇬🇧",t:"O que significa 'sycophant'?",o:["Herói","Adulador bajulador","Cientista","Aventureiro"],c:"Adulador bajulador",f:"'Sycophant' vem do grego. Um sycophant diz sempre o que o chefe quer ouvir para ganhar favores!",d:3},
  {v:"🇬🇧",t:"O que é o 'subjunctive mood' em inglês?",o:["Tempo futuro","Modo para hipóteses e desejos","Voz passiva","Discurso indireto"],c:"Modo para hipóteses e desejos",f:"'If I were you' usa subjuntivo — 'were' em vez de 'was'. Indica uma condição hipotética!",d:3},
  {v:"🇬🇧",t:"O que significa 'verisimilitude'?",o:["Mentira óbvia","Aparência de verdade","Grande velocidade","Tipo de arte"],c:"Aparência de verdade",f:"'Verisimilitude' = parecer verdadeiro. Na ficção, é criar mundos que parecem reais!",d:3},
  {v:"🇬🇧",t:"O que é uma 'malapropism'?",o:["Tipo de rima","Uso errado de palavra parecida","Figura de estilo","Dialeto"],c:"Uso errado de palavra parecida",f:"Ex: 'He's a wolf in cheap clothing' em vez de 'sheep's clothing'. Nome da personagem Mrs. Malaprop!",d:3},
  {v:"🇬🇧",t:"O que significa 'perspicacious'?",o:["Lento","Muito perspicaz e astuto","Confuso","Distraído"],c:"Muito perspicaz e astuto",f:"'Perspicacious' = de grande discernimento. Uma pessoa perspicacious vê o que os outros não veem!",d:3},
  {v:"🇬🇧",t:"O que é 'anachronism'?",o:["Tipo de rima","Algo fora do seu tempo histórico","Palavra arcaica","Dialeto antigo"],c:"Algo fora do seu tempo histórico",f:"Um smartphone numa pintura medieval é um anacronismo. Do grego 'ana' (contra) + 'chronos' (tempo)!",d:3},
  {v:"🇬🇧",t:"O que significa 'loquacious'?",o:["Silencioso","Que fala muito","Agressivo","Tímido"],c:"Que fala muito",f:"'Loquacious' do latim 'loqui' = falar. Uma pessoa loquacious nunca para de falar!",d:3},
  {v:"🇬🇧",t:"O que é o 'gerund' em inglês?",o:["Verbo no passado","Verbo em forma de nome (+ ing)","Adjetivo comparativo","Advérbio de frequência"],c:"Verbo em forma de nome (+ ing)",f:"'Swimming is fun' — 'swimming' é um gerund. O verbo torna-se nome da ação!",d:3},
  {v:"🇬🇧",t:"O que significa 'inscrutable'?",o:["Simples de entender","Impossível de compreender","Muito bonito","Extremamente rápido"],c:"Impossível de compreender",f:"'Inscrutable' = misterioso, impossível de decifrar. Do latim 'in' (não) + 'scrutari' (examinar)!",d:3},
  {v:"🇬🇧",t:"O que é 'onomatopoeia' em inglês?",o:["Figura de exagero","Palavra que imita um som","Comparação com 'like'","Repetição de sons"],c:"Palavra que imita um som",f:"'Buzz', 'hiss', 'splash', 'bang' são onomatopeias — a palavra soa ao que descreve!",d:3},
  {v:"🇬🇧",t:"O que significa 'ephemeral'?",o:["Eterno","De curta duração","Muito luminoso","Misterioso"],c:"De curta duração",f:"'Ephemeral' do grego 'ephemeros' — que dura apenas um dia. Cherry blossoms são ephemeral!",d:3},
  {v:"🇬🇧",t:"O que é 'synecdoche' (sinédoque)?",o:["Exagero","Parte pelo todo ou todo pela parte","Comparação direta","Inversão de ordem"],c:"Parte pelo todo ou todo pela parte",f:"'All hands on deck' usa 'hands' para dizer pessoas. 'Wheels' para carro. Parte pelo todo!",d:3},
  {v:"🇬🇧",t:"O que significa 'callous'?",o:["Sensível e empático","Insensível e cruel","Muito inteligente","Corajoso"],c:"Insensível e cruel",f:"'Callous' vem de 'callus' = calo. Como a pele endurecida, uma pessoa callous não sente empatia!",d:3},
  {v:"🇬🇧",t:"O que é 'passive voice'?",o:["Frase com adjetivo","Sujeito recebe a ação em vez de a fazer","Verbo no passado","Pergunta indireta"],c:"Sujeito recebe a ação em vez de a fazer",f:"'The cake was eaten by me' = passiva. 'I ate the cake' = ativa. A passiva enfatiza o objeto!",d:3},
  {v:"🇬🇧",t:"O que significa 'pragmatic'?",o:["Teórico e idealista","Prático e focado em resultados","Impulsivo","Perfeccionista"],c:"Prático e focado em resultados",f:"'Pragmatic' do grego 'pragma' = ação. Uma pessoa pragmatic preocupa-se com o que funciona, não com ideais!",d:3},
],

// ================================================================
// SPACE EXPLORER
// ================================================================
space: [
  // d:1
  {v:"☀️",t:"Qual é o planeta mais próximo do Sol?",o:["Vénus","Terra","Marte","Mercúrio"],c:"Mercúrio",f:"Mercúrio demora apenas 88 dias a orbitar o Sol!",d:1},
  {v:"🪐",t:"Qual é o maior planeta do sistema solar?",o:["Saturno","Neptuno","Júpiter","Urano"],c:"Júpiter",f:"Júpiter é tão grande que cabem 1300 Terras dentro dele!",d:1},
  {v:"🌙",t:"Qual é o satélite natural da Terra?",o:["Fobos","Titã","Lua","Europa"],c:"Lua",f:"A Lua tem apenas 1/4 do diâmetro da Terra e fica a 384.400 km de distância!",d:1},
  {v:"☀️",t:"Quanto tempo demora a luz do Sol a chegar à Terra?",o:["1 segundo","8 minutos","1 hora","1 dia"],c:"8 minutos",f:"O Sol está a 150 milhões de km. Se desaparecesse agora, só saberíamos 8 minutos depois!",d:1},
  {v:"🌍",t:"Quantos planetas tem o sistema solar?",o:["7","8","9","10"],c:"8",f:"Em 2006, Plutão foi reclassificado como planeta anão. São 8 planetas desde então!",d:1},
  {v:"🔴",t:"Qual planeta é chamado 'Planeta Vermelho'?",o:["Vénus","Mercúrio","Marte","Júpiter"],c:"Marte",f:"Marte é vermelho por causa do óxido de ferro (ferrugem) no seu solo!",d:1},
  {v:"🪐",t:"Qual planeta tem os anéis mais famosos?",o:["Júpiter","Urano","Neptuno","Saturno"],c:"Saturno",f:"Os anéis de Saturno têm 280.000 km de largura mas apenas 1 km de espessura!",d:1},
  {v:"🚀",t:"Em que ano o Homem pisou a Lua pela primeira vez?",o:["1965","1967","1969","1971"],c:"1969",f:"Neil Armstrong e Buzz Aldrin aterraram na Lua a 20 de julho de 1969!",d:1},
  {v:"🌌",t:"Como se chama a nossa galáxia?",o:["Andrómeda","Grande Nuvem de Magalhães","Via Láctea","Whirlpool"],c:"Via Láctea",f:"A Via Láctea tem entre 200 e 400 mil milhões de estrelas!",d:1},
  {v:"🌠",t:"O que é uma 'estrela cadente'?",o:["Estrela a morrer","Meteoro a entrar na atmosfera","Satélite","Cometa"],c:"Meteoro a entrar na atmosfera",f:"Não são estrelas! São rochas que ficam incandescentes ao entrar na atmosfera terrestre!",d:1},
  {v:"🐕",t:"Qual foi o primeiro animal enviado ao espaço?",o:["Chimpanzé","Cão Laika","Gato","Rato"],c:"Cão Laika",f:"A cadela Laika foi lançada no Sputnik 2 em novembro de 1957 pela União Soviética!",d:1},
  {v:"☄️",t:"O que é um cometa?",o:["Planeta anão","Rocha de gelo que orbita o Sol","Satélite artificial","Asteroide grande"],c:"Rocha de gelo que orbita o Sol",f:"Os cometas têm caudas de gás e poeira que podem ter milhões de km de comprimento!",d:1},
  {v:"🌍",t:"Quanto tempo demora a Terra a orbitar o Sol?",o:["30 dias","180 dias","365 dias","730 dias"],c:"365 dias",f:"Na verdade, 365 dias e 6 horas. Por isso temos um ano bissexto de 4 em 4 anos!",d:1},
  {v:"⭐",t:"A nossa estrela chama-se...",o:["Sírius","Vega","Polaris","Sol"],c:"Sol",f:"O Sol é uma estrela do tipo G (anã amarela). Existem estrelas muito maiores e muito mais brilhantes!",d:1},
  {v:"🌍",t:"Qual é a terceira rocha a contar do Sol?",o:["Vénus","Marte","Terra","Mercúrio"],c:"Terra",f:"A Terra está na 'zona habitável' — nem quente nem fria demais para ter água líquida!",d:1},

  // d:2
  {v:"💨",t:"Qual é o planeta mais ventoso do sistema solar?",o:["Júpiter","Saturno","Urano","Neptuno"],c:"Neptuno",f:"Neptuno tem ventos de 2.100 km/h — os mais fortes de qualquer planeta!",d:2},
  {v:"🌡️",t:"Qual é o planeta mais quente do sistema solar?",o:["Mercúrio","Vénus","Terra","Marte"],c:"Vénus",f:"Vénus tem 465°C de média, mais quente que Mercúrio por causa do efeito estufa extremo!",d:2},
  {v:"⬅️",t:"Qual planeta roda ao contrário dos outros?",o:["Mercúrio","Marte","Urano","Vénus"],c:"Vénus",f:"Vénus roda no sentido horário. Em Vénus, o Sol nasce a Oeste e põe-se a Este!",d:2},
  {v:"🔭",t:"Quem observou pela primeira vez as luas de Júpiter?",o:["Newton","Copérnico","Galileu Galilei","Kepler"],c:"Galileu Galilei",f:"Galileu observou as 4 maiores luas de Júpiter em 1610, que hoje se chamam luas galileanas!",d:2},
  {v:"🌌",t:"O que é um 'buraco negro'?",o:["Estrela fria","Região de gravidade extrema","Planeta sem luz","Nuvem de gás"],c:"Região de gravidade extrema",f:"A gravidade de um buraco negro é tão forte que nem a luz consegue escapar!",d:2},
  {v:"⏱️",t:"Quanto tempo dura um dia em Júpiter?",o:["24 horas","48 horas","10 horas","6 horas"],c:"10 horas",f:"Júpiter roda incrivelmente rápido — um dia tem apenas 10 horas!",d:2},
  {v:"🧊",t:"Qual lua do sistema solar pode ter oceano de água líquida?",o:["Titã","Fobos","Europa","Ganimedes"],c:"Europa",f:"Europa, lua de Júpiter, tem um oceano de água líquida sob uma crosta de gelo — possível candidato a vida!",d:2},
  {v:"🌟",t:"O que é uma 'nebulosa'?",o:["Planeta sem atmosfera","Nuvem de gás e poeira no espaço","Tipo de galáxia","Buraco negro em formação"],c:"Nuvem de gás e poeira no espaço",f:"As nebulosas são os 'berços' das estrelas — onde nascem novas estrelas!",d:2},
  {v:"🔢",t:"Qual a velocidade da luz?",o:["100.000 km/s","200.000 km/s","299.792 km/s","500.000 km/s"],c:"299.792 km/s",f:"Quase 300.000 km por segundo — a velocidade máxima do universo segundo Einstein!",d:2},
  {v:"🌍",t:"Qual a distância da Terra à Lua?",o:["38.440 km","384.400 km","3.844.000 km","38.400 km"],c:"384.400 km",f:"A luz demora 1,3 segundos a chegar da Terra à Lua. A 800 km/h demoraria 20 dias!",d:2},
  {v:"🌍",t:"Quantas vezes maior é o Sol comparado com a Terra?",o:["10x","100x","109x","1000x"],c:"109x",f:"O diâmetro do Sol é 109 vezes o da Terra. Cabiam 1,3 milhões de Terras dentro!",d:2},
  {v:"🌙",t:"Quantas luas tem Saturno (2024)?",o:["53","83","146","200"],c:"146",f:"Em 2023, Saturno ultrapassou Júpiter como planeta com mais luas — 146 confirmadas!",d:2},
  {v:"♦️",t:"Em que planeta pode 'chover diamantes'?",o:["Júpiter","Marte","Urano","Neptuno"],c:"Neptuno",f:"A pressão enorme de Neptuno e Urano pode comprimir carbono em diamantes que caem como chuva!",d:2},
  {v:"🌌",t:"A que distância fica a estrela mais próxima além do Sol?",o:["1 ano-luz","4,2 anos-luz","100 anos-luz","1000 anos-luz"],c:"4,2 anos-luz",f:"Proxima Centauri fica a 4,2 anos-luz. Viajando à velocidade da luz, levaria 4 anos!",d:2},
  {v:"🛸",t:"O que é a 'ISS'?",o:["Uma sonda espacial","Estação Espacial Internacional","Um telescópio","Um satélite meteorológico"],c:"Estação Espacial Internacional",f:"A ISS orbita a Terra a 408 km de altitude, viajando a 27.600 km/h — 16 'dias' por dia terrestre!",d:2},

  // d:3
  {v:"🌌",t:"O que é a 'radiação de fundo cósmico de micro-ondas'?",o:["Raios cósmicos","Eco do Big Bang","Radiação de buracos negros","Luz das estrelas mortas"],c:"Eco do Big Bang",f:"A CMB é a radiação residual do Big Bang há 13,8 mil milhões de anos — 'foto' do universo bebé!",d:3},
  {v:"⭐",t:"O que é uma 'anã branca'?",o:["Estrela jovem","Planeta gelado","Núcleo de estrela morta","Buraco negro pequeno"],c:"Núcleo de estrela morta",f:"Uma anã branca é o que resta de uma estrela como o Sol depois de morrer. Extremamente densa!",d:3},
  {v:"🌌",t:"O que é a 'matéria escura'?",o:["Buracos negros","Matéria que não emite luz mas exerce gravidade","Poeira interestelar","Planetas sem luz"],c:"Matéria que não emite luz mas exerce gravidade",f:"A matéria escura constitui ~27% do universo mas não emite nem absorve luz — detectada apenas pela gravidade!",d:3},
  {v:"🔭",t:"O que é o 'desvio para o vermelho' (redshift)?",o:["Cor de estrelas quentes","Afastamento de objetos pelo efeito Doppler","Poluição luminosa","Tipo de nebulosa"],c:"Afastamento de objetos pelo efeito Doppler",f:"O redshift prova que o universo está em expansão — Edwin Hubble descobriu isto em 1929!",d:3},
  {v:"🌌",t:"O que é a 'singularidade' de um buraco negro?",o:["A sua superfície","Ponto de densidade infinita no centro","A órbita mais próxima","A sua sombra"],c:"Ponto de densidade infinita no centro",f:"Na singularidade, as leis da física como conhecemos deixam de funcionar — a maior incógnita da ciência!",d:3},
  {v:"⭐",t:"O que é uma 'estrela de neutrões'?",o:["Estrela pequena comum","Núcleo ultra-denso de supernova","Planeta com atmosfera densa","Proto-estrela"],c:"Núcleo ultra-denso de supernova",f:"Uma estrela de neutrões tem a massa do Sol comprimida em 20 km. Uma colher de sopa pesaria 1 bilião de kg!",d:3},
  {v:"🚀",t:"O que é o 'efeito de estilingue gravitacional'?",o:["Colisão de planetas","Usar gravidade de planeta para acelerar sonda","Explosão solar","Rotação de buracos negros"],c:"Usar gravidade de planeta para acelerar sonda",f:"A Voyager 1 usou este efeito em Júpiter e Saturno e agora viaja fora do sistema solar!",d:3},
  {v:"🌌",t:"O que é a 'constante de Hubble'?",o:["Velocidade máxima da luz","Taxa de expansão do universo","Força gravitacional do Sol","Temperatura do universo"],c:"Taxa de expansão do universo",f:"O universo expande-se a ~70 km/s por cada megaparsec de distância — a Taxa de Hubble!",d:3},
  {v:"⭐",t:"O que é uma 'supernova'?",o:["Estrela nova","Explosão de estrela massiva no fim da sua vida","Colisão de galáxias","Erupção solar"],c:"Explosão de estrela massiva no fim da sua vida",f:"Uma supernova pode ser mais brilhante que toda a galáxia por breves semanas!",d:3},
  {v:"🌌",t:"O que é o 'horizonte de eventos' de um buraco negro?",o:["A sua órbita","Ponto sem retorno — nada escapa além dele","A sua sombra","Região de radiação"],c:"Ponto sem retorno — nada escapa além dele",f:"O horizonte de eventos foi fotografado pela primeira vez em 2019 pelo Event Horizon Telescope!",d:3},
  {v:"🔭",t:"O que estuda a 'exoplanetologia'?",o:["Planetas do sistema solar","Planetas fora do sistema solar","Luas dos planetas","Asteroides"],c:"Planetas fora do sistema solar",f:"Foram descobertos mais de 5.500 exoplanetas! Alguns estão na zona habitável das suas estrelas!",d:3},
  {v:"⭐",t:"Qual é o tipo espectral do nosso Sol?",o:["Classe O (azul)","Classe K (laranja)","Classe G (amarela)","Classe M (vermelha)"],c:"Classe G (amarela)",f:"O Sol é uma estrela de classe G — relativamente pequena e fria. 90% das estrelas são mais pequenas!",d:3},
  {v:"🌌",t:"O que é a 'Cintura de Kuiper'?",o:["Cintura de asteroides","Região além de Neptuno com corpos gelados","Anel de Saturno","Nuvem de Oort"],c:"Região além de Neptuno com corpos gelados",f:"Plutão está na Cintura de Kuiper! Esta região tem centenas de milhares de objetos gelados!",d:3},
  {v:"🚀",t:"Em que ano a Voyager 1 saiu do sistema solar?",o:["2000","2008","2012","2018"],c:"2012",f:"A Voyager 1 entrou no espaço interestelar em 2012 — o objeto feito pelo Homem que viajou mais longe!",d:3},
  {v:"🌌",t:"O que é a 'energia escura'?",o:["Energia de buracos negros","Energia que acelera a expansão do universo","Fusão nuclear","Radiação cósmica"],c:"Energia que acelera a expansão do universo",f:"A energia escura constitui ~68% do universo. É a maior incógnita da física moderna!",d:3},
],


// ================================================================
// ART CRITIC
// ================================================================
art: [
  // d:1
  {v:"🎨",t:"Quem pintou a Mona Lisa?",o:["Michelangelo","Rafael","Leonardo da Vinci","Botticelli"],c:"Leonardo da Vinci",f:"A Mona Lisa foi pintada entre 1503-1519 e não tem sobrancelhas!",d:1},
  {v:"🌻",t:"Quem pintou os famosos 'Girassóis'?",o:["Monet","Picasso","Van Gogh","Dalí"],c:"Van Gogh",f:"Van Gogh pintou 7 versões dos Girassóis. Cada uma é diferente!",d:1},
  {v:"🗿",t:"Quem esculpiu o 'David'?",o:["Leonardo da Vinci","Donatello","Michelangelo","Rafael"],c:"Michelangelo",f:"O David tem 5,17 metros e foi esculpido num único bloco de mármore entre 1501-1504!",d:1},
  {v:"😱",t:"O 'Grito' é obra de que artista?",o:["Munch","Monet","Manet","Klimt"],c:"Munch",f:"O Grito de Edvard Munch (1893) foi roubado duas vezes do museu de Oslo!",d:1},
  {v:"🌊",t:"Quem pintou 'A Grande Onda de Kanagawa'?",o:["Hiroshige","Hokusai","Utamaro","Kuniyoshi"],c:"Hokusai",f:"Hokusai criou esta obra em 1831. É uma das imagens mais reproduzidas do mundo!",d:1},
  {v:"🌸",t:"Claude Monet é famoso pelas suas pinturas de...?",o:["Retratos","Guerras","Jardins e natureza","Cenas urbanas"],c:"Jardins e natureza",f:"Monet criou um jardim em Giverny especificamente para o pintar. É agora museu!",d:1},
  {v:"🕰️",t:"Quem pintou os 'relógios derretidos' (Persistência da Memória)?",o:["Miró","Magritte","Dalí","Ernst"],c:"Dalí",f:"Salvador Dalí pintou a obra em 1931. Diz ter sido inspirado por um queijo a derreter!",d:1},
  {v:"🌆",t:"Quem pintou 'Noite Estrelada'?",o:["Monet","Picasso","Van Gogh","Gauguin"],c:"Van Gogh",f:"'Noite Estrelada' foi pintada em 1889, enquanto Van Gogh estava num asilo em Saint-Rémy!",d:1},
  {v:"🎨",t:"O Impressionismo surgiu em que século?",o:["XVII","XVIII","XIX","XX"],c:"XIX",f:"O Impressionismo surgiu em Paris na década de 1860. O nome veio de uma crítica negativa!",d:1},
  {v:"🎨",t:"Quem pintou o teto da Capela Sistina?",o:["Rafael","Leonardo da Vinci","Michelangelo","Botticelli"],c:"Michelangelo",f:"Michelangelo pintou o teto deitado de costas em andaimes entre 1508-1512!",d:1},
  {v:"🌹",t:"Frida Kahlo era famosa pelos seus...?",o:["Paisagens","Abstratos","Autorretratos","Naturezas mortas"],c:"Autorretratos",f:"Frida Kahlo pintou 55 autorretratos. 'Pintei a mim mesma porque sou quem melhor conheço!'",d:1},
  {v:"🍅",t:"Andy Warhol é um dos fundadores de qual movimento?",o:["Impressionismo","Cubismo","Pop Art","Expressionismo"],c:"Pop Art",f:"Warhol usou latas de sopa Campbell e retratos de Marilyn Monroe para fazer arte Pop!",d:1},
  {v:"🎨",t:"Em que estilo artístico Picasso é mais conhecido?",o:["Impressionismo","Cubismo","Surrealismo","Realismo"],c:"Cubismo",f:"O Cubismo mostra objetos de múltiplas perspetivas simultâneas!",d:1},
  {v:"🏛️",t:"O que é o 'Renascimento'?",o:["Arte moderna","Retorno à arte greco-romana","Arte medieval","Arte impressionista"],c:"Retorno à arte greco-romana",f:"O Renascimento (séc. XV-XVI) redescobriu os ideais da Grécia e Roma Antigas!",d:1},
  {v:"🎨",t:"Qual artista cortou a própria orelha?",o:["Picasso","Monet","Van Gogh","Gauguin"],c:"Van Gogh",f:"Van Gogh cortou parte da sua orelha em dezembro de 1888 durante uma crise mental!",d:1},
  // d:2
  {v:"⬛",t:"Quem pintou 'O Quadrado Negro' em 1915?",o:["Dalí","Picasso","Kandinsky","Malevich"],c:"Malevich",f:"Kazimir Malevich criou o Suprematismo — formas geométricas puras como arte abstrata!",d:2},
  {v:"🌟",t:"Qual é o movimento artístico de Gustav Klimt?",o:["Cubismo","Art Nouveau/Secessão Vienense","Surrealismo","Pop Art"],c:"Art Nouveau/Secessão Vienense",f:"Klimt é famoso por 'O Beijo' (1907), pintado com folhas de ouro real!",d:2},
  {v:"🖼️",t:"O que é o 'Surrealismo'?",o:["Arte realista","Arte inspirada no subconsciente","Arte urbana","Arte primitiva"],c:"Arte inspirada no subconsciente",f:"O Surrealismo foi fundado por André Breton em Paris nos anos 1920!",d:2},
  {v:"👁️",t:"O que é o 'Pontilhismo'?",o:["Pintar com paus","Pequenos pontos de cor pura","Pintar com esponja","Arte digital"],c:"Pequenos pontos de cor pura",f:"Georges Seurat inventou o Pontilhismo. De perto vês pontos; de longe, uma imagem!",d:2},
  {v:"🎨",t:"O que é o 'Barroco'?",o:["Arte minimalista","Estilo ornamentado do séc. XVII","Arte abstrata","Arte pré-histórica"],c:"Estilo ornamentado do séc. XVII",f:"O Barroco surgiu em Itália no início do séc. XVII, muito usado pela Igreja Católica!",d:2},
  {v:"🌺",t:"O que é a 'Natureza Morta' em arte?",o:["Pintura de animais mortos","Pintura de objetos inanimados","Arte fúnebre","Pintura a preto e branco"],c:"Pintura de objetos inanimados",f:"Natureza morta (still life) retrata frutas, flores, objetos do quotidiano!",d:2},
  {v:"🎨",t:"O que é a 'perspetiva' em pintura?",o:["Tipo de pincel","Técnica para criar profundidade","Tipo de tinta","Estilo de moldura"],c:"Técnica para criar profundidade",f:"A perspetiva linear foi redescoberta por Brunelleschi em 1415!",d:2},
  {v:"🖼️",t:"Qual artista português é famoso pelos azulejos do Metro de Lisboa?",o:["Almada Negreiros","Júlio Pomar","Maria Keil","Paula Rego"],c:"Maria Keil",f:"Maria Keil (1914-2012) criou os painéis de azulejos de 7 estações do Metro de Lisboa!",d:2},
  {v:"🎨",t:"O que é o 'Expressionismo'?",o:["Arte fotorrealista","Arte que expressa emoções subjetivas","Arte minimalista","Arte decorativa"],c:"Arte que expressa emoções subjetivas",f:"Edvard Munch e Egon Schiele são expressionistas — distorcem a realidade para mostrar emoções!",d:2},
  {v:"🌊",t:"O que é a 'Escola de Barbizon'?",o:["Escola de artes de Paris","Grupo de pintores de paisagens naturais","Movimento abstrato","Estilo barroco tardio"],c:"Grupo de pintores de paisagens naturais",f:"A Escola de Barbizon (1830-1870) influenciou diretamente o Impressionismo!",d:2},
  // d:3
  {v:"🎨",t:"O que é a 'Sfumato' de Leonardo da Vinci?",o:["Tipo de tinta","Técnica de transições suaves e esfumadas","Tipo de perspetiva","Estilo de enquadramento"],c:"Técnica de transições suaves e esfumadas",f:"'Sfumato' = fumado em italiano. Da Vinci usava camadas transparentes para criar contornos suaves!",d:3},
  {v:"🖼️",t:"O que é 'Trompe-l'oeil'?",o:["Estilo impressionista","Técnica que cria ilusão ótica realista","Arte abstrata","Arte conceptual"],c:"Técnica que cria ilusão ótica realista",f:"'Trompe-l'oeil' = enganar o olho em francês. Pinturas tão realistas que parecem 3D!",d:3},
  {v:"🎨",t:"O que é o 'Chiaroscuro'?",o:["Técnica de cor viva","Contraste entre luz e sombra","Tipo de escultura","Arte oriental"],c:"Contraste entre luz e sombra",f:"'Chiaroscuro' = claro-escuro em italiano. Caravaggio e Rembrandt são mestres desta técnica!",d:3},
  {v:"🌌",t:"O que é o 'Arte Povera'?",o:["Arte cara","Arte com materiais banais e quotidianos","Arte italiana clássica","Arte rupestre"],c:"Arte com materiais banais e quotidianos",f:"Arte Povera surgiu em Itália nos anos 1960 usando terra, pedras, legumes como materiais artísticos!",d:3},
  {v:"🖼️",t:"O que é o 'Dadaísmo'?",o:["Arte realista","Movimento anti-arte que rejeita a lógica","Arte industrial","Arte futurista"],c:"Movimento anti-arte que rejeita a lógica",f:"O Dadaísmo surgiu em Zurique em 1916 como reação à loucura da 1.ª Guerra Mundial!",d:3},
],

// ================================================================
// HUMAN BODY
// ================================================================
body: [
  // d:1
  {v:"🫀",t:"Quantas vezes bate o coração por minuto em repouso?",o:["40-50","60-100","100-130","30-40"],c:"60-100",f:"Em toda a vida, o coração bate cerca de 3 mil milhões de vezes!",d:1},
  {v:"🦴",t:"Quantos ossos tem o corpo humano adulto?",o:["150","206","300","180"],c:"206",f:"Bebés nascem com cerca de 270 ossos; muitos fundem-se à medida que crescemos!",d:1},
  {v:"🧴",t:"Qual é o maior órgão do corpo humano?",o:["Pulmão","Fígado","Pele","Cérebro"],c:"Pele",f:"A pele pesa 3-4 kg e tem cerca de 2m². Renova-se completamente a cada 27 dias!",d:1},
  {v:"🧠",t:"Quantos neurónios tem o cérebro humano?",o:["1 milhão","100 milhões","86 mil milhões","1 bilião"],c:"86 mil milhões",f:"86 mil milhões de neurónios, cada um com até 10.000 conexões com outros neurónios!",d:1},
  {v:"🦷",t:"Qual é o tecido mais duro do corpo humano?",o:["Osso","Cartilagem","Esmalte dos dentes","Unha"],c:"Esmalte dos dentes",f:"O esmalte é mais duro que os ossos! Mas o açúcar e os ácidos destroem-no!",d:1},
  {v:"🩸",t:"Qual é o grupo sanguíneo mais comum?",o:["A+","B+","O+","AB+"],c:"O+",f:"O grupo O+ é o mais comum no mundo — cerca de 38% da população!",d:1},
  {v:"🫁",t:"Quantas vezes respiramos por dia em média?",o:["5.000","10.000","20.000","50.000"],c:"20.000",f:"Respiramos cerca de 20.000 vezes por dia — 10.000 litros de ar!",d:1},
  {v:"🦴",t:"Qual é o osso mais comprido do corpo humano?",o:["Úmero","Rádio","Fémur","Tíbia"],c:"Fémur",f:"O fémur (osso da coxa) é o mais comprido — cerca de 1/4 da altura total da pessoa!",d:1},
  {v:"💪",t:"Qual é o músculo mais forte em relação ao tamanho?",o:["Bíceps","Coração","Masseter (mandíbula)","Glúteo"],c:"Masseter (mandíbula)",f:"O masseter (músculo da mandíbula) pode exercer uma força de 70kg!",d:1},
  {v:"👁️",t:"Quantas cores distingue o olho humano?",o:["1.000","100.000","10 milhões","100 milhões"],c:"10 milhões",f:"O olho humano distingue cerca de 10 milhões de tons diferentes de cor!",d:1},
  {v:"🩺",t:"Quantos litros de sangue tem o corpo adulto?",o:["2-3 L","4-6 L","8-10 L","1-2 L"],c:"4-6 L",f:"O coração bombeia todo o sangue do corpo em menos de 60 segundos!",d:1},
  {v:"🦷",t:"Quantos dentes tem um adulto com sisos?",o:["28","30","32","36"],c:"32",f:"32 dentes incluindo 4 sisos (dentes do juízo). Alguns adultos nunca chegam a ter os sisos!",d:1},
  {v:"💧",t:"Qual a percentagem de água no corpo humano adulto?",o:["30%","45%","60%","80%"],c:"60%",f:"O corpo é ~60% água. O cérebro é 73% água e os pulmões 83%!",d:1},
  {v:"🧬",t:"Quantos cromossomas tem uma célula humana saudável?",o:["23","44","46","92"],c:"46",f:"46 cromossomas em 23 pares. O par 23 determina o sexo biológico (XX ou XY)!",d:1},
  {v:"😴",t:"Para que serve dormir?",o:["Apenas descansar","Consolidar memórias e reparar células","Poupar energia","Sem função clara"],c:"Consolidar memórias e reparar células",f:"Durante o sono, o cérebro consolida memórias e o corpo repara tecidos danificados!",d:1},
  // d:2
  {v:"🧪",t:"Qual o osso mais pequeno do corpo humano?",o:["Fémur","Maléolo","Estribo (ouvido)","Falange"],c:"Estribo (ouvido)",f:"O estribo, no ouvido médio, tem apenas 3mm! É um dos três ossículos que transmitem som!",d:2},
  {v:"💉",t:"Qual é a função dos glóbulos brancos?",o:["Transportar oxigénio","Defender o corpo de infeções","Coagulação","Regular temperatura"],c:"Defender o corpo de infeções",f:"Os glóbulos brancos são o 'exército' do sistema imunitário — existem vários tipos especializados!",d:2},
  {v:"🔬",t:"Quantas células tem o corpo humano?",o:["1 bilião","10 biliões","37 biliões","100 biliões"],c:"37 biliões",f:"O corpo humano tem cerca de 37 biliões de células, mas também 38 biliões de bactérias!",d:2},
  {v:"🧠",t:"Qual é a parte do cérebro responsável pelo equilíbrio?",o:["Córtex","Hipocampo","Cerebelo","Amígdala"],c:"Cerebelo",f:"O cerebelo coordena movimento e equilíbrio. Tem mais neurónios que o resto do cérebro!",d:2},
  {v:"💓",t:"O que é o 'sistema nervoso autónomo'?",o:["Controla movimentos voluntários","Regula funções automáticas","Processa visão","Controla memória"],c:"Regula funções automáticas",f:"Controla respiração, batimentos, digestão — sem precisares pensar nisso!",d:2},
  {v:"🩸",t:"O que é a 'hemoglobina'?",o:["Hormona do crescimento","Proteína que transporta oxigénio no sangue","Enzima digestiva","Anticorpo"],c:"Proteína que transporta oxigénio no sangue",f:"A hemoglobina contém ferro — por isso o sangue é vermelho! O ferro absorve a luz azul/verde!",d:2},
  {v:"🦻",t:"Qual o alcance da audição humana?",o:["1-1.000 Hz","20-20.000 Hz","100-100.000 Hz","50-50.000 Hz"],c:"20-20.000 Hz",f:"Os cães ouvem até 65.000 Hz, os morcegos até 200.000 Hz — muito além dos humanos!",d:2},
  {v:"🧪",t:"O que produz a adrenalina?",o:["Pâncreas","Rins","Glândulas suprarrenais","Fígado"],c:"Glândulas suprarrenais",f:"A adrenalina é a hormona do 'luta ou foge' — aumenta ritmo cardíaco e força muscular!",d:2},
  {v:"🧬",t:"O que é o 'DNA'?",o:["Proteína digestiva","Molécula com informação genética","Tipo de glóbulo","Hormona"],c:"Molécula com informação genética",f:"O DNA humano tem 3,2 mil milhões de pares de bases. Esticado mediria 2 metros!",d:2},
  {v:"💊",t:"Qual a função do fígado?",o:["Bombear sangue","Filtrar e desintoxicar o sangue","Digerir alimentos","Produzir insulina"],c:"Filtrar e desintoxicar o sangue",f:"O fígado realiza mais de 500 funções e pode regenerar-se — pode crescer de volta com apenas 25%!",d:2},
  // d:3
  {v:"🧠",t:"O que é a 'neuroplasticidade'?",o:["Rigidez do cérebro","Capacidade do cérebro de se reorganizar","Tipo de neurónio","Doença neurológica"],c:"Capacidade do cérebro de se reorganizar",f:"O cérebro pode criar novas conexões neuronais ao longo da vida — a aprendizagem transforma fisicamente o cérebro!",d:3},
  {v:"🔬",t:"O que são 'células estaminais'?",o:["Células mortas","Células indiferenciadas que se podem tornar qualquer tipo","Células cancerígenas","Glóbulos vermelhos"],c:"Células indiferenciadas que se podem tornar qualquer tipo",f:"As células estaminais são 'células-mãe' com o potencial de se tornarem qualquer tecido do corpo!",d:3},
  {v:"🧬",t:"O que é a 'epigenética'?",o:["Estudo do ADN","Como o ambiente altera a expressão dos genes sem mudar o ADN","Tipo de mutação","Clonagem"],c:"Como o ambiente altera a expressão dos genes sem mudar o ADN",f:"A epigenética mostra que os nossos hábitos e ambiente podem ativar ou silenciar genes!",d:3},
  {v:"💊",t:"O que são 'mitocôndrias'?",o:["Núcleo da célula","Central energética da célula","Membrana celular","Ribossoma"],c:"Central energética da célula",f:"As mitocôndrias produzem ATP — a 'moeda energética' das células. Eram bactérias independentes há mil milhões de anos!",d:3},
  {v:"🧪",t:"O que é o 'microbioma humano'?",o:["Componente do ADN","Conjunto de microrganismos que vivem no corpo","Tipo de hormona","Sistema imunitário"],c:"Conjunto de microrganismos que vivem no corpo",f:"O microbioma intestinal tem ~38 biliões de bactérias — mais que as células humanas no corpo!",d:3},
],

// ================================================================
// ANIMAL KINGDOM
// ================================================================
animal: [
  // d:1
  {v:"🦁",t:"Os leões vivem principalmente em que continente?",o:["Ásia","América","África","Europa"],c:"África",f:"A maioria dos leões vive em África subsariana. Há uma pequena população selvagem na Índia!",d:1},
  {v:"🐧",t:"Os pinguins vivem no Polo Norte ou Sul?",o:["Polo Norte","Polo Sul","Nos dois","Nos trópicos"],c:"Polo Sul",f:"Os pinguins vivem no hemisfério sul! Os ursos polares vivem no Norte!",d:1},
  {v:"🦋",t:"Como se chama a transformação da lagarta em borboleta?",o:["Evolução","Metamorfose","Hibridação","Mutação"],c:"Metamorfose",f:"Metamorfose completa: ovo → lagarta → crisálida → adulto. Na crisálida, o corpo dissolve-se quase todo!",d:1},
  {v:"🐬",t:"Os golfinhos são mamíferos ou peixes?",o:["Peixes","Mamíferos","Répteis","Anfíbios"],c:"Mamíferos",f:"Os golfinhos são mamíferos marinhos — respiram ar, amamentam os filhos e são de sangue quente!",d:1},
  {v:"🐘",t:"Qual é o maior animal terrestre?",o:["Rinoceronte","Hipopótamo","Elefante africano","Girafa"],c:"Elefante africano",f:"O elefante africano pode pesar até 7 toneladas. As suas orelhas gigantes servem para se refrescar!",d:1},
  {v:"🐋",t:"Qual é o maior animal do mundo?",o:["Elefante africano","Hipopótamo","Baleia azul","Tubarão branco"],c:"Baleia azul",f:"A baleia azul pesa até 150 toneladas. O seu coração pesa 180kg — do tamanho de um carro!",d:1},
  {v:"🦒",t:"Qual é o animal terrestre mais alto?",o:["Elefante","Camelo","Girafa","Avestruz"],c:"Girafa",f:"A girafa pode atingir 5,8m. O seu pescoço tem apenas 7 vértebras — igual ao nosso!",d:1},
  {v:"🦅",t:"Qual ave não consegue voar?",o:["Gaivota","Pinguim","Pombo","Cegonha"],c:"Pinguim",f:"Os pinguins trocaram o voo pela natação ao longo de 60 milhões de anos de evolução!",d:1},
  {v:"🐙",t:"Quantos corações tem um polvo?",o:["1","2","3","4"],c:"3",f:"O polvo tem 3 corações, 8 tentáculos e sangue azul (com hemocianina em vez de hemoglobina)!",d:1},
  {v:"🦟",t:"Qual animal mata mais humanos por ano?",o:["Tubarão","Cobra","Mosquito","Hipopótamo"],c:"Mosquito",f:"Os mosquitos matam ~700.000 pessoas/ano transmitindo malária, dengue, zika, febre amarela!",d:1},
  {v:"🐝",t:"Uma abelha produz quanto mel em toda a sua vida?",o:["1 copo","1 frasco","1/12 colher de chá","1 litro"],c:"1/12 colher de chá",f:"Uma abelha produz apenas 1/12 de colher de chá de mel em toda a sua vida!",d:1},
  {v:"🦈",t:"Os tubarões têm ossos?",o:["Sim","Não, têm cartilagem","Depende da espécie","Só os adultos"],c:"Não, têm cartilagem",f:"Os tubarões são peixes cartilaginosos — existem há 450 milhões de anos, muito antes dos dinossauros!",d:1},
  {v:"🐊",t:"Os crocodilos são mais próximos de que animal evolutivamente?",o:["Lagartos","Tubarões","Pássaros","Tartarugas"],c:"Pássaros",f:"Surpreendente! Os crocodilos são mais próximos das aves do que dos lagartos na árvore evolutiva!",d:1},
  {v:"🦓",t:"O padrão de riscas de cada zebra é...",o:["Igual para todas","Único como impressão digital","Diferente por subespécie","Aleatório sem padrão"],c:"Único como impressão digital",f:"Cada zebra tem um padrão único de riscas — como as nossas impressões digitais!",d:1},
  {v:"🐺",t:"Como se chama o grupo de lobos?",o:["Manada","Alcateia","Bando","Cardume"],c:"Alcateia",f:"Uma alcateia tem um par 'alfa' que lidera. O lobo alfa não é necessariamente o mais forte!",d:1},
  // d:2
  {v:"🦋",t:"Qual é a borboleta migratória mais famosa?",o:["Borboleta Morfo","Monarca","Pavão","Almirante"],c:"Monarca",f:"A borboleta Monarca migra 4.500 km do Canadá até ao México todos os anos!",d:2},
  {v:"🐬",t:"Os golfinhos têm 'nomes' únicos?",o:["Não","Sim, assobios individuais","Só em cativeiro","Apenas as fêmeas"],c:"Sim, assobios individuais",f:"Cada golfinho tem um assobio único pelo qual é identificado — o seu 'nome'!",d:2},
  {v:"🐠",t:"Os peixes-palhaço podem mudar de sexo?",o:["Não","Sim, de fêmea para macho","Sim, de macho para fêmea","São hermafroditas"],c:"Sim, de macho para fêmea",f:"Quando a fêmea dominante morre, o maior macho torna-se fêmea e assume a liderança!",d:2},
  {v:"🦁",t:"Qual é o grupo de leões?",o:["Matilha","Bando","Manada","Alcateia"],c:"Manada",f:"A fêmea (leoa) é quem caça na manada! O macho protege o território.",d:2},
  {v:"🦅",t:"Qual ave tem o maior cérebro em relação ao corpo?",o:["Águia","Corvo","Pombo","Papagaio"],c:"Corvo",f:"Os corvos são os pássaros mais inteligentes — usam ferramentas, resolvem puzzles e 'recordam' rostos humanos!",d:2},
  {v:"🐘",t:"Qual animal tem a gestação mais longa?",o:["Elefante africano","Orca","Girafa","Hipopótamo"],c:"Elefante africano",f:"A gestação do elefante africano dura ~22 meses — quase 2 anos!",d:2},
  {v:"🦜",t:"Qual pássaro tem o maior envergadura de asas?",o:["Águia de cabeça branca","Condor-dos-Andes","Albatroz-errante","Pelicano"],c:"Albatroz-errante",f:"O albatroz-errante pode ter envergadura de 3,7m e voar 1.000 km sem pousar!",d:2},
  {v:"🦊",t:"Qual é o animal terrestre mais rápido?",o:["Leão","Guepardo","Leopardo","Cavalo"],c:"Guepardo",f:"O guepardo atinge 110 km/h em 3 segundos, mas só consegue manter essa velocidade por 20 segundos!",d:2},
  {v:"🦕",t:"Há quantos anos os dinossauros não-aviários se extinguiram?",o:["6 milhões","16 milhões","66 milhões","166 milhões"],c:"66 milhões",f:"Um asteroide de 10km causou a extinção há 66 milhões de anos. Os pássaros são dinossauros aviários!",d:2},
  {v:"🐙",t:"Qual é o cefalópode mais inteligente?",o:["Polvo","Lula","Choco","Nautilus"],c:"Polvo",f:"Os polvos abrem frascos, reconhecem rostos humanos e resolvem labirintos — têm 9 'cérebros'!",d:2},
  // d:3
  {v:"🦠",t:"O que é a 'simbiose'?",o:["Predação","Relação mutuamente benéfica entre espécies","Parasitismo","Competição"],c:"Relação mutuamente benéfica entre espécies",f:"A simbiose inclui mutualismo (ambos ganham), comensalismo (um ganha, outro neutro) e parasitismo!",d:3},
  {v:"🔬",t:"O que é a 'deriva genética'?",o:["Mutação direta","Variação aleatória em populações pequenas","Seleção natural","Migração de espécies"],c:"Variação aleatória em populações pequenas",f:"Em populações pequenas, o acaso pode eliminar genes úteis ou fixar genes neutros — afeta a evolução!",d:3},
  {v:"🦋",t:"O que é a 'aposematismo'?",o:["Camuflagem","Cores vivas como aviso de perigo","Migração sazonal","Bioluminescência"],c:"Cores vivas como aviso de perigo",f:"As cores brilhantes de rãs-venenosas e vespas servem de aviso: 'Sou perigoso, não me comas!'",d:3},
  {v:"🐟",t:"O que é a 'migração catádroma'?",o:["Migração mar→rio","Migração rio→mar","Migração entre continentes","Migração vertical"],c:"Migração rio→mar",f:"As enguias europeias nascem no rio, crescem no mar e voltam ao rio para se reproduzir!",d:3},
  {v:"🦎",t:"O que é a 'partenogénese'?",o:["Reprodução sexuada normal","Reprodução sem fertilização","Divisão celular","Hermafroditismo"],c:"Reprodução sem fertilização",f:"Algumas espécies como dragões de Komodo e tubarões podem reproduzir-se sem parceiro sexual!",d:3},
],


// ================================================================
// MUSIC MASTER
// ================================================================
music: [
  {v:"🎸",t:"Quantas cordas tem uma guitarra clássica?",o:["4","5","6","8"],c:"6",f:"As 6 cordas da guitarra: Mi, Lá, Ré, Sol, Si, Mi (de baixo para cima)!",d:1},
  {v:"🎹",t:"Quantas teclas tem um piano de concerto?",o:["72","76","88","96"],c:"88",f:"O piano tem 88 teclas: 52 brancas e 36 pretas!",d:1},
  {v:"🎵",t:"Quantas notas musicais existem?",o:["5","7","10","12"],c:"7",f:"As 7 notas: Dó, Ré, Mi, Fá, Sol, Lá, Si. Foram inventadas por Guido d'Arezzo no séc. XI!",d:1},
  {v:"🎵",t:"O que é o 'BPM' em música?",o:["Bass Per Minute","Beats Per Minute","Best Piano Method","Beat Pitch Mode"],c:"Beats Per Minute",f:"Música lenta ~60 BPM; música dance ~128 BPM; metal extremo pode passar 200 BPM!",d:1},
  {v:"🎸",t:"Quem compôs a 'Quinta Sinfonia'?",o:["Mozart","Bach","Beethoven","Chopin"],c:"Beethoven",f:"Beethoven compôs a Quinta entre 1804-1808, já com problemas de audição!",d:1},
  {v:"🎤",t:"Qual é o registo vocal mais grave masculino?",o:["Tenor","Barítono","Contralto","Baixo"],c:"Baixo",f:"Os registos masculinos do mais agudo ao mais grave: Tenor, Barítono, Baixo!",d:1},
  {v:"🥁",t:"Qual instrumento pertence às percussões?",o:["Oboé","Fagote","Tímpano","Trombone"],c:"Tímpano",f:"Os tímpanos são tambores de orquestra que podem ser afinados para notas específicas!",d:1},
  {v:"🎸",t:"Quem é considerado o 'Rei do Rock and Roll'?",o:["Chuck Berry","Little Richard","Elvis Presley","Jerry Lee Lewis"],c:"Elvis Presley",f:"Elvis Presley (1935-1977) vendeu mais de 500 milhões de discos em todo o mundo!",d:1},
  {v:"🎻",t:"Quantas cordas tem um violino?",o:["4","5","6","8"],c:"4",f:"O violino tem 4 cordas: Sol, Ré, Lá, Mi. Afinadas em quintas umas das outras!",d:1},
  {v:"🎺",t:"De que família é o trompete?",o:["Cordas","Madeiras","Metais","Percussão"],c:"Metais",f:"O trompete é um instrumento de sopro de metal. As vibrações dos lábios produzem o som!",d:1},
  {v:"🎹",t:"Quem compôs 'Para Elisa'?",o:["Mozart","Chopin","Beethoven","Bach"],c:"Beethoven",f:"'Für Elise' de Beethoven é uma das peças de piano mais tocadas no mundo!",d:1},
  {v:"🎸",t:"Qual instrumento é base do jazz?",o:["Fagote","Harpa","Saxofone","Oboé"],c:"Saxofone",f:"O saxofone foi inventado por Adolphe Sax em 1840 — por isso tem o seu nome!",d:1},
  {v:"🎹",t:"O que significa 'forte' em música?",o:["Rápido","Lento","Volume alto","Volume baixo"],c:"Volume alto",f:"'Piano' (p) = suave, 'forte' (f) = alto. As indicações dinâmicas em música são em italiano!",d:1},
  {v:"🎸",t:"Quantas cordas tem um baixo elétrico padrão?",o:["4","5","6","7"],c:"4",f:"O baixo padrão tem 4 cordas: Mi, Lá, Ré, Sol (uma oitava abaixo da guitarra)!",d:1},
  {v:"🎵",t:"O que é a 'oitava' em música?",o:["8 compassos","Nota 8 semitons acima","8 instrumentos","8 músicos"],c:"Nota 8 semitons acima",f:"Uma oitava duplica a frequência: Dó3 = 261 Hz; Dó4 = 522 Hz!",d:1},
  {v:"🎸",t:"Quem compôs a 'Sinfonia nº 9' (famosa mesmo sendo surdo)?",o:["Mozart","Schubert","Mahler","Beethoven"],c:"Beethoven",f:"A 9.ª Sinfonia de Beethoven foi composta quando estava completamente surdo — um milagre musical!",d:2},
  {v:"🎵",t:"O que é um 'arpejo'?",o:["Nota longa","Notas de um acorde tocadas uma a uma","Acorde completo","Pausa"],c:"Notas de um acorde tocadas uma a uma",f:"Arpejo vem de 'arpa' — tocar as notas de um acorde em sequência, como numa harpa!",d:2},
  {v:"🎸",t:"Quantas cordas tem uma harpa de concerto?",o:["24","35","47","52"],c:"47",f:"Uma harpa de concerto tem 47 cordas e 7 pedais. É um dos instrumentos mais complexos!",d:2},
  {v:"🎵",t:"O que é o 'timbre' de um instrumento?",o:["O volume","A velocidade","A cor sonora única","A altura"],c:"A cor sonora única",f:"O timbre é o que nos permite distinguir um violino de uma flauta na mesma nota!",d:2},
  {v:"🎸",t:"Qual é o estilo musical com raízes no blues americano?",o:["Jazz","Rock","Clássico","Opera"],c:"Rock",f:"O rock surgiu nos anos 1950 a partir do blues e do country americanos!",d:2},
  {v:"🎹",t:"Quantas notas tem uma escala pentatónica?",o:["3","4","5","7"],c:"5",f:"A escala pentatónica tem 5 notas e é a base de inúmeros solos de guitarra e música folk!",d:2},
  {v:"🎵",t:"O que é um 'compasso 4/4'?",o:["4 compassos","4 tempos por compasso","4 instrumentos","4 vozes"],c:"4 tempos por compasso",f:"4/4 é o compasso mais comum em pop, rock e jazz!",d:2},
  {v:"🎵",t:"O que é 'solfejo'?",o:["Tipo de guitarra","Sistema de leitura musical com nomes","Tipo de acorde","Instrumento"],c:"Sistema de leitura musical com nomes",f:"Dó-Ré-Mi-Fá-Sol-Lá-Si foi inventado por Guido d'Arezzo no séc. XI!",d:2},
  {v:"🎸",t:"Em que país surgiu o Fado?",o:["Espanha","Brasil","Portugal","Moçambique"],c:"Portugal",f:"O Fado é Património Imaterial da UNESCO desde 2011!",d:2},
  {v:"🎹",t:"O que é o 'contraponto'?",o:["Nota errada","Combinação de melodias independentes","Pausa longa","Tipo de acorde"],c:"Combinação de melodias independentes",f:"Bach é o mestre do contraponto — as suas fugas têm várias melodias que se entrelaçam perfeitamente!",d:2},
  {v:"🎵",t:"O que é a 'dodecafonia'?",o:["Música com 12 instrumentos","Sistema musical de 12 tons iguais","Música para 12 vozes","Escala de 12 notas repetidas"],c:"Sistema musical de 12 tons iguais",f:"Arnold Schoenberg inventou a dodecafonia — usa as 12 notas cromáticas com igual importância!",d:3},
  {v:"🎸",t:"O que é o 'modo dórico'?",o:["Tipo de guitarra","Escala modal com 2.º grau menor","Forma de tocar percussão","Tipo de voz"],c:"Escala modal com 2.º grau menor",f:"Os modos gregos (dórico, frígio, etc.) são escalas usadas desde a Grécia Antiga!",d:3},
  {v:"🎹",t:"O que é o 'temperamento igual'?",o:["Tocar com calma","Dividir a oitava em 12 semitons iguais","Tipo de afinação barroca","Escala pentatónica"],c:"Dividir a oitava em 12 semitons iguais",f:"O temperamento igual (séc. XVIII) permitiu que instrumentos tocassem em todas as tonalidades!",d:3},
  {v:"🎵",t:"O que é a 'polifonia'?",o:["Uma melodia simples","Múltiplas vozes/melodias simultâneas","Música sem harmonia","Ritmo complexo"],c:"Múltiplas vozes/melodias simultâneas",f:"A polifonia floresceu no séc. XV-XVI. As missas de Palestrina têm 8 vozes independentes!",d:3},
  {v:"🎸",t:"O que é a 'síncopa'?",o:["Nota muito longa","Acento em tempo fraco","Pausa total","Nota muito aguda"],c:"Acento em tempo fraco",f:"A síncopa é o 'contratempo' — o jazz e o funk são construídos sobre síncopas!",d:3},
],

// ================================================================
// INVENTOR'S LAB
// ================================================================
invent: [
  {v:"💡",t:"Quem inventou a lâmpada elétrica?",o:["Nikola Tesla","Benjamin Franklin","Thomas Edison","Alexander Bell"],c:"Thomas Edison",f:"Edison patenteou a lâmpada em 1879 após mais de 1000 tentativas!",d:1},
  {v:"✈️",t:"Quem inventou o avião?",o:["Charles Lindbergh","Irmãos Wright","Nikola Tesla","Louis Blériot"],c:"Irmãos Wright",f:"Os Irmãos Wright fizeram o 1.º voo motorizado a 17 de dezembro de 1903!",d:1},
  {v:"📱",t:"Quem é o pai do telefone?",o:["Thomas Edison","Nikola Tesla","Alexander Graham Bell","Guglielmo Marconi"],c:"Alexander Graham Bell",f:"Bell registou a patente em 1876. A 1.ª frase dita foi: 'Sr. Watson, venha cá!'",d:1},
  {v:"🌐",t:"Quem inventou a World Wide Web?",o:["Bill Gates","Steve Jobs","Tim Berners-Lee","Vint Cerf"],c:"Tim Berners-Lee",f:"Tim Berners-Lee criou a WWW em 1989 no CERN, em Genebra!",d:1},
  {v:"💉",t:"Quem descobriu a penicilina?",o:["Louis Pasteur","Marie Curie","Alexander Fleming","Jonas Salk"],c:"Alexander Fleming",f:"Fleming descobriu a penicilina em 1928 acidentalmente — tinha esquecido culturas abertas!",d:1},
  {v:"🖨️",t:"Quem inventou a imprensa na Europa?",o:["Leonardo da Vinci","Johannes Gutenberg","Roger Bacon","Nicolau Copérnico"],c:"Johannes Gutenberg",f:"Gutenberg inventou a prensa de tipos móveis c.1440 — revolucionou a difusão do conhecimento!",d:1},
  {v:"⚡",t:"Quem inventou a pilha elétrica?",o:["Benjamin Franklin","Michael Faraday","Alessandro Volta","Hans Ørsted"],c:"Alessandro Volta",f:"Volta inventou a pilha em 1800. O 'volt' tem o seu nome!",d:1},
  {v:"🚂",t:"Quem aperfeiçoou o motor a vapor?",o:["James Watt","George Stephenson","Richard Trevithick","Thomas Newcomen"],c:"James Watt",f:"James Watt melhorou drasticamente o motor a vapor em 1769. O 'watt' de potência tem o seu nome!",d:1},
  {v:"🧬",t:"Quem descreveu a estrutura do DNA?",o:["Louis Pasteur","Gregor Mendel","Watson e Crick","Marie Curie"],c:"Watson e Crick",f:"Watson e Crick descreveram a dupla hélice em 1953, com ajuda crucial de Rosalind Franklin!",d:1},
  {v:"📷",t:"Quem tirou a primeira fotografia?",o:["Thomas Edison","Nicéphore Niépce","Louis Daguerre","William Fox Talbot"],c:"Nicéphore Niépce",f:"Niépce tirou a primeira foto em 1826, com 8 horas de exposição!",d:1},
  {v:"🎥",t:"Quem inventou o cinema?",o:["Thomas Edison","Irmãos Lumière","Georges Méliès","Charlie Chaplin"],c:"Irmãos Lumière",f:"Auguste e Louis Lumière fizeram a 1.ª sessão de cinema a 28 de dezembro de 1895!",d:1},
  {v:"🏎️",t:"Quem inventou o automóvel a motor de combustão?",o:["Henry Ford","Karl Benz","Gottlieb Daimler","Nikolaus Otto"],c:"Karl Benz",f:"Karl Benz patenteou o primeiro automóvel a gasolina em 1886!",d:1},
  {v:"📻",t:"Quem inventou o rádio?",o:["Thomas Edison","Nikola Tesla","Guglielmo Marconi","James Clerk Maxwell"],c:"Guglielmo Marconi",f:"Marconi enviou o primeiro sinal de rádio transatlântico em 1901!",d:1},
  {v:"💊",t:"Quem desenvolveu a vacina contra a varíola?",o:["Louis Pasteur","Edward Jenner","Alexander Fleming","Robert Koch"],c:"Edward Jenner",f:"Edward Jenner desenvolveu a primeira vacina em 1796, usando cowpox para prevenir varíola!",d:1},
  {v:"🔬",t:"Quem inventou o microscópio composto?",o:["Galileu","Robert Hooke","Antonie van Leeuwenhoek","Zacharias Janssen"],c:"Zacharias Janssen",f:"Zacharias Janssen inventou o microscópio composto c.1590. Van Leeuwenhoek aperfeiçoou-o!",d:1},
  {v:"⚡",t:"O que inventou Nikola Tesla que usamos hoje em casa?",o:["A lâmpada","O telefone","A corrente alternada (CA)","O motor a vapor"],c:"A corrente alternada (CA)",f:"Tesla vs Edison: a 'Guerra das Correntes'. Tesla ganhou — a CA alimenta as nossas casas!",d:2},
  {v:"📱",t:"Quem lançou o primeiro smartphone moderno?",o:["Bill Gates","Steve Jobs","Andy Rubin","Eric Schmidt"],c:"Steve Jobs",f:"Steve Jobs apresentou o iPhone a 9 de janeiro de 2007, revolucionando o mundo!",d:2},
  {v:"💊",t:"Quem descobriu a insulina?",o:["Louis Pasteur","Frederick Banting","Alexander Fleming","Charles Best"],c:"Frederick Banting",f:"Banting e Best descobriram a insulina em 1921 — salvando milhões de diabéticos!",d:2},
  {v:"🚀",t:"Quem lançou o primeiro foguetão a combustível líquido?",o:["Werner von Braun","Robert Goddard","Konstantin Tsiolkovsky","Yuri Gagarin"],c:"Robert Goddard",f:"Robert Goddard lançou o primeiro foguetão a combustível líquido a 16 de março de 1926!",d:2},
  {v:"🌡️",t:"Quem inventou o termómetro de mercúrio?",o:["Celsius","Fahrenheit","Gabriel Fahrenheit","Torricelli"],c:"Gabriel Fahrenheit",f:"Gabriel Fahrenheit inventou o termómetro de mercúrio em 1714!",d:2},
  {v:"💻",t:"Quem é considerado o pai da informática moderna?",o:["Bill Gates","Steve Jobs","Alan Turing","John von Neumann"],c:"Alan Turing",f:"Alan Turing criou os fundamentos teóricos da computação na década de 1930!",d:2},
  {v:"🔭",t:"Quem aperfeiçoou o telescópio refletor?",o:["Galileu","Huygens","Isaac Newton","Kepler"],c:"Isaac Newton",f:"Newton inventou o telescópio refletor em 1668 — usa espelhos em vez de lentes!",d:2},
  {v:"📡",t:"Quem inventou o sonar?",o:["Nikola Tesla","Paul Langevin","Reginald Fessenden","Lee de Forest"],c:"Paul Langevin",f:"Paul Langevin desenvolveu o sonar em 1917 para detetar submarinos na 1.ª Guerra!",d:2},
  {v:"🚢",t:"Quem inventou o navio a vapor?",o:["James Watt","Robert Fulton","George Stephenson","William Symington"],c:"Robert Fulton",f:"Robert Fulton lançou o primeiro navio a vapor comercial em 1807, o Clermont!",d:2},
  {v:"🔋",t:"Quem inventou a bateria recarregável de iões de lítio?",o:["Elon Musk","John Goodenough","Akira Yoshino","Thomas Edison"],c:"John Goodenough",f:"John Goodenough ganhou o Nobel de Química em 2019, com 97 anos — o mais velho laureado!",d:2},
  {v:"🧲",t:"Quem formulou as equações do eletromagnetismo?",o:["Michael Faraday","James Clerk Maxwell","André-Marie Ampère","Heinrich Hertz"],c:"James Clerk Maxwell",f:"Maxwell unificou eletricidade, magnetismo e luz numa teoria em 1865 — uma das maiores conquistas da física!",d:3},
  {v:"🌡️",t:"Quem inventou o termómetro de gás para definir o zero absoluto?",o:["Celsius","Kelvin","Rankine","Fahrenheit"],c:"Kelvin",f:"Lord Kelvin definiu o zero absoluto (-273,15°C) em 1848. A escala Kelvin tem o seu nome!",d:3},
  {v:"🔬",t:"Quem descobriu os raios X?",o:["Marie Curie","Wilhelm Röntgen","Henri Becquerel","Pierre Curie"],c:"Wilhelm Röntgen",f:"Röntgen descobriu os raios X em 1895 acidentalmente — ganhou o primeiro Nobel de Física em 1901!",d:3},
  {v:"⚛️",t:"Quem desenvolveu a teoria quântica original?",o:["Albert Einstein","Niels Bohr","Max Planck","Werner Heisenberg"],c:"Max Planck",f:"Max Planck propôs em 1900 que a energia é quantizada em 'pacotes' (quanta) — nasceu a física quântica!",d:3},
  {v:"💊",t:"Quem sintetizou a aspirina?",o:["Alexander Fleming","Felix Hoffmann","Louis Pasteur","Robert Koch"],c:"Felix Hoffmann",f:"Felix Hoffmann sintetizou o ácido acetilsalicílico (aspirina) em 1897 na Bayer!",d:3},
],

// ================================================================
// CRYPTO-LOGIC
// ================================================================
crypto: [
  {v:"🔐",t:"Na cifra de César (+3), a letra A torna-se...?",o:["B","C","D","E"],c:"D",f:"A cifra de César desloca cada letra 3 posições — usada por Júlio César nas suas mensagens!",d:1},
  {v:"🔢",t:"Se A=1, B=2... que palavra forma 16-15-18-20-15?",o:["PORTB","PORTO","PORTS","PORTA"],c:"PORTO",f:"P=16, O=15, R=18, T=20, O=15 = PORTO! Código numérico simples!",d:1},
  {v:"🔐",t:"O que é a 'criptografia'?",o:["Arte de criar mapas","Arte de criar códigos secretos","Escrita rápida","Linguagem de gestos"],c:"Arte de criar códigos secretos",f:"A criptografia existe há mais de 4000 anos — os egípcios já usavam hieróglifos secretos!",d:1},
  {v:"🔢",t:"Em código Morse, '...' (3 pontos) representa que letra?",o:["S","E","T","O"],c:"S",f:"SOS em Morse é '... --- ...' — escolhido por ser fácil de transmitir em emergências!",d:1},
  {v:"🧩",t:"Se invertermos 'ATROP', obtemos...?",o:["PORTA","TROFA","RAPOT","AROPT"],c:"PORTA",f:"Inverter palavras é a cifra 'reverso' — uma das mais simples!",d:1},
  {v:"🔐",t:"O que é o 'texto em claro'?",o:["Texto muito legível","A mensagem original antes de cifrar","Texto cifrado","A chave"],c:"A mensagem original antes de cifrar",f:"Texto em claro → cifrar com chave → texto cifrado. Decifrar inverte o processo!",d:1},
  {v:"🔢",t:"Na cifra A=Z, B=Y, C=X... (Atbash), 'SVOOL' decifra para?",o:["HELLO","WORLD","HOLLA","HULLO"],c:"HELLO",f:"A cifra Atbash inverte o alfabeto. H→S, E→V, L→O, L→O! Usada na Bíblia hebraica!",d:1},
  {v:"🔐",t:"Para que serve a criptografia hoje?",o:["Só em jogos","Proteção de dados e comunicações","Apenas em bancos","Decoração"],c:"Proteção de dados e comunicações",f:"Toda a tua navegação HTTPS, pagamentos e mensagens estão protegidos por criptografia!",d:1},
  {v:"🔢",t:"Quantos bits tem um 'nibble'?",o:["2","4","8","16"],c:"4",f:"Nibble = 4 bits = metade de um byte. Representado por um único dígito hexadecimal!",d:1},
  {v:"🔢",t:"O que é o código ASCII?",o:["Tipo de vírus","Sistema de codificação de caracteres","Linguagem de programação","Protocolo de rede"],c:"Sistema de codificação de caracteres",f:"ASCII atribui números a caracteres: A=65, B=66... Criado em 1963 para comunicações!",d:1},
  {v:"🔐",t:"Na cifra de César com deslocamento +13, como se chama?",o:["Cifra de Vigenère","ROT13","Cifra de Playfair","Cifra de Beaufort"],c:"ROT13",f:"ROT13 é tão comum que tem nome próprio! 'Caesar' em ROT13 = 'Pnrfne'!",d:2},
  {v:"🔢",t:"Na base hexadecimal, que valor representa 'F'?",o:["5","10","15","16"],c:"15",f:"Hexadecimal: 0-9 + A(10) B(11) C(12) D(13) E(14) F(15). #FF0000 em CSS = vermelho puro!",d:2},
  {v:"🔐",t:"O que é a cifra RSA?",o:["Cifra de substituição simples","Criptografia de chave pública","Tipo de vírus","Protocolo de email"],c:"Criptografia de chave pública",f:"RSA usa dois números primos enormes. Factorizar esses números levaria milénios mesmo com supercomputadores!",d:2},
  {v:"🔐",t:"O que é 'encriptação ponta a ponta' (E2E)?",o:["Encriptação no servidor","Só remetente e destinatário podem ler","Encriptação em hardware","Proteção contra vírus"],c:"Só remetente e destinatário podem ler",f:"WhatsApp e Signal usam E2E — nem a própria empresa consegue ler as mensagens!",d:2},
  {v:"🔢",t:"O que é uma 'hash function'?",o:["Tipo de pasta","Função que gera código fixo irreversível","Tipo de cifra","Protocolo de rede"],c:"Função que gera código fixo irreversível",f:"As tuas passwords são guardadas como hashes — impossível reverter para a palavra original!",d:2},
  {v:"🔐",t:"O que é 'steganografia'?",o:["Tipo de criptografia","Esconder mensagens dentro de outros dados","Estudo de selos","Tipo de vírus"],c:"Esconder mensagens dentro de outros dados",f:"Steganografia esconde mensagens em imagens, áudio ou texto — diferente de cifrar!",d:2},
  {v:"🔐",t:"O que é um 'certificado SSL/TLS'?",o:["Tipo de antivírus","Documento que autentica um site e encripta","Tipo de cookie","Protocolo de email"],c:"Documento que autentica um site e encripta",f:"O cadeado 🔒 nos browsers indica certificado SSL válido — comunicação segura!",d:2},
  {v:"🔢",t:"O que é o código QR?",o:["Código de barras 1D","Código de barras 2D","Tipo de NFC","Chip RFID"],c:"Código de barras 2D",f:"Os QR codes foram inventados em 1994 pela Toyota para rastrear peças de automóveis!",d:2},
  {v:"🔐",t:"O que é 'autenticação de dois fatores' (2FA)?",o:["Dois passwords diferentes","Dois métodos de verificação de identidade","Dois utilizadores","Dois certificados"],c:"Dois métodos de verificação de identidade",f:"2FA combina algo que sabes (senha) + algo que tens (telemóvel) ou és (biometria)!",d:2},
  {v:"🔢",t:"Quanto vale '0xAF' em decimal?",o:["165","175","185","195"],c:"175",f:"0xAF: A=10, F=15. 10×16 + 15 = 175. Hexadecimal é essencial em programação de baixo nível!",d:2},
  {v:"🔐",t:"O que é o 'protocolo Diffie-Hellman'?",o:["Tipo de cifra simétrica","Troca segura de chaves em canal inseguro","Sistema de assinatura digital","Tipo de hash"],c:"Troca segura de chaves em canal inseguro",f:"Diffie-Hellman (1976) resolveu o problema de como dois desconhecidos partilham um segredo sem se encontrarem!",d:3},
  {v:"🔐",t:"O que é uma 'assinatura digital'?",o:["Digitalizar a assinatura manuscrita","Prova criptográfica de autoria e integridade","Tipo de password","Certificado de segurança"],c:"Prova criptográfica de autoria e integridade",f:"A assinatura digital garante que um documento não foi alterado e quem o assinou!",d:3},
  {v:"🔢",t:"O que é o 'princípio de Kerckhoffs'?",o:["A chave deve ser secreta, não o algoritmo","Segurança por obscuridade","Algoritmos devem ser secretos","Chaves devem ter 256 bits"],c:"A chave deve ser secreta, não o algoritmo",f:"Auguste Kerckhoffs (1883): o sistema deve ser seguro mesmo que o inimigo conheça tudo exceto a chave!",d:3},
  {v:"🔐",t:"O que é 'computação quântica' para a criptografia?",o:["Torna tudo mais seguro","Pode quebrar a maioria da criptografia atual","Não tem impacto","Apenas é teórica"],c:"Pode quebrar a maioria da criptografia atual",f:"Um computador quântico suficientemente potente poderia quebrar RSA rapidamente — já se desenvolve criptografia pós-quântica!",d:3},
  {v:"🔐",t:"O que é a 'criptografia homomórfica'?",o:["Cifra simétrica avançada","Permite computar em dados cifrados sem decifrar","Tipo de hash moderno","Sistema de assinatura"],c:"Permite computar em dados cifrados sem decifrar",f:"Permite a um servidor processar os teus dados sem os ver! Prometedor para privacidade na nuvem!",d:3},
],

// ================================================================
// LITERATURE
// ================================================================
lit: [
  {v:"🧙",t:"Quem escreveu 'Harry Potter'?",o:["J.R.R. Tolkien","Roald Dahl","J.K. Rowling","C.S. Lewis"],c:"J.K. Rowling",f:"Rowling escreveu o 1.º livro em cafés de Edimburgo. Mais de 500 milhões de cópias vendidas!",d:1},
  {v:"🌹",t:"De que planeta veio o Principezinho?",o:["B611","B612","B613","B614"],c:"B612",f:"'O Principezinho' (1943) é o livro mais traduzido depois da Bíblia — 300+ idiomas!",d:1},
  {v:"⚔️",t:"Quem escreveu 'Os Lusíadas'?",o:["Fernando Pessoa","Gil Vicente","Luís de Camões","Eça de Queirós"],c:"Luís de Camões",f:"'Os Lusíadas' (1572) é o maior poema épico português, narrando a viagem de Vasco da Gama!",d:1},
  {v:"🌋",t:"Quem escreveu 'Viagem ao Centro da Terra'?",o:["H.G. Wells","Jules Verne","Arthur Conan Doyle","Isaac Asimov"],c:"Jules Verne",f:"Jules Verne antecipou submarinos, viagens espaciais e internet nas suas obras do séc. XIX!",d:1},
  {v:"🐉",t:"Qual o protagonista de 'O Hobbit'?",o:["Frodo Baggins","Gandalf","Bilbo Baggins","Aragorn"],c:"Bilbo Baggins",f:"Tolkien escreveu 'O Hobbit' em 1937 para os seus filhos. 'O Senhor dos Anéis' veio depois!",d:1},
  {v:"🔍",t:"Quem criou o detetive Sherlock Holmes?",o:["Agatha Christie","Edgar Allan Poe","Arthur Conan Doyle","G.K. Chesterton"],c:"Arthur Conan Doyle",f:"Doyle criou Holmes em 1887. O 221B Baker Street é um museu em Londres!",d:1},
  {v:"🐰",t:"Em 'Alice no País das Maravilhas', que animal ela segue?",o:["Um gato","Um coelho branco","Uma borboleta","Um rato"],c:"Um coelho branco",f:"Lewis Carroll escreveu 'Alice' em 1865 para Alice Liddell, filha de um amigo!",d:1},
  {v:"🐋",t:"Quem escreveu 'Moby Dick'?",o:["Jack London","Herman Melville","Ernest Hemingway","John Steinbeck"],c:"Herman Melville",f:"'Moby Dick' (1851) começa com a famosa frase 'Call me Ishmael'!",d:1},
  {v:"📖",t:"Quem escreveu '1984'?",o:["Aldous Huxley","George Orwell","Ray Bradbury","Philip K. Dick"],c:"George Orwell",f:"'1984' (1949) criou os termos 'Big Brother', 'doublethink' e 'Newspeak'!",d:1},
  {v:"🧙",t:"Quem escreveu 'O Senhor dos Anéis'?",o:["C.S. Lewis","J.K. Rowling","J.R.R. Tolkien","Philip Pullman"],c:"J.R.R. Tolkien",f:"Tolkien criou línguas completas (élfico) para o seu universo!",d:1},
  {v:"🌊",t:"Quem escreveu 'O Velho e o Mar'?",o:["Jack London","Joseph Conrad","Ernest Hemingway","Herman Melville"],c:"Ernest Hemingway",f:"Hemingway ganhou o Nobel em 1954 após publicar 'O Velho e o Mar' em 1952!",d:1},
  {v:"⚔️",t:"'Dom Quixote' foi escrito por...?",o:["Lope de Vega","Francisco de Quevedo","Miguel de Cervantes","Tirso de Molina"],c:"Miguel de Cervantes",f:"Dom Quixote (1605) é considerado o primeiro romance moderno e o mais traduzido após a Bíblia!",d:1},
  {v:"🦁",t:"Quem escreveu 'As Crónicas de Nárnia'?",o:["J.R.R. Tolkien","J.K. Rowling","C.S. Lewis","Philip Pullman"],c:"C.S. Lewis",f:"C.S. Lewis escreveu as 7 Crónicas de Nárnia entre 1950-1956!",d:1},
  {v:"🔥",t:"Quem escreveu 'Fahrenheit 451'?",o:["George Orwell","Aldous Huxley","Ray Bradbury","Philip K. Dick"],c:"Ray Bradbury",f:"'Fahrenheit 451' (1953): numa sociedade futura, os livros são queimados. 451°F é a temperatura de combustão do papel!",d:1},
  {v:"📖",t:"Fernando Pessoa é mais conhecido pelo seu...?",o:["Romance histórico","Teatro","Poesia e heterónimos","Jornalismo"],c:"Poesia e heterónimos",f:"Pessoa criou heterónimos com personalidades próprias: Alberto Caeiro, Ricardo Reis, Álvaro de Campos!",d:1},
  {v:"💊",t:"Quem escreveu 'Admirável Mundo Novo'?",o:["George Orwell","Ray Bradbury","Aldous Huxley","Philip K. Dick"],c:"Aldous Huxley",f:"'Admirável Mundo Novo' (1932): sociedade controlada por prazer e condicionamento — visionário!",d:2},
  {v:"🐖",t:"Quem escreveu 'A Quinta dos Animais'?",o:["Charles Dickens","George Orwell","John Steinbeck","H.G. Wells"],c:"George Orwell",f:"'A Quinta dos Animais' (1945) é uma alegoria da Revolução Russa!",d:2},
  {v:"🦋",t:"Quem escreveu 'Crime e Castigo'?",o:["Tolstói","Chékhov","Turguêniev","Dostoiévski"],c:"Dostoiévski",f:"'Crime e Castigo' (1866): um estudante mata uma agiota e enfrenta as consequências psicológicas!",d:2},
  {v:"🌙",t:"Quem escreveu 'As Mil e Uma Noites'?",o:["Um único autor persa","Coleção anónima árabe/persa","A personagem Scheherazade","Ibn Battuta"],c:"Coleção anónima árabe/persa",f:"As 'Mil e Uma Noites' foram compiladas entre os séc. VIII-XIII. Inclui Aladim e Sinbad!",d:2},
  {v:"🐦",t:"Quem escreveu 'Matar um Rouxinol' (To Kill a Mockingbird)?",o:["Harper Lee","Truman Capote","John Steinbeck","William Faulkner"],c:"Harper Lee",f:"'Matar um Rouxinol' (1960) ganhou o Pulitzer e foi durante décadas leitura obrigatória em escolas!",d:2},
  {v:"📖",t:"Qual é a obra mais famosa de Eça de Queirós?",o:["O Crime do Padre Amaro","Os Maias","A Ilustre Casa de Ramires","O Primo Basílio"],c:"Os Maias",f:"'Os Maias' (1888) é o maior romance do Realismo português!",d:2},
  {v:"📖",t:"Camilo Castelo Branco escreveu qual romance famoso de amor?",o:["Os Maias","O Crime do Padre Amaro","Amor de Perdição","A Relíquia"],c:"Amor de Perdição",f:"'Amor de Perdição' (1862) foi escrito por Camilo na prisão em apenas 15 dias!",d:2},
  {v:"🎭",t:"Qual é a peça mais famosa de Shakespeare?",o:["Otelo","Macbeth","Hamlet","Rei Lear"],c:"Hamlet",f:"'Ser ou não ser, eis a questão' é a frase mais citada de toda a literatura mundial!",d:2},
  {v:"📖",t:"Quem escreveu 'O Conde de Monte Cristo'?",o:["Victor Hugo","Honoré de Balzac","Alexandre Dumas","Gustave Flaubert"],c:"Alexandre Dumas",f:"Alexandre Dumas escreveu o romance em folhetins em 1844 — era um bestseller seriado!",d:2},
  {v:"📖",t:"Kafka escreveu 'A Metamorfose' — o personagem transforma-se em...?",o:["Rato","Inseto gigante","Serpente","Pássaro"],c:"Inseto gigante",f:"Gregor Samsa acorda transformado num inseto gigante — símbolo da alienação moderna!",d:2},
  {v:"📖",t:"O que é o 'stream of consciousness' (fluxo de consciência)?",o:["Técnica de narração objetiva","Técnica que imita o pensamento interno","Diálogo direto","Narrador omnisciente"],c:"Técnica que imita o pensamento interno",f:"James Joyce em 'Ulisses' e Virginia Woolf usam esta técnica para mostrar os pensamentos sem filtro!",d:3},
  {v:"🎭",t:"O que é o 'teatro do absurdo'?",o:["Teatro de humor","Teatro que questiona a existência humana","Teatro musical","Teatro histórico"],c:"Teatro que questiona a existência humana",f:"Beckett, Ionesco e Pinter criaram o teatro do absurdo — 'À Espera de Godot' é o exemplo máximo!",d:3},
  {v:"📖",t:"O que é o 'realismo mágico'?",o:["Ficção científica","Elementos mágicos em contexto realista","Horror sobrenatural","Fábula clássica"],c:"Elementos mágicos em contexto realista",f:"García Márquez em 'Cem Anos de Solidão' é o mestre do realismo mágico latino-americano!",d:3},
  {v:"📖",t:"O que é uma 'distopia'?",o:["Sociedade ideal","Sociedade futura opressiva e sombria","Romance histórico","Fábula moral"],c:"Sociedade futura opressiva e sombria",f:"'1984', 'Admirável Mundo Novo' e 'Fahrenheit 451' são distopias clássicas!",d:3},
  {v:"📖",t:"O que é a técnica narrativa 'in medias res'?",o:["Narrar do início","Começar no meio da ação","Narrar a partir do fim","Múltiplos narradores"],c:"Começar no meio da ação",f:"'In medias res' é latim para 'no meio das coisas'. Homero usa-a na Ilíada e na Odisseia!",d:3},
],

// ================================================================
// OLYMPIC TRIVIA
// ================================================================
olympic: [
  {v:"🏛️",t:"Em que cidade foram os primeiros Jogos Olímpicos modernos (1896)?",o:["Roma","Paris","Londres","Atenas"],c:"Atenas",f:"Primeiros Jogos modernos em Atenas com 241 atletas de 14 nações!",d:1},
  {v:"🏊",t:"Quantas medalhas de ouro ganhou Michael Phelps?",o:["14","18","23","28"],c:"23",f:"Michael Phelps é o maior medalhado olímpico de sempre — 28 medalhas, 23 de ouro!",d:1},
  {v:"🏅",t:"De quantos em quantos anos se realizam os Jogos de Verão?",o:["2","4","3","5"],c:"4",f:"Os Jogos são de 4 em 4 anos. Foram cancelados em 1916, 1940 e 1944 por guerras!",d:1},
  {v:"🥇",t:"Qual país ganhou mais medalhas olímpicas de sempre?",o:["China","Rússia","Alemanha","EUA"],c:"EUA",f:"Os EUA lideram com mais de 2.600 medalhas olímpicas de verão!",d:1},
  {v:"🏅",t:"O que representam os 5 anéis olímpicos?",o:["5 desportos","5 valores","5 continentes","5 nações fundadoras"],c:"5 continentes",f:"Os 5 anéis representam África, Américas, Ásia, Europa e Oceania!",d:1},
  {v:"🏃",t:"Qual é a distância da maratona olímpica?",o:["40 km","42,195 km","45 km","38 km"],c:"42,195 km",f:"A distância foi fixada nos Jogos de Londres 1908 para terminar junto ao palco real!",d:1},
  {v:"🥊",t:"Muhammad Ali ganhou medalha olímpica em que modalidade?",o:["Atletismo","Natação","Boxe","Luta"],c:"Boxe",f:"Ali (então Cassius Clay) ganhou ouro em boxe em Roma 1960 com apenas 18 anos!",d:1},
  {v:"🏅",t:"Qual o significado do mote olímpico 'Citius, Altius, Fortius'?",o:["Paz, Amor, União","Mais rápido, Mais alto, Mais forte","Coragem, Honra, Vitória","Mente, Corpo, Espírito"],c:"Mais rápido, Mais alto, Mais forte",f:"O mote foi proposto por Pierre de Coubertin. Em 2021 foi adicionado 'Communiter' (Juntos)!",d:1},
  {v:"🏅",t:"O que é a chama olímpica?",o:["Símbolo de paz","Liga os Jogos antigos aos modernos","Símbolo de velocidade","Tradição medieval"],c:"Liga os Jogos antigos aos modernos",f:"A chama é acesa em Olímpia, na Grécia, e percorre o mundo até aos Jogos!",d:1},
  {v:"⚽",t:"Em que ano o futebol entrou nas Olimpíadas?",o:["1896","1900","1920","1928"],c:"1900",f:"O futebol entrou nos Jogos de Paris em 1900!",d:1},
  {v:"🤸",t:"Em que ano a ginástica artística entrou nas Olimpíadas?",o:["1896","1900","1908","1920"],c:"1896",f:"A ginástica artística esteve nos primeiros Jogos modernos de Atenas em 1896!",d:1},
  {v:"🏋️",t:"Qual é o desporto mais rápido nos Jogos?",o:["Atletismo","Natação","Badminton","Tiro"],c:"Badminton",f:"O volante de badminton pode atingir 493 km/h — mais rápido que qualquer outro objeto desportivo!",d:1},
  {v:"🏅",t:"Qual foi o primeiro país a receber duas vezes os Jogos de Verão modernos?",o:["EUA","França","Reino Unido","Grécia"],c:"França",f:"França recebeu em 1900 (Paris) e 1924 (Paris novamente)!",d:1},
  {v:"🥇",t:"Qual atleta ganhou 4 ouros nos Jogos de Berlim 1936?",o:["Carl Lewis","Bob Beamon","Jesse Owens","Paavo Nurmi"],c:"Jesse Owens",f:"Jesse Owens ganhou 4 ouros diante de Hitler, que pregava a superioridade ariana!",d:1},
  {v:"🏊",t:"Qual nadadora ganhou a primeira medalha olímpica de Portugal?",o:["Susana Feitor","Liliana Cá","Naide Gomes","Rosa Mota"],c:"Rosa Mota",f:"Rosa Mota ganhou bronze na maratona em Los Angeles 1984 — primeira medalha olímpica portuguesa!",d:1},
  {v:"🤼",t:"O judo entrou nos Jogos em que ano?",o:["1948","1956","1964","1972"],c:"1964",f:"O judo entrou nos Jogos de Tóquio 1964 — o Japão queria mostrar a sua cultura ao mundo!",d:2},
  {v:"🏊",t:"Qual país tem mais medalhas olímpicas na natação?",o:["China","Austrália","Reino Unido","EUA"],c:"EUA",f:"Os EUA dominam a natação olímpica com centenas de medalhas de ouro!",d:2},
  {v:"🏅",t:"Em que Jogos a televisão foi usada pela primeira vez?",o:["Berlim 1936","Londres 1948","Melbourne 1956","Roma 1960"],c:"Berlim 1936",f:"Os Jogos de Berlim 1936 foram os primeiros transmitidos (em circuito fechado) por televisão!",d:2},
  {v:"🏋️",t:"O que é o 'Pentathlon Moderno'?",o:["5 provas de atletismo","Esgrima, Natação, Equitação, Tiro, Cross","5 desportos aquáticos","Combinado de pesos"],c:"Esgrima, Natação, Equitação, Tiro, Cross",f:"O Pentatlo Moderno foi criado por Pierre de Coubertin para simular as proezas de um oficial militar!",d:2},
  {v:"🥇",t:"Usain Bolt ganhou quantas medalhas de ouro olímpicas?",o:["4","6","8","10"],c:"8",f:"Usain Bolt ganhou 8 ouros olímpicos nos 100m, 200m e 4×100m em Pequim, Londres e Rio!",d:2},
  {v:"🏅",t:"Qual foi o boicote mais significativo dos Jogos Olímpicos?",o:["Antuérpia 1920","Montreal 1976","Moscovo 1980","Los Angeles 1984"],c:"Moscovo 1980",f:"Os EUA e 65 países boicotaram Moscovo 1980 em protesto pela invasão soviética do Afeganistão!",d:2},
  {v:"🤸",t:"Nadia Comaneci foi a primeira a receber pontuação perfeita nos Jogos. Em que ano?",o:["1972","1976","1980","1984"],c:"1976",f:"Em Montreal 1976, Comaneci (14 anos) recebeu 10.0 — o marcador não estava preparado e mostrou 1.0!",d:2},
  {v:"🏊",t:"Em que Jogos foi estabelecido o recorde de 'maior nação estreante'?",o:["Atenas 1896","Los Angeles 1932","Munique 1972","Barcelona 1992"],c:"Barcelona 1992",f:"Barcelona 1992 teve 169 nações — recorde então. A queda da URSS trouxe muitos novos países!",d:2},
  {v:"🏃",t:"Pheidippides percorreu a primeira maratona para anunciar que...?",o:["Atenas ganhou guerra","Filipe II chegava","Uma epidemia vinha","O rei morreu"],c:"Atenas ganhou guerra",f:"Segundo a lenda, Pheidippides correu de Maratona a Atenas para anunciar a vitória sobre a Pérsia em 490 a.C.!",d:2},
  {v:"🥊",t:"Qual desporto de combate entrou nos Jogos de 1896?",o:["Judo","Karaté","Luta greco-romana","Taekwondo"],c:"Luta greco-romana",f:"A luta greco-romana esteve nos primeiros Jogos modernos. O taekwondo só entrou em 2000!",d:2},
  {v:"🏅",t:"O que é o 'Trégua Olímpica'?",o:["Pausa para refeições","Cessar-fogo durante os Jogos","Descanso dos atletas","Intervalo de 2 semanas"],c:"Cessar-fogo durante os Jogos",f:"Na Grécia Antiga, as guerras paravam durante os Jogos (Ekecheiria). A ONU reviveu esta tradição!",d:3},
  {v:"🤸",t:"Em que Jogos foi introduzido o sistema de pontuação no atletismo por nações?",o:["Nenhuns — nunca existiu","Atenas 1896","St. Louis 1904","Estocolmo 1912"],c:"Nenhuns — nunca existiu",f:"Os Jogos Olímpicos não têm classificação por nações — é individual. O quadro de medalhas é informal!",d:3},
  {v:"🏊",t:"Qual foi o nadador mais rápido dos primeiros Jogos (1896)?",o:["Usou fato especial","Nadou com roupa","Nadou no mar aberto","Usou barbatanas"],c:"Nadou no mar aberto",f:"As provas de natação em Atenas 1896 foram no mar (Baía de Zea) — a 13°C!",d:3},
  {v:"🏅",t:"O que é a 'Cerimónia do Juramento Olímpico'?",o:["Promessa de fair play","Coroação do campeão","Acendimento da chama","Izado da bandeira"],c:"Promessa de fair play",f:"O Juramento Olímpico foi introduzido em Antuérpia 1920 e é prestado por um atleta e um juiz do país anfitrião!",d:3},
  {v:"🎯",t:"O que é o 'Decatlo' nas olimpíadas?",o:["10 provas de atletismo","5 provas aquáticas","3 provas de ginástica","8 provas de combate"],c:"10 provas de atletismo",f:"O decatlo combina 10 provas em 2 dias. O vencedor é muitas vezes chamado 'o maior atleta do mundo'!",d:3},
],

// ================================================================
// CURRENCY
// ================================================================
currency: [
  {v:"💶",t:"Se 1€ = 1,10$, quanto são 5€?",o:["4,50$","5,50$","5,00$","6,00$"],c:"5,50$",f:"5 × 1,10 = 5,50$. O par EUR/USD é um dos mais transacionados do mundo!",d:1},
  {v:"💷",t:"Qual é a moeda do Reino Unido?",o:["Euro","Dólar","Libra esterlina","Franco"],c:"Libra esterlina",f:"A libra esterlina (£) existe há mais de 1200 anos — uma das moedas mais antigas em uso!",d:1},
  {v:"💴",t:"Qual é a moeda do Japão?",o:["Yuan","Won","Iene","Ringgit"],c:"Iene",f:"O iene (¥) é a moeda oficial do Japão desde 1871 e uma das mais transacionadas do mundo!",d:1},
  {v:"💰",t:"Se gastas 25€ e tens 100€, quanto sobra?",o:["65€","70€","75€","80€"],c:"75€",f:"100 - 25 = 75€. Gestão financeira básica mas essencial!",d:1},
  {v:"💴",t:"Qual é a moeda da China?",o:["Iene","Won","Yuan/Renminbi","Ringgit"],c:"Yuan/Renminbi",f:"'Yuan' é a unidade. 'Renminbi' (¥) é o nome oficial — significa 'moeda do povo'!",d:1},
  {v:"💵",t:"Qual é a moeda oficial dos EUA?",o:["Euro","Dólar americano","Libra","Franco"],c:"Dólar americano",f:"O dólar americano ($) é a moeda de reserva mundial mais usada — 60% das reservas globais!",d:1},
  {v:"💶",t:"Qual é a moeda oficial da Zona Euro?",o:["Franco","Marco","Euro","Escudo"],c:"Euro",f:"O euro foi introduzido em 1999 (eletrónico) e em 2002 (notas e moedas). Portugal adotou em 2002!",d:1},
  {v:"💰",t:"50€ com 20% de IVA, quanto pagas no total?",o:["55€","58€","60€","65€"],c:"60€",f:"20% de 50 = 10€. 50 + 10 = 60€. O IVA em Portugal é 23% (taxa normal)!",d:1},
  {v:"💵",t:"Qual é a moeda da Suíça?",o:["Euro","Franco suíço","Coroa","Krone"],c:"Franco suíço",f:"A Suíça não adotou o euro! O franco suíço (CHF) é considerado um 'porto seguro'!",d:1},
  {v:"💴",t:"Qual é a moeda da Coreia do Sul?",o:["Yuan","Won","Iene","Ringgit"],c:"Won",f:"O won sul-coreano (₩). A Coreia do Sul tem uma das economias mais digitalizadas do mundo!",d:1},
  {v:"💰",t:"Se tens 50€ e gastas 30% em comida, quanto gastaste?",o:["10€","15€","20€","25€"],c:"15€",f:"30% de 50 = 15€. Fórmula: 50 × 0,30 = 15!",d:1},
  {v:"💵",t:"Se compras 5 itens a 3,50€ cada, quanto pagas?",o:["15€","16,50€","17,50€","18€"],c:"17,50€",f:"5 × 3,50 = 17,50€!",d:1},
  {v:"💰",t:"Qual é a moeda da Noruega?",o:["Euro","Coroa norueguesa","Franco","Krone"],c:"Coroa norueguesa",f:"A Noruega, Suécia e Dinamarca têm Coroas (Krone) mas não o euro!",d:1},
  {v:"💴",t:"Qual é a moeda do Brasil?",o:["Peso","Dólar","Real","Cruzeiro"],c:"Real",f:"O Real (R$) foi introduzido em 1994 para combater a hiperinflação brasileira!",d:1},
  {v:"💰",t:"Qual é a moeda da Austrália?",o:["Dólar americano","Libra","Dólar australiano","Franco"],c:"Dólar australiano",f:"O dólar australiano (A$) existe desde 1966 quando substituiu a libra australiana!",d:1},
  {v:"💰",t:"O que é 'inflação'?",o:["Aumento do valor das coisas","Queda geral dos preços","Aumento das reservas de ouro","Taxa de juro"],c:"Aumento do valor das coisas",f:"Inflação de 5%: o que custava 100€ passa a custar 105€ no ano seguinte!",d:2},
  {v:"💵",t:"Qual é o Dinar do Kuwait — moeda mais valiosa do mundo?",o:["É igual ao dólar","~3,25 USD por dinar","~0,50 USD por dinar","~10 USD por dinar"],c:"~3,25 USD por dinar",f:"O Dinar do Kuwait é a moeda mais valiosa! Petróleo e pequena população = riqueza extrema!",d:2},
  {v:"💰",t:"O que é o 'câmbio'?",o:["Taxa de juro","Taxa de conversão entre moedas","Imposto sobre transações","Reserva de ouro"],c:"Taxa de conversão entre moedas",f:"O câmbio flutua constantemente com a oferta e procura de moedas nos mercados financeiros!",d:2},
  {v:"💴",t:"Qual moeda tem maior circulação física no mundo?",o:["Dólar americano","Euro","Yuan","Iene"],c:"Dólar americano",f:"Estima-se que 2/3 das notas de dólar circulam fora dos EUA!",d:2},
  {v:"💰",t:"O que são 'reservas cambiais'?",o:["Moedas antigas","Divisas estrangeiras guardadas pelo banco central","Ouro físico apenas","Dívida pública"],c:"Divisas estrangeiras guardadas pelo banco central",f:"A China tem as maiores reservas cambiais do mundo — mais de 3 biliões de dólares!",d:2},
  {v:"💵",t:"Se investes 1000€ com 5% de juro anual, quanto tens ao fim de 1 ano?",o:["1005€","1050€","1100€","1500€"],c:"1050€",f:"1000 × 1,05 = 1050€. Juro simples anual!",d:2},
  {v:"💰",t:"O que é o 'PIB' (Produto Interno Bruto)?",o:["Lucro das empresas","Valor total de bens e serviços produzidos num país","Dívida do governo","Total de exportações"],c:"Valor total de bens e serviços produzidos num país",f:"O PIB é o principal indicador de saúde económica de um país!",d:2},
  {v:"💴",t:"O que é a 'paridade do poder de compra' (PPC)?",o:["Taxa de câmbio oficial","Comparar custo de vida entre países","Taxa de inflação","Reservas de ouro"],c:"Comparar custo de vida entre países",f:"PPC compara o que 1$ compra em cada país. Um Big Mac custa diferente em Portugal e na Suíça!",d:2},
  {v:"💵",t:"O que é 'deflação'?",o:["Inflação alta","Queda sustentada do nível de preços","Aumento do desemprego","Crise bancária"],c:"Queda sustentada do nível de preços",f:"Deflação parece boa mas é problemática — as pessoas adiam compras esperando preços mais baixos!",d:2},
  {v:"💰",t:"O que é o 'Bitcoin'?",o:["Moeda governamental digital","Criptomoeda descentralizada","Moeda do Japão","Tipo de obrigação"],c:"Criptomoeda descentralizada",f:"O Bitcoin foi criado em 2009 por 'Satoshi Nakamoto' — identidade ainda desconhecida!",d:2},
  {v:"💰",t:"O que é o 'Índice Big Mac' do The Economist?",o:["Ranking de restaurantes","Medida informal de paridade de poder de compra","Índice de inflação de alimentos","Taxa de hambúrgueres por país"],c:"Medida informal de paridade de poder de compra",f:"Publicado desde 1986! Compara o preço de um Big Mac para estimar se moedas estão sobre ou subvalorizadas!",d:3},
  {v:"💵",t:"O que é 'carry trade'?",o:["Transporte de moeda física","Pedir emprestado em moeda de baixo juro e investir em alta","Troca de commodities","Tipo de seguro cambial"],c:"Pedir emprestado em moeda de baixo juro e investir em alta",f:"Exemplo clássico: pedir emprestado em ienes (juro baixo) e investir em dólares australianos (juro alto)!",d:3},
  {v:"💰",t:"O que são os 'DES' (Direitos de Saque Especiais)?",o:["Dívida de países pobres","Ativo de reserva do FMI","Tipo de criptomoeda","Acordo comercial"],c:"Ativo de reserva do FMI",f:"Os DES são criados pelo FMI e distribuídos aos países membros. Não são uma moeda mas um ativo de reserva!",d:3},
  {v:"💴",t:"O que foi o 'Padrão Ouro'?",o:["Moedas feitas de ouro","Sistema onde moedas tinham valor fixo em ouro","Mercado de ouro","Taxa de câmbio atual"],c:"Sistema onde moedas tinham valor fixo em ouro",f:"O Padrão Ouro (até 1971) ligava o valor do dólar ao ouro. Nixon pôs fim a esta ligação!",d:3},
  {v:"💵",t:"O que é 'quantitative easing' (QE)?",o:["Corte de impostos","Banco central compra ativos para injetar dinheiro","Aumento das taxas de juro","Redução da dívida pública"],c:"Banco central compra ativos para injetar dinheiro",f:"O BCE e a Fed usaram QE após a crise de 2008 e durante a COVID para estimular a economia!",d:3},
],

};
// expose globally
if(typeof module!=='undefined')module.exports=QB;


// ================================================================
// STATE ENGINE
// ================================================================
// ── Global XP (gems, badges) ──
const GLOBAL_XP=[0,200,500,1000,1800,3000]; // 5 global levels
// ── Per-game XP to level up: 10 levels per game ──
const GAME_XP=[0,60,120,200,300,420,560,720,900,1100]; // xp to reach each level

const DEF={
  gems:20, globalXP:0, globalLevel:1,
  totalCorrect:0, totalPlayed:0,
  achievements:{}, powerups:{hint:2,skip:1,'2x':1},
  maxStreak:0, gamesPlayed:[],
  // per-game progress: { gameId: {level:1, xp:0, seen:[]} }
  gameProgress:{}
};
let state=loadState();
let CG={}; // current game

function loadState(){
  try{const s=localStorage.getItem('eq21');if(s){const p=JSON.parse(s);return Object.assign(JSON.parse(JSON.stringify(DEF)),p);}}
  catch(e){}
  return JSON.parse(JSON.stringify(DEF));
}
function saveState(){try{localStorage.setItem('eq21',JSON.stringify(state));}catch(e){}}

// ── Per-game progress helpers ──
function getGameProg(id){
  if(!state.gameProgress[id])state.gameProgress[id]={level:1,xp:0,seen:[]};
  return state.gameProgress[id];
}
function gameXPNeed(lvl){return GAME_XP[Math.min(lvl-1,GAME_XP.length-1)];}
function addGameXP(id, n){
  const p=getGameProg(id);
  p.xp+=n;
  let leveled=false;
  while(p.level<10 && p.xp>=gameXPNeed(p.level)){
    p.xp-=gameXPNeed(p.level);
    p.level++;
    leveled=true;
  }
  if(leveled){showGameLevelUp(id, p.level);if(p.level===10)launchConfetti();}
  saveState();
  return p.level;
}
function showGameLevelUp(id, lvl){
  const gm=GAMES.find(g=>g.id===id);
  showToast((gm?gm.emoji:'⭐')+' '+(gm?gm.name:id)+' → Nível '+lvl+'! 🎉');
  vibrate([30,20,30,20,60]);playSound('levelup');
}

// ── Global XP (gems only - cosmetic) ──
function globalXPNeed(l){return GLOBAL_XP[Math.min(l,5)]||(l*600);}
function addGlobalXP(n){
  state.globalXP=(state.globalXP||0)+n;
  if(state.globalLevel<5 && state.globalXP>=globalXPNeed(state.globalLevel)){
    state.globalXP-=globalXPNeed(state.globalLevel);
    state.globalLevel=(state.globalLevel||1)+1;
    showLevelUp(state.globalLevel);
  }
  saveState(); updateHUD();
}
function addGems(n){state.gems+=n;saveState();updateHUD();}
function updateHUD(){
  document.getElementById('gemCount').textContent=state.gems;
  document.getElementById('xpCount').textContent=state.globalXP||0;
  document.getElementById('levelNum').textContent=state.globalLevel||1;
  document.getElementById('xpCur').textContent=state.globalXP||0;
  document.getElementById('xpNext').textContent=globalXPNeed(state.globalLevel||1);
  document.getElementById('xpFill').style.width=Math.min(100,((state.globalXP||0)/globalXPNeed(state.globalLevel||1))*100)+'%';
}
function shuffle(a){const b=a.slice();for(let i=b.length-1;i>0;i--){const j=0|Math.random()*(i+1);[b[i],b[j]]=[b[j],b[i]];}return b;}
function rnd(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
function showXP(t){const el=document.getElementById('xpPop');el.textContent=t;el.classList.remove('show','hide');void el.offsetWidth;el.classList.add('show');setTimeout(()=>{el.classList.remove('show');el.classList.add('hide');},1400);}
function showToast(m){const el=document.getElementById('toast');el.textContent=m;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),2400);}
function showLevelUp(l){document.getElementById('newLvl').textContent=l;document.getElementById('lvlOverlay').classList.add('show');vibrate([50,30,50,30,100]);playSound('levelup');launchConfetti(80);}
function vibrate(p){try{navigator.vibrate&&navigator.vibrate(p);}catch(e){}}
// ================================================================
// AUDIO ENGINE
// ================================================================
let _ctx=null, _muted=false;
function getCtx(){if(!_ctx)_ctx=new(window.AudioContext||window.webkitAudioContext)();return _ctx;}
function playSound(type){
  if(_muted)return;
  try{
    const ctx=getCtx();
    const now=ctx.currentTime;
    const master=ctx.createGain();master.connect(ctx.destination);
    if(type==='success'||type==='correct'){
      // Ascending two-tone chime
      [523,784].forEach((f,i)=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type='sine';o.frequency.value=f;
        g.gain.setValueAtTime(0,now+i*.12);
        g.gain.linearRampToValueAtTime(.28,now+i*.12+.04);
        g.gain.exponentialRampToValueAtTime(.001,now+i*.12+.35);
        o.connect(g);g.connect(master);o.start(now+i*.12);o.stop(now+i*.12+.35);
      });
    }else if(type==='error'||type==='wrong'){
      // Low buzzing error
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='sawtooth';o.frequency.setValueAtTime(220,now);
      o.frequency.exponentialRampToValueAtTime(110,now+.25);
      g.gain.setValueAtTime(.22,now);g.gain.exponentialRampToValueAtTime(.001,now+.28);
      o.connect(g);g.connect(master);o.start(now);o.stop(now+.28);
    }else if(type==='click'){
      // Short pop
      const o=ctx.createOscillator(),g=ctx.createGain();
      o.type='sine';o.frequency.value=600;
      g.gain.setValueAtTime(.18,now);g.gain.exponentialRampToValueAtTime(.001,now+.08);
      o.connect(g);g.connect(master);o.start(now);o.stop(now+.08);
    }else if(type==='levelup'){
      // Festive arpeggio C-E-G-C
      [523,659,784,1047].forEach((f,i)=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type='triangle';o.frequency.value=f;
        g.gain.setValueAtTime(0,now+i*.1);
        g.gain.linearRampToValueAtTime(.3,now+i*.1+.05);
        g.gain.exponentialRampToValueAtTime(.001,now+i*.1+.3);
        o.connect(g);g.connect(master);o.start(now+i*.1);o.stop(now+i*.1+.3);
      });
    }else if(type==='confetti'){
      // Quick fanfare
      [659,784,1047,1319].forEach((f,i)=>{
        const o=ctx.createOscillator(),g=ctx.createGain();
        o.type='sine';o.frequency.value=f;
        g.gain.setValueAtTime(.25,now+i*.08);
        g.gain.exponentialRampToValueAtTime(.001,now+i*.08+.2);
        o.connect(g);g.connect(master);o.start(now+i*.08);o.stop(now+i*.08+.2);
      });
    }
  }catch(e){}
}
// Legacy alias
function snd(t){playSound(t==='correct'?'success':t==='wrong'?'error':t);}

// ================================================================
// CONFETTI ENGINE
// ================================================================
let confettiParts=[];
const CONF_COLORS=['#f59e0b','#ef4444','#10b981','#3b82f6','#a855f7','#ec4899','#06b6d4','#84cc16'];
function launchConfetti(n=80){
  const cv=document.getElementById('confettiCanvas');
  cv.width=window.innerWidth;cv.height=window.innerHeight;
  for(let i=0;i<n;i++){
    confettiParts.push({
      x:Math.random()*cv.width,y:-10,
      vx:(Math.random()-0.5)*6,vy:Math.random()*4+2,
      w:rnd(6,14),h:rnd(4,8),
      color:CONF_COLORS[i%CONF_COLORS.length],
      rot:Math.random()*360,rv:(Math.random()-0.5)*8,
      life:1
    });
  }
  playSound('confetti');
  if(!confettiParts._anim){confettiParts._anim=true;animConfetti();}
}
function animConfetti(){
  const cv=document.getElementById('confettiCanvas');
  const ctx2=cv.getContext('2d');
  ctx2.clearRect(0,0,cv.width,cv.height);
  confettiParts=confettiParts.filter(p=>{
    p.x+=p.vx;p.y+=p.vy;p.vy+=0.12;p.rot+=p.rv;p.life-=0.012;
    if(p.life<=0||p.y>cv.height+20)return false;
    ctx2.save();ctx2.translate(p.x,p.y);ctx2.rotate(p.rot*Math.PI/180);
    ctx2.globalAlpha=p.life;ctx2.fillStyle=p.color;
    ctx2.fillRect(-p.w/2,-p.h/2,p.w,p.h);
    ctx2.restore();return true;
  });
  if(confettiParts.length>0)requestAnimationFrame(animConfetti);
  else{ctx2.clearRect(0,0,cv.width,cv.height);confettiParts._anim=false;}
}

// ================================================================
// SCREEN SHAKE
// ================================================================
function shakeScreen(){
  const el=document.querySelector('.screen.active .q-card')||document.querySelector('.screen.active');
  if(!el)return;
  el.classList.remove('shake');void el.offsetWidth;
  el.classList.add('shake');
  setTimeout(()=>el.classList.remove('shake'),400);
}

// ================================================================
// EDU GUIDE
// ================================================================
const EDU_PHRASES=[
  'Estás a ir muito bem! Continua! 💪',
  'Sabias que as abelhas sabem contar até 5? 🐝',
  'Cada pergunta certa traz-te mais perto do nível seguinte! ⭐',
  'Dica: usa o Escudo quando tiveres streak alta! 🛡️',
  'A Lua demora 27 dias a orbitar a Terra! 🌙',
  'Consegues chegar ao nível 10 em todos os jogos? 🏆',
  'Mais 3 acertos seguidos e ganhas Gems extra! 💎',
  'O teu cérebro tem 86 mil milhões de neurónios! 🧠',
  'Usa a Dica quando não tiveres a certeza! 🔍',
  'O português é falado por 260 milhões de pessoas! 🇵🇹',
  'Experimenta o Math Ninja — é o mais difícil! ⚔️',
  'A borboleta Monarca migra 4.500 km por ano! 🦋',
  'Freeze o tempo nos últimos segundos! ❄️',
  'Cada jogo tem 10 níveis para desbloquear! 🎮',
  'A Torre Eiffel cresce 15 cm no verão! 🗼',
];
let _eduIdx=0;
function updateEdu(){
  const phrases=[...EDU_PHRASES];
  // Add dynamic phrases based on state
  GAMES.forEach(g=>{const p=getGameProg(g.id);if(p.level>=5)phrases.push(g.emoji+' '+g.name+' nível '+p.level+'! Impressionante! 🔥');});
  const best=GAMES.reduce((a,b)=>getGameProg(a.id).level>getGameProg(b.id).level?a:b,GAMES[0]);
  phrases.push('O teu melhor jogo é '+best.emoji+' '+best.name+'! Nível '+getGameProg(best.id).level+'! ⭐');
  const el=document.getElementById('eduText');
  if(el)el.textContent=phrases[Math.floor(Math.random()*phrases.length)];
}

// ================================================================
// POWER-UPS (in-game)
// ================================================================
// state.powerups keys: hint, shield, freeze (replacing old 2x)
function updatePowerupBar(){
  const pu=state.powerups||{};
  const h=pu.hint||0,s=pu.shield||0,f=pu.freeze||0;
  const hb=document.getElementById('puHintBtn');
  const sb=document.getElementById('puShieldBtn');
  const fb=document.getElementById('puFreezeBtn');
  const bar=document.getElementById('gamePowerupBar');
  if(!bar)return;
  bar.style.display=(h+s+f>0)?'flex':'none';
  if(hb){document.getElementById('puHintCount').textContent=h;hb.disabled=(h<=0||CG.answered||CG.hintUsed);}
  if(sb){document.getElementById('puShieldCount').textContent=s;sb.disabled=(s<=0||CG.shieldActive);sb.classList.toggle('active-shield',!!CG.shieldActive);}
  if(fb){document.getElementById('puFreezeCount').textContent=f;fb.disabled=(f<=0||CG.freezeActive);fb.classList.toggle('active-freeze',!!CG.freezeActive);}
}

function usePowerup(type){
  playSound('click');
  if(type==='hint'){
    if((state.powerups.hint||0)<=0||CG.answered||CG.hintUsed)return;
    state.powerups.hint--;CG.hintUsed=true;
    // Remove one wrong option from current game screen
    const opts=document.querySelectorAll('#gameOptions .option-btn:not(.correct):not(.disabled)');
    const wrong=[...opts].filter(b=>b.textContent!==(CG.questions[CG.qIndex]?.c||CG.questions[CG.qIndex]?.correct));
    if(wrong.length>0){wrong[0].style.opacity='.2';wrong[0].disabled=true;}
    showToast('🔍 Uma opção errada removida!');
    saveState();updatePowerupBar();
  }else if(type==='shield'){
    if((state.powerups.shield||0)<=0||CG.shieldActive)return;
    state.powerups.shield--;CG.shieldActive=true;
    showToast('🛡️ Escudo ativo! Podes errar uma vez sem perder streak!');
    saveState();updatePowerupBar();
  }else if(type==='freeze'){
    if((state.powerups.freeze||0)<=0||CG.freezeActive)return;
    state.powerups.freeze--;CG.freezeActive=true;
    // Pause timer for 10s
    clearInterval(CG.timer);
    const tb=document.getElementById('gameTimerBadge');
    if(tb)tb.classList.add('frozen');
    showToast('❄️ Tempo congelado por 10 segundos!');
    saveState();updatePowerupBar();
    setTimeout(()=>{
      CG.freezeActive=false;
      if(tb)tb.classList.remove('frozen');
      // Restart timer from where it was
      CG.timer=setInterval(()=>{
        CG.timeLeft--;
        const tEl=document.getElementById('gameTimer');
        if(tEl)tEl.textContent=CG.timeLeft;
        const tb2=document.getElementById('gameTimerBadge');
        if(CG.timeLeft<=5&&tb2)tb2.classList.add('urgent');
        if(CG.timeLeft<=0){
          clearInterval(CG.timer);
          if(!CG.answered){
            CG.answered=true;CG.streak=0;state.totalPlayed++;saveState();
            const q=CG.questions[CG.qIndex];
            document.querySelectorAll('#gameOptions .option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===(q?.c||q?.correct))b.classList.add('correct');});
            const f=q?.f||q?.fact;if(f){document.getElementById('gameFactText').textContent=f;document.getElementById('gameFact').classList.add('show');}
            playSound('error');vibrate([100]);
            setTimeout(()=>{CG.qIndex++;renderAIQ();},2500);
          }
        }
      },1000);
      updatePowerupBar();
    },10000);
  }
}

function showScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  if(id==='dashboard'){buildAch();buildShop();updateHUD();updateEdu();}
  if(id==='gameScreen')setTimeout(updatePowerupBar,50);
}
function goBack(){playSound('click');clearInterval(CG.timer);showScreen('dashboard');}

// ================================================================
// GAMES CATALOGUE
// ================================================================
const GAMES=[
  {id:'geo',    name:'Geo-Flags',     emoji:'🏳️', color:'#7c3aed', ai:false},
  {id:'capital',name:'Capital Hunt',  emoji:'🗺️', color:'#06b6d4', ai:true},
  {id:'time',   name:'Time Machine',  emoji:'⏳', color:'#f59e0b', ai:true},
  {id:'eco',    name:'Eco-Tycoon',    emoji:'🌱', color:'#10b981', ai:true},
  {id:'math',   name:'Math Ninja',    emoji:'⚔️', color:'#ef4444', ai:false},
  {id:'code',   name:'Code Breaker',  emoji:'💻', color:'#6366f1', ai:true},
  {id:'vocab',  name:'Vocab Journey', emoji:'📚', color:'#ec4899', ai:true},
  {id:'art',    name:'Art Critic',    emoji:'🎨', color:'#f97316', ai:true},
  {id:'space',  name:'Space Explorer',emoji:'🚀', color:'#8b5cf6', ai:true},
  {id:'body',   name:'Human Body',    emoji:'🫀', color:'#dc2626', ai:true},
  {id:'music',  name:'Music Master',  emoji:'🎵', color:'#14b8a6', ai:true},
  {id:'invent', name:"Inventor's Lab",emoji:'💡', color:'#eab308', ai:true},
  {id:'crypto', name:'Crypto-Logic',  emoji:'🔐', color:'#64748b', ai:true},
  {id:'animal', name:'Animal Kingdom',emoji:'🦁', color:'#84cc16', ai:true},
  {id:'word',   name:'Word Scramble', emoji:'🔤', color:'#f43f5e', ai:true},
  {id:'fact',   name:'Fact or Fiction',emoji:'🤔',color:'#0ea5e9', ai:true},
  {id:'currency',name:'Currency Conv.',emoji:'💰',color:'#a3e635', ai:true},
  {id:'olympic',name:'Olympic Trivia',emoji:'🏅', color:'#fb923c', ai:true},
  {id:'lit',    name:'Literature',    emoji:'📖', color:'#c026d3', ai:true},
  {id:'logic',  name:'Logic Matrix',  emoji:'🧩', color:'#2dd4bf', ai:false},
  {id:'english',name:'English Quest', emoji:'🇬🇧', color:'#3b82f6', ai:true},
];
const ACHS=[
  {id:'first',  emoji:'🥇',name:'Primeira Vitória',   check:s=>s.totalCorrect>=1},
  {id:'streak5',emoji:'🔥',name:'Streak x5',           check:s=>(s.maxStreak||0)>=5},
  {id:'level3', emoji:'⭐',name:'Nível 3',              check:s=>s.globalLevel>=3},
  {id:'gems50', emoji:'💎',name:'50 Gems',              check:s=>s.gems>=50},
  {id:'explorer',emoji:'🗺️',name:'Explorador (5 jogos)',check:s=>(s.gamesPlayed||[]).length>=5},
  {id:'master', emoji:'🏆',name:'Mestre (10 jogos)',    check:s=>(s.gamesPlayed||[]).length>=10},
  {id:'curious',emoji:'🧪',name:'Curioso (30 jogadas)', check:s=>s.totalPlayed>=30},
  {id:'math',   emoji:'🔢',name:'Math Ninja (3 vitórias)',check:s=>(s.mathWins||0)>=3},
  {id:'allgames',emoji:'🌟',name:'Completo (21 jogos)', check:s=>(s.gamesPlayed||[]).length>=21},
];

function buildGameGrid(){
  const g=document.getElementById('gameGrid');g.innerHTML='';
  GAMES.forEach((gm,i)=>{
    const prog=getGameProg(gm.id);
    const lvl=prog.level||1;
    const xpCur=prog.xp||0;
    const xpMax=lvl<10?gameXPNeed(lvl):1;
    const pct=lvl<10?Math.min(100,xpCur/xpMax*100):100;
    const barFilled=Math.round(lvl/10*5);const stars='▰'.repeat(barFilled)+'▱'.repeat(5-barFilled);
    const c=document.createElement('div');c.className='game-card';
    c.innerHTML=`<span class="game-card-num">#${String(i+1).padStart(2,'0')}</span><span class="game-card-emoji">${gm.emoji}</span><div class="game-card-name">${gm.name}</div><div class="game-card-lvl">${stars} Nv.${lvl}</div><div class="game-card-progress"><div class="game-card-progress-fill" style="width:${pct}%;background:${gm.color}"></div></div><div class="glow" style="background:radial-gradient(circle at 50% 50%,${gm.color}30,transparent 70%)"></div>`;
    c.style.borderColor=gm.color+'55';
    c.addEventListener('click',()=>launchGame(gm.id));
    g.appendChild(c);
  });
}
function buildAch(){
  const r=document.getElementById('achRow');r.innerHTML='';
  ACHS.forEach(a=>{
    const e=a.check(state);
    if(e&&!state.achievements[a.id]){state.achievements[a.id]=true;saveState();}
    const c=document.createElement('div');c.className='badge-card'+(state.achievements[a.id]?' earned':'');
    c.innerHTML=`<span class="badge-icon">${a.emoji}</span><div class="badge-name">${a.name}</div>`;
    r.appendChild(c);
  });
}
function buildShop(){
  const items=[
    {id:'hint',  icon:'🔍',name:'Dica Extra',  desc:'Remove uma opção errada',cost:5},
    {id:'shield',icon:'🛡️',name:'Escudo',       desc:'Protege a streak 1x',    cost:8},
    {id:'freeze',icon:'❄️',name:'Congelar Tempo',desc:'Pausa 10 segundos',     cost:10},
  ];
  const r=document.getElementById('shopRow');r.innerHTML='';
  items.forEach(it=>{
    const owned=state.powerups[it.id]||0;
    const d=document.createElement('div');d.className='shop-item';
    d.innerHTML=`<span class="shop-icon">${it.icon}</span><div class="shop-name">${it.name}</div><div style="font-size:.6rem;color:var(--text2);margin-bottom:4px">${it.desc}</div><span class="shop-cost">💎${it.cost}</span><div class="shop-owned">Tens: ${owned}</div>`;
    d.addEventListener('click',()=>{
      playSound('click');
      if(state.gems<it.cost){showToast('💎 Gems insuficientes!');return;}
      state.gems-=it.cost;
      state.powerups[it.id]=(state.powerups[it.id]||0)+1;
      saveState();updateHUD();
      showToast(it.icon+' '+it.name+' comprado! (tens '+state.powerups[it.id]+')');
      buildShop(); // refresh counts
    });
    r.appendChild(d);
  });
}
function createStars(){const c=document.getElementById('stars');for(let i=0;i<80;i++){const s=document.createElement('div');s.className='star';const sz=Math.random()*2+1;s.style.cssText=`width:${sz}px;height:${sz}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--d:${2+Math.random()*4}s;animation-delay:${Math.random()*4}s`;c.appendChild(s);}}

// ================================================================
// SCORE & RESULT ENGINE
// ================================================================
function scoreAnswer(ok){
  state.totalPlayed++;
  if(ok){
    CG.correct++;CG.streak++;CG.maxStreak=Math.max(CG.maxStreak,CG.streak);state.totalCorrect++;
    let xp=CG.xpPerQ+(CG.streak>=3?10:0)+(CG.timeLeft>(CG.timeLimit*.6)?5:0);
    if(CG.double2x){xp*=2;CG.double2x=false;}
    CG.xpEarned+=xp;
    const gems=CG.streak>=3?2:0;CG.gemsEarned+=gems;
    showXP('+'+xp+'XP'+(CG.streak>=3?' 🔥':'')+(gems?' +'+gems+'💎':''));
    vibrate([15,0,15,0,30]);playSound('success');
    // Confetti on streak ≥5 or hard question
    if(CG.streak>=5||(CG.questions[CG.qIndex]&&(CG.questions[CG.qIndex].d===3||(CG.questions[CG.qIndex].d||1)===3)))launchConfetti(40);
  }else{
    // Shield absorbs one error
    if(CG.shieldActive){
      CG.shieldActive=false;
      showToast('🛡️ Escudo ativado! Streak protegida!');
      playSound('click');
    }else{
      CG.streak=0;vibrate([100]);playSound('error');shakeScreen();
    }
  }
  saveState();updatePowerupBar();
}
function showResult(){
  clearInterval(CG.timer);
  // Add game-specific XP → may level up that game
  const newGameLvl = addGameXP(CG.id, CG.xpEarned);
  // Add global XP (gems/badges)
  addGlobalXP(CG.xpEarned);
  addGems(CG.gemsEarned);
  if(CG.maxStreak>(state.maxStreak||0))state.maxStreak=CG.maxStreak;
  const k=CG.id+'Wins';if(CG.correct>=Math.floor(CG.total*.7)){state[k]=(state[k]||0)+1;}
  saveState();buildAch();buildGameGrid();
  const pct=CG.correct/CG.total;
  if(pct>=.7)launchConfetti(pct>=.9?120:60);
  let emoji='💪',title='Não desistas!';
  if(pct>=.9){emoji='🏆';title='PERFEITO!';}else if(pct>=.7){emoji='🎉';title='Excelente!';}else if(pct>=.5){emoji='👍';title='Muito Bem!';}else if(pct>=.3){emoji='😊';title='Bom trabalho!';}
  document.getElementById('resultEmoji').textContent=emoji;
  document.getElementById('resultTitle').textContent=title;
  const prog=getGameProg(CG.id);
  const xpBar = prog.level<10 ? ' · '+prog.xp+'/'+gameXPNeed(prog.level)+' XP p/ nível '+(prog.level+1) : ' · Nível Máximo! 🏆';
  document.getElementById('resultSub').textContent=CG.correct+'/'+CG.total+' certas · Nível '+prog.level+xpBar;
  document.getElementById('rsCorrect').textContent=CG.correct;
  document.getElementById('rsXP').textContent=CG.xpEarned;
  document.getElementById('rsGems').textContent=CG.gemsEarned;
  showScreen('resultScreen');
}
function playAgain(){if(CG.id)launchGame(CG.id);}

// ================================================================
// QUESTION BANK SYSTEM — per-game levels, no repeats per level
// ================================================================

// Difficulty tiers by game level:
// Game level 1 → only d:1
// Game level 2 → only d:1 (different pool — seen[] prevents repeats)
// Game level 3 → only d:2
// Game level 4 → only d:2 (new pool)
// Game level 5 → only d:3
function getDiffForGameLevel(lvl){
  if(lvl<=2) return 1;  // easy
  if(lvl<=6) return 2;  // medium (4 levels to exhaust medium pool)
  return 3;              // hard
}

function pickQuestions(gameId, n){
  const bank = QB && QB[gameId];
  if(!bank || bank.length===0) return null;

  const prog = getGameProg(gameId);
  const diff = getDiffForGameLevel(prog.level);

  // Pool = all questions of the right difficulty
  let pool = bank.filter(q => q.d === diff);
  if(pool.length < 4) pool = bank.slice(); // safety fallback

  // Remove already-seen questions (reset when pool exhausted)
  const seen = prog.seen || [];
  let unseen = pool.filter(q => !seen.includes(q.t||q.text));
  if(unseen.length < n){
    // Pool exhausted for this difficulty — reset seen for this diff
    prog.seen = (prog.seen||[]).filter(t => {
      const q = bank.find(b=>(b.t||b.text)===t);
      return q && q.d !== diff; // keep seen from other diffs
    });
    unseen = pool.slice();
    saveState();
  }

  const picked = shuffle(unseen).slice(0, n);
  // Mark as seen
  picked.forEach(q => {
    const key = q.t||q.text;
    if(!(prog.seen||[]).includes(key)){
      if(!prog.seen) prog.seen=[];
      prog.seen.push(key);
    }
  });
  saveState();
  return picked;
}

function showQLoading(title, gameLvl, onReady){
  const scr=document.getElementById('aiScreen');
  scr.classList.add('show');
  document.getElementById('aiErr').classList.remove('show');
  document.getElementById('aiOrb').textContent='🎲';
  document.getElementById('aiTitle').textContent=title;
  const diffLabel=['','Iniciante','Iniciante','Intermédio','Intermédio','Avançado'][gameLvl]||'';
  document.getElementById('aiSub').textContent='Nível '+gameLvl+' · '+diffLabel+' · A selecionar perguntas novas!';
  document.getElementById('aiBar').style.width='0%';
  document.getElementById('aiStep').textContent='A escolher...';
  let p=0;
  const t=setInterval(()=>{p+=25;document.getElementById('aiBar').style.width=p+'%';},80);
  setTimeout(()=>{
    clearInterval(t);
    document.getElementById('aiBar').style.width='100%';
    document.getElementById('aiStep').textContent='✅ Pronto!';
    setTimeout(()=>{scr.classList.remove('show');onReady();},200);
  },400);
}

// ================================================================
// LAUNCH DISPATCHER
// ================================================================
function launchGame(id){
  playSound('click');
  if(!state.gamesPlayed.includes(id))state.gamesPlayed.push(id);
  saveState();
  const map={
    geo:startGeo, math:startMath, logic:startLogic,
    time:startTime, eco:startEco, word:startWord, fact:startFact,
    capital:()=>startAIGame('capital','🗺️ Capital Hunt',18,22),
    code:()=>startAIGame('code','💻 Code Breaker',20,22),
    vocab:()=>startAIGame('vocab','📚 Vocab Journey',20,20),
    art:()=>startAIGame('art','🎨 Art Critic',20,20),
    space:()=>startAIGame('space','🚀 Space Explorer',18,22),
    body:()=>startAIGame('body','🫀 Human Body',20,20),
    music:()=>startAIGame('music','🎵 Music Master',20,20),
    invent:()=>startAIGame('invent',"💡 Inventor's Lab",20,22),
    crypto:()=>startAIGame('crypto','🔐 Crypto-Logic',22,20),
    animal:()=>startAIGame('animal','🦁 Animal Kingdom',18,20),
    currency:()=>startAIGame('currency','💰 Currency Conv.',20,22),
    olympic:()=>startAIGame('olympic','🏅 Olympic Trivia',18,20),
    lit:()=>startAIGame('lit','📖 Literature',20,20),
    english:()=>startAIGame('english','🇬🇧 English Quest',20,22),
  };
  if(map[id])map[id]();
}

// ================================================================
// GENERIC QUIZ ENGINE (QB-powered, per-game levels)
// ================================================================
function startAIGame(id, title, timeLimit, xpPerQ){
  const prog = getGameProg(id);
  showQLoading(title, prog.level, ()=>{
    const questions = pickQuestions(id, 10);
    if(!questions || questions.length < 4){
      showToast('⚠️ Banco de perguntas não encontrado para: '+id);
      goBack(); return;
    }
    CG={id,title,total:Math.min(10,questions.length),correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ,timeLimit,timeLeft:timeLimit,timer:null,answered:false,qIndex:0,gameLvl:prog.level,questions,hintUsed:false,shieldActive:false,freezeActive:false};
    document.getElementById('gameTitle').textContent=title;
    document.getElementById('gameLvlNum').textContent=prog.level;
    showScreen('gameScreen');
    renderAIQ();
  });
}

function renderAIQ(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;CG.timeLeft=CG.timeLimit;
  const q=CG.questions[CG.qIndex];
  document.getElementById('gameQNum').textContent=CG.qIndex+1;
  document.getElementById('gameRoundBadge').textContent='Q '+(CG.qIndex+1);
  document.getElementById('gameStreak').textContent=CG.streak;
  document.getElementById('gameXP').textContent=CG.xpEarned;
  document.getElementById('gameProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('gameTimerBadge').classList.remove('urgent','frozen');
  CG.hintUsed=false;
  updatePowerupBar();
  document.getElementById('gameVisual').textContent=q.v||q.visual||'❓';
  document.getElementById('gameText').textContent=q.t||q.text;
  document.getElementById('gameSub').textContent=q.sub||'';
  document.getElementById('gameFact').classList.remove('show');
  // For FoF type, use only two options
  const opts=q.isBoolean?shuffle(['Verdade','Falso']):shuffle((q.o||q.options||[]).slice());
  const grid=document.getElementById('gameOptions');
  grid.innerHTML='';
  grid.style.gridTemplateColumns=q.isBoolean?'1fr 1fr':'1fr 1fr';
  opts.forEach(opt=>{
    const btn=document.createElement('button');btn.className='option-btn';btn.textContent=opt;
    btn.addEventListener('click',()=>{
      if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
      const ok=opt===(q.c||q.correct);
      grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===(q.c||q.correct))b.classList.add('correct');});
      if(!ok)btn.classList.add('wrong');
      scoreAnswer(ok);
      document.getElementById('gameStreak').textContent=CG.streak;
      const qfact=q.f||q.fact; if(qfact){document.getElementById('gameFactText').textContent=qfact;document.getElementById('gameFact').classList.add('show');}
      setTimeout(()=>{CG.qIndex++;renderAIQ();},2500);
    });
    grid.appendChild(btn);
  });
  document.getElementById('gameTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{
    CG.timeLeft--;
    document.getElementById('gameTimer').textContent=CG.timeLeft;
    if(CG.timeLeft<=5)document.getElementById('gameTimerBadge').classList.add('urgent');
    if(CG.timeLeft<=0){
      clearInterval(CG.timer);
      if(!CG.answered){
        CG.answered=true;CG.streak=0;state.totalPlayed++;saveState();
        const tq=CG.questions[CG.qIndex];grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===(tq?.c||tq?.correct))b.classList.add('correct');});
        const tqf=tq?.f||tq?.fact;if(tqf){document.getElementById('gameFactText').textContent=tqf;document.getElementById('gameFact').classList.add('show');}
        snd('wrong');vibrate([100]);
        setTimeout(()=>{CG.qIndex++;renderAIQ();},2500);
      }
    }
  },1000);
}

// ================================================================
// FALLBACK QUESTION BANKS (used when AI is unavailable)
// ================================================================
const FALLBACK={
  capital:[
    {visual:'🇵🇹',text:'Qual é a capital de Portugal?',options:['Porto','Lisboa','Coimbra','Braga'],correct:'Lisboa',fact:'Lisboa é uma das cidades mais antigas da Europa, com mais de 3000 anos!'},
    {visual:'🇫🇷',text:'Qual é a capital da França?',options:['Lyon','Marselha','Paris','Nice'],correct:'Paris',fact:'Paris tem 130 museus e é visitada por 30 milhões de turistas por ano!'},
    {visual:'🇩🇪',text:'Qual é a capital da Alemanha?',options:['Munique','Berlim','Hamburgo','Frankfurt'],correct:'Berlim',fact:'O Muro de Berlim dividiu a cidade por 28 anos!'},
    {visual:'🇯🇵',text:'Qual é a capital do Japão?',options:['Osaka','Quioto','Tóquio','Hiroshima'],correct:'Tóquio',fact:'Tóquio é a maior metrópole do mundo com 37 milhões de habitantes!'},
    {visual:'🇧🇷',text:'Qual é a capital do Brasil?',options:['São Paulo','Rio de Janeiro','Brasília','Salvador'],correct:'Brasília',fact:'Brasília foi construída em apenas 4 anos!'},
    {visual:'🇦🇺',text:'Qual é a capital da Austrália?',options:['Sydney','Melbourne','Brisbane','Camberra'],correct:'Camberra',fact:'Camberra foi construída de raiz para ser capital, inaugurada em 1927!'},
    {visual:'🇷🇺',text:'Qual é a capital da Rússia?',options:['São Petersburgo','Moscovo','Novosibirsk','Cazã'],correct:'Moscovo',fact:'O Kremlin de Moscovo é um dos complexos históricos mais famosos do mundo!'},
    {visual:'🇨🇦',text:'Qual é a capital do Canadá?',options:['Toronto','Vancouver','Montreal','Ottawa'],correct:'Ottawa',fact:'Ottawa foi escolhida por ser uma cidade de compromisso entre Toronto e Montreal!'},
    {visual:'🇮🇳',text:'Qual é a capital da Índia?',options:['Mumbai','Calcutá','Chennai','Nova Deli'],correct:'Nova Deli',fact:'Nova Deli tem 32 milhões de habitantes!'},
    {visual:'🇪🇬',text:'Qual é a capital do Egito?',options:['Alexandria','Luxor','Assuão','Cairo'],correct:'Cairo',fact:'O Cairo é a maior cidade de África!'},
  ],
  english:[
    {visual:'🇬🇧',text:'O que significa "serendipity" em português?',options:['Tristeza','Descoberta feliz por acaso','Pôr do sol belo','Grande força'],correct:'Descoberta feliz por acaso',fact:'"Serendipity" foi inventada pelo escritor Horace Walpole em 1754!'},
    {visual:'🇬🇧',text:'Como se diz "borboleta" em inglês?',options:['Dragonfly','Firefly','Butterfly','Ladybird'],correct:'Butterfly',fact:'"Butterfly" literalmente significa "mosca de manteiga". A origem do nome é misteriosa!'},
    {visual:'🇬🇧',text:'Complete: "She ___ to school every day."',options:['go','goes','going','went'],correct:'goes',fact:'"Goes" com 3ª pessoa singular (he/she/it) — sempre adiciona "s" ou "es"!'},
    {visual:'🇬🇧',text:'O que significa "ubiquitous"?',options:['Raro','Presente em todo o lado','Muito antigo','Extremamente alto'],correct:'Presente em todo o lado',fact:'"Ubiquitous" do latim "ubique" — em todo o lado!'},
    {visual:'🇬🇧',text:'Como se diz "conhecimento" em inglês?',options:['Knolledge','Knowledge','Knowlege','Knowlegde'],correct:'Knowledge',fact:'O "k" em "knowledge" é mudo! Pronuncia-se "nolij". O inglês tem muitas letras mudas!'},
    {visual:'🇬🇧',text:'O que significa "resilience"?',options:['Desistir','Recuperar de dificuldades','Ser tímido','Grande velocidade'],correct:'Recuperar de dificuldades',fact:'"Resilience" do latim "resilire" = saltar para trás. Como uma bola de borracha!'},
    {visual:'🇬🇧',text:'Como se diz "liberdade" em inglês?',options:['Freedom','Freelance','Freeway','Freeware'],correct:'Freedom',fact:'"Freedom" vs "Liberty" — quase sinónimos, mas "Liberty" é mais formal e político!'},
    {visual:'🇬🇧',text:'Complete: "I have been studying ___ two hours."',options:['since','during','for','while'],correct:'for',fact:'"For" indica duração. "Since" indica ponto de início. "For 2 hours" vs "since 3pm"!'},
    {visual:'🇬🇧',text:'O que é um "oxymoron"?',options:['Um animal','Duas palavras contraditórias juntas','Uma frase longa','Um tipo de poema'],correct:'Duas palavras contraditórias juntas',fact:'"Deafening silence" e "bittersweet" são oxymorons — contraditórios mas com significado!'},
    {visual:'🇬🇧',text:'Como se diz "sonho" em inglês (ambos os sentidos)?',options:['Nap','Dream','Sleep','Vision'],correct:'Dream',fact:'"Dream" = sonho durante o sono E aspiração. "I have a dream" — Martin Luther King!'},
  ],
  code:[
    {visual:'💻',text:'O que significa "HTML"?',options:['HyperText Markup Language','High Tech Modern Language','Hyper Transfer Markup Link','Home Tool Markup Language'],correct:'HyperText Markup Language',fact:'HTML foi inventado por Tim Berners-Lee em 1991!'},
    {visual:'🔢',text:'Quantos bits tem 1 byte?',options:['4','16','8','2'],correct:'8',fact:'1 byte = 8 bits. O bit é o valor mais básico da computação!'},
    {visual:'🖥️',text:'O que significa "CPU"?',options:['Central Processing Unit','Computer Power Unit','Core Program Utility','Central Power Usage'],correct:'Central Processing Unit',fact:'A CPU é o "cérebro" do computador!'},
    {visual:'🌐',text:'O que é "WiFi"?',options:['Wireless Fidelity','Wide Field Internet','Wireless File Interface','World Fiber Internet'],correct:'Wireless Fidelity',fact:'O WiFi usa ondas de rádio para transmitir dados sem fios!'},
    {visual:'🔢',text:'Qual é o número 10 em binário?',options:['0101','1100','1010','1000'],correct:'1010',fact:'Em binário: 8+2=10, portanto 1010!'},
    {visual:'💻',text:'O que é o "Python"?',options:['Um vírus','Uma linguagem de programação','Um sistema operativo','Um processador'],correct:'Uma linguagem de programação',fact:'Python foi criado em 1991 e hoje é uma das linguagens mais populares!'},
    {visual:'🖥️',text:'O que é "RAM"?',options:['Read Access Memory','Random Access Memory','Rapid Application Memory','Remote Access Module'],correct:'Random Access Memory',fact:'A RAM é memória temporária — quando desligas, perde tudo!'},
    {visual:'💡',text:'O que é um "algoritmo"?',options:['Um vírus','Uma sequência de instruções','Uma linguagem','Um processador'],correct:'Uma sequência de instruções',fact:'Até uma receita de culinária é um algoritmo!'},
    {visual:'🔐',text:'O que significa "URL"?',options:['Universal Resource Locator','Unified Register Link','Universal Remote Location','User Resource Link'],correct:'Universal Resource Locator',fact:'O URL é o endereço de uma página na internet!'},
    {visual:'🤖',text:'O que significa "IA"?',options:['Internet Automatizada','Inteligência Artificial','Interface Avançada','Integração Algorítmica'],correct:'Inteligência Artificial',fact:'A IA simula inteligência humana em máquinas!'},
  ],
};
// Generic fallback for games without specific fallback
function getFallback(id){
  return FALLBACK[id]||null;
}
function startAIGameFallback(id,title,timeLimit,xpPerQ,diff){
  const qs=shuffle(getFallback(id));
  CG={id,title,total:Math.min(10,qs.length),correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ,timeLimit,timeLeft:timeLimit,timer:null,answered:false,qIndex:0,difficulty:diff,questions:qs};
  document.getElementById('gameTitle').textContent=title;
  document.getElementById('gameLvlNum').textContent=diff;
  showScreen('gameScreen');
  renderAIQ();
}

// ================================================================
// SVG FLAGS + GEO GAME
// ================================================================
function mkSVG(inner){return'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60">'+inner+'</svg>';}
function r(x,y,w,h,f){return'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+f+'"/>';}
function cc(x,y,rad,f){return'<circle cx="'+x+'" cy="'+y+'" r="'+rad+'" fill="'+f+'"/>';}
function sv(cols,dir){var s='',n=cols.length;if(dir==='v'){var w=90/n;cols.forEach((f,i)=>{s+=r(i*w,0,w,60,f);});}else{var h=60/n;cols.forEach((f,i)=>{s+=r(0,i*h,90,h,f);});}return s;}
const FLAGS={
  'Portugal':mkSVG(r(0,0,30,60,'#006600')+r(30,0,60,60,'#FF0000')+cc(30,30,12,'#FFD700')+cc(30,30,8,'#FFF')+cc(30,30,5,'#003399')),
  'Brasil':mkSVG(r(0,0,90,60,'#009C3B')+'<polygon points="45,5 85,30 45,55 5,30" fill="#FFDF00"/>'+cc(45,30,13,'#003087')+r(32,26,26,8,'#003087')+'<text x="45" y="33" text-anchor="middle" font-size="4" fill="white">ORDEM E PROGRESSO</text>'),
  'França':mkSVG(sv(['#002395','#FFF','#ED2939'],'v')),
  'Alemanha':mkSVG(sv(['#000','#DD0000','#FFCE00'],'h')),
  'Japão':mkSVG(r(0,0,90,60,'#FFF')+cc(45,30,18,'#BC002D')),
  'Itália':mkSVG(sv(['#009246','#FFF','#CE2B37'],'v')),
  'EUA':mkSVG((()=>{let s='';for(let j=0;j<13;j++)s+=r(0,j*(60/13),90,60/13,j%2?'#FFF':'#B22234');s+=r(0,0,36,32,'#3C3B6E');for(let i=0;i<25;i++)s+=cc(3+(i%6)*6,4+Math.floor(i/6)*6,1.5,'#FFF');return s;})()),
  'Reino Unido':mkSVG(r(0,0,90,60,'#012169')+'<line x1="0" y1="0" x2="90" y2="60" stroke="white" stroke-width="10"/><line x1="90" y1="0" x2="0" y2="60" stroke="white" stroke-width="10"/><line x1="0" y1="0" x2="90" y2="60" stroke="#C8102E" stroke-width="6"/><line x1="90" y1="0" x2="0" y2="60" stroke="#C8102E" stroke-width="6"/>'+r(38,0,14,60,'#FFF')+r(0,24,90,12,'#FFF')+r(40,0,10,60,'#C8102E')+r(0,26,90,8,'#C8102E')),
  'Noruega':mkSVG(r(0,0,90,60,'#EF2B2D')+r(0,24,90,12,'#FFF')+r(22,0,12,60,'#FFF')+r(0,26,90,8,'#002868')+r(24,0,8,60,'#002868')),
  'Austrália':mkSVG(r(0,0,90,60,'#00008B')+r(0,0,45,30,'#012169')+'<line x1="0" y1="0" x2="45" y2="30" stroke="white" stroke-width="6"/><line x1="45" y1="0" x2="0" y2="30" stroke="white" stroke-width="6"/>'+r(19,0,7,30,'#FFF')+r(0,12,45,6,'#FFF')+r(20,0,5,30,'#C8102E')+r(0,13,45,4,'#C8102E')+cc(67,42,5,'#FFF')),
  'África do Sul':mkSVG(r(0,0,90,60,'#007A4D')+r(0,20,90,20,'#FFB612')+r(0,22,90,16,'#FFF')+r(0,24,90,12,'#DE3831')+'<polygon points="0,0 40,30 0,60" fill="#000"/><polygon points="0,5 34,30 0,55" fill="#007A4D"/><polygon points="0,20 22,30 0,40" fill="#FFB612"/>'),
  'Argentina':mkSVG(sv(['#74ACDF','#FFF','#74ACDF'],'h')+cc(45,30,10,'#F6B40E')+cc(45,30,6,'#F6B40E')+cc(45,30,3,'#843511')),
  'Índia':mkSVG(sv(['#FF9933','#FFF','#138808'],'h')+cc(45,30,9,'#000080')+cc(45,30,7,'#FFF')+cc(45,30,1.5,'#000080')),
  'México':mkSVG(sv(['#006847','#FFF','#CE1126'],'v')+'<text x="45" y="36" text-anchor="middle" font-size="14">🦅</text>'),
  'China':mkSVG(r(0,0,90,60,'#DE2910')+'<text x="12" y="18" font-size="16" fill="#FFDE00">★</text><text x="30" y="10" font-size="8" fill="#FFDE00">★</text><text x="36" y="18" font-size="8" fill="#FFDE00">★</text><text x="34" y="27" font-size="8" fill="#FFDE00">★</text><text x="28" y="32" font-size="8" fill="#FFDE00">★</text>'),
  'Islândia':mkSVG(r(0,0,90,60,'#003897')+r(0,22,90,16,'#FFF')+r(28,0,16,60,'#FFF')+r(0,25,90,10,'#D72828')+r(31,0,10,60,'#D72828')),
  'Suécia':mkSVG(r(0,0,90,60,'#006AA7')+r(0,24,90,12,'#FECC02')+r(26,0,12,60,'#FECC02')),
  'Grécia':mkSVG((()=>{let s='';for(let i=0;i<9;i++)s+=r(0,i*(60/9),90,60/9,i%2?'#FFF':'#0D5EAF');s+=r(0,0,36,36,'#0D5EAF')+r(14,0,8,36,'#FFF')+r(0,14,36,8,'#FFF');return s;})()),
  'Polónia':mkSVG(sv(['#FFF','#DC143C'],'h')),
  'Bélgica':mkSVG(sv(['#000','#FFD700','#F00'],'v')),
  'Suíça':mkSVG(r(0,0,90,60,'#FF0000')+r(38,15,14,30,'#FFF')+r(28,23,34,14,'#FFF')),
  'Turquia':mkSVG(r(0,0,90,60,'#E30A17')+cc(38,30,16,'#FFF')+cc(43,30,12,'#E30A17')+'<text x="58" y="25" font-size="10" fill="white">☽</text>'),
  'Coreia do Sul':mkSVG(r(0,0,90,60,'#FFF')+'<circle cx="45" cy="30" r="16" fill="#CD2E3A"/><path d="M45 14 A16 16 0 0 1 45 46 A8 8 0 0 1 45 30 A8 8 0 0 0 45 14" fill="#003478"/>'),
};

const GEO_DATA=[
  {flag:'Portugal',country:'Portugal',opts:['Portugal','Espanha','Brasil','França'],fact:'Portugal tem a mais antiga fronteira terrestre do mundo, definida em 1143!'},
  {flag:'Brasil',country:'Brasil',opts:['Brasil','Argentina','México','Chile'],fact:'O Brasil tem a maior floresta tropical do mundo!'},
  {flag:'França',country:'França',opts:['França','Bélgica','Itália','Espanha'],fact:'A Torre Eiffel foi construída em 1889 e mede 330 metros!'},
  {flag:'Alemanha',country:'Alemanha',opts:['Alemanha','Áustria','Suíça','Holanda'],fact:'A Alemanha tem mais de 1.500 tipos diferentes de cerveja!'},
  {flag:'Japão',country:'Japão',opts:['Japão','China','Coreia','Vietname'],fact:'O Japão tem mais de 6.800 ilhas habitadas!'},
  {flag:'Itália',country:'Itália',opts:['Itália','Grécia','Croácia','Sérvia'],fact:'A Itália tem mais sítios UNESCO do que qualquer outro país!'},
  {flag:'EUA',country:'EUA',opts:['EUA','Canadá','Austrália','Reino Unido'],fact:'Os EUA têm 50 estados e 6 fusos horários!'},
  {flag:'Reino Unido',country:'Reino Unido',opts:['Reino Unido','Irlanda','Noruega','Dinamarca'],fact:'O Reino Unido inventou o comboio a vapor, a TV e a WWW!'},
  {flag:'Noruega',country:'Noruega',opts:['Noruega','Suécia','Finlândia','Dinamarca'],fact:'A Noruega tem sol a meia-noite no verão nas zonas do norte!'},
  {flag:'Austrália',country:'Austrália',opts:['Austrália','Nova Zelândia','Fiji','Canadá'],fact:'A Austrália é o único país que ocupa um continente inteiro!'},
  {flag:'África do Sul',country:'África do Sul',opts:['África do Sul','Namíbia','Zimbabué','Botswana'],fact:'A África do Sul tem 11 línguas oficiais!'},
  {flag:'Argentina',country:'Argentina',opts:['Argentina','Uruguai','Chile','Paraguay'],fact:'A Argentina é o 8.º maior país do mundo!'},
  {flag:'Índia',country:'Índia',opts:['Índia','Paquistão','Bangladesh','Sri Lanka'],fact:'A Índia tem mais de 19.500 línguas e dialetos falados!'},
  {flag:'México',country:'México',opts:['México','Guatemala','Honduras','El Salvador'],fact:'O México é o lar da civilização Azteca!'},
  {flag:'China',country:'China',opts:['China','Mongólia','Taiwan','Vietname'],fact:'A Grande Muralha tem mais de 21.000 km de comprimento!'},
  {flag:'Islândia',country:'Islândia',opts:['Islândia','Gronelândia','Noruega','Irlanda'],fact:'A Islândia tem a democracia parlamentar mais antiga do mundo, desde 930!'},
  {flag:'Suécia',country:'Suécia',opts:['Suécia','Noruega','Finlândia','Dinamarca'],fact:'A Suécia tem mais de 220.000 ilhas!'},
  {flag:'Grécia',country:'Grécia',opts:['Grécia','Chipre','Bulgária','Croácia'],fact:'A Grécia tem mais de 2.000 ilhas, das quais 227 são habitadas!'},
  {flag:'Polónia',country:'Polónia',opts:['Polónia','Hungria','República Checa','Eslováquia'],fact:'A Polónia é o 9.º maior país da Europa!'},
  {flag:'Bélgica',country:'Bélgica',opts:['Bélgica','Holanda','Luxemburgo','França'],fact:'A Bélgica inventou as batatas fritas, não a França!'},
  {flag:'Suíça',country:'Suíça',opts:['Suíça','Áustria','Liechtenstein','Alemanha'],fact:'A Suíça tem 4 línguas oficiais: alemão, francês, italiano e romanche!'},
  {flag:'Turquia',country:'Turquia',opts:['Turquia','Irão','Iraque','Síria'],fact:'A Turquia é o único país que fica em dois continentes: Europa e Ásia!'},
  {flag:'Coreia do Sul',country:'Coreia do Sul',opts:['Coreia do Sul','Japão','China','Taiwán'],fact:'A Coreia do Sul tem a internet mais rápida do mundo!'},
];

function startGeo(){
  CG={id:'geo',total:10,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:22,timeLimit:15,timeLeft:15,timer:null,answered:false,qIndex:0,questions:shuffle(GEO_DATA).slice(0,10)};
  showScreen('geoScreen');renderGeo();
}
function renderGeo(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;CG.timeLeft=CG.timeLimit;
  const q=CG.questions[CG.qIndex];
  ['geoQNum','geoRound'].forEach(id=>document.getElementById(id).textContent=CG.qIndex+1);
  document.getElementById('geoStreak').textContent=CG.streak;
  document.getElementById('geoXP').textContent=CG.xpEarned;
  document.getElementById('geoProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('geoTimerBadge').classList.remove('urgent');
  document.getElementById('flagWrap').innerHTML=FLAGS[q.flag]||'🏳️';
  document.getElementById('geoFact').classList.remove('show');
  const opts=shuffle(q.opts.slice()),grid=document.getElementById('geoOptions');grid.innerHTML='';
  opts.forEach(opt=>{
    const btn=document.createElement('button');btn.className='option-btn';btn.textContent=opt;
    btn.addEventListener('click',()=>{
      if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
      const ok=opt===q.country;
      grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===q.country)b.classList.add('correct');});
      if(!ok)btn.classList.add('wrong');
      scoreAnswer(ok);
      document.getElementById('geoStreak').textContent=CG.streak;
      document.getElementById('geoFactText').textContent=q.fact;
      document.getElementById('geoFact').classList.add('show');
      setTimeout(()=>{CG.qIndex++;renderGeo();},2500);
    });
    grid.appendChild(btn);
  });
  document.getElementById('geoTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('geoTimer').textContent=CG.timeLeft;if(CG.timeLeft<=4)document.getElementById('geoTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered){CG.answered=true;CG.streak=0;state.totalPlayed++;saveState();grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===q.country)b.classList.add('correct');});document.getElementById('geoFactText').textContent=q.fact;document.getElementById('geoFact').classList.add('show');snd('wrong');vibrate([100]);setTimeout(()=>{CG.qIndex++;renderGeo();},2500);}}},1000);
}

// ================================================================
// MATH NINJA (procedural - infinite variety)
// ================================================================
function startMath(){
  CG={id:'math',total:10,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:25,timeLimit:12,timeLeft:12,timer:null,answered:false,qIndex:0,lives:3};
  showScreen('mathScreen');
  const _mathProg=getGameProg('math');
  document.getElementById('mathLvlNum').textContent=_mathProg.level;
  renderMath();
}
function genMathQ(){
  const lvl=getGameProg('math').level*2+1; // scale math difficulty by game level
  const types=lvl<=2?['add','sub']:lvl<=4?['add','sub','mul']:lvl<=6?['sub','mul','div','sq']:['mul','div','sq','comb','perc'];
  const t=types[rnd(0,types.length-1)];
  let eq,ans;
  if(t==='add'){const a=rnd(lvl*5,lvl*20),b=rnd(lvl*5,lvl*20);eq=a+' + '+b+' = ?';ans=a+b;}
  else if(t==='sub'){const a=rnd(lvl*10,lvl*25),b=rnd(2,a);eq=a+' − '+b+' = ?';ans=a-b;}
  else if(t==='mul'){const a=rnd(2,lvl*3+2),b=rnd(2,lvl*3+2);eq=a+' × '+b+' = ?';ans=a*b;}
  else if(t==='div'){const b=rnd(2,lvl+4),c=rnd(2,lvl+6);eq=(b*c)+' ÷ '+b+' = ?';ans=c;}
  else if(t==='sq'){const a=rnd(2,lvl+4);eq=a+'² = ?';ans=a*a;}
  else if(t==='comb'){const a=rnd(2,8),b=rnd(2,8),c=rnd(1,5);eq=a+' × '+b+' + '+c+' = ?';ans=a*b+c;}
  else{const pct=[10,20,25,50][rnd(0,3)],base=rnd(2,10)*10;eq=pct+'% de '+base+' = ?';ans=base*pct/100;}
  const opts=new Set([ans]);while(opts.size<4){const v=ans+(rnd(-5,5)||1);if(v>0)opts.add(v);}
  return{eq,ans:String(ans),opts:shuffle([...opts].map(String))};
}
function renderMath(){
  if(CG.qIndex>=CG.total||CG.lives<=0){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;CG.timeLeft=CG.timeLimit;
  const q=genMathQ();
  const lvEl=document.getElementById('mathLives');lvEl.innerHTML='';
  for(let i=0;i<3;i++){const h=document.createElement('span');h.className='life'+(i>=CG.lives?' lost':'');h.textContent=i<CG.lives?'❤️':'🖤';lvEl.appendChild(h);}
  document.getElementById('mathQNum').textContent=CG.qIndex+1;
  document.getElementById('mathStreak').textContent=CG.streak;
  document.getElementById('mathXP').textContent=CG.xpEarned;
  document.getElementById('mathProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('mathTimerBadge').classList.remove('urgent');
  document.getElementById('mathEq').textContent=q.eq;
  document.getElementById('mathFact').classList.remove('show');
  const grid=document.getElementById('mathOptions');grid.innerHTML='';
  q.opts.forEach(opt=>{
    const btn=document.createElement('button');btn.className='option-btn';btn.textContent=opt;
    btn.addEventListener('click',()=>{
      if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
      const ok=opt===q.ans;
      grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===q.ans)b.classList.add('correct');});
      if(!ok){btn.classList.add('wrong');CG.lives--;CG.streak=0;vibrate([80]);snd('wrong');}else{scoreAnswer(true);document.getElementById('mathStreak').textContent=CG.streak;}
      document.getElementById('mathFactText').textContent=ok?'⚔️ Ninja! '+q.eq.replace('?',q.ans):'A resposta era: '+q.ans;
      document.getElementById('mathFact').classList.add('show');
      setTimeout(()=>{CG.qIndex++;renderMath();},3000);
    });
    grid.appendChild(btn);
  });
  document.getElementById('mathTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('mathTimer').textContent=CG.timeLeft;if(CG.timeLeft<=3)document.getElementById('mathTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered){CG.answered=true;CG.lives--;CG.streak=0;grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===q.ans)b.classList.add('correct');});state.totalPlayed++;saveState();document.getElementById('mathFactText').textContent='⏱️ Tempo! Era: '+q.ans;document.getElementById('mathFact').classList.add('show');snd('wrong');vibrate([100]);setTimeout(()=>{CG.qIndex++;renderMath();},3000);}}},1000);
}

// ================================================================
// LOGIC MATRIX (procedural - infinite variety)
// ================================================================
function genLogicQ(){
  const lvl=(getGameProg&&getGameProg('logic'))?getGameProg('logic').level:1;
  const types=lvl<=2?['arith','geo2']:lvl<=5?['arith','geo','fib','sq']:['arith','geo','fib','sq','prime','comb'];
  const t=types[rnd(0,types.length-1)];
  let seq,answer,opts,fact;
  if(t==='arith'){
    const start=rnd(1,10),step=rnd(2,lvl+3);
    seq=[start,start+step,start+2*step,start+3*step];answer=start+4*step;
    fact='Progressão aritmética com razão +'+step+'. '+seq[3]+' + '+step+' = '+answer+'!';
  }else if(t==='geo2'){
    const start=rnd(1,5),ratio=2;
    seq=[start,start*ratio,start*ratio*ratio,start*ratio*ratio*ratio];answer=seq[3]*ratio;
    fact='Progressão geométrica de razão 2. Cada número dobra!';
  }else if(t==='geo'){
    const start=rnd(1,4),ratio=rnd(2,4);
    seq=[start,start*ratio,start*ratio**2,start*ratio**3];answer=seq[3]*ratio;
    fact='Progressão geométrica de razão '+ratio+'. Multiplica cada termo por '+ratio+'!';
  }else if(t==='fib'){
    const a=rnd(1,5),b=rnd(a+1,a+5);
    seq=[a,b,a+b,a+2*b];answer=2*a+3*b;
    fact='Sequência tipo Fibonacci! Cada número é a soma dos dois anteriores.';
  }else if(t==='sq'){
    const start=rnd(1,lvl);
    seq=[start**2,(start+1)**2,(start+2)**2,(start+3)**2];answer=(start+4)**2;
    fact='Quadrados perfeitos! '+String(start+4)+'² = '+answer+'!';
  }else if(t==='prime'){
    const primes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47];
    const si=rnd(0,primes.length-5);
    seq=primes.slice(si,si+4);answer=primes[si+4];
    fact='Números primos! Divisíveis apenas por 1 e por si mesmos.';
  }else{
    const a=rnd(1,5),b=rnd(2,6);
    seq=[a*1+b,a*2+b,a*3+b,a*4+b];answer=a*5+b;
    fact='Padrão: f(n) = '+a+'×n + '+b+'. Para n=5: '+a+'×5 + '+b+' = '+answer+'!';
  }
  const decoys=new Set([answer]);while(decoys.size<4){const v=answer+(rnd(-5,5)||1);if(v>0)decoys.add(v);}
  return{seq:[...seq.map(String),'?'],answer:String(answer),opts:shuffle([...decoys].map(String)),fact};
}
function startLogic(){
  CG={id:'logic',total:10,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:25,timeLimit:25,timeLeft:25,timer:null,answered:false,qIndex:0};
  showScreen('logicScreen');
  document.getElementById('logicLvlNum').textContent=state.level;
  renderLogic();
}
function renderLogic(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;CG.timeLeft=CG.timeLimit;
  const q=genLogicQ();
  document.getElementById('logicQNum').textContent=CG.qIndex+1;
  document.getElementById('logicStreak').textContent=CG.streak;
  document.getElementById('logicXP').textContent=CG.xpEarned;
  document.getElementById('logicProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('logicTimerBadge').classList.remove('urgent');
  document.getElementById('logicFact').classList.remove('show');
  const seqEl=document.getElementById('logicSeq');seqEl.innerHTML='';
  q.seq.forEach((v,i)=>{
    const cell=document.createElement('div');cell.className='logic-cell'+(v==='?'?' hl':'');
    cell.textContent=v;seqEl.appendChild(cell);
    if(i<q.seq.length-1){const arr=document.createElement('span');arr.textContent='→';arr.style.cssText='color:var(--text2);font-size:.9rem;';seqEl.appendChild(arr);}
  });
  const grid=document.getElementById('logicOptions');grid.innerHTML='';
  q.opts.forEach(opt=>{
    const btn=document.createElement('button');btn.className='option-btn';btn.textContent=opt;
    btn.addEventListener('click',()=>{
      if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
      const ok=opt===q.answer;
      grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===q.answer)b.classList.add('correct');});
      if(!ok)btn.classList.add('wrong');
      scoreAnswer(ok);
      document.getElementById('logicStreak').textContent=CG.streak;
      document.getElementById('logicFactText').textContent=q.fact;
      document.getElementById('logicFact').classList.add('show');
      setTimeout(()=>{CG.qIndex++;renderLogic();},2500);
    });
    grid.appendChild(btn);
  });
  document.getElementById('logicTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('logicTimer').textContent=CG.timeLeft;if(CG.timeLeft<=6)document.getElementById('logicTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered){CG.answered=true;CG.streak=0;state.totalPlayed++;saveState();grid.querySelectorAll('.option-btn').forEach(b=>{b.classList.add('disabled');if(b.textContent===q.answer)b.classList.add('correct');});document.getElementById('logicFactText').textContent=q.fact;document.getElementById('logicFact').classList.add('show');snd('wrong');vibrate([100]);setTimeout(()=>{CG.qIndex++;renderLogic();},2500);}}},1000);
}

// ================================================================
// WORD SCRAMBLE (AI-powered)
// ================================================================
let wordAns=[],wordTilesData=[];
// Reuse code prompt but parse as word questions
function startWordWithAI(){
  const _p=getGameProg('word');
  showQLoading('🔤 Word Scramble', _p.level, ()=>startWordFallback(_p.level));
}
const WORD_FALLBACK=[
  {word:'FOTOSSÍNTESE',hint:'Processo das plantas para obter energia ☀️',fact:'Converte CO₂ + luz + água em glucose e oxigénio!'},
  {word:'GRAVIDADE',hint:'Força que nos mantém no chão 🌍',fact:'Newton descreveu a gravidade em 1687 ao ver uma maçã cair!'},
  {word:'MOLÉCULA',hint:'Pequena partícula de matéria ⚛️',fact:'Uma molécula de água (H₂O) tem apenas 3 átomos!'},
  {word:'ECOSISTEMA',hint:'Conjunto de seres vivos e ambiente 🌿',fact:'Um ecosistema pode ter milhares de espécies em equilíbrio!'},
  {word:'HIPÓTESE',hint:'Explicação provisória a testar 🔬',fact:'O método científico começa sempre por uma hipótese!'},
  {word:'TELESCÓPIO',hint:'Instrumento para ver estrelas 🔭',fact:'O Hubble fotografou galáxias a 13 mil milhões de anos-luz!'},
  {word:'ATMOSFERA',hint:'Camada de gases à volta da Terra 🌬️',fact:'A atmosfera terrestre tem 5 camadas distintas!'},
  {word:'METAMORFOSE',hint:'Transformação de forma de um animal 🦋',fact:'A metamorfose completa: ovo → larva → pupa → adulto!'},
];
function startWordFallback(diff){
  CG={id:'word',total:8,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:28,timeLimit:35,timeLeft:35,timer:null,answered:false,qIndex:0,difficulty:diff||1,questions:shuffle(WORD_FALLBACK)};
  document.getElementById('wordLvlNum').textContent=diff||1;
  showScreen('wordScreen');renderWord();
}
function renderWord(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;wordAns=[];wordTilesData=[];CG.timeLeft=CG.timeLimit;
  const q=CG.questions[CG.qIndex];
  const word=q.word||q.text||'';
  const letters=shuffle(word.split(''));
  wordTilesData=letters.slice();
  document.getElementById('wordQNum').textContent=CG.qIndex+1;
  document.getElementById('wordStreak').textContent=CG.streak;
  document.getElementById('wordXP').textContent=CG.xpEarned;
  document.getElementById('wordProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('wordTimerBadge').classList.remove('urgent');
  document.getElementById('wordHint').textContent='💡 '+(q.hint||'');
  document.getElementById('wordFact').classList.remove('show');
  // Answer slots
  const slotsEl=document.getElementById('wordSlots');slotsEl.innerHTML='';
  for(let i=0;i<word.length;i++){const sl=document.createElement('div');sl.className='a-slot';sl.dataset.pos=i;sl.addEventListener('click',()=>wordRemove(i));slotsEl.appendChild(sl);}
  // Tiles
  const tilesEl=document.getElementById('wordTiles');tilesEl.innerHTML='';
  letters.forEach((lt,i)=>{const t=document.createElement('div');t.className='s-tile';t.textContent=lt;t.dataset.ti=i;t.addEventListener('click',()=>wordAdd(i,lt,t));tilesEl.appendChild(t);});
  document.getElementById('wordTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('wordTimer').textContent=CG.timeLeft;if(CG.timeLeft<=8)document.getElementById('wordTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered)wordResolve(false,q);}},1000);
}
function wordAdd(idx,lt,tile){const q=CG.questions[CG.qIndex],word=q.word||q.text||'';if(wordAns.length>=word.length)return;tile.classList.add('used');wordAns.push({idx,lt});const slots=document.querySelectorAll('.a-slot');const pos=wordAns.length-1;slots[pos].textContent=lt;slots[pos].classList.add('filled');vibrate([5]);}
function wordRemove(pos){if(pos>=wordAns.length)return;const rem=wordAns[pos];wordAns.splice(pos,1);document.querySelectorAll('.s-tile').forEach(t=>{if(parseInt(t.dataset.ti)===rem.idx)t.classList.remove('used');});document.querySelectorAll('.a-slot').forEach((s,i)=>{if(i>=pos){s.textContent='';s.classList.remove('filled');}});}
function wordClearAll(){wordAns=[];document.querySelectorAll('.s-tile').forEach(t=>t.classList.remove('used'));document.querySelectorAll('.a-slot').forEach(s=>{s.textContent='';s.classList.remove('filled','correct','wrong');});}
function wordVerify(){const q=CG.questions[CG.qIndex];const word=q.word||q.text||'';if(wordAns.length<word.length){showToast('Completa a palavra!');return;}wordResolve(wordAns.map(x=>x.lt).join('')===word,q);}
function wordResolve(ok,q){
  if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
  const word=q.word||q.text||'';
  const slots=document.querySelectorAll('.a-slot');
  if(ok){slots.forEach(s=>s.classList.add('correct'));scoreAnswer(true);document.getElementById('wordStreak').textContent=CG.streak;}
  else{word.split('').forEach((lt,i)=>{if(slots[i]){slots[i].textContent=lt;slots[i].classList.add('wrong');}});CG.streak=0;snd('wrong');vibrate([80]);state.totalPlayed++;saveState();}
  document.getElementById('wordFactText').textContent=ok?'🎉 '+word+'! '+(q.fact||''):'Era: '+word+'. '+(q.fact||'');
  document.getElementById('wordFact').classList.add('show');
  setTimeout(()=>{CG.qIndex++;renderWord();},2500);
}

// ================================================================
// FACT OR FICTION (AI-powered)
// ================================================================
function startFact(){
  const _p=getGameProg('fact');
  showQLoading('🤔 Fact or Fiction', _p.level, ()=>startFoFFallback(_p.level));
}
const FOF_FALLBACK=[
  {visual:'🧠',text:'Os humanos usam apenas 10% do cérebro.',correct:'Falso',fact:'Usamos praticamente 100% — diferentes áreas são ativas em diferentes momentos!'},
  {visual:'🏔️',text:'A Grande Muralha da China é visível do espaço a olho nu.',correct:'Falso',fact:'É demasiado estreita (5-8m) para ser vista do espaço. Astronautas confirmaram!'},
  {visual:'🐙',text:'Os polvos têm 3 corações e sangue azul.',correct:'Verdade',fact:'Dois corações bombam sangue para as guelras e um para o corpo!'},
  {visual:'⚡',text:'Os raios nunca caem duas vezes no mesmo lugar.',correct:'Falso',fact:'O Empire State é atingido por raios ~100 vezes por ano!'},
  {visual:'🌡️',text:'A água quente pode congelar mais rápido que a fria.',correct:'Verdade',fact:'Chama-se efeito Mpemba! Em condições específicas, acontece mesmo!'},
  {visual:'💎',text:'Os diamantes são a substância mais dura da natureza.',correct:'Verdade',fact:'Têm dureza 10 na escala de Mohs — o máximo possível!'},
  {visual:'🐠',text:'Os peixes-palhaço podem mudar de sexo.',correct:'Verdade',fact:'Quando a fêmea dominante morre, o maior macho torna-se fêmea!'},
  {visual:'🍌',text:'As bananas são tecnicamente uma baga em botânica.',correct:'Verdade',fact:'Em botânica, a banana é uma baga! E o morango não é — é um pseudofruto!'},
  {visual:'❤️',text:'O coração pára completamente quando espirras.',correct:'Falso',fact:'O ritmo muda momentaneamente mas o coração nunca para!'},
  {visual:'🐨',text:'As impressões digitais dos koalas são indistinguíveis das humanas.',correct:'Verdade',fact:'São tão parecidas que já confundiram polícias em cenas de crime!'},
];
function startFoFFallback(diff){
  const qs=shuffle(FOF_FALLBACK).map(q=>({...q,options:['Verdade','Falso']}));
  CG={id:'fact',total:10,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:18,timeLimit:15,timeLeft:15,timer:null,answered:false,qIndex:0,difficulty:diff||1,questions:qs};
  document.getElementById('fofLvlNum').textContent=diff||1;
  showScreen('fofScreen');renderFoF();
}
function renderFoF(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;CG.timeLeft=CG.timeLimit;
  const q=CG.questions[CG.qIndex];
  document.getElementById('fofQNum').textContent=CG.qIndex+1;
  document.getElementById('fofRound').textContent=CG.qIndex+1;
  document.getElementById('fofStreak').textContent=CG.streak;
  document.getElementById('fofXP').textContent=CG.xpEarned;
  document.getElementById('fofProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('fofTimerBadge').classList.remove('urgent');
  document.getElementById('fofVisual').textContent=q.visual||'🤔';
  document.getElementById('fofStatement').textContent=q.text;
  const card=document.getElementById('fofCard');
  card.classList.remove('swipe-l','swipe-r');
  const ov=document.getElementById('fofOverlay');ov.classList.remove('show');ov.textContent='';ov.style.background='';
  document.getElementById('fofFact').classList.remove('show');
  document.getElementById('fofTrueBtn').disabled=false;document.getElementById('fofFalseBtn').disabled=false;
  document.getElementById('fofTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('fofTimer').textContent=CG.timeLeft;if(CG.timeLeft<=4)document.getElementById('fofTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered)fofAnswer(null);}},1000);
}
function fofAnswer(choice){
  const q=CG.questions[CG.qIndex];
  if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
  document.getElementById('fofTrueBtn').disabled=true;document.getElementById('fofFalseBtn').disabled=true;
  const ok=choice===q.correct;
  const ov=document.getElementById('fofOverlay');
  const card=document.getElementById('fofCard');
  if(choice===null){ov.textContent='⏱️ TEMPO!';ov.style.background='rgba(239,68,68,.75)';}
  else if(ok){ov.textContent=q.correct==='Verdade'?'✅ VERDADE!':'❌ FALSO!';ov.style.background='rgba(16,185,129,.75)';card.classList.add(q.correct==='Verdade'?'swipe-r':'swipe-l');}
  else{ov.textContent='❌ ERRADO!';ov.style.background='rgba(239,68,68,.75)';}
  ov.classList.add('show');
  if(choice!==null)scoreAnswer(ok);else{CG.streak=0;state.totalPlayed++;saveState();snd('wrong');vibrate([100]);}
  document.getElementById('fofStreak').textContent=CG.streak;
  document.getElementById('fofFactText').textContent=(q.correct==='Verdade'?'✅ É VERDADE: ':'❌ É FALSO: ')+q.fact;
  document.getElementById('fofFact').classList.add('show');
  setTimeout(()=>{CG.qIndex++;renderFoF();},2500);
}

// ================================================================
// TIME MACHINE & ECO-TYCOON (AI-powered)
// ================================================================
function startTime(){
  const _p=getGameProg('time');
  showQLoading('⏳ Time Machine', _p.level, ()=>startTimeFallback(_p.level));
}
// generateAIQWithPrompt removed - using QB bank

const TIME_FALLBACK=[
  {events:[{y:1969,t:'🚀 Homem na Lua'},{y:1989,t:'🧱 Queda do Muro de Berlim'},{y:1945,t:'✌️ Fim da 2.ª Guerra'},{y:1963,t:'🌈 "I Have a Dream"'}],fact:'Apenas 24 anos separam o fim da 2.ª Guerra do Homem na Lua!'},
  {events:[{y:1492,t:'🌊 Colombo chega à América'},{y:1776,t:'🗽 Independência EUA'},{y:1215,t:'📜 Magna Carta'},{y:1789,t:'🥖 Revolução Francesa'}],fact:'A Magna Carta (1215) foi o primeiro documento a limitar o poder do rei!'},
  {events:[{y:1903,t:'✈️ 1.º Voo motorizado'},{y:1969,t:'🌙 Apollo 11'},{y:1957,t:'🛰️ Sputnik 1'},{y:1947,t:'💻 1.º computador ENIAC'}],fact:'Apenas 66 anos separam o 1.º voo (1903) da chegada à Lua (1969)!'},
  {events:[{y:1876,t:'📞 Telefone de Bell'},{y:1879,t:'💡 Lâmpada de Edison'},{y:1895,t:'📽️ 1.º Cinema Lumière'},{y:1844,t:'📡 Telégrafo de Morse'}],fact:'O século XIX foi a era das grandes invenções que mudaram o mundo!'},
];
let timeSlotsAns=[];
function renderTime(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;timeSlotsAns=[];CG.timeLeft=CG.timeLimit;
  const round=CG.questions[CG.qIndex];
  const items=shuffle((round.events||[]).slice());
  document.getElementById('timeQNum').textContent=CG.qIndex+1;
  document.getElementById('timeStreak').textContent=CG.streak;
  document.getElementById('timeXP').textContent=CG.xpEarned;
  document.getElementById('timeProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('timeTimerBadge').classList.remove('urgent');
  document.getElementById('timeFact').classList.remove('show');
  const slotsEl=document.getElementById('timeSlots');slotsEl.innerHTML='';
  const lbls=['1.º','2.º','3.º','4.º'];
  for(let i=0;i<4;i++){const s=document.createElement('div');s.className='t-slot';s.dataset.sl=i;s.innerHTML=`<span class="t-num">${lbls[i]}</span><span class="sl-txt" style="color:var(--text2);font-size:.75rem">toca num evento abaixo</span>`;slotsEl.appendChild(s);}
  const itemsEl=document.getElementById('timeItems');itemsEl.innerHTML='';
  items.forEach((ev,idx)=>{const d=document.createElement('div');d.className='t-item';d.dataset.idx=idx;d.dataset.y=ev.y;d.textContent=ev.t;d.addEventListener('click',()=>timeSelect(d,round));itemsEl.appendChild(d);});
  document.getElementById('timeTimer').textContent=CG.timeLeft;
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('timeTimer').textContent=CG.timeLeft;if(CG.timeLeft<=8)document.getElementById('timeTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered)timeCheck(round,true);}},1000);
}
function timeSelect(el,round){
  if(CG.answered||timeSlotsAns.length>=4)return;
  el.classList.add('placed');
  timeSlotsAns.push({y:parseInt(el.dataset.y),t:el.textContent});
  const sl=document.querySelectorAll('.t-slot')[timeSlotsAns.length-1];
  sl.querySelector('.sl-txt').textContent=el.textContent;
  sl.querySelector('.sl-txt').style.color='var(--text)';
  sl.classList.add('filled');
  vibrate([8]);
  if(timeSlotsAns.length===4)setTimeout(()=>timeCheck(round,false),300);
}
function timeCheck(round,timeout){
  if(CG.answered)return;CG.answered=true;clearInterval(CG.timer);
  const sorted=(round.events||[]).slice().sort((a,b)=>a.y-b.y);
  const ok=timeSlotsAns.every((a,i)=>a.y===sorted[i].y);
  const slots=document.querySelectorAll('.t-slot');
  sorted.forEach((ev,i)=>{
    const sl=slots[i];
    sl.querySelector('.sl-txt').textContent=ev.t+' ('+ev.y+')';
    sl.classList.remove('filled');
    sl.classList.add(timeSlotsAns[i]&&timeSlotsAns[i].y===ev.y?'ok':'bad');
  });
  if(ok)scoreAnswer(true);else{CG.streak=0;snd('wrong');vibrate([80]);}
  if(timeout){state.totalPlayed++;saveState();}
  document.getElementById('timeFactText').textContent=round.fact||'';
  document.getElementById('timeFact').classList.add('show');
  setTimeout(()=>{CG.qIndex++;renderTime();},2500);
}
function startTimeFallback(diff){
  CG={id:'time',total:TIME_FALLBACK.length,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:30,timeLimit:35,timeLeft:35,timer:null,answered:false,qIndex:0,difficulty:diff||1,questions:shuffle(TIME_FALLBACK)};
  document.getElementById('timeLvlNum').textContent=diff||1;
  document.querySelector('#timeScreen .game-subtitle').innerHTML='Ronda <span id="timeQNum">1</span>/'+CG.total+' · Nível <span id="timeLvlNum">'+(diff||1)+'</span>';
  showScreen('timeScreen');renderTime();
}

// ECO-TYCOON AI
function startEco(){
  const _p=getGameProg('eco');
  showQLoading('🌱 Eco-Tycoon', _p.level, ()=>startEcoFallback(_p.level));
}
const ECO_FALLBACK=[
  {challenge:'⚠️ Fábrica a poluir o rio! Qual a melhor solução?',actions:[{icon:'♻️',name:'Filtros anti-poluição',correct:true,feedback:'Filtros modernos reduzem 95% da poluição!'},{icon:'🚫',name:'Ignorar',correct:false,feedback:'Ignorar causa danos irreversíveis!'},{icon:'📋',name:'Apenas multar',correct:false,feedback:'A multa é fraca — a fábrica continua a poluir!'},{icon:'🌊',name:'Redirecionar para o mar',correct:false,feedback:'Ainda piora o problema!'}],fact:'Os filtros industriais modernos podem remover 99% dos poluentes da água!'},
  {challenge:'🌡️ Onda de calor extremo! Como reduzir o impacto?',actions:[{icon:'🌳',name:'Plantar árvores',correct:true,feedback:'As árvores reduzem a temperatura até 8°C!'},{icon:'❄️',name:'Mais ar condicionado',correct:false,feedback:'O AC aquece o exterior e consome mais energia!'},{icon:'☀️',name:'Painéis solares',correct:true,feedback:'Energia limpa e reduzem dependência de combustíveis!'},{icon:'🏠',name:'Isolamento de edifícios',correct:true,feedback:'Edifícios isolados gastam 40% menos energia!'}],fact:'Cidades com mais árvores podem ser até 8°C mais frescas!'},
  {challenge:'🌊 Plásticos no oceano! O que fazer?',actions:[{icon:'🚯',name:'Proibir plástico descartável',correct:true,feedback:'Prevenir na fonte é sempre melhor que remediar!'},{icon:'🐟',name:'Deixar os peixes comerem',correct:false,feedback:'Os microplásticos entram na cadeia alimentar!'},{icon:'♻️',name:'Reciclar mais',correct:true,feedback:'Reciclar reduz o plástico que chega aos oceanos!'},{icon:'🧹',name:'Limpar o oceano',correct:true,feedback:'Ótimo, mas é só tratar o sintoma!'}],fact:'Uma garrafa de plástico demora 450 anos a degradar-se!'},
  {challenge:'⚡ Cidade sem energia! Como produzir de forma sustentável?',actions:[{icon:'🔥',name:'Central a carvão',correct:false,feedback:'O carvão é o combustível mais poluente!'},{icon:'☀️',name:'Energia solar',correct:true,feedback:'Portugal tem um dos melhores recursos solares da Europa!'},{icon:'💨',name:'Energia eólica',correct:true,feedback:'A energia eólica fornece 25% da eletricidade mundial!'},{icon:'💧',name:'Energia hídrica',correct:true,feedback:'Renovável mas pode afetar ecossistemas fluviais!'}],fact:'Portugal chegou a produzir 100% da sua eletricidade com fontes renováveis!'},
];
function renderEco(){
  if(CG.qIndex>=CG.total){showResult();return;}
  clearInterval(CG.timer);CG.answered=false;
  CG.timeLeft=45;document.getElementById('ecoTimer').textContent=CG.timeLeft;document.getElementById('ecoTimerBadge').classList.remove('urgent');
  CG.timer=setInterval(()=>{CG.timeLeft--;document.getElementById('ecoTimer').textContent=CG.timeLeft;if(CG.timeLeft<=8)document.getElementById('ecoTimerBadge').classList.add('urgent');if(CG.timeLeft<=0){clearInterval(CG.timer);if(!CG.answered){CG.answered=true;CG.streak=0;scoreAnswer(false);document.getElementById('ecoFact').classList.add('show');setTimeout(()=>{CG.qIndex++;renderEco();},2500);}}},1000);
  const ch=CG.questions[CG.qIndex];
  document.getElementById('ecoQNum').textContent=CG.qIndex+1;
  document.getElementById('ecoXP').textContent=CG.xpEarned;
  document.getElementById('ecoProgressFill').style.width=((CG.qIndex/CG.total)*100)+'%';
  document.getElementById('ecoHealth').style.width=Math.max(0,Math.min(100,CG.health))+'%';
  document.getElementById('ecoEnergy').style.width=Math.max(0,Math.min(100,CG.energy))+'%';
  document.getElementById('ecoChallenge').textContent=ch.challenge||ch.text||'';
  document.getElementById('ecoFact').classList.remove('show');
  document.getElementById('ecoRes').innerHTML=`<div class="eco-r"><span class="eco-ri">🌍</span><div class="eco-rv">${Math.round(CG.health)}%</div><div class="eco-rl">Planeta</div></div><div class="eco-r"><span class="eco-ri">⚡</span><div class="eco-rv">${Math.round(CG.energy)}%</div><div class="eco-rl">Energia</div></div><div class="eco-r"><span class="eco-ri">🔥</span><div class="eco-rv">${CG.streak}</div><div class="eco-rl">Streak</div></div>`;
  const actsEl=document.getElementById('ecoActs');actsEl.innerHTML='';
  (ch.actions||[]).forEach(act=>{
    const d=document.createElement('div');d.className='eco-act';
    d.innerHTML=`<div class="eco-ai">${act.icon}</div><div class="eco-an">${act.name}</div>`;
    d.addEventListener('click',()=>{
      if(CG.answered)return;CG.answered=true;
      actsEl.querySelectorAll('.eco-act').forEach(b=>b.classList.add('disabled'));
      d.classList.add(act.correct?'correct':'wrong');
      if(act.correct){CG.health=Math.min(100,CG.health+15);CG.energy=Math.min(100,CG.energy+10);}
      else{CG.health=Math.max(0,CG.health-20);CG.energy=Math.max(0,CG.energy-10);}
      document.getElementById('ecoHealth').style.width=CG.health+'%';
      document.getElementById('ecoEnergy').style.width=CG.energy+'%';
      scoreAnswer(act.correct);
      document.getElementById('ecoFactText').textContent=(act.feedback||'')+' '+(ch.fact||'');
      document.getElementById('ecoFact').classList.add('show');
      setTimeout(()=>{CG.qIndex++;renderEco();},2500);
    });
    actsEl.appendChild(d);
  });
}
function startEcoFallback(diff){
  CG={id:'eco',total:ECO_FALLBACK.length,correct:0,streak:0,maxStreak:0,xpEarned:0,gemsEarned:0,double2x:false,xpPerQ:25,timer:null,answered:false,qIndex:0,difficulty:diff||1,health:60,energy:50,questions:shuffle(ECO_FALLBACK)};
  document.getElementById('ecoLvlNum').textContent=diff||1;
  showScreen('ecoScreen');renderEco();
}

// Word scramble via AI uses special handler
function startWord(){startWordWithAI();}

// ================================================================
// INIT
// ================================================================
createStars();buildGameGrid();buildAch();buildShop();updateHUD();updateEdu();
// Rotate Edu phrases every 8s
setInterval(()=>{if(document.getElementById('dashboard').classList.contains('active'))updateEdu();},8000);
// Mute button
document.getElementById('muteBtn').addEventListener('click',()=>{
  _muted=!_muted;
  document.getElementById('muteBtn').textContent=_muted?'🔇':'🔊';
  document.getElementById('muteBtn').classList.toggle('muted',_muted);
  if(!_muted)playSound('click');
});
// Confetti canvas resize
window.addEventListener('resize',()=>{const cv=document.getElementById('confettiCanvas');cv.width=window.innerWidth;cv.height=window.innerHeight;});
document.getElementById('lvlCloseBtn').addEventListener('click',()=>document.getElementById('lvlOverlay').classList.remove('show'));
document.getElementById('playAgainBtn').addEventListener('click',playAgain);
document.getElementById('resultBackBtn').addEventListener('click',goBack);
document.getElementById('resultHomeBtn').addEventListener('click',goBack);
['geo','game','word','fof','math','time','eco','logic','result'].forEach(id=>{
  const b=document.getElementById(id+'BackBtn');if(b)b.addEventListener('click',goBack);
});
document.getElementById('navHome').addEventListener('click',()=>showScreen('dashboard'));
document.getElementById('navBadges').addEventListener('click',()=>{showScreen('dashboard');setTimeout(()=>document.getElementById('achRow').scrollIntoView({behavior:'smooth'}),200);});
document.getElementById('navShop').addEventListener('click',()=>{showScreen('dashboard');setTimeout(()=>document.getElementById('shopRow').scrollIntoView({behavior:'smooth'}),200);});
document.getElementById('navStats').addEventListener('click',()=>{
  const top = GAMES.filter(g=>getGameProg(g.id).level>1).map(g=>{const p=getGameProg(g.id);return g.emoji+g.name.split(' ')[0]+' Nv.'+p.level;}).slice(0,4).join(' · ');
  showToast('🎮 '+state.totalPlayed+' jogadas · '+state.totalCorrect+' certas'+(top?' · '+top:''));
});
document.getElementById('fofTrueBtn').addEventListener('click',()=>{playSound('click');fofAnswer('Verdade');});
document.getElementById('fofFalseBtn').addEventListener('click',()=>{playSound('click');fofAnswer('Falso');});
document.getElementById('wordClearBtn').addEventListener('click',()=>{playSound('click');wordClearAll();});
document.getElementById('wordCheckBtn').addEventListener('click',()=>{playSound('click');wordVerify();});

