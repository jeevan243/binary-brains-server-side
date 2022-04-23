const mongoose = require("mongoose")

const placementSchema = new mongoose.Schema({
    company_name: { type: String, required: true },
    image: { type: String, required: true },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
}
    ,
    {
        timestamps: true,
        versionKey: false
    })

const Placements = mongoose.model("placement", placementSchema)

module.exports = Placements;