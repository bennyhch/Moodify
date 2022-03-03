const {Emotion} = require('../model/emotionModel');

async function getStatistics(req, res) {
    try {
        res.send('hello from the controller -stat');
    } catch (error) {
        console.log(error);
    }
}

async function getHomePage(req, res) {
    try {
        res.send('hello from the controller - homepage3');
    } catch (error) {
        console.log(error);
    }
}

async function postEmotionEntry(req, res) {
    try {
        res.send('hello from the controller - homepage(postEmotionEntryt)');
    } catch (error) {
        console.log(error);
    }
}


module.exports = {getStatistics, getHomePage, postEmotionEntry};