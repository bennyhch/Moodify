// let express = require('express');
import { Request, Response } from 'express'
// const { Request, Response } = require('express');
import { Emotion, EmotionType } from '../model/emotionModel';


export async function postEmotionEntry(req: Request, res: Response) {
  try {
    console.log(req.body);
    const { emotion, triggeringEvent, thought, behavior, date }: EmotionType = req.body;
    const dbRes: EmotionType = await Emotion.create({ emotion, triggeringEvent, thought, behavior, date });
    res.send(dbRes);
    // res.send('new hello from the controller - homepage(postEmotionEntryt)');
    res.status(201);
  } catch (error) {
    console.log(error);
    res.status(500);
    res.end();
  }
}


