let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    _id: Number,
    name: String,
    dateCreated: String,
    responses: Number,
    questions: [{
      title: String,
      options: [{
        details: String,
        count: Number
      }]
    }]
},
{
    collection: "surveys"
});

module.exports = mongoose.model('Survey', surveyModel);