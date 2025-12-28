# Mongo Sync

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.0+-blue.svg)](https://www.mongodb.com/)

Um projeto full-stack para sincronização e gerenciamento de dados com MongoDB. Desenvolvido com Node.js no backend e uma interface web simples no frontend, o Mongo Sync oferece uma solução robusta para operações CRUD em usuários, com foco em simplicidade e eficiência.

## 🚀 Funcionalidades

- **Gerenciamento de Usuários**: Operações completas de CRUD (Criar, Ler, Atualizar, Deletar) para usuários.
- **Sincronização com MongoDB**: Integração direta com banco de dados MongoDB para armazenamento persistente.
- **API RESTful**: Backend construído com Express.js, fornecendo endpoints REST para interações.
- **Interface Web**: Frontend responsivo para interação com os dados via navegador.
- **Estrutura Modular**: Código organizado em controllers, models, routes e views para fácil manutenção.
- **Configuração Flexível**: Suporte a variáveis de ambiente para configurações de banco de dados.

## 🛠️ Tecnologias Utilizadas

### Backend

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework web para Node.js, usado para construir a API.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB, facilitando interações com o banco.

### Frontend

- **HTML5**: Estrutura da página web.
- **CSS3**: Estilização da interface.
- **JavaScript (Vanilla)**: Lógica do lado cliente para interações dinâmicas.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou Atlas)
- [Git](https://git-scm.com/) para clonar o repositório

## 🔧 Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/VictorAnizauBarros/mongo-sync.git
   cd mongo-sync
   ```

2. **Instale as dependências do backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Configure o banco de dados:**

   - Certifique-se de que o MongoDB está rodando localmente ou configure uma conexão com MongoDB Atlas.
   - Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:
     ```
     MONGODB_URI=mongodb://localhost:27017/mongo-sync
     PORT=3000
     ```
     Ajuste a URI conforme necessário para sua configuração.

4. **Instale dependências do frontend (se houver):**
   - O frontend é estático, então não há dependências adicionais. Apenas certifique-se de que os arquivos estão na pasta `frontend`.

## 🚀 Como Usar

### Executando o Backend

1. Navegue para a pasta do backend:

   ```bash
   cd backend
   ```

2. Inicie o servidor:

   ```bash
   npm start
   ```

   Ou para desenvolvimento com auto-reload:

   ```bash
   npm run dev
   ```

   O servidor estará rodando em `http://localhost:3000`.

### Executando o Frontend

1. Abra o arquivo `frontend/index.html` em seu navegador web.

   - Você pode usar um servidor local simples, como o Live Server do VS Code, ou simplesmente abrir o arquivo diretamente.

2. A interface permitirá interagir com a API do backend para gerenciar usuários.

### Endpoints da API

- `GET /api/users` - Lista todos os usuários
- `POST /api/users` - Cria um novo usuário
- `GET /api/users/:id` - Obtém um usuário específico
- `PUT /api/users/:id` - Atualiza um usuário
- `DELETE /api/users/:id` - Deleta um usuário

Exemplo de uso com curl:

```bash
# Criar um usuário
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"name": "João Silva", "email": "joao@example.com"}'
```

## 📁 Estrutura do Projeto

```
mongo-sync/
├── backend/
│   ├── app.js              # Arquivo principal da aplicação
│   ├── server.js           # Configuração do servidor
│   ├── package.json        # Dependências e scripts do backend
│   └── src/
│       ├── config/
│       │   └── database.js # Configuração da conexão com MongoDB
│       ├── controllers/
│       │   └── userController.js # Lógica de controle para usuários
│       ├── models/
│       │   └── User.js     # Modelo de dados para usuários
│       └── routes/
│           └── userRoutes.js # Definição das rotas da API
├── frontend/
│   ├── index.html          # Página principal da interface web
│   ├── css/
│   │   └── style.css       # Estilos da interface
│   └── js/
│       └── app.js          # Lógica JavaScript do frontend
└── README.md               # Este arquivo
```

## 🤝 Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para contribuir:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/NovaFeature`).
5. Abra um Pull Request.

Por favor, leia o [Código de Conduta](CODE_OF_CONDUCT.md) antes de contribuir.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

- **Autor**: Victor Anizau Barros
- **GitHub**: [VictorAnizauBarros](https://github.com/VictorAnizauBarros)
- **Linkedin**: [Victor Hugo Anizau Barros](https://www.linkedin.com/in/victor-hugo-anizau-barros-65a775322/) <!-- Substitua pelo seu email -->

---

⭐ Se este projeto foi útil para você, dê uma estrela no GitHub!
