const { Hosting } = require('../model/modelHosting');

const hostingController = {
    //add hosting
    addHosting: async(req, res) => {
        try {
            const newHosting = new Hosting(req.body);
            const savedHosting = await newHosting.save();
            res.status(200).json(savedHosting);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all hostings
    getAllHostings: async(req, res) => {
        try {
            const hosting = await Hosting.find();
            res.status(200).json(hosting);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete hosting
    deleteHosting: async(req, res) => {
        try {
            await Hosting.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail hosting
    getDetailHosting: async(req, res) => {
        try {
            const hosting = await Hosting.findById(req.params.id);
            res.status(200).json(hosting);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update hosting
    updateHosting: async(req, res) => {
        try {
            const hosting = await Hosting.findById(req.params.id);
            await hosting.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = hostingController;