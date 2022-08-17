require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const connectDB = require('./config/database')

connectDB();


app.get('/', (req, res)=>{
    res.send("Welcome Home")
})

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))