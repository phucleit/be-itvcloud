const router = require('express').Router();

const statusController = require('../controllers/statusController');

router.post('/', statusController.addStatus);
router.get('/', statusController.getAllStatus);

module.exports = router;