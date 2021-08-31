import express, { Express } from 'express'

export class Server {
  app: Express | null

  constructor (
    private readonly port: number
  ) {
    this.app = express()

    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    this.app.get('/new', (req, res) => {
      res.send('This is a different path.')
    })

    this.app.get('/name/:user', (req, res) => {
      const query = `select * from users where name=${req.params.user}`
      res.send(`Built query: ${query}`)
    })
  }

  start (): void {
    if (this.app == null) throw new Error('No app was initialized.')
    this.app.listen(this.port, () => {
      console.log('Started app on 8080')
    })
  }
}
