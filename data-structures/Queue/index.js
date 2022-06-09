class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0 // Property to keep track of the first element
    this.items = {} // here we will store the elements since an object is a more efficient way to do it
  }

  // adds new elements at the back of the queue
  enqueue(element) {
    this.items[this.count] = element
    this.count++
  }

  // removes the first element of the queue and return it
  dequeue() {
    if (this.isEmpty()) {
      return undefined
    }

    const firstElement = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return firstElement
  }

  // returns the first element of the queue but without deleting it
  peek() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  // returns if the queue is empty or no
  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  // returns the size of the queue
  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  toString() {
    if (this.isEmpty()) return ''

    let objStr = `${this.items[this.lowestCount]}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objStr = `${objStr},${this.items[i]}`
    }

    return objStr
  }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue('John')
queue.enqueue('Jack')
console.log(queue.toString())
queue.enqueue('Camila')
console.log(queue.toString())
console.log(queue.size())
console.log(queue.isEmpty())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.toString())
queue.clear()
console.log(queue.isEmpty())
