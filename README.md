# Envasadora 170 g — Intelligence Center

Protótipo web demonstrativo de Engenharia de Produção para análise de uma linha de envase de iogurte de 170 g.

> **Importante:** os valores exibidos no sistema são dados demonstrativos. Eles não representam medições reais da envasadora.

## Plug-and-play

O repositório já está preparado para montar e compilar o dashboard automaticamente. O código principal do dashboard é reconstruído durante a instalação/build a partir do payload versionado, sem configuração manual.

### Rodar no computador

Requer Node.js 20+:

```bash
npm install
npm run dev
```

Abra a URL mostrada pelo Vite, normalmente `http://localhost:5173`.

### Publicação automática

O workflow `.github/workflows/deploy-pages.yml` executa automaticamente em cada atualização da branch `main`:

1. instala as dependências;
2. reconstrói `src/App.jsx`;
3. gera a aplicação com Vite;
4. envia a pasta `dist` para o GitHub Pages.

Se o GitHub Pages ainda não estiver habilitado na conta/repositório, basta ir uma única vez em **Settings → Pages → Build and deployment → Source: GitHub Actions**.

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

## Gerar versão de produção

```bash
npm install
npm run build
```

A aplicação compilada fica em `dist/`.

Para testar a build localmente:

```bash
npm run preview
```

## Vercel

O arquivo `vercel.json` também deixa o projeto pronto para importação direta no Vercel:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Estrutura

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml
├── payload/
│   └── app.001...009.b64gz
├── scripts/
│   └── assemble-app.mjs
├── src/
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── .nvmrc
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

`src/App.jsx` é gerado automaticamente pelo script de montagem antes da execução/build.

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
