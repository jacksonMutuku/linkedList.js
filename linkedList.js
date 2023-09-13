// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

// LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Append a new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Prepend a new node to the start of the list
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length++;
  }

  // Get the total number of nodes in the list
  size() {
    return this.length;
  }

  // Get the first node in the list
  head() {
    return this.head;
  }

  // Get the last node in the list
  tail() {
    return this.tail;
  }

  // Get the node at the given index
  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // Remove the last element from the list
  pop() {
    if (!this.head) {
      return null;
    }
    if (this.length === 1) {
      const poppedValue = this.head.value;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedValue;
    }
    let currentNode = this.head;
    while (currentNode.nextNode !== this.tail) {
      currentNode = currentNode.nextNode;
    }
    const poppedValue = this.tail.value;
    currentNode.nextNode = null;
    this.tail = currentNode;
    this.length--;
    return poppedValue;
  }

  // Check if a value exists in the list
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  // Find the index of a node containing a given value
  find(value) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      if (currentNode.value === value) {
        return index;
      }
      currentNode = currentNode.nextNode;
      index++;
    }
    return null;
  }

  // Represent the LinkedList as a string
  toString() {
    let result = '';
    let currentNode = this.head;
    while (currentNode) {
      result += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }
    result += 'null';
    return result;
  }
  // Insert a new node with the provided value at the given index
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return false; // Index out of bounds
    }

    const newNode = new Node(value);

    if (index === 0) {
      // Insert at the beginning
      newNode.nextNode = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else if (index === this.length) {
      // Insert at the end
      this.tail.nextNode = newNode;
      this.tail = newNode;
    } else {
      // Insert at a specific index
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    }

    this.length++;
    return true;
  }

  // Remove the node at the given index
  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null; // Index out of bounds
    }

    let removedNode;

    if (index === 0) {
      // Remove the first node
      removedNode = this.head;
      this.head = this.head.nextNode;
      if (!this.head) {
        this.tail = null; // List is now empty
      }
    } else {
      // Remove a node at a specific index
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.nextNode;
      }
      removedNode = currentNode.nextNode;
      currentNode.nextNode = currentNode.nextNode.nextNode;
      if (!currentNode.nextNode) {
        this.tail = currentNode; // Removed the last node
      }
    }

    this.length--;
    return removedNode.value;
  }
}
