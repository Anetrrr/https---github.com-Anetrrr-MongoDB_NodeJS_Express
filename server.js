const express = require('express')
const app = express();
const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost/Elektrik', () => console.log('Elektrik is coming'))
const db = mongoose.connection

const PORT = 3000

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(PORT, () => console.log('Server is online'));