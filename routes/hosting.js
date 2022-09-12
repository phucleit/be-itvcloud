const router = require('express').Router();

const hostingController = require('../controllers/hostingController.js');

router.post('/', hostingController.addHosting);
router.get('/', hostingController.getAllHostings);
router.delete('/:id', hostingController.deleteHosting);
router.get('/:id', hostingController.getDetailHosting);
router.put('/:id', hostingController.updateHosting);

module.exports = router;