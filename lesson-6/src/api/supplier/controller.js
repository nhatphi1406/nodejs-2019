import db from '../../services/sequelize'

const Supplier = db.Supplier

export const create = (req, res, next) => {
    const body = req.body
    Supplier.create(body).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const findAll = (req, res, next) => {
    Supplier.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const update = (req, res, next) => {
    const id = req.params.id
    const body = req.body
    Supplier.update(body, { where: { id: id } }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const findById = (req, res) => {
    const id = req.params.id
    Supplier.findByPk(id).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}

export const remove = (req, res) => {
    const id = req.params.id
    Supplier.destroy({where: {id:id}}).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(404).send(err)
    })
}