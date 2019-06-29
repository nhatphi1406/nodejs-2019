import { env, port, ip, apiRoot } from './config'
import express from './services/express'
import api from './api'
import db from './services/sequelize'

const app = express(apiRoot, api)

db.sequelize.sync().then(()=> {
    console.log('init db')
}).catch(err => {
    console.log('error', err)
})

app.listen(port, () => console.log('Server listening on http://%s:%d, in %s mode', ip, port, env))

export default app