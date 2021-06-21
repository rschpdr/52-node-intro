const chalk = require("chalk");

console.log(chalk.cyan("Hello world!"));

// Como o Node não roda no navegador, não temos acesso à API do DOM

// console.log(document); // undefined
// console.log(window); // undefined

// Importando o módulo de sistema de arquivos do Node
const fs = require("fs");

// Abrir um arquivo através do Node
const file = fs.readFile("./ola.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Could not open the file");
  } else {
    console.log(chalk.yellow(data));
  }
});

// Sistema de módulos
// Módulo === arquivo com extensão .js

// Importando a nossa função de outro arquivo
const func = require("./toUppercase");

console.log(chalk.red(func("pedro resch")));

// Importando uma array de outro arquivo
const foods = require("./foods");

foods.map((food) => console.log(chalk.green(func(food))));
