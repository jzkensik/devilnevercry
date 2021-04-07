const express = require('express');
const router = express.Router();
const videos = require('../services/videos');
const axios = require('axios')

/* GET programming languages. */
router.get('/all', async function (req, res, next) {
    try {
        res.json(await videos.returnAllVids());
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/new-video', async function (req, res, next) {
    try {
        res.send(await videos.postNewVideo());
    } catch (err) {
        console.error("couldn't post video", err.message);
        next(err);
    }
})

module.exports = router;