const express = require("express");
const passport = require("../middleware/passport");
const login = express.Router();

const account = {
    username : "mahardika",
    password : "123123"
};

login.post("/login",[passport], (req, res) => {
    res.render('dashboard',{
        title:'dashboard'    
    })
    // res.render('index', {title:'Home'})
    // res.status(200).json({
    //     status: "success",
    //     message : "Berhasil Login!",
    //     data : account
    // });
});

module.exports = login;