const fs = require('node:fs');
const path = require('node:path');

const express = require('express');

const app = express();

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server has started well on PORT: ${PORT}`)
})

app.get('/welcome', (req, res)=>{
console.log('WELCOME TO THE SERVER');

res.end()
})