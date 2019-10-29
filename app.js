const express = require('express');

const handleRatings = require('./routes/QRatings');

const port = process.env.PORT || 8080

const app = express();
app.use(express.json())

if (process.env.NODE_ENV = 'production') {
    app.use(express.static('client/build'));
}

app.use('/qratings', handleRatings);
app.listen(port);