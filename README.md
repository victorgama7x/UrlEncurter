# Meu Projeto Node.js com TypeScript, Prisma e SQLite

Este projeto é uma API backend construída usando Node.js e TypeScript, que utiliza o Prisma ORM para gerenciar um banco de dados SQLite. A ideia é criar uma aplicação simples, organizada e fácil de manter, perfeita para quem está começando ou quer uma base para projetos futuros.

Tecnologias usadas:

- Node.js para o ambiente de execução JavaScript no servidor
- TypeScript para garantir tipagem e melhor estrutura no código
- Prisma ORM para facilitar o acesso ao banco SQLite
- SQLite como banco leve, ótimo para desenvolvimento e pequenos projetos
- dotenv para gerenciar variáveis de ambiente de forma segura
- Fastify como framework web leve e rápido
- nanoid para gerar identificadores únicos curtos para URLs

Como usar:

1. Clone o repositório:
   git clone https://github.com/seu-usuario/seu-projeto.git
   cd UrlEncurter

2. Instale as dependências:
   npm install

3. Crie o arquivo .env na raiz do projeto com as variáveis necessárias:
   DATABASE_URL=\"file:./dev.db\"

4. Configure o banco de dados com Prisma:
   npx prisma migrate dev --name init
   npx prisma generate

5. Inicie o servidor:
   npm run dev

Por padrão, o servidor roda em http://localhost:3000

Uso da API:

POST /shorten — Encurta uma URL

- Envie um JSON com a chave \"url\" no corpo da requisição:
  { \"url\": \"https://exemplo.com\" }
- Resposta esperada:
  { \"message\": \"http://localhost:3000/abc123\" }

GET /:code — Redireciona para a URL original usando o código encurtado

- Exemplo: acessar http://localhost:3000/abc123 irá redirecionar para https://exemplo.com (caso o código exista)

Scripts úteis:

- npm run dev - Roda o servidor com recarga automática usando Fastify
- npm run build - Compila o TypeScript para JavaScript na pasta dist/
- npm start - Executa o código compilado em ambiente de produção
