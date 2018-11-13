const BST = require("./BinarySearchTree");
const height = require("./1-height-of-BST");
// computational O(2^N)
// space 0(1)

// memoization
// O(N) worst
// O(N) space
function isBalanced(root) {
  if (root === null) {
    return true;
  }
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(height(root.left) - height(root.right)) <= 1
  );
}
/*
       5
      4  6
     3    7
    2       8
*/

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
  tree.insert(28);
  tree.insert(0);
  tree.insert(-1);

  console.log(isBalanced(tree)); // expect false
}

main();
