const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function returnAllVids() {
    const rows = await db.query(
        `SELECT * FROM Videos`
    );
    const data = helper.emptyOrRows(rows);
    return {
        data
    }
}

module.exports = {
    returnAllVids
}