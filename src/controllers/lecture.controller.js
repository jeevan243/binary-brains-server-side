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

//
router.get("/:id", async (req, res) => {
    try {
        console.log("inside")
        let lecture = await Lecture.find({ batch_id: req.params.id }).lean().exec();
        return res.status(200).send(lecture)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})



module.exports = router