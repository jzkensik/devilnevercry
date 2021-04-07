const db = require('./db');
const helper = require('../helper');
const config = require('../server/config');

async function returnAllVids() {
    const rows = await db.query(
        `SELECT * FROM Videos`
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

async function postNewVideo() {
    const rows = await db.query(
        `INSERT INTO DevilMayCry3Characters(player_character) VALUES ('Credo')`
    )
    //now we can transfer this to videos by generating IDs
    //let's also make a delete API
    return {
        rows
    }
}
////game, player, video_link, player_character, mission, difficulty, version, video_type, video_title
//INSERT INTO Videos(c1,c2,...) VALUES (v1, v2,...)
//res.send
module.exports = {
    returnAllVids,
    postNewVideo
}