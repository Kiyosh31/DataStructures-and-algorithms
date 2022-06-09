// O(log(n)) || space complexity O(1)
function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    console.log('entro')
    let middle = Math.floor((start + end) / 2)

    if (array[middle] === target) {
      return middle
    } else if (array[middle] < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return -1
}

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const target = 10
console.log(binarySearch(nums, target))
