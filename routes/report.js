const router = require('express').Router();

const reportController = require('../controllers/reportController');
const upload = require('../middleware/upload');

router.post('/', upload.array('image[]'), reportController.addReport);
router.get('/', reportController.getReport);
router.get('/:id', reportController.getDetailReport);
router.put('/:id', reportController.updateReport);
router.delete('/:id', reportController.deleteReport);

module.exports = router;