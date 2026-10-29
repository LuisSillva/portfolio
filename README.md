# luis.dev — Portfólio

Portfólio pessoal de **Luís Fernando**, estudante de Ciência da Computação na Universidade de Passo Fundo e cofundador da Katalyst.

🔗 **Site:** [link da Vercel aqui]

![Preview do portfólio](./docs/preview.png)

## Sobre o projeto

Uma single-page em React com visual escuro e minimalista, pensada para apresentar minha trajetória, meus projetos e minha stack. O site é bilíngue (português e inglês) e responsivo, e tem animações feitas sem nenhuma biblioteca externa.

### Destaques

- **Crachá interativo** com física de pêndulo: balança sozinho, pode ser arrastado e inclina em 3D seguindo o cursor.
- **Ondas animadas** no hero, desenhadas em SVG e atualizadas a cada frame.
- **Faixa de texto gigante** que rola em sentidos opostos e acelera com o scroll.
- **Linha do tempo** que se preenche conforme a página é rolada.
- **Micro-interações**: botões magnéticos, brilho que acompanha o mouse nos cards e entrada em cascata dos elementos.
- **PT / EN** com troca instantânea e preferência salva no navegador.
- **Acessibilidade**: navegação por teclado, contraste adequado e respeito à opção de reduzir movimento do sistema.

## Stack

| Camada | Tecnologia |
| --- | --- |
| UI | React 19 |
| Build | Vite |
| Estilo | CSS puro, com custom properties |
| Animações | requestAnimationFrame, IntersectionObserver e transições CSS |
| Deploy | Vercel |

Sem frameworks de UI e sem bibliotecas de animação: o bundle final fica em cerca de 80 KB gzip.

## Estrutura

```
src/
├── components/     # Seções do site (Hero, About, Journey, Work, Contact…)
│   ├── Badge.jsx   # Crachá com física de pêndulo
│   ├── Wave.jsx    # Ondas animadas do hero
│   ├── Marquee.jsx # Faixa de texto rolando
│   └── hooks.js    # Reveal on scroll, digitação, seção ativa, interações
├── data/
│   └── content.js  # Todo o conteúdo do site, em PT e EN
├── i18n.jsx        # Contexto de idioma
└── styles.css      # Tokens de design e estilos
```

Todo o texto fica em `src/data/content.js`. Para adicionar um projeto ou um item na trajetória, basta editar esse arquivo, sem mexer nos componentes.

## Rodando localmente

Requer Node.js 20 ou mais recente.

```bash
git clone https://github.com/LuisSillva/portfolio.git
cd portfolio
npm install
npm run dev
```

O site abre em http://localhost:5173.

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Gera a versão de produção em `dist/` |
| `npm run preview` | Serve a build de produção localmente |
| `npm run lint` | Verifica o código com oxlint |

## Próximos passos

- [ ] Rota `/api/contact` em FastAPI para o formulário enviar mensagens direto
- [ ] Assistente que responde perguntas sobre meus projetos
- [ ] Páginas de detalhe para cada projeto

## Contato

- E-mail: luis.flex72@gmail.com
- LinkedIn: [linkedin.com/in/luis-silva-zx0y](https://linkedin.com/in/luis-silva-zx0y/)
- GitHub: [github.com/LuisSillva](https://github.com/LuisSillva)
