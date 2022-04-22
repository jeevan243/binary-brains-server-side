const mongoose = require("mongoose");


const lectureschema = new mongoose.Schema({
    lecture_name: { type: String, required: true },
    batch_id: { type: mongoose.Schema.Types.ObjectId, ref: "batch" },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    creater: { type: String, required: true },
    type: {
        type: String, enum: ['live', 'recorded'],
        default: 'live'
    },
    created_date: { type: Date, required: true },
    created_time: { type: String, required: true },
    zoom_link: { type: String, required: true }
},
    {
        versionKey: false,
        timestamps: true
    }
)

const Lecture = mongoose.model("lecture", lectureschema)

module.exports = Lecture;


//User.batchid.lectures---->count of lec

//3-->15lec---->boolean--->45
//batch--->15---->4-->11
//30--->30 3--->90 just create an empty arr which takes user_id

// Lectures data   1batch—>3lec/day→1week
// 1.Lecture name//Lecture mongoId
// 2.BatchID
// 3.Student array—>user_id
// 4.Creator
// 5. Type[live or recorded]
// 6.Time
// 7.Zoom link.
