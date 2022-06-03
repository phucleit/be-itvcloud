const { Package } = require('../model/modelPackage');

const packageController = {
    //add package
    addPackage: async(req, res) => {
        try {
            const newPackage = new Package(req.body);
            const savedPackage = await newPackage.save();
            res.status(200).json(savedPackage);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all packages
    getAllPackages: async(req, res) => {
        try {
            const packages = await Package.find();
            res.status(200).json(packages);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete package
    deletePackage: async(req, res) => {
        try {
            await Package.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail package
    getDetailPackage: async(req, res) => {
        try {
            const package = await Package.findById(req.params.id);
            res.status(200).json(package);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update package
    updatePackage: async(req, res) => {
        try {
            const package = await Package.findById(req.params.id);
            await package.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },
}

module.exports = packageController;