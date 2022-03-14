"use strict";
exports.__esModule = true;
var Router = require('express').Router;
var router = Router();
var postEmotionEntry = require('./controllers/emotions.controller.ts');
var getStatistics = require('./controllers/statistics.controller.js');
router.post('/entry', postEmotionEntry);
router.get('/statistics', getStatistics);
exports["default"] = router;
