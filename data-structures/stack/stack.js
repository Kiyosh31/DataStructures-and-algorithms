class Stack {
  constructor() {
    this._count = 0
    this._items = {}
  }

  // add an element to the top of the stack
  push(element) {
    this._items[this._count] = element
    this._count++
  }

  // returns the element at the top of the stack (removing it)
  pop() {
    if (this.isEmpty()) {
      return undefined
    }

    this._count--
    const result = this._items[this._count]
    delete this._items[this._count]
    return result
  }

  // returns the element at the top of the stack (without removing it)
  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this._items[this._count - 1]
  }

  // returns True/False if stack is empty
  isEmpty() {
    return this._count === 0
  }

  // deletes all the elements in stack
  clear() {
    this._count = 0
    this._items = {}
  }

  // returns the size of the stack
  size() {
    return this._count
  }

  // returns all the elements in stack in string form
  toString() {
    if (this.isEmpty()) {
      return ''
    }

    let objString = `${this._items[0]}`
    for (let i = 1; i < this._count; i++) {
      objString = `${objString} -> ${this._items[i]}`
    }
    return objString
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.toString())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.toString())
