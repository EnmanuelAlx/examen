const Router = require('express').Router
const weatherController = require('../controllers/weatherController');
const router = Router();

router.get('/', weatherController.answers);
router.get('/:day', weatherController.predict);

module.exports = router;