
# Desafio Técnico - Allugator 

Projeto desenvolvido como etapa de teste técnico para a empresa Allugator.
Neste projeto foi criado uma aplicação web que disponibiliza smartphones por assinatura.

A aplicação está totalmente dockerizada necessitando apenas subir os containers para entrar em funcionamento.
## Screenshots

![App Screenshot](https://github.com/saulomagalhaes/allugator-challenge/blob/main/assets/screen1.png?raw=true)
![App Screenshot](https://github.com/saulomagalhaes/allugator-challenge/blob/main/assets/screen2.png?raw=true)


## Autores

- [@saulomagalhaes](https://www.linkedin.com/in/sauloam/)


## Stack utilizada

**Front-end:** React e Styled Components.

**Back-end:** Node, Express, JWT, Typescript, MySQL, Sequelize, Mocha, Chai, Sinon, Swagger.


## Instalação

Requisitos:
- Ter o Docker instalado em sua máquina.

Link do tutorial para instalar o docker: 

- [Docker](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-pt)

Logo após clone o projeto:

```bash
  git clone git@github.com:saulomagalhaes/allugator-challenge.git
```

Entre no diretório do projeto:

```bash
  cd allugator-challenge && cd app
```

Suba os containers Docker:

```bash
  docker-compose up -d
```

    
## Documentação
Após a aplicação subir, acesse os links abaixo para conferir o funcionamento e a documentação.

[Aplicação](http://localhost:3000/)

[Documentação](http://localhost:3001/doc/)


## Rodando os testes

Para rodar os testes, rode o seguintes comandos

Entra no modo interativo:
```bash
  docker container exec -it app_backend /bin/sh
```

Roda os testes de integração:
```bash
  npm test
```

## Pontos a melhorar

- Realização de testes no frontend;
- Melhorias na componetização;
- Melhorias na responsividade.

## Encerrar a aplicação
Para encerrar a aplicação rode o seguinte comando:
```bash
  docker-compose down
```
