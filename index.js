"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = readline_1.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
rl.on('line', function (line) {
    var reverseLine = line.split('').reverse().join('');
    console.log(reverseLine);
});
