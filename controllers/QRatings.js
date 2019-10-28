const sqlite3 = require('sqlite3').verbose();

// strange: the filename needs to have a path from app.js
const fileName = './database/QRatings.db';
const rating4unknownTypes = 1300;

const getAllSQL = 'SELECT qType, rating FROM qratings ORDER BY rating';
const get1RatingSQL = 'SELECT qType, rating FROM qratings WHERE qType = ?';
const update1SQL = 'INSERT OR REPLACE INTO qratings (qType, rating) VALUES(?, ?)';

const errCallback = (err, fromWhere) => {
    if (err) {
        return console.error('From ', fromWhere,err)
    }
    console.log('opened the database in ', fromWhere);
}

exports.getAllRatings = (req, res, next) => {
    let db = new sqlite3.Database(fileName, (err) => errCallback(err, 'getAllRatings'));
    
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

exports.get1Rating = (req, res, next) => {
    const qType = req.query.qType || 'undefined qType';
    //console.log('GET1RATING request ', qType)
    let db = new sqlite3.Database(fileName, (err)=>errCallback(err, 'get1Rating for ', qType));

    db.get(get1RatingSQL, [qType], (err, row) => {
        if (err) {throw err}
        var found = row ? row.qType : 'nothing';
        var rating2return = row ? row.rating : rating4unknownTypes;
        res.status(200).json({found: found, rating: rating2return})
    })

    db.close((err) => {
        if (err) { throw err }
        console.log('get1Rating has closed the database.')
    });
}

exports.updateRatings = (req, res, next) => {
    const category = req.body.category;
    const value = req.body.ratingValue || rating4unknownTypes;
    //console.log('UPDATErATINGS', req.body, category);    
    let db = new sqlite3.Database(fileName, (err) => errCallback(err, 'updateRatings'));
    db.run(update1SQL, [category, value], (err)=> {
              if (err) {return console.log(err)}
              res.status(201).json({
                  message: 'received new data',
                  category: category,
                  QRating: value,
              });
    }); 
    

    db.close((err) => {
        if (err) { throw err }
        console.log('updateRatings has closed the database.')
    });
}