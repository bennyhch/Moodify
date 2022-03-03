const {Router} = require('express');
const router = Router();
const {getStatistics, getHomePage, postEmotionEntry} = require('./controller/controller');

router.get('/', getHomePage);
router.post('/entry', postEmotionEntry);
router.get('/stat', getStatistics);





module.exports = router;
