const mpngoose = require('mongoose')
const config = require('config')
module.exports = async function () {
    try {
        await mpngoose.connect(config.get('mongoUrl'), { useUnifiedTopology: true, useNewUrlParser: true })
        console.log('mongodb is connected ...')
    } catch (error) {
        console.log(error)
    }
}