const { Router } = require('express')
const route = Router()

module.exports.FactoryRoute = function(path, midlewares, controller) {
    route.get(path, controller.list)
    route.get(`${path}/:id`, controller.get)
    route.post(path, ...midlewares, controller.create)
    route.put(`${path}/:id`, controller.update)
    route.delete(`${path}/:id`, controller.delete)
    console.log(midlewares)
    return route
}