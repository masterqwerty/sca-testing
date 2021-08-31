import express, { Express } from 'express'
import { exec, ExecException } from 'child_process'

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

    this.app.get('/cat/:file', (req, res) => {
      const command = `cat ${req.params.file}`
      exec(command, (err: ExecException | null, stdout: string, stderr: string) => {
        if (err !== null) {
          res.send(err.message)
        } else if (stderr.length > 0) {
          res.send(stderr)
        } else if (stdout.length > 0) {
          res.send(stdout)
        } else {
          res.send('Unexpected error')
        }
      })
    })
  }

  start (): void {
    if (this.app == null) throw new Error('No app was initialized.')
    this.app.listen(this.port, () => {
      console.log('Started app on 8080')
    })
  }
}
