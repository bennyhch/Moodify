const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require ('morgan');
const router = require('./router');
const db = require('./model/db');
const PORT = 3300;



app.use(cors());
//app.use(express.json());
app.use(morgan('short'));
app.use(router);





async function start() {
    await db;
    app.listen(PORT, () => {
        console.log(`Example app listening on http://localhost:${PORT}`)
      })
}
start();