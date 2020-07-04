const Router = require('express').Router
const weatherController = require('../controllers/weatherController');
const router = Router();

router.get('/answers', weatherController.answers);
router.get('/', weatherController.predict);

module.exports = router;