"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El árbol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  size() {
    let count = 1;
    if (this.left !== null) count += this.left.size();
    if (this.right !== null) count += this.right.size();
    return count;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        const newTree = new BinarySearchTree(value);
        this.left = newTree;
      } else {
        return this.left.insert(value);
      }
    } else {
      if (value >= this.value) {
        if (!this.right) {
          const newTree = new BinarySearchTree(value);
          this.right = newTree;
        } else {
          return this.right.insert(value);
        }
      }
    }
  }

  contains(value) {
    if (value === this.value) return true;

    if (value < this.value && this.left !== null) {
      return this.left.contains(value);
    } else if (value > this.value && this.right !== null) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }

  depthFirstForEach(cb, orden) {
    //https://blog.bitsrc.io/depth-first-search-of-a-binary-tree-in-javascript-874701d8210a
    if (orden === "in-order" || !orden) {
      if (this.left) this.left.depthFirstForEach(cb, orden);
      cb(this.value);
      if (this.right) this.right.depthFirstForEach(cb, orden);
    }
    if (orden === "post-order") {
      if (this.left) this.left.depthFirstForEach(cb, orden);
      if (this.right) this.right.depthFirstForEach(cb, orden);
      cb(this.value);
    }
    if (orden === "pre-order") {
      cb(this.value);
      if (this.left) this.left.depthFirstForEach(cb, orden);
      if (this.right) this.right.depthFirstForEach(cb, orden);
    }
  }
  breadthFirstForEach(cb, arr = []) {
    cb(this.value);

    if (this.left) {
      arr.push(this.left);
    }
    if (this.right) {
      arr.push(this.right);
    }

    if (arr.length) {
      arr.shift().breadthFirstForEach(cb, arr);
    }
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
