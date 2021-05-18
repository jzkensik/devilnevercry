const express = require('express');
const router = express.Router();
const videos = require('../services/videos');
const axios = require('axios')

/* GET programming languages. */
router.get('/all', async function (req, res, next) {
    //we'll need subfunctions, but we can use query string parameters to determine game
    //try to tie this to the turning things blue after all. Look into reloading components
    console.log('below')
    console.log('about to go into switch')
    //figure out how to stop that duplicate API request
    //we might just want to use guidelines to figure this out for now. start w game, then player_character, and figure it out later
    // switch (req.query.game) {
    //     case 'dmc1':
    //     case 'dmc2':
    //     case 'dmc3':
    //         try {
    //             console.log('in dmc3')
    //             res.json(await videos.returnAllVids('Devil May Cry 3'))
    //         }
    //         catch (err) {
    //             console.error(`Error while getting programming languages `, err.message);
    //             next(err);
    //         }
    //     case 'dmc4':
    //     case 'dmcDMC':
    //     case 'dmc5':
    // }
    // if (req.query.dante) {
    //     console.log(req.query.dante)
    //     //a sequence of checks here to construct the WHERE clause of the query.
    //     //switch statements per game first, then after that check the character
    // }
    try {
        res.json(await videos.returnAllVids(req.query.game));
        //this works for the appended query, but not switch statement. Why?
    } catch (err) {
        console.error(`Error while getting programming languages `, err.message);
        next(err);
    }
});

router.post('/new-video', async function (req, res, next) {
    var content = req.body
    try {
        res.send(await videos.postNewVideo(content));
        //pass in the variable with the booleans in the body, if any are false return above,
        //otherwise figure out how to pass them into the WHERE clause
    } catch (err) {
        console.error("couldn't post video;", err.message);
        next(err);
    }
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