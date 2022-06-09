class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null // first element of the list
    this.tail = null // last element of the list
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
    }

    if (this.tail) {
      this.tail.next = newNode
    }
    this.tail = newNode
  }

  prepend(value) {
    const newNode = new Node(value, this.head)

    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue)

    if (existingNode) {
      const newNode = new Node(value, existingNode.next)
      existingNode.next = newNode
    }
  }

  find(value) {
    if (!this.head) {
      return
    }

    let currentNode = this.head
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }
      currentNode = currentNode.next
    }

    return null
  }

  delete(value) {
    if (!this.head) {
      return
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (currentNode.next.value === value) {
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }
  }

  toArray() {
    const elements = []

    let currentNode = this.head
    while (currentNode) {
      elements.push(currentNode)
      currentNode = currentNode.next
    }

    return elements
  }
}

const list = new LinkedList()
list.append(1)
list.append('Hello There!')
list.append('David')
list.append(true)
list.append(18.51)
list.prepend('New First value!')
list.delete('David')

console.log('Here list: ', list.toArray())
console.log(list.find(18.51))

list.insertAfter('after 18.51', 18.51)
console.log('Here list: ', list.toArray())
