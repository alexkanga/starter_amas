
// import express from 'express';
// import path from 'path';

// import path from 'path';
// import { fileURLToPath } from 'url';
/*********ADD THIS TO USE __dirname and __filename ***********/ 
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

/********************/ 

const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const contactsRoutes = require('./routes/contactsRoutes');


app.use( '/static', express.static(path.join(__dirname, "../frontend/assets/"))); //static permet d'avoir un repertoire virtuel pour les ressources statics
app.use(morgan('tiny'));

app.use(contactsRoutes)





app.use((req, res) => {
  res.status(404).sendFile("./frontend/error.html", {root: path.join(__dirname, "../")})
})

app.listen(4000, ()=> {
    console.log('Waiting request on port 4000 ')
})

console.log(`No request from client`);


