// Todo o texto do site fica aqui, em português (pt) e inglês (en).
// Para adicionar um projeto, copie um item de `projects` e preencha os campos.
// Links com valor null aparecem como "em breve".

export const profile = {
  name: 'Luís Fernando',
  handle: 'luis.dev',
  email: 'luis.flex72@gmail.com',
  github: 'https://github.com/LuisSillva',
  linkedin: 'https://linkedin.com/in/luis-silva-zx0y/',
  // Coloque sua foto em public/foto.jpg. Sem ela, o crachá mostra as iniciais.
  photo: '/foto.jpg',
  cv: '/curriculo.pdf',
}

export const stack = [
  { name: 'Python', group: 'lang' },
  { name: 'JavaScript', group: 'lang' },
  { name: 'Luau', group: 'lang' },
  { name: 'SQL', group: 'lang' },
  { name: 'HTML/CSS', group: 'lang' },
  { name: 'FastAPI', group: 'back' },
  { name: 'Django', group: 'back' },
  { name: 'SQLAlchemy', group: 'back' },
  { name: 'Pydantic', group: 'back' },
  { name: 'OAuth2 / JWT', group: 'back' },
  { name: 'LLM APIs', group: 'ai' },
  { name: 'MCP', group: 'ai' },
  { name: 'Agentes', group: 'ai' },
  { name: 'n8n', group: 'auto' },
  { name: 'Make', group: 'auto' },
  { name: 'Evolution API', group: 'auto' },
  { name: 'Google Places API', group: 'auto' },
  { name: 'React / Vite', group: 'front' },
  { name: 'Vercel', group: 'front' },
  { name: 'Git / GitHub', group: 'front' },
]

export const projects = [
  {
    id: 'whatsapp-agent',
    stack: ['LLM', 'Evolution API', 'n8n', 'Python'],
    links: { demo: null, repo: null },
    pt: {
      tag: 'Katalyst · IA conversacional',
      title: 'Agente de IA para WhatsApp',
      text: 'Agente com LLM que atende, qualifica leads e marca horários pelo WhatsApp de negócios locais. Arquitetura pensada para dividir o mesmo motor entre WhatsApp e chatbot de site.',
    },
    en: {
      tag: 'Katalyst · Conversational AI',
      title: 'WhatsApp AI agent',
      text: 'LLM agent that answers customers, qualifies leads and books appointments over WhatsApp for local businesses. Designed so one engine can serve both WhatsApp and a website chatbot.',
    },
  },
  {
    id: 'client-sites',
    stack: ['HTML/CSS', 'JavaScript', 'Vercel'],
    links: { demo: null, repo: null },
    pt: {
      tag: 'Katalyst · Web',
      title: 'Sites para clientes',
      text: 'Sites para clínicas de estética e restaurantes, com propostas comerciais em HTML/CSS reaproveitáveis por cliente e demos publicadas na Vercel.',
    },
    en: {
      tag: 'Katalyst · Web',
      title: 'Client websites',
      text: 'Websites for aesthetic clinics and restaurants, plus reusable HTML/CSS sales proposals per client and demos deployed on Vercel.',
    },
  },
  {
    id: 'roblox-games',
    stack: ['Luau', 'Roblox Studio'],
    links: { demo: null, demo2: null },
    pt: {
      tag: 'Jogos · 2 publicados',
      title: 'Jogos multiplayer no Roblox',
      text: 'O primeiro em dupla, cuidando dos sistemas (cliente/servidor, economia, progressão). O segundo sozinho, de ponta a ponta. Ambos publicados no Roblox, feitos em Luau.',
    },
    en: {
      tag: 'Games · 2 published',
      title: 'Multiplayer Roblox games',
      text: 'The first built as a duo, where I owned the systems (client/server, economy, progression). The second built solo, end to end. Both published on Roblox, written in Luau.',
    },
  },
  {
    id: 'courses-marketplace',
    stack: ['FastAPI', 'OAuth2', 'SQLAlchemy', 'Pydantic'],
    links: { demo: null, repo: null },
    status: 'wip',
    pt: {
      tag: 'Back-end · em andamento',
      title: 'Marketplace de cursos e e-books',
      text: 'API com autenticação OAuth2 e checkout, com modelagem que separa o registro financeiro (Purchase) da concessão de acesso (Enrollment).',
    },
    en: {
      tag: 'Back-end · in progress',
      title: 'Courses & e-books marketplace',
      text: 'API with OAuth2 authentication and checkout, modeled to keep the financial record (Purchase) apart from the access grant (Enrollment).',
    },
  },
  {
    id: 'task-manager',
    stack: ['FastAPI', 'SQLAlchemy', 'React', 'Vite'],
    links: { demo: null, repo: null },
    pt: {
      tag: 'Full-stack',
      title: 'Task Manager + Book Library API',
      text: 'Duas APIs REST organizadas em monorepo, com front-end em React.',
    },
    en: {
      tag: 'Full-stack',
      title: 'Task Manager + Book Library API',
      text: 'Two REST APIs organized as a monorepo, with a React front end.',
    },
  },
]

