const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./Server/routes/routes')
const app = express()
const Users = require('./Server/model/schema')
const Data = require('./src/data')


app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.urlencoded({ extend: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/CRM', { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', api)
const userSave =  () => {
    for (let i of Data) {
      let allData =  new Users(i)
      allData.save()
    }
}
// userSave()

app.listen(8000, function () {
    console.log('Yo yo, im running here!')
})