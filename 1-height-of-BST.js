"use strict";

const BST = require("./BinarySearchTree");

/*
Height of a BST
Write an algorithm to find the height of a binary search tree. What is the run 
time of your algorithm?
*/

//            10
//        8       12
//      7   9   11   15
// Base
// if root === null return -1;
// return Math.max( height(left), height(right) ) + 1
//
// print(root) {
//   if (root) {
//     if (root.left) this.left.print();
//     console.log(this.key);
//     if (root.right) this.right.print();
//   }
// }

function height(root) {
  if (root === null) {
    return -1;
  }
  return Math.max(height(root.left), height(root.right)) + 1;
}

function main() {
  const tree = new BST();
  tree.insert(5);
  tree.insert(2);
  tree.insert(19);
  tree.insert(1);
  tree.insert(4);
  tree.insert(15);
  tree.insert(10);
  tree.insert(17);
  tree.insert(20);
  tree.insert(25);
  tree.insert(30);
  console.log(height(tree));
}
// main();

module.exports = height;
