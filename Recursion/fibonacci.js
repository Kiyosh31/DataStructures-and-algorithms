function fibonacci(n) {
  if (n < 2) return n

  return fibonacci(n - 1) + fibonacci(n - 2)
}

// the method takes a number and returns the position of the number
console.log(fibonacci(6))

function fibonacciMemoization(n, prevValues = []) {
  // validate if we have the value calculated
  // just return it (don-t calculate again)
  if (prevValues[n] != null) return prevValues[n]

  let result
  if (n <= 2) {
    result = 1
  } else {
    result =
      fibonacciMemoization(n - 1, prevValues) +
      fibonacciMemoization(n - 2, prevValues)
  }

  prevValues[n] = result
  return result
}

console.log(fibonacciMemoization(100))
