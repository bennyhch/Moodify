// const Emotion = require('../model/emotionModel');
import { Emotion } from '../model/emotionModel'
import { Request, Response } from 'express';


async function getEmotionEntries(req: Request, res: Response) {
  try {
    const dbRes = await Emotion.find();
    res.send(dbRes);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
}

export default getEmotionEntries;
// module.exports = getStatistics;