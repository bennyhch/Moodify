const {Router} = require('express');
const router = Router();
const {getStatistics, getHomePage, postEmotionEntry} = require('./controller/controller');

router.post('/entry', postEmotionEntry);
router.get('/statistics', getStatistics);


router.get('/', getHomePage);





module.exports = router;