export const timeline = [
  {
    age: 12,
    pt: { title: 'A curiosidade', text: 'Programação, hacking e pentesting: comecei querendo entender como as coisas funcionam por dentro.' },
    en: { title: 'Curiosity', text: 'Programming, hacking and pentesting: it started with wanting to know how things work under the hood.' },
  },
  {
    age: 14,
    pt: { title: 'Estudo por conta própria', text: 'Primeiros cursos em plataformas online, aprendendo no meu ritmo e construindo pelo caminho.' },
    en: { title: 'Self-taught', text: 'First courses on online platforms, learning at my own pace and building along the way.' },
  },
  {
    age: 16,
    pt: { title: '30+ cursos certificados', text: 'Mais de trinta cursos concluídos com certificado.' },
    en: { title: '30+ certified courses', text: 'Over thirty courses completed with certificates.' },
  },
  {
    age: 18,
    pt: { title: 'Ciência da Computação', place: 'Universidade de Passo Fundo', text: 'Entrei no bacharelado, com previsão de conclusão em 2029.' },
    en: { title: 'Computer Science', place: 'Universidade de Passo Fundo', text: "Started my bachelor's degree, expected to graduate in 2029." },
  },
  {
    age: 18,
    pt: { title: 'Cofundador da Katalyst', text: 'Agência que entrega sites e automações com IA para negócios locais, com expansão em teste para EUA e Canadá.' },
    en: { title: 'Co-founded Katalyst', text: 'Agency delivering websites and AI automation to local businesses, now testing the US and Canada.' },
  },
  {
    age: 18,
    pt: { title: 'Projetos no GitHub', text: 'Em paralelo, APIs em FastAPI, front-ends em React e um marketplace de cursos.' },
    en: { title: 'Shipping on GitHub', text: 'In parallel: FastAPI back ends, React front ends and a courses marketplace.' },
  },
  {
    age: 19,
    pt: { title: 'Dois jogos publicados', text: 'Um em dupla e outro sozinho, de ponta a ponta.' },
    en: { title: 'Two games shipped', text: 'One as a duo and one solo, end to end.' },
  },
]

