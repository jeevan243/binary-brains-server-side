const express = require("express");
const Assignment = require("../models/assignments.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        let assignment = await Assignment.create(req.body);
        return res.status(201).send(assignment)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})


router.get("/", async (req, res) => {
    try {
        let assignments = await Assignment.find().lean().exec();
        return res.status(200).send(assignments)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})


module.exports = router