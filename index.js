const express = require ("express")
const bodyParser = require ("body-parser")
const routes = require ("./src/domain/imports/dinamicimport")
//const routes = require('./src/domain/imports/routes')//
let app = express ()

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(routes)

app.listen(3000, () => console.log("http://localhost:3000"))