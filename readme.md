

<h1 align="center">
     ♻️ <a href="#" alt="site do ecoleta"> App Frentista Convênio</a>
</h1>

<h3 align="center">
    App para ler placas, integrar com sistema de seguradoras e gerar cupom de desconto para os clientes.
</h3>


<h4 align="center">
	🚧   Em desenvolvimento 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#-funcionalidades)
   * [Layout](#-layout)
     * [Mobile](#mobile)
     * [Web](#web)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando o Backend (servidor)](#user-content--rodando-o-backend-servidor)
     * [Rodando a aplicação web (Frontend)](#user-content--rodando-a-aplicação-web-frontend)
   * [Tecnologias](#-tecnologias)
     * [WebSite](#user-content-website--react----typescript)
     * [Server](#user-content-server--nodejs----typescript)
     * [Mobile](#user-content-mobile--react-native----typescript)
   * [Contribuidores](#-contribuidores)
   * [Como contribuir no projeto](#-como-contribuir-no-projeto)
   * [Autor](#-autor)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

♻️ AppFrentistaConvenio - é uma forma de conectar empresas parceiras de clientes(Postos) do PostoAki no intuito de usar algum identificador externo para gerar cupom de descontos.

---

## ⚙️ Funcionalidades

- [x] Ler QRCode do painel do PostoAqui e receber:
  - [x] uuidEmpresa
  - [x] urlRede

- [ ] O frentista tem acesso ao aplicativo móvel, onde podem:
  - [x] digitar uma placa de carro para gerar um cupom de desconto;
    - [ ] limitar tamanho do campo de placa
  - [ ] digitar codigo gerado pelo cliente no app e gerar um cupom de desconto;
  - [ ] escanear uma placa de carro para gerar um cupom de desconto;

- [ ] Gerar modals para responder as açoes do frentista do posto:
  - [ ] Acão de sucesso - mostrar codigo com QRCode;
  - [ ] Erro de conexão - mostrar erro de conexao;
  - [ ] Erro de cliente inadiplente - mostrar erro codigo cliente inadiplente;
  - [ ] Erro de placa não cliente - mostrar erro codigo de nao cliente;

-
---

## 🎨 Layout

O layout da aplicação está disponível no Figma:

// fazer layout no figma 

<a href="#">
  <img alt="Made by tgmarinho" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>


### Mobile

// fazer layout como no seguinte exemplo

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/home-mobile.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="./assets/detalhes-mobile.svg" width="200px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em três partes:
1. Backend (API PostoAki) 
3. Mobile (pasta mobile)

💡Para o Mobile funcionar precisa que o Backend esteja sendo executado para funcionar.

⚠️ Não esquecer de fazer cadastro do grupo de desconto e de integração no painel do PostoAki.
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Ionic](https://ionicframework.com/), [Angular](https://cli.angular.io/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

Usar a API do PostoAki 

<p align="center">
  <a href="https://insomnia.rest/run/?label=App%20OCR&uri=https%3A%2F%2Fgithub.com%2Frenancesarr%2Fionic-qr-scanner%2Fblob%2Fmain%2FInsomnia_2021-02-15.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


#### 🧭 Rodando a aplicação (Mobile)

```bash

# Clone este repositório
$ git clone https://github.com/renancesarr/ionic-qr-scanner.git

# Acesse a pasta do projeto no seu terminal/cmd
$cd ionic-qr-scanner

# Instale as dependências
$ npm install

# Gerar pasta www para iniciar o android
$ ionic build

# Iniciar o capacitor e android
$ ionic capacitor add android

# Copiar arquivos web para nativo
$ ionic capacitor copy android

# Execute a aplicação em modo de desenvolvimento
$ ionic capacitor run android -l --external

# A aplicação será aberta na porta:8100 - acesse http://localhost:8100

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### []**Mobile**  ([Ionic Framework](https://ionicframework.com/)  + [CapacitorJs](https://capacitorjs.com/)  + [TypeScript](https://www.typescriptlang.org/))


-   **[cordova-plugin-qrscanner](https://github.com/bitpay/cordova-plugin-qrscanner)
)**

> Veja o arquivo  [package.json](https://github.com/renancesarr/ionic-qr-scanner/blob/main/package.json)

#### [](https://github.com/tgmarinho/Ecoleta#utilit%C3%A1rios)**Utilitários**

-   Protótipo:  **[Figma](https://www.figma.com/)**  →  **[Protótipo (Ecoleta)](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
-   Ícones:  **[Feather Icons](https://feathericons.com/)**,  **[Font Awesome](https://fontawesome.com/)**
-   Fontes:  **[Ubuntu](https://fonts.google.com/specimen/Ubuntu)**,  **[Roboto](https://fonts.google.com/specimen/Roboto)**

