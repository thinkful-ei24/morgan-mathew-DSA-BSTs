
class BinarySearchTree {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key = null, value = null) {
    // Special case: Tree is empty
    if (this.key === null) {
      this.key = key;
      this.value = value;
      return;
    }
    if (key < this.key) {
      if (this.left === null) this.left = new BinarySearchTree(key, value, this);
      else this.left.insert(key, value);
    }
    else {
      if (this.right === null) this.right = new BinarySearchTree(key, value, this);
      else this.right.insert(key, value);
    }
  }

  find(key) {}

  remove(key) {}

}

function main() {
  const tree = new BinarySearchTree(5);
  tree.insert(2);
  tree.insert(19);
  tree.insert(1);
  tree.insert(4);
  tree.insert(15);
  tree.insert(10);
  tree.insert(17);
  tree.insert(20);
  tree.insert(25);

}
main();

module.exports = BinarySearchTree;