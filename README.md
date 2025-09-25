🎵 MelodyAPI
Descrição

MelodyAPI é uma API de gerenciamento de artistas e músicas, permitindo criar, listar, atualizar e deletar registros de forma simples e eficiente. Possui busca inteligente por nome (case-insensitive) e estrutura organizada para facilitar manutenção e escalabilidade.

🛠 Tecnologias utilizadas

Node.js

Express

Sequelize (ORM)

Postgres

TypeScript

🚀 Funcionalidades

GET /artists → Retorna todos os artistas.

GET /artists?name=xxx → Retorna artistas filtrados pelo nome (busca case-insensitive).

POST /artists → Cria um novo artista, evitando duplicidade.

PUT /artists/:id → Atualiza um artista pelo ID.

DELETE /artists/:id → Deleta um artista pelo ID.

💾 Pré-requisitos

Node.js >= 18

Postgres instalado e configurado

⚡ Instalação

Clone o repositório:

git clone <URL_DO_REPO>


Instale as dependências:

npm install


ou

pnpm install


Crie um arquivo .env com suas variáveis de ambiente:

DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=


Rode as migrations ou sincronize os modelos com o banco (Sequelize):

Exemplo mental: sequelize.sync() ou migrations scripts.

Execute a API em modo desenvolvimento:

npm run dev

📝 Exemplos de requisições

Listar todos os artistas:

GET http://localhost:3333/artists


Buscar artistas por nome:

GET http://localhost:3333/artists?name=bruno


Criar um artista:

POST http://localhost:3333/artists
Body:
{
  "name": "Kim SeokJin",
  "description": "Vocalista do BTS"
}


Atualizar um artista:

PUT http://localhost:3333/artists/:id
Body:
{
  "name": "Novo Nome",
  "description": "Nova descrição"
}


Deletar um artista:

DELETE http://localhost:3333/artists/:id

🔧 Estrutura de pastas
src/
 ├─ controllers/
 ├─ services/
 ├─ models/
 ├─ routes/
 ├─ middlewares/
 └─ server.ts