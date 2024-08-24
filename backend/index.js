const express = require('express');
const connection = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connection();




app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`);
})