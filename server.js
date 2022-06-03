const express = require('express');
const app = express();

app.listen(8080, function() {
    console.log('listening on 8080.');
});

app.get('/pet', function(req, res) {
    res.sendFile(__dirname + '/pet.html');
});

app.get('/beauty', (req, res) => {
    res.send('<h1>뷰티용품 쇼핑.</h1>');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/fetch', (req, res) => {
    // res.send('<h1>fetch 테스트 페이지</h1>');
    res.sendFile(__dirname + '/fetch.html');
});