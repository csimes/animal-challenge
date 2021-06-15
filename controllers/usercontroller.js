const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/create", async (req, res) => {

    let { username, password } = req.body.user;

    try {

    const newUser = await User.create({
        username,
        password
    });

    res.status(200).json({
            message: "User successfully created!",
            user: newUser
        });

    } catch (err) {
        res.status(500).json({ error }) 
    }
});

router.post("/login", async (req, res) => {
    let { username, password } = req.body.user;

    try {
        const loggedInUser = await User.findOne({
            where : {
                username: username,
                password: password
            }
        })
        if(loggedInUser) {
            res.status(200).json({
                message: "User successfully logged in!",
                user: loggedInUser
            })
        } else {
            res.status(401).json({
                message: "Login failed."
            })
        }
    } catch (err) {
        res.status(500).json({ Error: err })
    }
});


module.exports = router;