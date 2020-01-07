const sqlite3 = require('sqlite3').verbose();

// strange: the filename needs to have a path from app.js
const fileName = './database/QRatings.db';

// SQL commands
const get1User = "SELECT * FROM users WHERE userName = (?)";

const errCallback = (err, fromWhere) => {
    if (err) {
        return console.error('From ', fromWhere,err)
    }
    console.log('opened the database in ', fromWhere);
}

exports.get1User = (req, res, next) => {
    const userName = req.body.userName || 'undefined user';
    const submittedPassword = req.body.password || '';
    let db = new sqlite3.Database(fileName, (err)=>errCallback(err, 'get1User for '+userName));

    db.get(get1User, [userName], (err, row) => {
        if (err) {throw err}
        if (row) {
            if (row.password === submittedPassword) {
                res.status(200).json(row)
            } else {res.status(401).json({reason:'bad PW or userName'})} // password didn't match
        } else {res.status(401).json({reason: 'bad userName or PW'})} // user not found
        console.log('row is', row);
    })

    db.close((err) => {
        if (err) { throw err }
        console.log('get1Rating has closed the database.')
    });
}