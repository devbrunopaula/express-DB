const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path');
//API's
const items = require('./routes/api/items')
const accounts = require('./routes/api/accounts')

const app = express();

//Bodyparser Middlewear

app.use(bodyParser.json());

// DB Connect Config

const db = require('./config/keys').mongoURI;

// Connect to Mongo DB

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))



// Use Routes

app.use('/api/items', items)
app.use('/api/acccounts', accounts)


// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//PORTs
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running on port ${port}`));