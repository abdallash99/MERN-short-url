const valid = require('valid-url');
const shortid = require('shortid')
const express = require('express')
const config = require('config')
const URL = require('../model/Url')

const router = express.Router()


router.post('/short', async (req, res) => {
    try {
        const baseURL = config.get('baseUrl');

        const longUrl = req.body.url;
        if (!valid.isUri(longUrl)) {
            return res.status(400).json({ msg: 'Please send valid URL' })
        }

        const urlCode = shortid.generate()
        const shortUrl = baseURL + urlCode;
        const url = new URL({ longUrl, urlCode, shortUrl });
        await url.save();
        res.status(200).json({ shortUrl })
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error')
    }
})




module.exports = router