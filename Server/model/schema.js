const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clients = new Schema({
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})

const Clients = mongoose.model('client', clients)
module.exports = Clients