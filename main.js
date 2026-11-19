const translations = {
  pt: {
    "nav.about": "Sobre mim",
    "nav.projects": "Projetos",
    "nav.work": "Trabalho",
    "nav.offline": "Fora do trabalho",
    "nav.contact": "Contacto",
    "theme.dark": "Modo escuro",
    "hero.kicker": "Olá, sou a",
    "hero.aka": "mas podes chamar-me Bia",
    "hero.leadA": "Full stack developer na",
    "hero.leadB": ", a viver no Porto. Durante o dia construo features de produto, no resto do tempo pequenas ferramentas para a minha vida.",
    "hero.cta": "Ver o que construí",
    "hero.contact": "Diz olá",
    "hero.photoAlt": "Beatriz a sorrir",
    "hero.note": "sou eu!",
    "about.title": "Sobre mim",
    "about.p1": "Sou full stack developer com um fraco por front-end e UI/UX. Adoro transformar ideias em interfaces simples que dão às pessoas uma ótima experiência, e tenho muita atenção aos detalhes.",
    "about.p3": "O meu interesse por IA e agentic development não para de crescer. Trabalho com Claude Code e OpenAI Codex, escrevo skills à medida para eles e adoro experimentar coisas novas. É assim que nascem os meus projetos pessoais: pequenas ferramentas que me ajudam no trabalho e nos meus hobbies.",
    "facts.now": "Agora",
    "facts.nowValue": "Full Stack Developer na",
    "facts.studied": "Estudei",
    "facts.studiedValue": "Mestrado em Engenharia Informática e Computação,",
    "facts.based": "Vivo em",
    "facts.tools": "Normalmente com",
    "work.title": "O que faço agora",
    "work.when": "Desde maio de 2024",
    "work.p1": "Construo features para a plataforma de recrutamento da Teamtailor do início ao fim, sobretudo em Ruby on Rails e Ember.js, com muita atenção ao design, à usabilidade, à performance e à qualidade.",
    "work.p2": "Trabalhamos em ciclos de Shape Up, e agentic coding com Claude Code e OpenAI Codex é uma grande parte da forma como construo.",
    "tools.work": "No trabalho",
    "tools.side": "Nos projetos pessoais",
    "tools.skills": "Skills para agents",
    "tools.ops": "Infra e deploy",
    "tools.ai": "IA",
    "work.before": "Como cheguei aqui",
    "work.thesis": "Estágio de dissertação de mestrado",
    "work.msc": "Mestrado em Engenharia Informática e Computação",
    "work.now": "Agora",
    "work.linkedin": "O resto está no LinkedIn",
    "projects.title": "Coisas que construí",
    "projects.sub": "Projetos pessoais, feitos porque eu queria que existissem. Desenho-os e construo-os eu, com o Claude, o Codex e outras ferramentas de IA como pair programmers.",
    "p.dispatchAlt": "Dispatch: uma pastelaria em pixel art onde cada sessão de agent é uma pequena pasteleira",
    "p.dispatch": "É assim que mantenho todos os meus agents organizados. Cada sessão do Claude Code passa a ser uma pequena Bia, uma mini eu em pixel art numa pastelaria, e num relance vejo que agents estão a trabalhar, quais precisam de mim, quais acabaram e quais adormeceram. Mostra o histórico de cada agent e o que me está a perguntar, toca um som de pastelaria quando algo muda e tem ao lado a minha fila de PRs para rever. Fui eu que dirigi os sprites e as animações, e um agent desenhou-os.",
    "bia.working": "A trabalhar",
    "bia.waiting": "Precisa de mim",
    "bia.done": "Acabou",
    "bia.paused": "A dormir",
    "p.markers": "Paletas de cores feitas só com os marcadores de álcool e de tinta que tens. Junta os teus sets, escolhe um mood e uma harmonia, bloqueia as cores de que gostas e partilha o link ou guarda um PNG.",
    "p.prendasName": "Caderno de Prendas",
    "p.prendas": "Um caderno de prendas dadas e recebidas, para aniversários, Natal e todas as ocasiões pelo meio. Cada prenda guarda links e fotos, e instala-se no ecrã principal do iPhone como uma app.",
    "p.calendar": "Uma lista de livros que vão sair, transformada num calendário que subscrevo no Google Calendar. Uma GitHub Action sincroniza as datas todos os dias e uma pequena web app edita a lista a partir do telemóvel. Sem base de dados.",
    "p.open": "Experimenta",
    "projects.more": "Trabalho mais antigo, sobretudo projetos da",
    "projects.moreB": ", está no",
    "offline.title": "Fora do trabalho",
    "offline.sub": "O que ando a fazer quando fecho o portátil (ou não... certo?)",
    "offline.travelTitle": "Viajar",
    "offline.travel": "A minha forma preferida de passar o tempo livre. Estou sempre a planear a próxima viagem.",
    "offline.foodTitle": "Restaurantes",
    "offline.food": "Experimentar sítios novos para comer, no Porto e onde quer que viaje.",
    "offline.musicTitle": "Música",
    "offline.music": "Sempre a tocar. Faço playlists para tudo: viagens, estados de espírito, estações do ano.",
    "offline.spotify": "O meu Spotify",
    "offline.readTitle": "Ler",
    "offline.read": "Sobretudo romance e romantasy. Gosto tanto que construí um calendário para os próximos lançamentos.",
    "offline.gameTitle": "Jogar",
    "offline.game": "Jogo imenso. Se não estou a ler, provavelmente estou a jogar alguma coisa.",
    "travel.open": "Onde já estive",
    "travel.title": "Onde já estive",
    "travel.count": "países até agora",
    "travel.close": "Fechar",
    "travel.world": "do mundo",
    "travel.hint": "Passa por cima ou toca num país para ver o nome.",
    "travel.visited": "Já fui",
    "travel.notYet": "Ainda não",
    "lost.title": "Esta página foi dormir",
    "lost.sub": "Não encontrei o que procuras. Volta ao início, que lá está tudo acordado.",
    "lost.home": "Voltar ao início",
    "contact.title": "Diz olá",
    "contact.sub": "A melhor forma de falar comigo é por email ou LinkedIn.",
    "footer": "Feito por mim no Porto, com uma ajudinha do Claude.",
  },
};

