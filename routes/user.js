const router = require('express').Router();

const userController = require('../controllers/userController');

router.post('/', userController.addUser);
router.get('/', userController.getAllUsers);
router.delete('/:id', userController.deleteUser);
router.get('/:id', userController.getDetailUser);
router.put('/:id', userController.updateUser);

module.exports = router;