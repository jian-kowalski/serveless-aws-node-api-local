# serveless-aws-node-api-local

O objetivo desse projeto é mostrar como podemos testar e executar, localmente, projetos serverless. 

As tecnologias utilizadas são: 

## Começando

Para executar o projeto, será necessário instalar os seguintes recursos:

- [Nodejs14x: Necessário para executar o projeto Node](https://nodejs.dev/)
- [Postman - Para execução e validação do projeto](https://www.postman.com/downloads/)
- [Git - Para realizar o clone do projeto](https://git-scm.com/downloads)

## Desenvolvimento

Para iniciar, é necessário clonar o projeto do GitHub num diretório de sua preferência:

```shell
cd "diretório de sua preferencia"
git clone https://github.com/jian-kowalski/serveless-aws-node-api-local
```

### Construção

Para construir o projeto com o npm, no diretório raiz executar os comando abaixo:

```shell
npm install && npm install -g serverless 
```

### Execução 

Para executar o projeto com o npm, no diretório raiz executar os comando abaixo:

```shell
npm run start:local ou serverless offline
```

OBS: Certifique-se de alterar os valores de acesso ao banco de dados no arquivo config.json

Para executar o projeto com o docker, no diretório raiz executar os comando abaixo:

```shell
docker-compose up 
```

### Postman

Para ter acesso a validação da API, após a execução do projeto, abrir o arquivo Serverless-Books.postman_collection.

## Licença

Apache License.
