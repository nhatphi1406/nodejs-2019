import express from 'express'
import path from 'path'
import { readFile } from '../file';
import morgan from 'morgan'
import compression from 'compression'
import cors from 'cors'
import bodyParser from 'body-parser'

export default (apiRoot, router) => {
    const app = new express()
    const logger = (req, res, next) => {
        console.log('A new request received at ' + new Date(Date.now()).toUTCString())
        next()
    }
    const html = path.join(__dirname, '../../../html')
    
    app.use(logger)
    app.use(express.static(html))
    app.use(cors())
    app.use(compression())
    app.use(morgan('dev'))
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    app.use(apiRoot, router)


    app.get('/', logger, (req, res)=> {
        res.sendFile(path.join(html, 'index.html'))
    })
    
    app.get('/user', (req, res) => {
        readFile(path.join(__dirname, '../../user.json')).then(data => {
            return res.status(200).send(JSON.parse(data))
        }).catch(err => {
            return res.status(404).send(err)
        })
    })

    return app
}