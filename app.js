const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/public'))

app.listen(process.env.PORT || 3000
    , () => {
   
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

