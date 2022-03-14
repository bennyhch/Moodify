const { Router } = require('express');
const router = Router();
const postEmotionEntry = require('./controllers/emotions.controller.ts');
const getStatistics = require('./controllers/statistics.controller.js');


router.post('/entry', postEmotionEntry);
router.get('/statistics', getStatistics);

export default router;