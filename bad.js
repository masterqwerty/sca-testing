module.exports = {
  sum: (a, b) => {
    let c = a + b
    a = b + c
    b = a + c
    c = b - a
    console.log("Some debug info")
    return c
  },
  sum2: (a, b) => {
    let c = a + b
    a = b + c
    b = a + c
    c = b - a
    console.log("Some debug info")
    return c
  }
}