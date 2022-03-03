const {Router} = require('express');
const router = Router();
const {getStatistics, getHomePage, postEmotionEntry} = require('./controller/controller');

router.post('/entry', postEmotionEntry);
router.get('/', getHomePage);
router.get('/stat', getStatistics);





module.exports = router;
