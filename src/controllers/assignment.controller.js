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

//get assignments by batch
// router.get("/:id", async (req, res) => {
//     try {
//         let page=req.query.page||1;
//         let limit=req.query.limit||5;
//         let offset=(page-1)*limit;
//         let pages=await Assignment.find({ batch_id: req.params.id }).countDocuments();
//         let assignments = await Assignment.find({batch_id:req.params.id}).skip(offset).limit(limit).lean().exec();
//         return res.status(200).send({assignments,pages})
//     } catch (error) {
//         return res.status(500).send({ error: error.message })
//     }
// })

router.get("/:id", async (req, res) => {
    try {
        let assignments = await Assignment.find({ batch_id: req.params.id }).lean().exec();
        return res.status(200).send(assignments)
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})




router.patch("/:assignment_id", async (req, res) => {
    try {
        let assignments = await Assignment.findById(req.params.assignment_id).lean().exec();
        assignments.students.push(req.body.user_id)
        await Assignment.findByIdAndUpdate(req.params.assignment_id, assignments);

        let allassignments = await Assignment.find({ batch_id: assignments.batch_id }).lean().exec();
        // console.log(allassignments)
        return res.status(200).send(allassignments);
    } catch (error) {
        return res.status(500).send({ error: error.message })
    }
})

module.exports = router