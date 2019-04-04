import jwt from 'jsonwebtoken'
import Promise from 'bluebird'

const jwtSecret = 'janeto'

const jwtSign = Promise.promisify(jwt.sign)
const jwtVerify = Promise.promisify(jwt.verify)

export const sign = (id, options, method = jwtSign) => {
    return method({id}, jwtSecret, options)
}

export const verify = (token) => jwtVerify(token, jwtSecret)