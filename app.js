//import part modules
const path = require('path');
//import router
const router = require('./router/url');
//import express modules
const express = require('express');
// app run express 
const app = express();
//set port
const port = 3000 || process.env.PORT
//set router
app.use('/', router);
//app listen on port 3000
app.listen(port , () =>{
    console.log(`server listening on port ${port}`);
})