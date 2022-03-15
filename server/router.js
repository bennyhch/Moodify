"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// const { Router } = require('express');
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const { postEmotionEntry } = require('./controllers/emotions.controller.ts');
const getStatistics = require('./controllers/statistics.controller.js');
console.log(postEmotionEntry);
router.post('/entry', postEmotionEntry);
router.get('/statistics', getStatistics);
