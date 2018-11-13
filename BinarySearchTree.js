'use strict';

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

  find(key) {
    //Walk throgh nodes, compare left vs right
    //if key is null, return null
    //if key is found, return value || key if value is null
    if (this.key === key) {
      return this.value || this.key;
    }

    if (this.left && key < this.key) {
      return this.left.find(key);
    } else if (this.right && key > this.key) {
      return this.right.find(key);
    } else {
      // throw new Error('Key Error');
      return null;
    }

  }

  remove(key) {
    //Removing case: two children
    //if this.left and this.right exist
    //  store current node
    //  const successor = findSuccessor()
    //    go right once
    //    go left until this.left === null
    //  currentNode.value,.key = successor.value,.key
    //  return successor.remove(successor.key)
    //
    // Removing Case: One child
    // else if this.left || this.right
    //    if (this.left) 
    //       set successorNode = this.left
    //    parent = this.parent
    //    if(parent.left === this)
    //        parent.left = successorNode
    //        successorNode.parent = parent
    //    if(parent.right === this)
    //        parent.right = successorNode
    //        successorNode.parent = parent
    //    set removalNode = this.left || this.right
    // 
    // Removal Case: Leaf
    //    if(this.parent.left === this)
    //        this.parent.left = null
    //    if(this.parent.right === this)
    //        this.parent.right = null
    // 
  }

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