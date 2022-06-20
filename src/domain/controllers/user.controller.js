const {Controller} = require('../classes/controller')
const {UserDao} = require('../classes/user.dao')

class UserController extends Controller {
    constructor() {
        super(new UserDao())
    }
}

module.exports = new UserController()