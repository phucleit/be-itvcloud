const router = require('express').Router();

const packageController = require('../controllers/packageController');

router.post('/', packageController.addPackage);
router.get('/', packageController.getAllPackages);
router.delete('/:id', packageController.deletePackage);
router.get('/:id', packageController.getDetailPackage);
router.put('/:id', packageController.updatePackage);

module.exports = router;