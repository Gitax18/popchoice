# PopChoice

On PopChoice you can search movie based on your current mood and taste of your movies. We use RAG pipeline to retrive the movies similar to your previous choices and current mood and then recommend them to you along with its brief summary.

## Installation and Usage

### Backend

- Below is the instruction of copying the enviroment variables and running the server

  ```bash
    cd backend # change directory to backend

    cp .env.sample .env # copy the enviroment variable and add your values

    npm install # install the dependencies

    npm start # start the server
  ```

### Frontend

- Installing the dependencies

  ```bash
    cd frontend # change directory to frontend
    npm install # install the dependencies
  ```

- Now update the proxy server endpoint (add your backend port) in the frontend `vite.config.js`

  ```javascript
    server: {
      proxy: {
        "/api": "http://localhost:<BACKEND_PORT>/",
      },
    },
  ```

- Running the server
  ```bash
    npm run dev # Now you can run the server
  ```

## Tech Stack

### Frontend

| **Technology** |  **Tool**   |
| :------------: | :---------: |
|   Build Tool   |    Vite     |
|    Language    | Javascript  |
|    Library     |  React.js   |
|    Styling     | tailwindcss |
|  Remote state  |    axios    |

### Backend

| **Tecnology** |   **Tool**   |
| :-----------: | :----------: |
|    Server     |     Node     |
|   Language    |  Javascript  |
|    Library    |  Express.js  |
|   Database    |   Supabase   |
|    AI SDK     |    OpenAI    |
| AI Framework  | Langchain.js |
| LLM Provider  |     Groq     |

## Important Resources

Below are links to the resources which helps to achive completion of this project.

- [OpenAI SDK: Replace baseUrl and model from Groq](https://platform.openai.com/docs/quickstart)
- [Groq Models](https://console.groq.com/docs/models)
- [Langchain.js](https://v03.api.js.langchain.com/index.html)
- [Supabase](https://supabase.com/)
- [Supabase pgvector](https://supabase.com/docs/guides/database/extensions/pgvector)

## Contact

For any issues or collaboration, feel free to reach out **Gitanshu sankhla**:

[![GitHub-social](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Gitax18) [![LinkedIn-social](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gitanshu-sankhla)
[![Instagram-social](https://img.shields.io/badge/Instagram-%23E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/gitanshusankhla)
