const translations = {
  pt: {
    "nav.about": "Sobre mim",
    "nav.projects": "Projetos",
    "nav.cv": "Currículo",
    "nav.contact": "Contacto",
    "hero.kicker": "Olá, sou a",
    "hero.lead": "Full stack developer na Teamtailor, a viver na Maia, Porto. Durante o dia construo features de produto, no resto do tempo pequenas ferramentas para a minha vida.",
    "hero.cta": "Ver o que construí",
    "hero.contact": "Diz olá",
    "hero.photoAlt": "Beatriz a sorrir num jardim",
    "hero.note": "sou eu!",
    "about.title": "Sobre mim",
    "about.p1": "Tenho um mestrado em Engenharia Informática e Computação pela FEUP. Front-end e design UI/UX são a minha praia desde os tempos de estudante, e o que mais me importa continua a ser a experiência de quem está do outro lado do ecrã.",
    "about.p2": "Estou na Teamtailor desde 2023, primeiro como trainee e agora como full stack developer na plataforma de recrutamento. Trabalho com Ruby on Rails, Ember.js e TypeScript, do design até à implementação.",
    "about.p3": "O meu interesse por IA e agentic development não para de crescer. Trabalho com Claude Code e OpenAI Codex, escrevo skills à medida para eles e adoro experimentar coisas novas. É assim que nascem os meus projetos pessoais: pequenas ferramentas que me ajudam no trabalho e nos meus hobbies, como pintar com marcadores de álcool.",
    "facts.now": "Agora",
    "facts.nowValue": "Full Stack Developer na Teamtailor",
    "facts.studied": "Estudei",
    "facts.studiedValue": "Mestrado em Engenharia Informática e Computação, FEUP",
    "facts.based": "Vivo em",
    "facts.tools": "Normalmente com",
    "projects.title": "Coisas que construí",
    "projects.sub": "Projetos pessoais, feitos porque eu queria que existissem. Todos construídos com Claude, Codex e outras ferramentas de IA.",
    "p.markers": "Paletas de cores feitas só com os marcadores de álcool e de tinta que tens. Junta os teus sets, escolhe um mood e uma harmonia, bloqueia as cores de que gostas e partilha o link ou guarda um PNG.",
    "p.prendas": "Um caderno de prendas dadas e recebidas, para aniversários, Natal e todas as ocasiões pelo meio. Cada prenda guarda links e fotos, e instala-se no ecrã principal do iPhone como uma app.",
    "p.calendar": "Uma lista de livros que vão sair, transformada num calendário que subscrevo no Google Calendar. Uma GitHub Action sincroniza as datas todos os dias e uma pequena web app edita a lista a partir do telemóvel. Sem base de dados.",
    "tag.browser": "Corre no browser",
    "tag.brands": "11 marcas de marcadores",
    "tag.pwa": "App no ecrã principal",
    "p.open": "Experimenta",
    "projects.more": "Trabalho mais antigo, sobretudo projetos da FEUP, está no",
    "cv.title": "Currículo",
    "cv.sub": "Onde trabalhei, o que estudei e com o que trabalho.",
    "cv.experience": "Experiência",
    "cv.job1.when": "Mai 2024 até hoje",
    "cv.job1.where": "Teamtailor · Remoto",
    "cv.job1.desc": "Construo features para a plataforma de recrutamento da Teamtailor com Ruby on Rails, Ember.js, TypeScript, Stimulus e Pusher, com atenção à usabilidade, performance e qualidade. Trabalhamos em ciclos de Shape Up, e agentic coding com Claude Code e OpenAI Codex faz parte da forma como trabalho. Em dupla, construí também os recruitment highlights de 2024 da Teamtailor.",
    "cv.job2.when": "Out 2023 a Abr 2024",
    "cv.job2.desc": "Seis meses a aprender a plataforma com mentoria e com uma equipa de developers e design. Trabalhei com Rails, Ember, TypeScript, Stimulus, AWS Chime SDK e Pusher, e terminei um projeto de forma autónoma.",
    "cv.job3.when": "Fev a Jul 2023",
    "cv.job3.role": "Estágio de dissertação de mestrado",
    "cv.job3.desc": "Websites automáticos para clubes de futebol fora da primeira liga. PHP, Laravel, HTML, CSS, SQL e Zeplin.",
    "cv.education": "Formação",
    "cv.edu1.when": "2021 a 2023",
    "cv.edu1.title": "Mestrado em Engenharia Informática e Computação",
    "cv.edu2.when": "2018 a 2021",
    "cv.edu2.title": "Licenciatura em Engenharia Informática e Computação",
    "cv.edu3.when": "2015 a 2018",
    "cv.edu3.title": "Ensino secundário, Ciências e Tecnologias",
    "cv.feup": "FEUP · Universidade do Porto",
    "cv.grade": "Média final",
    "cv.skills": "Competências",
    "cv.skills.daily": "No dia a dia",
    "cv.skills.ai": "IA e design",
    "cv.skills.agentic": "Agentic development",
    "cv.skills.before": "Também já usei",
    "cv.langs": "Línguas",
    "cv.lang.pt": "Português",
    "cv.lang.en": "Inglês",
    "cv.lang.es": "Espanhol",
    "cv.lang.native": "Nativa",
    "cv.lang.full": "Profissional completo",
    "cv.lang.work": "Profissional",
    "cv.also": "Também",
    "cv.talkabit": "Equipa de programa da 11.ª edição do Talk a Bit, uma conferência de tecnologia na FEUP (2022 a 2023)",
    "cv.linkedin": "Perfil completo no LinkedIn",
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
