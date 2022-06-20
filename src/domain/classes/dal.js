module.exports.Dal = class Dal {

    storage = null

    constructor() {
    }

    create(data, id) {
        this.storage.set(id,data)
    }

    update(data,id) {
        this.storage.set(id,data)
    }

    delete(id) {
        this.storage.delete(id)
    }

    list() {
        return Array.from(this.storage.values())
    }

    get(id) {
        return this.storage.get(id)
    }

}

