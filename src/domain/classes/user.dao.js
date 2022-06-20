const {Dal} = require('./dal.mongo')

module.exports.UserDao = class UserDao extends Dal {
    constructor() {
        super()
        this.collectionName = 'user'
    }
}