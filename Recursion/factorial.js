// Iterative solution
function factorialIterative(number) {
  if (number < 0) return undefined
  let total = 1
  for (let n = number; n > 1; n--) {
    total = total * n
  }
  return total
}

function factorial(n) {
  if (n === 1 || n === 0) {
    // base case
    return 1
  }
  return n * factorial(n - 1) // recursive call
}

console.log(factorial(5)) // 120
// console.log(factorialIterative(5)) // 120
