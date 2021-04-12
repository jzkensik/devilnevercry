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
    var content = req.body
    try {
        res.send(await videos.postNewVideo(content));
    } catch (err) {
        console.error("couldn't post video;", err.message);
        next(err);
    }
})

router.post('/new-user', async function (req, res, next) {
    var content = req.body
    console.log(videos.createNewUser(content))
    // try {
    //     res.send(await videos.createNewUser(content));
    // } catch (err) {
    //     console.error("couldn't post video;", err.message);
    //     next(err);
    // }
})

router.delete('/remove-video', async function (req, res, next) {
    try {
        res.send(await videos.deleteVideo());
    } catch (err) {
        console.error("couldn't delete video", err.message);
        next(err)
    }
})

module.exports = router;