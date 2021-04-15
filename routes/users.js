const express = require('express');
const router = express.Router();
const users = require('../services/users');
const axios = require('axios')

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