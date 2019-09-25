//https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let JobsSchema = new Schema({
    jobTitle: {type: String, required: true, max: 100},
    datePosted: {type: Date},
    dateRecordCreated: {type: Date, required: true, default: Date.now},
    jobUrl: String,
    employer: String,
    address: String,
    employer_opinion: String,
});



module.exports = mongoose.model('JobsSchema', JobsSchema );