const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost:27017/moodify')
    .then(() => console.log('db connected!!'))
    .catch(err => console.error(err));

const db = mongoose.connection;
db.on('error', (error) => console.log(error));

module.exports = db;