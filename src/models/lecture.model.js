const mongoose = require("mongoose");
const User = require("./user.model");

const lectureschema = new mongoose.Schema({
    lecture_name:{type:String,required:true},
    batch_id:{type:mongoose.Schema.Types.ObjectId,ref:"batch"}
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