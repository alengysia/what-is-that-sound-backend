const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instrumentSchema = new Schema ({
    instName: {type: String},
    instType: {type: String},
    instImage: {type: String},
    instOrigin: {type: String},
    instTradition: {type: Boolean},
    instAbout: {type: String},
    instVid: {type: String},
    uid:{type: String},
});

const Instruments = mongoose.model("Instruments", instrumentSchema)

module.exports = Instruments