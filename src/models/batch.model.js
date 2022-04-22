const mongoose = require("mongoose");

const batchscema = new mongoose.Schema({

    batch_name: { type: String, required: true }
},
    {
        versionKey: false,
        timestamps: true
    }
)

const Batch = mongoose.model("batch", batchscema)

module.exports = Batch;