const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(__dirname + '/public'))

app.listen(3000, () => {
    console.log('Servidor Corriendo')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'));
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'));
})