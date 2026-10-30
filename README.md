# RBM Saneamento

### Website institucional da Rubem Saneamento

Apresentação de serviços de manutenção hidráulica, saneamento e atendimento técnico em Viamão — RS.

[**Acessar o site**](https://rbm-saneamento.vercel.app) · [**Repositório**](https://github.com/killxnov/rbm-saneamento)



\


---

## Sobre o projeto

O **RBM Saneamento** é uma landing page institucional desenvolvida para apresentar os serviços da Rubem Saneamento, facilitar o contato com potenciais clientes e centralizar solicitações de orçamento.

A experiência foi pensada para destacar os serviços, transmitir confiança e tornar o contato simples: o visitante conhece as áreas de atuação, preenche os dados da demanda e pode continuar a conversa diretamente pelo WhatsApp.

O site apresenta a atuação da empresa em Viamão, no Rio Grande do Sul, com foco em manutenção hidráulica, sistemas de esgoto, fossas e drenagem, além de informações sobre soluções de saneamento.

## Acesso

- **Produção:** [https://rbm-saneamento.vercel.app](https://rbm-saneamento.vercel.app)
- **Código-fonte:** [https://github.com/killxnov/rbm-saneamento](https://github.com/killxnov/rbm-saneamento)

## Funcionalidades

- **Página institucional:** apresentação da empresa, proposta de atendimento e chamadas para ação.
- **Navegação por seções:** menu com acesso às áreas principais da página e comportamento adaptado para dispositivos móveis.
- **Apresentação de serviços:** categorias interativas de manutenção hidráulica e esgoto, fossas e drenagem, com descrições, imagens e atividades incluídas.
- **Solicitação de orçamento:** formulário com dados de contato, endereço, serviço desejado, urgência e detalhes da demanda.
- **Validação de dados:** verificações de campos obrigatórios, CPF, telefone, e-mail e CEP, com formatação dos dados durante o preenchimento.
- **Consulta de CEP:** integração com a API ViaCEP para buscar informações de endereço e preencher campos relacionados.
- **WhatsApp:** geração de uma mensagem estruturada com os dados preenchidos e abertura da conversa com o atendimento.
- **Atalho flutuante do WhatsApp:** acesso rápido ao canal de contato durante a navegação.
- **Depoimentos:** apresentação animada de avaliações e relatos exibidos na página.
- **Perguntas frequentes:** seção expansível para responder dúvidas recorrentes sobre solicitação, atendimento e orçamento.
- **Rolagem suave:** experiência de navegação aprimorada com Lenis.
- **Layout responsivo:** interface adaptada para desktop, tablet e dispositivos móveis.

## Tecnologias utilizadas

| Tecnologia     | Utilização                                                    |
| -------------- | ------------------------------------------------------------- |
| Next.js 16     | Framework da aplicação e estrutura de páginas com App Router  |
| React 19       | Construção de interfaces e componentes interativos            |
| TypeScript     | Tipagem estática e organização do código                      |
| Tailwind CSS 4 | Estilização e responsividade                                  |
| Lucide React   | Biblioteca de ícones                                          |
| Lenis          | Rolagem suave                                                 |
| Framer Motion  | Recursos de animação disponíveis no projeto                   |
| Zod            | Validação de dados na camada de servidor preparada no projeto |
| Resend         | Integração de e-mail disponível na Server Action do projeto   |

## Como executar localmente

### Pré-requisitos

- Node.js 20.9 ou superior.
- npm.
- Git.

### 1. Clone o repositório

```bash
git clone https://github.com/killxnov/rbm-saneamento.git
```

### 2. Entre na pasta do projeto

```bash
cd rbm-saneamento
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Abra no navegador

Acesse [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

| Comando         | Descrição                                            |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Inicia o servidor local de desenvolvimento.          |
| `npm run lint`  | Executa a análise estática com ESLint.               |
| `npm run build` | Gera a versão otimizada para produção.               |
| `npm run start` | Inicia a aplicação em modo de produção após o build. |

Para testar a versão de produção localmente:

```bash
npm run build
npm run start
```

## Estrutura do projeto

```text
rbm-saneamento/
├── public/                         # Imagens, logotipos e arquivos estáticos
├── src/
│   ├── app/
│   │   ├── actions/
│   │   │   └── sendContact.ts       # Server Action de contato/e-mail
│   │   ├── layout.tsx              # Layout raiz e configurações globais
│   │   └── page.tsx                # Composição da página principal
│   ├── components/
│   │   ├── contact/                # Formulário e componentes de contato
│   │   ├── layout/                 # Navbar e footer
│   │   ├── sections/               # Hero, serviços, depoimentos e FAQ
│   │   └── FloatingWhatsApp.tsx    # Botão flutuante do WhatsApp
│   └── lib/
│       └── contact/                # Tipos, constantes, máscaras e validações
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
└── tsconfig.json
```

## Formulário e integrações

### Fluxo atual de contato

No fluxo de envio utilizado pelo formulário, os dados são validados no navegador e, quando estão corretos, o site prepara uma mensagem com as informações da solicitação e abre o WhatsApp da empresa.

O número utilizado pelo atalho e pelo formulário é configurado no código do projeto. Para alterá-lo, consulte:

```text
src/lib/contact/constants.ts
src/components/FloatingWhatsApp.tsx
```

Mantenha os números no formato internacional, contendo código do país e DDD, somente com dígitos.

### Consulta de CEP

O formulário utiliza a API pública [ViaCEP](https://viacep.com.br/) para consultar o endereço a partir do CEP informado. A consulta depende da disponibilidade do serviço externo e os dados retornados podem ser revisados pelo usuário.

### Integração de e-mail com Resend

O repositório também contém uma Server Action em `src/app/actions/sendContact.ts`, com implementação baseada em Resend e possibilidade de encaminhamento por webhook.

**Observação:** no fluxo atualmente conectado ao hook `useContactForm`, o envio chama a função que abre o WhatsApp. A Server Action do Resend não está conectada a esse fluxo. Portanto, não considere o envio de e-mails ativo apenas por configurar as variáveis abaixo; primeiro é necessário integrar a action ao processo de envio e revisar os dados de remetente e destinatário.

Caso essa integração seja habilitada, as variáveis utilizadas pela Server Action são:

```env
RESEND_API_KEY=
CONTACT_EMAIL=

# Opcionais: webhook de integração com WhatsApp
WHATSAPP_API_URL=
WHATSAPP_API_TOKEN=
```

Crie um arquivo `.env.local` na raiz do projeto para armazenar essas configurações. **Nunca publique chaves, tokens ou credenciais no repositório.**

## Deploy

O projeto possui uma versão publicada na Vercel:

[https://rbm-saneamento.vercel.app](https://rbm-saneamento.vercel.app)

Para publicar uma nova versão, importe o repositório na [Vercel](https://vercel.com/), mantenha as configurações de build compatíveis com os scripts do `package.json` e faça o deploy da branch desejada.

Se a integração de e-mail ou webhook for ativada, configure as respectivas variáveis de ambiente também no painel do ambiente de hospedagem.

## Desenvolvimento e manutenção

Ao evoluir o projeto, procure manter:

- Componentes com responsabilidades bem definidas.
- Tipos e interfaces compartilhados quando fizer sentido.
- Conteúdo das categorias separado da estrutura visual.
- Estilos responsivos e consistentes com a identidade visual.
- Validações de formulário claras e acessíveis.
- Credenciais e dados sensíveis fora do código versionado.

Antes de publicar alterações, execute:

```bash
npm run lint
npm run build
```

## Créditos

Desenvolvido por **Daniel Batista dos Santos**.

Projeto: **RBM Saneamento — Rubem Saneamento**.

---

\<div align="center">

**Saneamento, manutenção e soluções técnicas em Viamão — RS.**

[Visitar o site](https://rbm-saneamento.vercel.app) · [Ver o repositório](https://github.com/killxnov/rbm-saneamento)

\</div>
