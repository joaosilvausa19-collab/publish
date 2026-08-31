# Envasadora 170 g — Intelligence Center

Protótipo web demonstrativo de Engenharia de Produção para análise de uma linha de envase de iogurte de 170 g.

> **Importante:** os valores exibidos no sistema são dados demonstrativos. Eles não representam medições reais da envasadora.

## O que o projeto contém

- Intelligence Center executivo
- OEE: disponibilidade, performance e qualidade
- Produção planejada x realizada
- Exceções e alertas
- CEP / carta I-MR
- Cp, Cpk, Pp e Ppk
- Pareto por impacto e frequência
- Matriz frequência x impacto
- MTBF e MTTR
- Análise de correlação e regressão demonstrativa
- ANOVA demonstrativa
- Formulação de problema de otimização
- Waterfall e árvore de perdas
- Oportunidades de melhoria
- Ciclo DMAIC
- Qualidade e rastreabilidade dos dados

## Requisitos

- Node.js 20 ou superior
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra a URL informada pelo Vite, normalmente:

```text
http://localhost:5173
```

## Gerar versão de produção

```bash
npm run build
```

A aplicação compilada ficará em `dist/`.

Para testar a build localmente:

```bash
npm run preview
```

## Publicar no Vercel

1. Importe este repositório no Vercel.
2. O framework será identificado como Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Publique.

O arquivo `vercel.json` já contém essa configuração.

## Publicar no GitHub Pages

O repositório inclui `.github/workflows/deploy-pages.yml`.

Depois de enviar o projeto ao GitHub:

1. Vá em **Settings → Pages**.
2. Em **Build and deployment**, escolha **GitHub Actions**.
3. Faça push na branch `main`.
4. O workflow criará a build e fará o deploy.

## Estrutura

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── .nvmrc
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

## Próxima fase

O protótipo foi mantido com dados demonstrativos. A evolução planejada é substituir as constantes simuladas por uma camada de dados real, preservando o mesmo frontend:

```text
PLC / apontamentos / balança
          ↓
   coleta e tratamento
          ↓
      banco de dados
          ↓
       indicadores
          ↓
      dashboard React
```

Nesta etapa não há escrita ou comando sobre a máquina; qualquer futura integração industrial deve começar somente em leitura e ser validada com a equipe responsável pela automação.
