import request from 'supertest'
import { Server } from '../Server'

let server: Server | null = null

beforeAll(() => {
  server = new Server(8080)
})

test('Does the app work?', (done) => {
  if (server !== null) {
    request(server.app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200)
        done()
      })
  } else {
    done('Server was null.')
  }
})
