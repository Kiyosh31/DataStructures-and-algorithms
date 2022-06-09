class Set {
  constructor() {
    // the reason to use object instead of array is JS don't allow 2 different properties with
    // the same key which guarantees the unique element on the set
    this.items = {}
  }

  // adds an element to the set
  add(element) {
    if (!this.has(element)) {
      this.items[element] = element
      return true
    }
    return false
  }

  // deletes an element from the set
  delete(element) {
    if (this.has(element)) {
      delete this.items[element]
      return true
    }
    return false
  }

  // returns true/false if the element exists
  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element)
  }

  // removes all the elements from the set
  clear() {
    this.items = {}
  }

  // returns how many elements of the set
  size() {
    return Object.keys(this.items).length
  }

  // returns an array with the set values
  values() {
    return Object.values(this.items)
  }

  // Operations

  // Union -> Given two sets, return a new set
  union(set) {
    const unionSet = new Set()

    this.values().forEach((item) => unionSet.add(item))
    set.values().forEach((item) => unionSet.add(item))

    return unionSet
  }

  // Intersection -> Given two sets, returns a new set with the elements existing in both sets
  intersection(set) {
    const intersectionSet = new Set()

    const values = this.values()
    const otherValues = set.values()

    let biggerSet = values
    let smallerSet = otherValues

    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues
      smallerSet = values
    }

    smallerSet.forEach((item) => {
      if (biggerSet.includes(item)) {
        intersectionSet.add(item)
      }
    })

    return intersectionSet
    // this is very expensive we're iterating 7 times the first array, would be better if we iterate
    // only the second array which is smaller and will have low comp cost

    // const intersectionSet = new Set()

    // const values = this.values()
    // for (let i = 0; i < values.length; i++) {
    //   if (set.has(values[i])) {
    //     intersectionSet.add(values[i])
    //   }
    // }

    // return intersectionSet
  }

  // Difference -> Given two sets, returns a new set with all elements that exist
  // in the first but not in second set
  difference(set) {
    const differenceSet = new Set()

    this.values().forEach((item) => {
      if (!set.has(item)) {
        differenceSet.add(item)
      }
    })

    return differenceSet
  }

  // Subset -> Confirms wheter a given set is subset of another
  isSubsetOf(set) {
    if (this.size() > set.size()) return false

    let isSubset = true
    this.values().every((item) => {
      if (!set.has(item)) {
        isSubset = false
        return false
      }
      return true
    })

    return isSubset
  }
}

const set = new Set()
set.add(1)
console.log(set.values()) // outputs [1]
console.log(set.has(1)) // outputs true
console.log(set.size()) // outputs 1

set.add(2)
console.log(set.values()) // outputs [1, 2]
console.log(set.has(2)) // true
console.log(set.size()) // 2

set.delete(1)
console.log(set.values()) // outputs [2]

set.delete(2)
console.log(set.values()) // outputs []

// Union
const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)

const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)

const unionAB = setA.union(setB)
console.log('Union: ', unionAB.values())

// Intersection
const setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)

const setD = new Set()
setD.add(2)
setD.add(3)
setD.add(4)

const intersectionCD = setC.intersection(setD)
console.log('Intersection: ', intersectionCD.values())

// Difference
const setE = new Set()
setE.add(1)
setE.add(2)
setE.add(3)

const setF = new Set()
setF.add(2)
setF.add(3)
setF.add(4)

const differenceEF = setE.difference(setF)
console.log('Difference: ', differenceEF.values())

// Subset
const setG = new Set()
setG.add(1)
setG.add(2)

const setH = new Set()
setH.add(1)
setH.add(2)
setH.add(3)

const setI = new Set()
setI.add(2)
setI.add(3)
setI.add(4)

console.log('Subset: ', setG.isSubsetOf(setH))
console.log('Subset: ', setG.isSubsetOf(setI))
