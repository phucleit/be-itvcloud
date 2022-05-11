const router = require('express').Router();

const accountController = require('../controllers/accountController');

router.post('/', accountController.addAccount);
router.get('/', accountController.getAllAccounts);
router.delete('/:id', accountController.deleteAccount);
router.get('/:id', accountController.getDetailAccount);
router.put('/:id', accountController.updateAccount);

module.exports = router;