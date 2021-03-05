const express = require ('express');
const UserController = require('../controllers/userController.js');
const router = express.Router();


router.post('/users', UserController.Insert);
router.get('/users', UserController.SearchAll);
router.get('/users/:id', UserController.SearchOne);
router.put('/users/:id', UserController.Update);
router.delete('/users/:id', UserController.Delete);

module.exports = router;
