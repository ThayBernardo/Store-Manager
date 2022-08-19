<h1 align="center">Store Manager</h1>

# Sobre 
Construção de uma API utilizando a arquitetura MSC(model-service-controller).

- NodeJS
- SQL
- Sinon
- Chai
- Joi

# O que foi desenvolvido

Aplicação é um sistema de gerenciamento de vendas no formato dropshipping em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Utilizando o banco de dados MySQL para a gestão de dados. Além disso, a API é RESTful.

# Features

- [x] Listagem de produtos.
- [x] Cadastrar produtos.
- [x] Validações para produtos.
- [x] Listagem de vendas.
- [x] Atualização de um produto.
- [x] Deletar um produto.
- [x] Deletar uma venda.
- [x] Cobertura de testes.

# Rodando em Docker
<strong>É necessário que você tenha em sua máquina instalado `node` e `docker`</strong>

>Rode o serviço `node` com o comando:

```bash
docker-compose up -d
``` 

- Esse serviço irá inicializar um container chamado store_manager  e outro store_manager_db.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

>Use o comando:

```bash
docker exec -it store_manager bash
```

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

>Instale as dependências com:

```bash
npm install
```

# Rodando localmente

>Instale as dependências com:

```bash
npm install
```

# Dicas
- Criar o banco de dados e gerar as tabelas:
```bash 
npm run migration
```
- Limpar e popular o banco de dados:
```bash
npm run seed
```
- Iniciar o servidor Node:
```bash
npm start
```
- Iniciar o servidor Node com nodemon:
```bash  
npm run debug
```
- Executar os testes de unidade:
```bash
npm run test:mocha
```
