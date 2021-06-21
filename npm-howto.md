## Inicializar o npm no nosso projeto

O npm init sem parâmetros abre um questionário sobre as configurações do projeto

> OBS.: O '$' não faz parte do comando, só indica que o comando deve ser executado em um terminal

```bash
$ npm init
```

O `npm init -y` serve para responder "sim" para todas as perguntas do questionário, considerando os valores padrão

```bash
$ npm init -y
```

## `package.json`

O package.json é o arquivo de configuração do NPM para o nosso projeto. Nele ficam gravadas todas as informações, dependências e scripts do projeto

## Dependências

Uma dependência é uma porção de código que foi construída por outros desenvolvedores e pode ser instalada para que possamos usar as soluções prontas

Pra instalar uma dependência, usamos o comandos `npm install nome-dependencia`

```bash
$ npm install chalk
```

Caso um pacote tenha suas próprias dependências, o NPM automaticamente resolve e baixa as dependências necessárias. Todos os pacotes baixados pelo NPM ficam na pasta `node_modules`

Todas as depências do nosso projeto ficam gravadas no objeto `"dependencies"` dentro do arquivo `package.json`

Ao executar o comando npm install sem parâmetros, o NPM automaticamente instala todas as dependências listadas no objeto dependencies

```bash
$ npm install
```

Para usarmos uma dependência, podemos importá-la chamando-a somente pelo nome, pois o Node automaticamente resolve o caminho para pacotes instalados pelo NPM

[Ver index.js linha 1](https://github.com/rschpdr/52-node-intro/blob/1e6caea7a341abe75a9702c12d3963f2989986e7/index.js#L1)

Como os pacotes podem ocupar muito espaço de armazenamento no computador, não subimos a pasta `node_modules` para o Github. Assim, toda vez que alguém (ou você em outro dispositivo) clonar um projeto, é necessário executar o `npm install`. Para ignorar a pasta `node_modules` no Git, usamos o arquivo `.gitignore`

## Scripts

No `package.json`, um `script` nada mais é do que um 'apelido' para um comando de terminal. Sua função é simplesmente encurtar o que precisamos digitar

Para executar um script pelo NPM, usamos a sintaxe `npm run nome-do-script`

```bash
$ npm run start
```

Alguns scripts são especiais e não precisam da palavra-chave run

```bash
$ npm start
```

Lista de script que não precisam do run:

https://docs.npmjs.com/cli/v6/using-npm/scripts#life-cycle-operation-order
