"use strict";

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
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
      if (this.left === null)
        this.left = new BinarySearchTree(key, value, this);
      else this.left.insert(key, value);
    } else {
      if (this.right === null)
        this.right = new BinarySearchTree(key, value, this);
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

  _successor(node) {
    let cursor = node.right;
    while (cursor.left !== null) cursor = cursor.left;
    return cursor;
  }

  remove(key) {
    if (this.key === key) {
      //Removing case: two children
      if (this.left && this.right) {
        const successor = this._successor(this);
        this.key = successor.key;
        this.value = successor.value;
        return successor.remove(successor.key);
      }
      // Removing Case: One child
      else if (this.left || this.right) {
        const successor = this.left || this.right;
        // Reassign parent
        if (this.parent.left === this) this.parent.left = successor;
        else if (this.parent.right === this) this.parent.right = successor;
        successor.parent = this.parent;
        return this.value || this.key;
      }
      // Removal Case: Leaf
      else {
        if (this.parent.left === this) this.parent.left = null;
        if (this.parent.right === this) this.parent.right = null;
        return this.value || this.key;
      }
    }
    // Traverse to find key
    else {
      if (this.left && key < this.key) {
        return this.left.remove(key);
      } else if (this.right) {
        return this.right.remove(key);
      }
      // key doesn't exist
      return null;
    }
  }

  // inorder traversal
  print() {
    if (this) {
      if (this.left) this.left.print();
      console.log(this.key);
      if (this.right) this.right.print();
    }
  }
}

function main() {
  const tree = new BinarySearchTree();
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

  tree.print();
}
main();

module.exports = BinarySearchTree;
