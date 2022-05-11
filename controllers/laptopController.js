const { Laptop } = require('../model/modelLaptop');

const laptopController = {
    //add laptop
    addLaptop: async(req, res) => {
        try {
            const newLaptop = new Laptop(req.body);
            const savedLaptop = await newLaptop.save();
            res.status(200).json(savedLaptop);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all laptops
    getAllLaptops: async(req, res) => {
        try {
            const laptops = await Laptop.find();
            res.status(200).json(laptops);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete laptop
    deleteLaptop: async(req, res) => {
        try {
            await Laptop.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail laptop
    getDetailLaptop: async(req, res) => {
        try {
            const laptop = await Laptop.findById(req.params.id);
            res.status(200).json(laptop);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update laptop
    updateLaptop: async(req, res) => {
        try {
            const laptop = await Laptop.findById(req.params.id);
            await laptop.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = laptopController;