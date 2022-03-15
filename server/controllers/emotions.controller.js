"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEmotionEntry = void 0;
// const { Request, Response } = require('express');
const emotionModel_1 = require("../model/emotionModel");
function postEmotionEntry(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(req.body);
            const { emotion, triggeringEvent, thought, behavior, date } = req.body;
            const dbRes = yield emotionModel_1.Emotion.create({ emotion, triggeringEvent, thought, behavior, date });
            res.send(dbRes);
            // res.send('new hello from the controller - homepage(postEmotionEntryt)');
            res.status(201);
        }
        catch (error) {
            console.log(error);
            res.status(500);
            res.end();
        }
    });
}
exports.postEmotionEntry = postEmotionEntry;
