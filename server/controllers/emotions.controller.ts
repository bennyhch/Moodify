const { Emotion, EmotionType } = require('../model/emotionModel');



async function postEmotionEntry(req: Request, res: Response) {
  try {
    console.log(req.body);
    const { emotion, triggeringEvent, thought, behavior, date }: typeof EmotionType = req.body;
    const dbRes: typeof EmotionType = await Emotion.create({ emotion, triggeringEvent, thought, behavior, date });
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