const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(data) {
    this.r = a(this.r, data);

    function a(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = a(node.left, data);
      } else {
        node.right = a(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return s(this.r, data);

    function s(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ? 
        s(node.left, data) : 
        s(node.right, data);
    }
  }

  find(data) {
    return f(this.r, data);

    function f(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data ? 
        f(node.left, data) : 
        f(node.right, data);
    }
  }

  remove(data) {
    this.r = removeNode(this.r, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.r) {
      return;
    }

    let node = this.r;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.r) {
      return;
    }

    let node = this.r;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};