const {Controller} = require('../classes/controller')
const {AtividadeDao} = require('../classes/atividade.dao')

class AtividadeController extends Controller {
    constructor() {
        super(new AtividadeDao())
    }
}

module.exports = new AtividadeController()