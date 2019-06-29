import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { env } from '../../config'
import path from 'path'

export default (apiRoot, routers) => {
  const app = express()
  if (env === 'production' || env === 'development') {
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
  }
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routers)
  app.use(express.static(path.join(__dirname, '../../../www')))
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../www/index.html'))
  })
  return app
}
