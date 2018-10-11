const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(routes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytarticles');

app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`)
})
