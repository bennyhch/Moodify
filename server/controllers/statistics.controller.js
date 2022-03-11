const {Emotion} = require('../model/emotionModel');


async function getStatistics(req, res) {
  try {
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

module.exports = getStatistics;