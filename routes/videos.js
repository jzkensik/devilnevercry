const express = require('express');
const router = express.Router();
const videos = require('../services/videos');

/* GET programming languages. */
router.get('/all', async function (req, res, next) {
    try {
        res.json(await videos.returnAllVids());
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

module.exports = router;