const express = require('express');
const router = express.Router();
const videos = require('../services/videos');
const axios = require('axios')

// router.get('/test', function (req, res) {
//     if (req.session.page_views) {
//         req.session.page_views++;
//         res.send("You visited this page " + req.session.page_views + " times");
//     } else {
//         if (req.session.name) {
//             console.log(req.session.name)
//         }
//         req.session.page_views = 1;
//         res.send(req.session)
//         //res.send("Welcome to this page for the first time!");
//         console.log('heyooo boys I hope this works you know')
//         console.log(req.session.page_views)
//     }
// });

// module.exports = router;