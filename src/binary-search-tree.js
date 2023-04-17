const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor(){
    this.roott = null;
  }

  root() {
    return this.roott;
  }

  add( data ) {
    this.roott = addWirhin(this.roott, data);

    function addWirhin(node, data){
      if(!node){
        return new Node(data);
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        node.left = addWirhin(node.left, data);
      }else{
        node.right = addWirhin(node.right, data);
      }

      return node;
    }
  }

  has( data ) {
    return searchWithin(this.roott, data);

    function searchWithin(node, data){
      if(!node){
        return false;
      }

      if(node.data === data){
        return true;
      }

      if(data < node.data){
        return searchWithin(node.left, data);
      }else{
        return searchWithin(node.right, data);
      }
    }
  }

  find( data ) {
    return findWithin(this.roott, data);

    function findWithin(node, data){
      if(!node){
        return null;
      }

      if(node.data === data){
        return node;
      }

      if(data < node.data){
        return findWithin(node.left, data);
      }else{
        return findWithin(node.right, data);
      }
    }
  }

  remove( data ) {
    this.roott = removeNode(this.roott, data)

    function removeNode(node, data){
      if(!node){
        return null;
      }

      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }else if(data > node.data){
        node.right = removeNode(node.right, data)
        return node;
      }else{
        if(!node.left && !node.right){
          return null;
        }

        if(!node.left){
          node = node.right;
          return node;
        }

        if(!node.right){
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  }

  min() {
    if(!this.roott){
      return;
    }

    let node = this.roott;
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.roott){
      return;
    }

    let node = this.roott;
    while (node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};