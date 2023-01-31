const express = require('express');
const { getBiodata } = require('../controller/biodataController');
const web = express.Router();

web.get('/', (req, res) =>{
    res.render('index', { title: 'Home'})
});
web.get('/signUp', (req, res) =>{
    res.render('signUp', { title: 'Registrasi'})
});
web.get('/signUp-detail', (req, res) =>{
    res.render('SignUp-detail', { title: 'Detail registrasi'})
});
web.get('/game', (req, res) =>{
    res.render('game', { title: 'GAME'})
});
web.get('/login', (req, res) =>{
    res.render('login', {title: 'Login'});
    // res.redirect('dashboard', {data: getBiodata})
});
web.get('/dashboard', (req, res) =>{
    res.render('dashboard', { title: 'Dashboard'})
});
module.exports = web;