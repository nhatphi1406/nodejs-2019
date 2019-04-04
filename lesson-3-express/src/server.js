import express from './services/express'
import { port, ip , env, apiRoot} from './config'
import router from './api/index'

const app = express(apiRoot, router)
app.listen(port, () => console.log(`Server listening on http://%s:%d, in %s mode`, ip, port, env))