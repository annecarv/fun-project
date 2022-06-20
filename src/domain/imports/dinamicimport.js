const { Router } = require('express')
const fs = require('fs')
const { FactoryRoute } = require('./factory')
const route = Router()

fs.readdirSync(`${__dirname}/../controllers`).forEach(function(file) {
    const routerName = file.split('.')[0]
    const midlewares = fs.existsSync(`${__dirname}/../midlewares/${routerName}.js`) ? require(`../midlewares/${routerName}`) : []
    const controller = require('../controllers/' + file)
    route.use(FactoryRoute(`/${routerName}`, midlewares, controller))
})

module.exports = route