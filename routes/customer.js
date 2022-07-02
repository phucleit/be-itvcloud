const router = require('express').Router();

const customerController = require('../controllers/customerController');
const upload = require('../middleware/upload');


router.post('/', upload.fields([
    { name: 'cmnd_mat_truoc', maxCount: 1 },
    { name: 'cmnd_mat_sau', maxCount: 1 },
]), customerController.addCustomer);
router.get('/', customerController.getAllCustomers);
router.delete('/:id', customerController.deleteCustomer);
router.get('/:id', customerController.getDetailCustomer);
router.put('/:id', upload.fields([
    { name: 'cmnd_mat_truoc', maxCount: 1 },
    { name: 'cmnd_mat_sau', maxCount: 1 },
]), customerController.updateCustomer);

module.exports = router;