const router = require('express').Router();

const permissionController = require('../controllers/permissionController');

router.post('/', permissionController.addPermission);
router.get('/', permissionController.getAllPermissions);

module.exports = router;