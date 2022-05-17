const router = require('express').Router();

const roleController = require('../controllers/roleController');

router.post('/', roleController.addRole);
router.get('/', roleController.getAllRoles);

module.exports = router;