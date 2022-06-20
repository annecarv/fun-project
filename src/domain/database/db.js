const { MongoClient, ObjectId} = require('mongodb')

module.exports.MongoHelper = {
    client: null,
    uri: null,

    setMongoUrl (url) {
        this.uri = url
    },

    ObjectID (text) {
        return text ? new ObjectId(text) : new ObjectId()
    },

    async connect (uri) {
        this.uri = uri
        this.client = await MongoClient.connect(uri)
    },

    async disconnect () {
        await this.client?.close()
        this.client = null
    },

    async getCollection (name) {
        if (!this.client) {
        await this.connect(this.uri)
        }
        return this.client.db().collection(name)
    }
  }