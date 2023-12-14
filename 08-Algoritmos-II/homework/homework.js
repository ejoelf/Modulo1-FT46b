"use strict";

const { merge } = require("@11ty/eleventy/src/TemplateData");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;

  let pivot = array[0];
  let izq = [];
  let der = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      izq.push(array[i]);
    } else {
      der.push(array[i]);
    }
  }
  return quickSort(izq).concat(pivot).concat(quickSort(der));
}
const array = [3, 7, 9, 1, 6, 4, 8, 2, 5, 10];
console.log(quickSort(array));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array; //Caso base

  let mitadArray = Math.floor(array.length / 2); //Dividimos el array en 2
  let izq = array.slice(0, mitadArray); //parte izquierda
  let der = array.slice(mitadArray); //parte derecha

  function merge(arr1, arr2) {
    let i = 0;
    let j = 0;

    let ordenado = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[i]) {
        ordenado.push(arr1[i]);
        i++;
      } else {
        ordenado.push(arr2[j]);
        j++;
      }
    }
    return ordenado.concat(arr1.slice(i)).concat(arr2.slice(j));
  }
  return merge(mergeSort(izq), mergeSort(der)); //merge sera la nueva función
}
console.log(mergeSort(array));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
