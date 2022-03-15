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
const express = require("express");
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const { router } = require('./router');
//const db = require('./model/db.ts');
const PORT = 3300;
app.use(cors());
app.use(express.json());
app.use(morgan('short'));
app.use(router);
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        //await db;
        app.listen(PORT, () => {
            console.log(`Example app listening on http://localhost:${PORT}`);
        });
    });
}
start();
