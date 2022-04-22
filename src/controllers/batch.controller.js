const express = require("express");
const Batch = require("../models/batch.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        let batch = await Batch.create(req.body);
        return res.status(201).send(batch)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})


router.get("/", async (req, res) => {
    try {

        let batches = await Batch.find().lean().exec();
        return res.status(200).send(batches)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})


module.exports = router