const {Emotion} = require('../model/emotionModel');

async function getStatistics(req, res) {
    try {
        res.send('hello from the controller');
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getStatistics};