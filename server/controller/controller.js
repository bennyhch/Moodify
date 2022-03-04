const {Emotion} = require('../model/emotionModel');

async function postEmotionEntry(req, res) {
    try {
        console.log(req.body);
        const {emotion, triggeringEvent, thought, behavior, date} = req.body;
        const dbRes = await Emotion.create({emotion, triggeringEvent, thought, behavior, date});
        res.send(dbRes);
        // res.send('new hello from the controller - homepage(postEmotionEntryt)');
        res.status(201);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.end();
    }
}

async function getStatistics(req, res) {
    try {
        // res.send('hello from the controller -statistics');
        const dbRes = await Emotion.find();
        console.log(dbRes);
        res.send(dbRes);
        res.status(200);
    } catch (error) {
        console.log(error);
        res.status(500);
        res.end();
    }
}

async function getHomePage(req, res) {
    try {
        res.send('hello from the controller - homepage3');
    } catch (error) {
        console.log(error);
    }
}



module.exports = {getStatistics, getHomePage, postEmotionEntry};