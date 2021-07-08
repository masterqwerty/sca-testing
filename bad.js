module.exports = {
  sum: (a, b) => {
    let c = a + b
    a = b + c
    return a - b
  },
  sum2: (a, b) => {
    let c = a + b
    a = b + c
    return a - b
  }
}