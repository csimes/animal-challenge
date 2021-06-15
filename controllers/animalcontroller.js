const express = require("express");
const router = express.Router();
const { Animal } = require("../models");


router.post("/create", async (req, res) => {
    let { legNumber, predator, name} = req.body;
    
    const animalEntry = {
        legNumber,
        predator,
        name
    }
    try {
        const newAnimal = await Animal.create(animalEntry);
        res.status(201).json({
            animal: newAnimal,
            message: "Animal has been created!"
        });
    } catch (err) {
        res.status(500).json({  
            message: `Failed to create animal: ${err}`});
    }

});

router.get("/", async (req, res) => {
    try {
        const animalEntries = await Animal.findAll();
        res.status(200).json(animalEntries);
    } catch (err) {
        res.status(500).json({ error: err })
    }
});








module.exports = router;