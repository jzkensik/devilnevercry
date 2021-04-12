const db = require('./db');
const helper = require('../helper');
const config = require('../server/config');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


async function returnAllVids() {
    const rows = await db.query(
        `SELECT * FROM Videos`
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

async function postNewVideo(fields) {
    //once we're done with user creation, we'll convert this into the variables being stored in an array, then add the quotes with a map function
    //var APIarray = [fields.game, fields.link, fields.character, fields.version, fields.title]
    const data = await db.query(`INSERT INTO Videos(video_id, user_id, game, player, video_link, player_character, version, video_type, video_title) VALUES (` + getRandomInt(2, 100000) + ', ' + getRandomInt(2, 100000) + ', ' + "'" + fields.game + "'" + ', ' + "'Watson', " + "'" + fields.link + "'" + ', ' + "'" + fields.character + "'" + ', ' + "'" + fields.version + "'" + ', ' + "'montage', " + "'" + fields.title + "'" + ')')
    //now we can transfer this to videos by generating IDs
    //let's also make a delete API
    //check task list in a bit but let's sketch out the Melee one soon
    //combo, playthrough, montage, other
    return {
        data
    }
}
//good job. Next is creating users

async function createNewUser(fields) {
    console.log(fields)
    //const data = await db.query()

    return {
        data
    }
}

async function deleteVideo() {
    const data = await db.query(
        `DELETE FROM DevilMayCry3Characters WHERE player_character = 'Credo'`
    )
}
////game, player, video_link, player_character, mission, difficulty, version, video_type, video_title
//INSERT INTO Videos(c1,c2,...) VALUES (v1, v2,...)
//res.send
module.exports = {
    returnAllVids,
    postNewVideo,
    createNewUser,
    deleteVideo
}