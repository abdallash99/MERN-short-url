const express = require('express')
const URL = require('../model/Url')

const router = express.Router()

router.get('/:code', async (req, res) => {
    try {
        const code = req.params.code
        const url = await URL.findOne({ urlCode: code });
        if (!url) {
            return res.status(404).json({ msg: 'URL does not exist' })
        }
        res.redirect(url.longUrl)
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
})

module.exports = router