const mongoose = require('mongoose')
const Schema = mongoose.Schema

const instrumentSchema = new Schema ({
    instName: {type: String, required: true},
    instType: {type: String, required: true},
    instImage: {type: String, required: true},
    instOrigin: {type: String, required: true},
    instTradition: type: Boolean,
    instAbout: {type: String, required: true},
    instVid: {type: String, required: true},
    uid:{type: Schema.Types.ObjectId, ref: "User"}
});

const Instruments = mongoose.model("Instruments", instrumentSchema)

module.exports = Instruments