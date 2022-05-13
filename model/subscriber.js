const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,

    },
    origin: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)