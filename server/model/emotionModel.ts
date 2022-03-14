// import mongoose from 'mongoose';
import { Schema, model, connect } from 'mongoose';


//1 create an interfavce representing a document in MongoDB
interface emotion {
    emotion: string;
    triggeringEvent: string;
    // thought and behavior can be taken out if too much...
    thought: string;
    behavior: string;
    date: Date;
}

//2 create a schema corresponding to document interface
const emotionSchema = new Schema<emotion>({
    emotion: String,
    triggeringEvent: String,
    // thought and behavior can be taken out if too much...
    thought: String,
    behavior: String,
    date: Date,


});

//Create a Model
export const Emotion = model<emotion>('Emotion', emotionSchema);
// module.exports = { Emotion };