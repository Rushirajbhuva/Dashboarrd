//console.log("Jay Shree Swaminarayan");
const express = require('express');
const app = express();
let port = 4000;
// const path=require('hbs');

// app.set('view engine','hbs');

require('./db/db');

app.get('/',(req,res)=>{
    res.send("connected");
})

app.listen(port,()=>{
    console.log(`listing to the port ${port}`);
})

