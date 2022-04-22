require("dotenv").config();
const jwt = require("jsonwebtoken")
const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY)
}
const getUsers = async (req, res) => {
    try {

        const users = await User.find().lean().exec();
        return res.send(users)
    } catch (error) {
        return res.send(error.message)
    }
}

const register = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
        if (user)
            return res.status(400).send({ message: "Please try with another email" });
        user = await User.create(req.body);
        const token = newToken(user);

        return res.send({ user, token });
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}

//login
const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400)
                .send({ message: "Please Check your email or password" });
        }
        const match = user.checkPassword(req.body.password)
        if (!match) {
            return res.status(400)
                .send({ message: "Please try another email or password" });
        }
        const token = newToken(user);

        return res.send({ user, token });  
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = { register, login, getUsers }