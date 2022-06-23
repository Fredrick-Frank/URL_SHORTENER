const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {type: String, default: Date.now}
});

//the model is connected to the mongoose "Url file"
module.exports = mongoose.model('Url',UrlSchema);