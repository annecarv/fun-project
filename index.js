const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./src/domain/imports/dinamicimport");
//const routes = require('./src/domain/imports/routes')//
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})
app.use(routes);

app.listen(3000, () => console.log("http://localhost:3000"));