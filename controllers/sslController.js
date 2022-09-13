const { SSL } = require('../model/modelSSL');

const sslController = {
    //add ssl
    addSSL: async(req, res) => {
        try {
            const newSSL = new SSL(req.body);
            const savedSSL = await newSSL.save();
            res.status(200).json(savedSSL);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all ssl
    getAllSSL: async(req, res) => {
        try {
            const ssl = await SSL.find();
            res.status(200).json(ssl);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete ssl
    deleteSSL: async(req, res) => {
        try {
            await SSL.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail ssl
    getDetailSSL: async(req, res) => {
        try {
            const ssl = await SSL.findById(req.params.id);
            res.status(200).json(ssl);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update ssl
    updateSSL: async(req, res) => {
        try {
            const ssl = await SSL.findById(req.params.id);
            await ssl.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = sslController;