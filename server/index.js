const express = require('express');
const bc = require('./controllers/books_controller.js')
const app = express();

app.use(express.json());

app.get('/api/books', bc.read);

app.listen(4000, () => {
    console.log('Listening on port 4000');
})