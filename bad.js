module.exports = {
  sum: (a, b) => {
    let c = a + b
    a = b + c
    return a - b
  },
  sum2: (c, d) => {
    let a = c + d
    c = a + d
    return c - d
  }
}