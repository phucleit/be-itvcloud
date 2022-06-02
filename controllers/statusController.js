const { Status } = require('../model/modelStatus');

const statusController = {
    //add status
    addStatus: async(req, res) => {
        try {
            const newStatus = new Status(req.body);
            const savedStatus = await newStatus.save();
            res.status(200).json(savedStatus);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all status
    getAllStatus: async(req, res) => {
        try {
            const status = await Status.find();
            res.status(200).json(status);
        } catch(err) {
            res.status(500).json(err);
        }
    },
}

module.exports = statusController;