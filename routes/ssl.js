const router = require('express').Router();

const sslController = require('../controllers/sslController.js');

router.post('/', sslController.addSSL);
router.get('/', sslController.getAllSSL);
router.delete('/:id', sslController.deleteSSL);
router.get('/:id', sslController.getDetailSSL);
router.put('/:id', sslController.updateSSL);

module.exports = router;