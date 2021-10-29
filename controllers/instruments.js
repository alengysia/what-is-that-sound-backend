const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Instruments = require('../models/instrument');




//Index
router.get('/', async (req, res) => {
    try {
        res.json(await Instruments.find({}));
    } catch (error) {
        res.status(400).json(error)
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Instruments.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});



//Create
router.post('/', async (req, res) =>{
    try {
        res.json(await Instruments.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});








module.exports = router