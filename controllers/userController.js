const md5 = require("md5");

const { User } = require('../model/modelUser');

const userController = {
    //add user
    addUser: async(req, res) => {
        try {
            const newUser = new User({
                hoten: req.body.hoten,
                username: req.body.username,
                password: md5(req.body.password),
                email: req.body.email,
                phone: req.body.phone,
            });
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all users
    getAllUsers: async(req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete user
    deleteUser: async(req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail user
    getDetailUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update user
    updateUser: async(req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },
}

module.exports = userController;