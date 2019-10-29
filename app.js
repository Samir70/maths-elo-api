const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const handleRatings = require('./routes/QRatings');

const port = process.env.PORT || 8080

const app = express();
app.use(express.json())

app.use('/qratings', handleRatings);
app.listen(port);