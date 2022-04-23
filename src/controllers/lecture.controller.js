const express = require("express");
const Lecture = require("../models/lecture.model");

const router = express.Router();




router.post("/", async (req, res) => {
    try {
        let lecture = await Lecture.create(req.body);
        return res.status(201).send(lecture)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})


router.get("/", async (req, res) => {
    try {
        let lectures = await Lecture.find().lean().exec();
        return res.status(200).send(lectures)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

//Pagination
// router.get("/:id", async (req, res) => {
//     try {
//         // console.log("inside")
//         let page=req.query.page||1;
//         let limit=req.query.limit||5;
//         let offset=(page-1)*limit;
//         let pages=await Lecture.find({ batch_id: req.params.id }).countDocuments();
//         let lecture = await Lecture.find({ batch_id: req.params.id }).populate({ path: "batch_id",select:"batch_name" })
//         .skip(offset).limit(limit).lean().exec();
//         return res.status(200).send({lecture,pages})
//     } catch (error) {
//         return res.status(500).send({ error: error.message })
//     }
// })

router.get("/:id", async (req, res) => {
    try {
        // console.log("inside")
        let lecture = await Lecture.find({ batch_id: req.params.id })
            .populate({ path: "batch_id", select: "batch_name" })
            .lean().exec();
        return res.status(200).send(lecture)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})



module.exports = router