const express = require('express');
const router = express.Router();
const db = ('../db');
const users = require('../services/users');
const axios = require('axios')

// router.get('/all-users', async function (req, res, next) {
//     try {
//         res.json(await users.displayAllUsers(req.query));
//         //this works for the appended query, but not switch statement. Why?
//     } catch (err) {
//         console.error(`Couldn't get users:`, err.message);
//         next(err);
//     }
// })

router.post('/new-user', async function (req, res, next) {
    var content = req.body.body
    // console.log(content)
    //console.log(users.createNewUser(content))
    console.log(req.body.body)
    req.session.name = content.username
    console.log(req.session.name)
    try {
        res.send(await users.createNewUser(content)); //maybe try sending the name through here.
    } catch (err) {
        console.error("couldn't post user;", err.message);
        next(err);
    }
})

router.get('/current-user', async function (req, res, next) {
    try {
        console.log('inside current user')
        console.log(req.session)
        console.log(req.sessionID)
    } catch (err) {
        console.error("bruh idk lol", err.message);
        next(err);
    }

})

// router.get('/for-coco', async function (req, res, next) {
//     var content = req.body
//     //console.log(users.createNewUser(content))
//     try {
//         req.session.name = 'kiryu_coco'
//         console.log(req.session)
//         res.send(req.session)
//         res.end()
//     } catch (err) {
//         console.error("couldn't post user;", err.message);
//         next(err);
//     }
// })

// router.get('/test', function (req, res) {
//     if (req.session.page_views) {
//         req.session.page_views++;
//         res.send("You visited this page " + req.session.page_views + " times");
//     } else {
//         req.session.page_views = 1;
//         res.send("Welcome to this page for the first time!");
//         console.log('heyooo boys I hope this works you know')
//         console.log(req.session.page_views)
//     }
// });

//we'll probably be using a get request for the signup and the login.
//we can change parts of the req.session based on the signup and the login
//there should be a way to set a value to be stored that we then display and check.
//this value should be: name, potentially. then we check it as we need to
//of course, there might be ways to change it. We should probably come up with some other secret way

module.exports = router;