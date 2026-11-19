const translations = {
  pt: {
    "nav.about": "Sobre mim",
    "nav.projects": "Projetos",
    "nav.work": "Trabalho",
    "nav.contact": "Contacto",
    "hero.kicker": "Olá, sou a",
    "hero.lead": "Full stack developer na Teamtailor, a viver na Maia, Porto. Durante o dia construo features de produto, no resto do tempo pequenas ferramentas para a minha vida.",
    "hero.cta": "Ver o que construí",
    "hero.contact": "Diz olá",
    "hero.photoAlt": "Beatriz a sorrir",
    "hero.note": "sou eu!",
    "about.title": "Sobre mim",
    "about.p1": "Sou full stack developer com um fraco por front-end e UI/UX. Adoro transformar ideias em interfaces simples que dão às pessoas uma ótima experiência, do primeiro design até à implementação.",
    "about.p3": "O meu interesse por IA e agentic development não para de crescer. Trabalho com Claude Code e OpenAI Codex, escrevo skills à medida para eles e adoro experimentar coisas novas. É assim que nascem os meus projetos pessoais: pequenas ferramentas que me ajudam no trabalho e nos meus hobbies.",
    "facts.now": "Agora",
    "facts.nowValue": "Full Stack Developer na Teamtailor",
    "facts.studied": "Estudei",
    "facts.studiedValue": "Mestrado em Engenharia Informática e Computação, FEUP",
    "facts.based": "Vivo em",
    "facts.tools": "Normalmente com",
    "work.title": "O que faço agora",
    "work.when": "Desde maio de 2024",
    "work.p1": "Construo features para a plataforma de recrutamento da Teamtailor, do design até à implementação, com atenção à usabilidade, performance e qualidade.",
    "work.p2": "Trabalhamos em ciclos de Shape Up, e agentic coding com Claude Code e OpenAI Codex é uma grande parte da forma como construo.",
    "work.before": "Antes disso",
    "work.trainee": "Developer Trainee na Teamtailor, 2023 a 2024",
    "work.thesis": "Estágio de dissertação de mestrado na Zerozero.pt, 2023",
    "work.msc": "Mestrado em Engenharia Informática e Computação, FEUP, 2023",
    "work.linkedin": "O resto está no LinkedIn",
    "projects.title": "Coisas que construí",
    "projects.sub": "Projetos pessoais, feitos porque eu queria que existissem. Desenho-os e construo-os eu, com o Claude, o Codex e outras ferramentas de IA como pair programmers.",
    "p.dispatchAlt": "Dispatch: uma pastelaria em pixel art onde cada sessão de agent é uma pequena pasteleira",
    "p.dispatch": "É assim que mantenho todos os meus agents organizados. Cada sessão do Claude Code passa a ser uma pequena Bia, uma mini eu em pixel art numa pastelaria, e num relance vejo que agents estão a trabalhar, quais precisam de mim, quais acabaram e quais adormeceram. Mostra o histórico de cada agent e o que me está a perguntar, toca um som de pastelaria quando algo muda e tem ao lado a minha fila de PRs para rever.",
    "bia.working": "A trabalhar",
    "bia.waiting": "Precisa de mim",
    "bia.done": "Acabou",
    "bia.paused": "A dormir",
    "tag.pixel": "Pixel art",
    "p.markers": "Paletas de cores feitas só com os marcadores de álcool e de tinta que tens. Junta os teus sets, escolhe um mood e uma harmonia, bloqueia as cores de que gostas e partilha o link ou guarda um PNG.",
    "p.prendasName": "Caderno de Prendas",
    "p.prendas": "Um caderno de prendas dadas e recebidas, para aniversários, Natal e todas as ocasiões pelo meio. Cada prenda guarda links e fotos, e instala-se no ecrã principal do iPhone como uma app.",
    "p.calendar": "Uma lista de livros que vão sair, transformada num calendário que subscrevo no Google Calendar. Uma GitHub Action sincroniza as datas todos os dias e uma pequena web app edita a lista a partir do telemóvel. Sem base de dados.",
    "tag.browser": "Corre no browser",
    "tag.brands": "11 marcas de marcadores",
    "tag.pwa": "App no ecrã principal",
    "p.open": "Experimenta",
    "projects.more": "Trabalho mais antigo, sobretudo projetos da FEUP, está no",
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
