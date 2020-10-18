const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Employees'

const app = express();

const empRouter = require('./routes/router.js');
app.use('/employees', empRouter);

// connect with mongodb
mongoose.connect(url, { useNewUrlParser: true });

// check connection is done or not
mongoose.connection.once('open', () => {
    console.log('connection has been made')
}).on('error', (error) => {
    console.log('error is:', error)
});

app.use(express.json());

app.listen(9000, () => {
    console.log('server started')
})

