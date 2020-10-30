const UserDAO = require('../dao/userDAO');
const { Router } = require('express');
const router = new Router();

// route user/:id
router.get('/:id', UserDAO.getUser);
router.post('/add', UserDAO.addUser);
router.get('/users/all', UserDAO.getUsers);

module.exports = router;