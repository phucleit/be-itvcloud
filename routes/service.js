const router = require('express').Router();

const serviceController = require('../controllers/serviceController');

router.post('/', serviceController.addService);
router.get('/', serviceController.getAllServices);
router.delete('/:id', serviceController.deleteService);
router.get('/:id', serviceController.getDetailService);
router.put('/:id', serviceController.updateService);
router.get('/website/domain/expired', serviceController.getDomainExpired);

module.exports = router;