const express = require("express");
const connect = require("./config/db");
const cors = require('cors')
const { getUsers, register, login } = require("./controllers/auth.controller");

const batchController = require("./controllers/batch.controller");
const lectureController = require("./controllers/lecture.controller")
const assignmentController = require("./controllers/assignment.controller")

const port = process.env.PORT || 5000

const app = express();
app.use(cors())

app.use(express.json());

//register

app.post("/register", register);
app.get("/userdata", getUsers)
app.post("/login", login);

app.use("/batch", batchController);
app.use("/lecture", lectureController);
app.use("/assignment", assignmentController)


app.listen(port, async (req, res) => {
    try {
        await connect();
        console.log(`Server Running On Port ${port}`)
    } catch (er) {
        console.log(er.message)
    }
})