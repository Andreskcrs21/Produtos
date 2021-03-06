const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Users = require ('./api/users');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/users', Users);

mongoose.connect(
    "mongodb://localhost/Tienda",
    { useNewUrlParser:true},
    (err,res) => {
        err && console.log('Error conectando a la Base de Datos MongoDB');
        app.listen(4000, () => {
            console.log('Servidor corriendo en http://localhost:4000');
        })
    }
)