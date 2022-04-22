const express = require("express");
const Lecture = require("../models/lecture.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        let batch = await Lecture.create(req.body);
        return res.status(201).send(batch)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})


router.get("/", async (req, res) => {
    try {
        let batches = await Lecture.find().lean().exec();
        return res.status(200).send(batches)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})


module.exports = router