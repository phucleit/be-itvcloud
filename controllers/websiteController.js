const { Website } = require('../model/model');

const websiteController = {
    //add website
    addWebsite: async(req, res) => {
        try {
            const newWebsite = new Website(req.body);
            const savedWebsite = await newWebsite.save();
            res.status(200).json(savedWebsite);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all websites
    getAllWebsites: async(req, res) => {
        try {
            const websites = await Website.find();
            res.status(200).json(websites);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete website
    deleteWebsite: async(req, res) => {
        try {
            await Website.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = websiteController;