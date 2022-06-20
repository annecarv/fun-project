const { Router } = require('express')
const fs = require('fs')
const { FactoryRoute } = require('./factory')
const route = Router()
const  userController = require('../controllers/user.controller')
const Midlewares = require('../midlewares/user')

route.use(FactoryRoute('/user', Midlewares, userController))

module.exports = route