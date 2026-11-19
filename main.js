const translations = {
  pt: {
    "nav.about": "Sobre mim",
    "nav.projects": "Projetos",
    "nav.contact": "Contacto",
    "hero.kicker": "Olá, sou a",
    "hero.lead": "Developer na Teamtailor, no Porto. Durante o dia construo features de produto, no resto do tempo pequenas ferramentas para a minha vida.",
    "hero.cta": "Ver o que construí",
    "hero.contact": "Diz olá",
    "hero.photoAlt": "Beatriz a sorrir num jardim",
    "hero.note": "sou eu!",
    "about.title": "Sobre mim",
    "about.p1": "Tenho um mestrado em Engenharia Informática e Computação pela FEUP e, desde os tempos de estudante, sou apaixonada por desenvolvimento front-end e design UI/UX.",
    "about.p2": "Hoje trabalho na plataforma de recrutamento da Teamtailor com Ruby on Rails, Ember e TypeScript. Gosto de interfaces calmas e claras, e de código fácil de mudar para quem vem a seguir.",
    "about.p3": "Fora do trabalho pinto com marcadores de álcool e faço pequenas apps para coisas que uso mesmo: paletas, prendas, datas de lançamento.",
    "facts.now": "Agora",
    "facts.nowValue": "Developer na Teamtailor",
    "facts.studied": "Estudei",
    "facts.studiedValue": "Mestrado em Engenharia Informática e Computação, FEUP",
    "facts.based": "Vivo no",
    "facts.tools": "Normalmente com",
    "projects.title": "Coisas que construí",
    "projects.sub": "Projetos pessoais, feitos porque eu queria que existissem.",
    "p.markers": "Paletas de cores feitas só com os marcadores de álcool e de tinta que tens. Junta os teus sets, escolhe um mood e uma harmonia, bloqueia as cores de que gostas e partilha o link ou guarda um PNG.",
    "p.prendas": "Um caderno de prendas dadas e recebidas, para aniversários, Natal e todas as ocasiões pelo meio. Cada prenda guarda links e fotos, e instala-se no ecrã principal do iPhone como uma app.",
    "p.calendar": "Uma lista de livros que vão sair, transformada num calendário que subscrevo no Google Calendar. Uma GitHub Action sincroniza as datas todos os dias e uma pequena web app edita a lista a partir do telemóvel. Sem base de dados.",
    "tag.browser": "Corre no browser",
    "tag.brands": "11 marcas de marcadores",
    "tag.pwa": "App no ecrã principal",
    "projects.more": "Trabalho mais antigo, sobretudo projetos da FEUP, está no",
    "contact.title": "Diz olá",
    "contact.sub": "A melhor forma de falar comigo é por email ou LinkedIn.",
    "footer": "Feito à mão no Porto.",
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
