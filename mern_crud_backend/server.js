const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 2112;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MONGO CONNECT REAL GOOD.")
})

app.listen(PORT, function() {
    console.log(": : : We have assumed control : : : " + PORT);
});