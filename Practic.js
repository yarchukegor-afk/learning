"use strict";
const promt = require("prompt-sync")();
let name = promt("Введи своє імя")
console.log(`Привіт, ${name} , гарного дня!`)
let age = promt(`Введи свій вік ${name}`)
console.log(`Ти вже дорослий ${name}. Тобі вже аж ${age}!`)
