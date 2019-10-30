const express = require('express');
const cors = require('cors');
const { pool } = require('./config');

const handleRatings = require('./routes/QRatings');

const getRatings = (request, response) => {
    pool.query('SELECT * FROM qratings', (error, results) => {
      if (error) { return console.log(error) }
      response.status(200).json(results.rows)
    })
  }


const app = express();
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV = 'production') {
    app.use(express.static('client/build'));
}
app.use('/qratings', handleRatings);
app.use('/test-db', getRatings)

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('App is listening to port ', port);
});