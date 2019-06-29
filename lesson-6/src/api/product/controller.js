import db from '../../services/sequelize'

const Product = db.Product

export const create = (req, res, next) => {
    const body = req.body
    Product.create(body).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const findAll = (req, res, next) => {
    Product.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const update = (req, res, next) => {
    const id = req.params.id
    const body = req.body
    Product.update(body, { where: { id: id } }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const findById = (req, res) => {
    const id = req.params.id
    Product.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
    Product.destroy({where: {id:id}}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}