const BST = require("./BinarySearchTree");

function isBST(root) {
  if (root === null) return true;

  if (root.left && root.left.value > root.value) return false;
  if (root.right && root.right.value < root.value) return false;

  return isBST(root.left) && isBST(root.right);
}

class BSTNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function main() {
  /*
      5
    7   8
  15 12
  */
  const invalidBST = new BSTNode(5);
  invalidBST.left = new BSTNode(7);
  invalidBST.right = new BSTNode(8);
  invalidBST.left.left = new BSTNode(15);
  invalidBST.left.right = new BSTNode(12);

  const validBST = new BSTNode(5);
  validBST.left = new BSTNode(4);
  validBST.right = new BSTNode(7);
  validBST.left.left = new BSTNode(2);
  validBST.right.left = new BSTNode(6);

  console.log(isBST(validBST)); // EXPECT TRUE
}

main();
