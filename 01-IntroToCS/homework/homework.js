"use strict";

function BinarioADecimal(num) {
  let bin = num.toString().split("").reverse().join("");
  let decimal = 0;

  for (let i = 0; i < bin.length; i++) {
    let digito = parseInt(bin[i], 10);
    let valor = digito * Math.pow(2, i);
    decimal += valor;
  }
  return decimal;
}

function DecimalABinario(num) {
  if (typeof num !== "number" && num < 0) {
    return `"${num}" no es valido`;
  }
  if (num === 0) {
    return "0";
  }

  let binario = "";

  while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
  }
  return binario;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
