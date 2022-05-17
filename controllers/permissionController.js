const { Permission } = require('../model/modelPermission')

const permissionController = {
    //add service
    addPermission: async(req, res) => {
        try {
            const newPermission = new Permission(req.body);
            const savedPermission = await newPermission.save();
            res.status(200).json(savedPermission);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all services
    getAllPermissions: async(req, res) => {
        try {
            const permission = await Permission.find();
            res.status(200).json(permission);
        } catch(err) {
            res.status(500).json(err);
        }
    },
}

module.exports = permissionController;