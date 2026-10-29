# Portfólio — Luís Fernando

Site pessoal em React + Vite, bilíngue (PT/EN), pensado para deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em http://localhost:5173.

## Onde mexer

- `src/data/content.js` tem todo o texto do site, os projetos, a trajetória e a stack, em português e inglês. Para adicionar um projeto, copie um item de `projects`.
- Links de projeto com valor `null` aparecem como "em breve". Troque pela URL quando tiver.
- `public/foto.jpg` é a sua foto (crachá e seção Sobre). Sem ela, aparecem as iniciais.
- `public/curriculo.pdf` + `profile.cv: '/curriculo.pdf'` ativa o botão "Baixar CV".
- Imagem de projeto: coloque em `public/projetos/` e adicione `image: '/projetos/nome.jpg'` no projeto.

## Deploy na Vercel

1. Crie um repositório no GitHub e suba o projeto:
   ```bash
   git init
   git add .
   git commit -m "Portfólio: estrutura inicial"
   git branch -M main
   git remote add origin https://github.com/LuisSillva/portfolio.git
   git push -u origin main
   ```
2. Na Vercel, clique em "Add New Project", importe o repositório e mantenha o preset Vite. O deploy sai em cerca de um minuto, e cada push na `main` publica de novo.

## Próximos passos

- Rota `/api/contact` com FastAPI (função Python na Vercel) para o formulário enviar a mensagem sem abrir o app de e-mail.
- Agente "pergunte sobre mim": um chat com LLM que responde sobre os projetos, usando FastAPI no back-end.
