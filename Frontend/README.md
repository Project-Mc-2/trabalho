# Projeto Blog Glorious 💋 – Projeto de Avaliações de Maquiagem

![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)

## Sobre o projeto
O **Blog Glorious** é uma aplicação Fullstack desenvolvida para gerenciar avaliações de produtos de maquiagem. O repositório reúne todas as etapas, códigos e documentações produzidas durante o desenvolvimento do sistema.

Este projeto foi desenvolvido com os conhecimentos adquiridos nas disciplinas do 2º semestre do Curso Técnico de Desenvolvimento de Sistemas do **SENAI Sorocaba - Gaspar Ricardo Júnior**, sob a orientação do Prof. Vedilson Prado. O objetivo é demonstrar a competência na criação de APIs, persistência em Banco de Dados e integração com Frontend.

---

## Tecnologias Utilizadas

### Backend
**Java:** Linguagem base do sistema.
**Spring Boot:** Framework para construção da API REST.

### Banco de Dados
**MySQL:** Gerenciamento e persistência dos dados.

### Frontend
**HTML5 e CSS3:** Estrutura e estilização da interface.
**JavaScript:** Lógica de consumo da API e interatividade.

---

## Tabela de EndPoints

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| GET | /posts/produtos | Lista todos os posts de produtos |
| POST | /posts/produtos | Cria um novo post |
| PUT | /posts/produtos/{id} | Atualiza um post existente |
| DELETE | /posts/produtos/{id} | Exclui um post |

### Estrutura JSON (Exemplo)
**Entrada/Saída:**
json

{ 
  "nomeProduto": "Blush Cloud Crush", 
  "anoLancamento": 2023, 
  "marca": "Too Faced", 
  "opiniao": "Produto com excelente fixação e acabamento natural.", 
  "urlCapa": "[https://encrypted-tbn2.gstatic.com/shopping](https://encrypted-tbn2.gstatic.com/shopping)..." 
}

## Como executar o projeto

### 1. Banco de Dados
Instale o MySQL e crie o banco de dados necessário para o projeto.

### 2. Backend
Instale o Java (JDK) e o Maven/Spring.
Clone o repositório e abra a pasta do Backend no VS Code ou IDE de preferência.
Configure a conexão com o banco de dados.
Execute a aplicação.

### 3. Frontend
Abra a pasta do Frontend no VS Code.
Execute o arquivo index.html (Recomendado usar Live Server).

---

## Organização do Projeto
**Trello:** [Acesse o quadro de tarefas](https://trello.com/b/4Dlu2C58/project-mc)
 **Figma:** [Acesse o protótipo](https://www.figma.com/design/InQI8hgYw9almc9pRkngv5/Sem-t%C3%ADtulo?node-id=0-1&p=f)

---
<p style="color: red;">Desenvolvedores</p>

[Maria Eduarda Norbutas](https://www.linkedin.com/in/maria-norbutas-831ba7368/)
[Miriã Lopes Ferraz](https://www.linkedin.com/in/miri%C3%A3-lopes-ferraz-370035369/)
[Pietra Padilha de Siqueira Gurgel](https://www.linkedin.com/in/pietra-gurgel-130495358/)
[Valentina Senger Spinelli](https://www.linkedin.com/in/valentina-senger-spinelli-53802b325/)
