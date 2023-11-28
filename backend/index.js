'use strict'
const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const commentController = require('./controllers/commentController');



mongoose.connect('mongodb://127.0.0.1:27017/appViajes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });

const app = express();
const port = 443; 
app.use(cors({ origin: 'http://localhost:4200', credentials: true }));
app.use(cookieParser());
app.use(express.json());


const routes=require('./routes/routes');

app.use('/api',routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});



