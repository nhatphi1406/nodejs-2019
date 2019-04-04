import express from 'express'
import { readFile } from './file'
import path from 'path'

const app = new express()
const port = 3000

const wwwRoot = path.join(__dirname, '../www')

app.use(express.static(wwwRoot))

const myLogger = (req, res, next) => {
  console.log('A new request received at ' + new Date(Date.now()).toUTCString())
  next()
}

app.use(myLogger)

app.get('/api/users', (req, res) => {
  readFile(path.join(__dirname, '/user.json'))
    .then(data => {
      return res.status(200).send(JSON.parse(data))
    })
    .catch(err => {
      return res.status(404).send(err)
    })
})

app.post('/api/users', (req, res) => {
  res.send('hello Post')
})

app.put('/api/users', (req, res) => {
  res.send('hello Put')
})

app.delete('/api/users', (req, res) => {
  res.send('hello Delete')
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(wwwRoot, 'index.html'))
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
