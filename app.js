const express = require('express');
const handleRatings = require('./routes/QRatings');
const app = express();
app.use(express.json())

app.use('/qratings', handleRatings);
app.listen(8080);