const { Role } = require('../model/modelRole')
const { Permission } = require('../model/modelPermission')

const roleController = {
    //add role
    addRole: async(req, res) => {
        try {
            const newRole = new Role(req.body);
            const savedRole = await newRole.save();
            if (req.body.permissions) {
                const permissions = Permission.findById(req.body.permissions);
                await permissions.updateOne({$push: {permissions: savedRole.id}});
            }
            res.status(200).json(savedRole);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all roles
    getAllRoles: async(req, res) => {
        try {
            const roles = await Role.find().populate("permissions");
            res.status(200).json(roles);
        } catch(err) {
            res.status(500).json(err);
        }
    },
}

module.exports = roleController;