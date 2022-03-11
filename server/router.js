const {Router} = require('express');
const router = Router();
const postEmotionEntry = require('./controllers/emotions.controller.js');
const getStatistics = require('./controllers/statistics.controller.js');


router.post('/entry', postEmotionEntry);
router.get('/statistics', getStatistics);


module.exports = router;
