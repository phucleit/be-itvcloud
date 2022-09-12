const router = require('express').Router();

const emailController = require('../controllers/emailController.js');

router.post('/', emailController.addEmail);
router.get('/', emailController.getAllEmails);
router.delete('/:id', emailController.deleteEmail);
router.get('/:id', emailController.getDetailEmail);
router.put('/:id', emailController.updateEmail);

module.exports = router;