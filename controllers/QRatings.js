const sqlite3 = require('sqlite3').verbose();

// strange: the filename needs to have a path from app.js
const fileName = './database/QRatings.db';

const getAllSQL = 'SELECT qType, rating FROM qratings ORDER BY qType';

exports.getAllRatings = (req, res, next) => {
    let db = new sqlite3.Database(fileName, (err) => {
        if (err) {
            return console.error('From getAllRatings',err)
        }
        console.log('opened the database in getAllRatings');
    });
    
    var dbResults = {};
    db.all(getAllSQL, [], (err, rows) => {
        if (err) {throw err}
        rows.forEach(row => dbResults[row.qType] = row.rating);
        console.log('dbResults ', dbResults);
        res.status(200).json(dbResults);
    });

    db.close((err) => {
        if (err) { throw err }
        console.log('getAllRatings has closed the database.')
    });
}

exports.updateRatings = (req, res, next) => {
    const category = req.body.category;
    const value = req.body.ratingValue;
    // update db
    // 201 = success + resource created
    res.status(201).json({
        message: 'received new data',
        category: category,
        QRating: value
    })
}