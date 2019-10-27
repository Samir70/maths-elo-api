const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const handleRatings = require('./routes/QRatings');

// open database, default second parameter is: sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE
let db = new sqlite3.Database('./database/QRatings.db', (err) => {
    if (err) {
        return console.error(err)
    }
    console.log('opened database')
});

db.close((err) => {
    if (err) {
        console.error(err)
    }
    console.log('database closed')
});

const app = express();
app.use(express.json())

app.use('/qratings', handleRatings);
app.listen(8080);