const STORAGE_KEY = "lang";
const textNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const buttons = document.querySelectorAll("[data-lang]");

for (const node of textNodes) node.dataset.en = node.textContent;
for (const node of altNodes) node.dataset.enAlt = node.alt;

function setLanguage(lang) {
  const dict = translations[lang] ?? {};

  for (const node of textNodes) {
    node.textContent = dict[node.dataset.i18n] ?? node.dataset.en;
  }
  for (const node of altNodes) {
    node.alt = dict[node.dataset.i18nAlt] ?? node.dataset.enAlt;
  }
  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  }
  document.documentElement.lang = lang;

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

for (const button of buttons) {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
}

setLanguage(initialLanguage());

const themeButton = document.querySelector(".theme");
const darkQuery = matchMedia("(prefers-color-scheme: dark)");

function currentTheme() {
  return document.documentElement.dataset.theme ?? (darkQuery.matches ? "dark" : "light");
}

function syncThemeButton() {
  themeButton?.setAttribute("aria-pressed", String(currentTheme() === "dark"));
}

themeButton?.addEventListener("click", () => {
  const next = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {}
  syncThemeButton();
});

darkQuery.addEventListener("change", syncThemeButton);
syncThemeButton();

const WORLD_COUNTRIES = 195;
const travel = document.querySelector(".travel");
const travelMap = travel?.querySelector(".travel-map");
const travelTip = travel?.querySelector(".travel-tip");

function translate(key, fallback) {
  return translations[document.documentElement.lang]?.[key] ?? fallback;
}

function showTravelCount() {
  const visited = travelMap.querySelectorAll("path.v").length;
  travel.querySelector(".travel-num").textContent = visited;
  travel.querySelector(".travel-pct").textContent = `${Math.round((visited / WORLD_COUNTRIES) * 100)}%`;
  travel.querySelector(".travel-count").hidden = false;
}

function moveTravelTip(event) {
  const box = travelMap.getBoundingClientRect();
  const x = event.clientX - box.left;
  travelTip.style.left = `${x}px`;
  travelTip.style.top = `${event.clientY - box.top}px`;
  travelTip.classList.toggle("flip", x > box.width - 160);
}

if (travel) {
  document.querySelector(".travel-open").addEventListener("click", async () => {
    travel.showModal();
    if (travelMap.querySelector("svg")) return;
    try {
      const response = await fetch("media/world.svg");
      if (!response.ok) return;
      travelMap.insertAdjacentHTML("afterbegin", await response.text());
      showTravelCount();
    } catch {}
  });

  travelMap.addEventListener("pointerover", (event) => {
    const country = event.target.closest("path");
    if (!country) return;
    const visited = country.classList.contains("v");
    const lang = document.documentElement.lang;
    travelTip.querySelector("strong").textContent = country.dataset[lang] ?? country.dataset.en;
    travelTip.querySelector("span").textContent = visited
      ? translate("travel.visited", "Visited")
      : translate("travel.notYet", "Not yet");
    travelTip.classList.toggle("is-visited", visited);
    travelTip.hidden = false;
    moveTravelTip(event);
  });
  travelMap.addEventListener("pointermove", (event) => {
    if (!travelTip.hidden) moveTravelTip(event);
  });
  travelMap.addEventListener("pointerout", (event) => {
    if (event.pointerType === "touch") return;
    if (!event.relatedTarget?.closest?.(".travel-map path")) travelTip.hidden = true;
  });
  travelMap.addEventListener("pointerdown", (event) => {
    if (!event.target.closest("path")) travelTip.hidden = true;
  });

  travel.querySelector(".travel-close").addEventListener("click", () => travel.close());
  travel.addEventListener("click", (event) => {
    if (event.target === travel) travel.close();
  });
}
