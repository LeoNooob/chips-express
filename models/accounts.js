var mongoose = require('mongoose');

var Schema = mongoose.Schema
var connection = require('../public/javascripts/mongodb')

var accountSchema = new Schema({
    username: { type: String },
    password: { type: String },
    gender: { type: String, default: 'male' },
    email: { type: String, default: '' },
    register_date: { type: Date, default: Date.now() }
})

var Account = connection.model('accounts', accountSchema)

module.exports = Account