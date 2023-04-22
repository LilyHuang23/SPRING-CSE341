const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.lilyRoute)
routes.get('/chloe', lesson1Controller.chloeRoute)
routes.get('/andy', lesson1Controller.andyRoute)

module.exports = routes;