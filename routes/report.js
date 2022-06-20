const router = require('express').Router();

const reportController = require('../controllers/reportController');
const upload = require('../middleware/upload');

router.post('/', upload.array('image[]'), reportController.addReport);
router.get('/', reportController.getReport);

module.exports = router;