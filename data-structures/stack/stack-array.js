class Stack {
  constructor() {
    this._items = []
  }

  // push
  push(element) {
    this._items.push(element)
  }

  // pop
  pop() {
    return this._items.pop()
  }

  // peek
  peek() {
    return this._items[this._items.length - 1]
  }

  // isEmpty
  isEmpty() {
    return this._items.length === 0
  }

  // clear
  clear() {
    this._items = []
  }

  // size
  size() {
    return this._items.length
  }
}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.peek())
console.log(stack.size())
