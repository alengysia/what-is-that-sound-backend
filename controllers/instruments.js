const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Instrument = require('../models/instrument');




//Index
router.get('/', async (req, res) => {
    try {
        res.json(await Instrument.find({}));
    } catch (error) {
        res.status(400).json(error)
    }
});


//Create
router.post('/', async (req, res) =>{
    try {
        res.json(await Instrument.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});








module.exports = router