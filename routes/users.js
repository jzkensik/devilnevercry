const express = require('express');
const router = express.Router();
const users = require('../services/users');
const axios = require('axios')

router.get('/all-users', async function (req, res, next) {
    try {
        res.json(await users.displayAllUsers(req.query));
        //this works for the appended query, but not switch statement. Why?
    } catch (err) {
        console.error(`Couldn't get users:`, err.message);
        next(err);
    }
})

router.post('/new-user', async function (req, res, next) {
    var content = req.body
    console.log(content)
    //console.log(users.createNewUser(content))
    try {
        res.send(await users.createNewUser(content));
    } catch (err) {
        console.error("couldn't post user;", err.message);
        next(err);
    }
})

module.exports = router;