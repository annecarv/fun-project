const {Dal} = require('./dal')

module.exports.AtividadeDao = class AtividadeDao extends Dal {
    constructor() {
        super()
        this.storage = new Map()
    }
}