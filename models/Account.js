const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Schema

const AccountSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Account = mongoose.model('account', AccountSchema);