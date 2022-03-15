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
const http2_1 = require("http2");
const mongoose = require('mongoose');
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, http2_1.connect)('mongodb://localhost:27017/moodify');
        console.log('db connected');
    });
}
// mongoose
//     .connect('mongodb://localhost:27017/moodify')
//     .then(() => console.log('db connected!!'))
//     .catch(err => console.error(err));
const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
module.exports = db;
