"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emotion = void 0;
// import mongoose from 'mongoose';

const mongoose_1 = require("mongoose");
//2 create a schema corresponding to document interface
const emotionSchema = new mongoose_1.Schema({

    emotion: String,
    triggeringEvent: String,
    // thought and behavior can be taken out if too much...
    thought: String,
    behavior: String,
    date: Date,
});
//Create a Model
exports.Emotion = (0, mongoose_1.model)('Emotion', emotionSchema);
// module.exports = { Emotion };
