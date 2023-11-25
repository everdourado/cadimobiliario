const route = require('express').Router();
const userController = require('../controllers/user.controller');

//rota de post que chama no nosso controller a função create
route.post("/", userController.create);
route.get("/", userController.findAll);

module.exports = route;