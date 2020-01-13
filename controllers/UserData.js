const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

// strange: the filename needs to have a path from app.js
const fileName = './database/QRatings.db';
const rounds = 12; //for bcrypt

// SQL commands
const get1User = "SELECT * FROM users WHERE userName = (?)";

const errCallback = (err, fromWhere) => {
    if (err) {
        return console.error('From ', fromWhere, err)
    }
    console.log('opened the database in ', fromWhere);
}

// to hash passwords when user is registering
// bcrypt.hash(submittedPassword, rounds)
//     .then(hash => {
//         console.log(hash);
//     })
//     .catch(err => console.log('error get1user bcrypt.hash', err))


exports.get1User = (req, res, next) => {
    const userName = req.body.userName || 'undefined user';
    const submittedPassword = req.body.password || '';
    let db = new sqlite3.Database(fileName, (err) => errCallback(err, 'get1User for ' + userName));

    db.get(get1User, [userName], (err, row) => {
        if (err) { throw err }
        if (row) {
            bcrypt.compare(submittedPassword, row.password)
                .then(didMatch => {
                    if (didMatch) {
                        res.status(200).json(row)
                    } else { res.status(401).json({ reason: 'bad PW or userName' }) } // password didn't match
                })
                .catch(err => console.log('get1user batch.compare', err))
        } else { res.status(401).json({ reason: 'bad userName or PW' }) } // user not found
        console.log('row is', row);
    })

    db.close((err) => {
        if (err) { throw err }
        console.log('get1Rating has closed the database.')
    });
}