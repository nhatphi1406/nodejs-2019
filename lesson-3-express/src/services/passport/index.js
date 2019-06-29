import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import { Users } from '../../api/user/model'
import { Strategy as BearerStrategy } from 'passport-http-bearer'
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt'

const masterToken = 'god'


export const passportAuth = () => (req, res, next) =>

    passport.authenticate('passportAuth', {
        session: false
    }, (err, user, info) => {
        if (err && err.param) {
            return res.status(400).json(err)
        } else if (err || !user) {
            return res.status(401).end()
        }
        req.logIn(user, {
            session: false
        }, (err) => {
            if (err) return res.status(401).end()
            next()
        })
    })(req, res, next)

export const master = (req, res, next) => {
    return passport.authenticate('master', {
        session: false
    })
}

export const token = ({required, roles = Users.role}) => (req, res, next) =>
    passport.authenticate('token', {
        session: false
    }, (error, user, info) => {
        if (error || (required && !user) || (required && !~roles.indexOf(user.role))) {
            return res.status(401).end()
        }
        req.logIn(user, {
            session: false
        }, (err) => {
            if (err) return res.status(401).end()
            next()
        })
    })(req, res, next)



passport.use('passportAuth', new BasicStrategy((username, password, done) => {
    const user = Users.find(u => {
        return u.username === username && u.pass === password
    })
    if (!user) {
        done(true)
    }
    else {
        done(null, user)
    }
}))

passport.use('master', new BearerStrategy((token, done) => {
    if (token == masterToken) {
        done(null, {})
    }
    else {
        done(null, false)
    }
}))

passport.use('token', new JwtStrategy({
    secretOrKey: 'janeto',
    jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromHeader('access_token')
    ])
}, ({ id }, done) => {
    const user = Users.find(u => {
        return u.id == id
    })
    if (!user) {
        done(true)
    }
    else {
        done(null, user)
    }
}))