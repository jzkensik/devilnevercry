const sha256 = require('js-sha256');
const db = require('./db');
const helper = require('../helper');
const config = require('../server/config');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// async function createNewUser(fields) {
//     console.log(fields)
//     //const data = await db.query(`INSERT INTO Users() VALUES ()`)
//     //const data = await db.query(`SELECT * FROM Videos`)
//     const data = await db.query(`SELECT * FROM Videos WHERE user_id = 7594`)
//     console.log(data.isEmpty)
//     if (data.isEmpty) {
//         return;
//     }
//     //username, password, dob
//     //generate user_id: getRandomInt(2, 100000)
//     //console.log(data)
//     return {
//         data
//     }
// }

async function createNewUser(fields) {
    const id = getRandomInt(2, 100000)
    const prelim = await db.query(`SELECT * FROM Users WHERE user_id = ` + id)
    if (prelim.length != 0) {
        console.log('infinite')
        return createNewUser(fields);
    }
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(fields.password, salt, async function (err, hash) {
            //then store hash in the password
            const data = await db.query(`INSERT INTO Users(user_id, username, hashed_password, date_of_birth, email) VALUES (` + "'" + id + "'" + ', ' + "'" + fields.username + "'" + ', ' + "'" + hash + "'" + ', ' + `STR_TO_DATE(` + "'" + fields.dob + "'" + ', ' + `"%m/%d/%Y")` + ', ' + "'" + fields.email + "'" + ')')
            //I mean I *think* this works? idk
            return {
                data
            }
        })
    })
}

async function displayAllUsers(fields) {
    const data = await db.query(`SELECT * FROM Users`)
    //now fix the password
    return {
        data
    }
}

module.exports = {
    createNewUser
}