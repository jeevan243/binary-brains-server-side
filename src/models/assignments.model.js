const mongoose = require("mongoose");


const assignmentSchema = new mongoose.Schema({
    assignment_name: { type: String, required: true },
    batch_id: { type: mongoose.Schema.Types.ObjectId, ref: "batch" },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    type:{type:String,required:true},
    creater: { type: String, required: true },
    created_date: { type: Date, required: true },
    dead_line: { type: Date, required: true },

},
    {
        versionKey: false,
        timestamps: true
    }
)

const Assignment = mongoose.model("assignment", assignmentSchema)

module.exports = Assignment;


// /4.Assignments 1—>1assigment—>1week
// Hard code
// BatchId

// 2.Creation Date

// 4.UserID
// 5.student array[userId];
// 6.Assignment
// 7.Dead line.

