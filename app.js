const express = require('express');
const { Client } = require('pg');

const handleRatings = require('./routes/QRatings');

const port = process.env.PORT || 8080

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl : true
});

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
});

const app = express();
app.use(express.json())

if (process.env.NODE_ENV = 'production') {
    app.use(express.static('client/build'));
}

app.use('/qratings', handleRatings);
app.listen(port);