const mongoose = require('mongoose');

const emotionSchema = new mongoose.Schema({
    emotion: String,
    triggeringEvent: String,
    // thought and behavior can be taken out if too much...
    thought: String,
    behavior: String,    
    date: Date,
})

const Emotion = mongoose.model('Emotion', emotionSchema);
module.exports = {Emotion};