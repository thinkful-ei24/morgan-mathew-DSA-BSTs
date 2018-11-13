'use strict';

const BST = require('./BinarySearchTree');

/* Third largest node
Write an algorithm to find the third largest node in a binary search tree
*/
//       10                 
//    7      13
//  4  9   12  15
// 2  8  11

//       10                 
//    7      13
//  4  9   12  
// 2      11
//
// Create a Queue of size 3 (is there a built in one??) -> Array push and unshift
//   if (node)
//     Put value into the Queue
//     Traverse Right
//   else
//     return queue.pop()
//   Instead
//   Traverse all the way to the right
//   if
//

function print(root) {

  const array = [];

  function traverseBST(root) {
    if (array.length > 2) {
      return;
    }
    if (root) {
      if (root.right) traverseBST(root.right, array);
      array.push(root.key);
      if (root.left) traverseBST(root.left, array);
    }
  }

  traverseBST(root);

  return array[2];
}

function main() {
  const tree = new BST();
  tree.insert(10);
  tree.insert(7);
  tree.insert(13);
  tree.insert(4);
  tree.insert(9);
  tree.insert(12);
  tree.insert(15);
  tree.insert(2);
  
  // print(tree)

  //       10                 
//    7      13
//  4  9   12  
// 2      11
//
  const newTree = new BST();
  newTree.insert(10);
  newTree.insert(7);
  newTree.insert(13);
  newTree.insert(7);
  newTree.insert(4);
  newTree.insert(9);
  newTree.insert(12);
  newTree.insert(2);
  newTree.insert(11);
  console.log(print(newTree))
}

main();