export const ui = {
  pt: {
    nav: { home: 'Início', about: 'Sobre', journey: 'Trajetória', work: 'Projetos', contact: 'Contato' },
    intro: ['Bem-vindo ao meu', 'Portfólio'],
    status: 'Aberto a estágio',
    role: ['Software', 'Engineer'],
    typed: ['Python & FastAPI', 'APIs e back-end', 'automação de processos', 'agentes com LLMs'],
    heroText: 'Desenvolvo produtos de ponta a ponta: APIs, automações e integrações que resolvem problemas reais de negócios.',
    hints: ['↓ veja meus projetos abaixo', '↗ aberto a estágio remoto'],
    scroll: 'rolar',
    aboutTitle: 'Sobre mim',
    who: {
      title: 'Quem sou eu',
      text: 'Estudante de Ciência da Computação e cofundador da Katalyst. Programo desde os 12 anos e gosto de construir coisas que as pessoas usam de verdade: sites, automações, APIs e jogos.',
    },
    approach: {
      title: 'Como trabalho',
      text: 'Código limpo, entregas pequenas e frequentes, e entender o porquê de cada decisão antes de escrever a primeira linha. Aprendo construindo.',
    },
    detailsTitle: 'Detalhes',
    details: [
      { k: 'Nome', v: 'Luís Fernando' },
      { k: 'Local', v: 'Passo Fundo, RS' },
      { k: 'E-mail', v: 'luis.flex72@gmail.com', href: 'mailto:luis.flex72@gmail.com' },
      { k: 'Formação', v: 'Ciência da Computação · UPF' },
      { k: 'Idiomas', v: 'Português, inglês avançado' },
      { k: 'Disponibilidade', v: 'Remoto · 30 h/semana' },
    ],
    marquee: ['Olá, eu sou o Luís', 'Software Engineer'],
    aboutText:
      'Estudante de Ciência da Computação na Universidade de Passo Fundo, programando desde os 12 anos. Cofundei a Katalyst, onde entrego sites, automações e agentes de atendimento para negócios locais. Aprendo rápido, construindo, e gosto de entender o porquê de cada decisão. A IA faz parte do meu fluxo de trabalho, como ferramenta para ir mais longe.',
    quote: 'Construir, aprender, evoluir.',
    cv: 'Baixar CV',
    seeWork: 'Ver projetos',
    stats: [
      { n: '2', label: 'jogos publicados' },
      { n: '1', label: 'agência cofundada' },
      { n: '30+', label: 'cursos certificados' },
    ],
    journeyTitle: 'Trajetória',
    age: 'anos',
    workTitle: 'Projetos',
    workSub: 'Alguns dos projetos que construí.',
    tabs: { projects: 'Projetos', stack: 'Stack' },
    groups: { lang: 'Linguagens', back: 'Back-end', ai: 'IA & LLMs', auto: 'Automação', front: 'Front-end & deploy' },
    links: { demo: 'Ver ao vivo', demo2: 'Jogo 2', repo: 'Código', soon: 'em breve' },
    contactTitle: 'Vamos conversar',
    contactSub: 'Tem uma vaga, um projeto ou uma ideia? Me manda uma mensagem.',
    form: { name: 'Seu nome', email: 'Seu e-mail', message: 'Sua mensagem', send: 'Enviar mensagem' },
    connect: 'Me encontre em',
    footer: 'Feito com React e Vite. Hospedado na Vercel.',
  },
  en: {
    nav: { home: 'Home', about: 'About', journey: 'Journey', work: 'Work', contact: 'Contact' },
    intro: ['Welcome to my', 'Portfolio'],
    status: 'Open to internships',
    role: ['Software', 'Engineer'],
    typed: ['Python & FastAPI', 'APIs & back ends', 'process automation', 'LLM agents'],
    heroText: 'I build products end to end: APIs, automations and integrations that solve real business problems.',
    hints: ['↓ explore my work below', '↗ open to remote internships'],
    scroll: 'scroll',
    aboutTitle: 'About me',
    who: {
      title: 'Who I am',
      text: 'Computer Science student and co-founder of Katalyst. I have been programming since I was 12 and I like building things people actually use: websites, automations, APIs and games.',
    },
    approach: {
      title: 'How I work',
      text: 'Clean code, small and frequent releases, and understanding the why behind each decision before writing the first line. I learn by building.',
    },
    detailsTitle: 'Details',
    details: [
      { k: 'Name', v: 'Luís Fernando' },
      { k: 'Location', v: 'Passo Fundo, Brazil' },
      { k: 'Email', v: 'luis.flex72@gmail.com', href: 'mailto:luis.flex72@gmail.com' },
      { k: 'Education', v: 'Computer Science · UPF' },
      { k: 'Languages', v: 'Portuguese, advanced English' },
      { k: 'Availability', v: 'Remote · 30 h/week' },
    ],
    marquee: ["Hello, I'm Luís", 'Software Engineer'],
    aboutText:
      "Computer Science student at Universidade de Passo Fundo, programming since I was 12. I co-founded Katalyst, where I deliver websites, automations and support agents for local businesses. I learn fast by building, and I like understanding the why behind each decision. AI is part of my workflow, as a tool to go further.",
    quote: 'Build, learn, grow.',
    cv: 'Download CV',
    seeWork: 'View work',
    stats: [
      { n: '2', label: 'games shipped' },
      { n: '1', label: 'agency co-founded' },
      { n: '30+', label: 'certified courses' },
    ],
    journeyTitle: 'Journey',
    age: 'age',
    workTitle: 'Work',
    workSub: 'Some of the things I have built.',
    tabs: { projects: 'Projects', stack: 'Stack' },
    groups: { lang: 'Languages', back: 'Back-end', ai: 'AI & LLMs', auto: 'Automation', front: 'Front-end & deploy' },
    links: { demo: 'Live', demo2: 'Game 2', repo: 'Code', soon: 'soon' },
    contactTitle: "Let's talk",
    contactSub: 'Have a role, a project or an idea? Send me a message.',
    form: { name: 'Your name', email: 'Your email', message: 'Your message', send: 'Send message' },
    connect: 'Find me on',
    footer: 'Built with React and Vite. Hosted on Vercel.',
  },
}
