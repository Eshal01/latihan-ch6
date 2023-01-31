const express = require('express');
const userController = require('../controller/userController')
const users = express.Router();

users.get('/users', userController.getUsers);
users.get('/users/:id', userController.getUserById);
users.post('/users', userController.createUser);
users.put('/users/:id', userController.updateUser);
users.delete('/users/:id', userController.deleteUser);


module.exports = users;