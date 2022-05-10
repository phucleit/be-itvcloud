const router = require('express').Router();

const websiteController = require('../controllers/websiteController');

// add website
router.post('/', websiteController.addWebsite);
router.get('/', websiteController.getAllWebsites);
router.delete('/:id', websiteController.deleteWebsite);

module.exports = router;