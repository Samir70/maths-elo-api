// This file will replace the other (which is for sqlite)
// But for now, I am keeping both
const { pool } = require('../config');
const rating4unknownTypes = 1300;

const getAllSQL = 'SELECT qType, rating FROM qratings ORDER BY rating';
const get1RatingSQL = 'SELECT qType, rating FROM qratings WHERE qType = $1';
const update1SQL = 'UPDATE qratings SET rating=$1 WHERE qType=$2';
const insertNewRow = 'INSERT INTO qratings (qType, rating) Values ($1, $2)';

exports.getAllRatings = (req, res, next) => {
    pool.query(getAllSQL, (err, results)=> {
        if (err) { console.log(err) }
        //console.log('From geAllRatings:', results.rows)
        res.status(200).json(results.rows)
    })
}

exports.get1Rating = (req, res, next) => {
    const qType = req.query.qType || 'undefined qType';
    //console.log('GET1RATING request ', req.query)
    
    pool.query(get1RatingSQL, [qType], (err, result)=> {
        if (err) {console.log(err)}
        //console.log(result.rowCount, result.rows[0]);
        var response = {};
        if (result.rowCount === 1) {
            response.found = result.rows[0].qtype;
            response.rating = result.rows[0].rating;
        } else {
            response.found = 'nothing';
            response.rating = rating4unknownTypes
        }
        res.status(200).json(response)
    });

}

exports.updateRatings = (req, res, next) => {
    const category = req.body.category;
    const value = req.body.ratingValue || rating4unknownTypes;
    //console.log('UPDATErATINGS', req.body, category);    
    // const update1SQL = 'UPDATE qratings SET rating=$1 WHERE qType=$2';
    pool.query(get1RatingSQL, [category])
        .then(result => {
            if (result.rowCount === 1) {
                pool.query(update1SQL, [value, category])
                  .then(r => {
                      var message = 'Updated rating for '+category+' = '+value;
                      res.status(201).json({resultOfUpdate:message})
                  })
                  .catch(e=>console.log(e))
            } else {
                //const insertNewRow = 'INSERT INTO qratings (qType, rating) Values ($1, $2)';
                pool.query(insertNewRow, [category, value])
                  .then(r => {
                      message = 'Added a row for '+category+' = '+value;
                      res.status(201).json({resultOfUpdate: message})
                  })
                  .catch(e=>console.log(e))
            }
        })
        .catch(e=>console.log(e))

    /*let db = new sqlite3.Database(fileName, (err) => errCallback(err, 'updateRatings'));
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
    });*/
}