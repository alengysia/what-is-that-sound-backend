const express = require('express');
const router = express.Router();
const Instruments = require('../models/instrument');


// Index
router.get('/', async (req, res) => {
    try{
        res.json(await Instruments.find({managedBy: req.user.uid}));
    } catch (error) {
        res.status(401).json({message: 'Please login to see contacts'});
    }
});


router.delete('/:id', async (req, res) => {
    try {
      // send all people
      res.json(await Instruments.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

router.put("/:id", async (req, res) => {
    try {
        res.json(
            await Instruments.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        res.status(400).json(error);
    }
});




router.post('/', async (req, res) =>{
    try {
        res.json(await Instruments.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

router.get("/:id", async (req, res) => {
    try {
        // send all people
        res.json(await Instruments.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
    });


module.exports = router