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

module.exports = postEmotionEntry;