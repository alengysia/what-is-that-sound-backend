const express = require('express');
const router = express.Router();
const Instruments = require('../models/instrument');



router.get('/', async (req, res) => {
    try{
        res.json(await Instruments.find({managedBy: req.user.uid}));
    } catch (error) {
        res.status(401).json({message: 'Please login to see contacts'});
    }
});




module.exports = router