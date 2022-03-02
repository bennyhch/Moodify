const {Router} = require('express');
const router = Router();
const {getStatistics} = require('./controller/controller');

router.get('/stat', getStatistics);




module.exports = router;
