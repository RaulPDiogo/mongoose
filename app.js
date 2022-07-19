const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const path = require('path')
const linkRoute = require('./routes/linkRoute');

mongoose.connect('mongodb://localhost/newlinks')

let db = mongoose.connection;

db.on("error",()=>{console.log("deu zika")});
db.once("open",()=> {console.log("Banco de dados")});

app.set('viw engine', 'ejs');
app.set('views', path.join(__dirname,'templates'))

app.use('/', linkRoute);

app.listen(port, () => console.log(`App listening on port ${port}`))