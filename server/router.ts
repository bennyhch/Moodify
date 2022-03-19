
// const { Router } = require('express');
import express from 'express';
const router = express.Router();
const { postEmotionEntry } = require('./controllers/emotions.controller.ts');
const getStatistics = require('./controllers/statistics.controller.js');
console.log(postEmotionEntry);


router.post('/entry', postEmotionEntry);
router.get('/statistics', getStatistics);


export { router };

