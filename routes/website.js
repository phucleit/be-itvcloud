const router = require('express').Router();

const websiteController = require('../controllers/websiteController');

router.post('/', websiteController.addWebsite);
router.get('/', websiteController.getAllWebsites);
router.delete('/:id', websiteController.deleteWebsite);
router.get('/:id', websiteController.getDetailWebsite);
router.put('/:id', websiteController.updateWebsite);
router.get('/website/expired', websiteController.getWebsiteExpired);

module.exports = router;