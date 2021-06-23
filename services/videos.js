const db = require('../db');
const helper = require('../helper');
const config = require('../server/config');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


async function returnAllVids(query) {
    //maybe a simple iteration that adds "OR for all of them after the first one. We don't have to do anything specific here so really we just have to isolate them in the parameters
    //we need to figure out how to write an SQL query based off of the trues and falses that we just got
    //first let's just make it work with game consistently
    // for (item in query) {
    //     console.log(item)
    // }
    var sqlString = `SELECT * FROM Videos WHERE game = '` + query.game + "'"
    var counter = 0
    //ah shit
    //so when all are false, it gives all videos, but you have to swap the search when
    //even one of them is true
    //as-is you have the 'all' working but you have to figure that out. Probably do a check in the beginning
    //if all are false: all videos
    //if one is true: only that video's category
    //if two are true: both of theirs
    let checkNext = false
    for (item in query) {
        if (query[item] == 'true') {
            checkNext = true
            break;
        }
    }
    if (checkNext) {
        for (item in query) {
            console.log('just got in the for loop')
            console.log(counter)
            if (item == 'game') {
                console.log('in the first part')
                console.log(item)
                console.log(query[item])
                console.log(counter)
                counter = counter + 1
                continue;
            }
            if (counter == 1 && query[item] == 'true') {
                console.log('in the second part')
                console.log(item)
                console.log(query[item])
                sqlString = sqlString + ` AND player_character = '` + item + "'"
                counter = counter + 1
                continue;
            }
            if (query[item] == 'true') {
                console.log('in the third part')
                console.log(item)
                console.log(query[item])
                sqlString = sqlString + ` OR player_character = '` + item + "'"
                counter = counter + 1
            }
        }
        // for (item in query) {
        //     console.log('just got in the for loop')
        //     console.log(counter)
        //     //the first one starts with a WHERE, the rest are all OR based
        //     if (item == 'game') {
        //         console.log('here')
        //         console.log('counter')
        //         counter = counter + 1
        //         continue;
        //     }
        //     if (counter == 1 && query[item] == 'false') {
        //         console.log('in the second part')
        //         sqlString = sqlString + ` AND player_character = '` + item + "'"
        //         counter = counter + 1
        //         continue;
        //     }
        //     console.log(item)
        //     console.log(query[item])
        //     if (query[item] == 'false') {
        //         console.log('in the third part')
        //         sqlString = sqlString + ` OR player_character = '` + item + "'"
        //     }
        //     counter = counter + 1
        // }
    }
    counter = 0
    console.log(sqlString)
    const rows = await db.query(
        //`SELECT * FROM Videos`
        sqlString
        //`SELECT * FROM Videos WHERE game = '` + query.game + "' AND player_character = '" +  
        //`SELECT * FROM Videos`
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

async function postNewVideo(fields) {
    //once we're done with user creation, we'll convert this into the variables being stored in an array, then add the quotes with a map function
    //var APIarray = [fields.game, fields.link, fields.character, fields.version, fields.title]
    const data = await db.query(`INSERT INTO Videos(video_id, user_id, game, player, video_link, player_character, version, video_type, video_title) VALUES (` + getRandomInt(2, 100000) + ', ' + getRandomInt(2, 100000) + ', ' + "'" + fields.game + "'" + ', ' + "'Kiara', " + "'" + fields.link + "'" + ', ' + "'" + fields.character + "'" + ', ' + "'" + fields.version + "'" + ', ' + "'montage', " + "'" + fields.title + "'" + ')')
    //now we can transfer this to videos by generating IDs
    //let's also make a delete API
    //check task list in a bit but let's sketch out the Melee one soon
    //combo, playthrough, montage, other
    return {
        data
    }
}
//good job. Next is creating users

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
    deleteVideo
}