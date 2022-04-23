const express = require("express");
const Placements = require("../models/placement.model");

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        let placement = await Placements.create(req.body);
        return res.status(201).send(placement)
    } catch (error) {
        return res.status(400).send({ error: error.message })
    }
})


router.get("/", async (req, res) => {
    try {
        let placements = await Placements.find().lean().exec();
        return res.status(200).send(placements)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

module.exports = router