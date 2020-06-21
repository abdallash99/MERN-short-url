const express = require('express')

const app = express()

const connectDb = require('./config/DB');

connectDb();

app.use(express.json({ extended: false }))

app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/short'))


const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
    if (err) console.log(err)
    else console.log('API is running ...')
})