const router = require('express').Router();

const laptopController = require('../controllers/laptopController');

router.post('/', laptopController.addLaptop);
router.get('/', laptopController.getAllLaptops);
router.delete('/:id', laptopController.deleteLaptop);
router.get('/:id', laptopController.getDetailLaptop);
router.put('/:id', laptopController.updateLaptop);

module.exports = router;