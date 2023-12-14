"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if (num === 0 || num === 1) return [1];
  if (num < 0) throw Error('"${num}" Solo se aceptan números positivo');

  const factorial = [1];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factorial.push(i);
      num /= i;
    }
  }
  return factorial;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let modificado;
  //recorremos primero el array para saber si esta ordenado
  for (let i = 0; i < array.length - 1; i++) {
    modificado = false; //en este caso estaría ordenado
    //Si no esta ordenado pasamos a este for
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let invertir = array[j];
        array[j] = array[j + 1];
        array[j + 1] = invertir;
        modificado = true;
      }
    }
    if (!modificado) break;
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let actual = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] > actual) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = actual;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let menorValor = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[menorValor]) {
        menorValor = j;
      }
    }
    let auxiliar = array[i];
    array[i] = array[menorValor];
    array[menorValor] = auxiliar;
  }
  return array;
}

// const array = [10, 3, 7, 9, 1, 6, 4, 8, 2, 5]
// console.log(bubbleSort(array));
// console.log(insertionSort(array));
// console.log(selectionSort(array));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
