const sum = require('../bad')
const app = require('../index')
const request = require('supertest')

test("Does the app work?", (done) => {
  request(app)
    .get("/")
    .then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
})

test('random test', () => {
  expect(sum.sum(1, 2)).toBe(3);
})