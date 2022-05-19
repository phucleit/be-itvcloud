const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { User } = require('../model/modelUser');
const { Role } = require('../model/modelRole');

const userController = {
    //add user
    addUser: async(req, res) => {
        try {
            const newUser = new User(req.body);
            newUser.password = bcrypt.hashSync(req.body.password, 10);
            const savedUser = await newUser.save();
            if (req.body.roles) {
                const roles = Role.findById(req.body.roles);
                await roles.updateOne({$push: {roles: savedUser.id}});
            }
            res.status(200).json(savedUser);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all users
    getAllUsers: async(req, res) => {
        try {
            const users = await User.find().populate("roles");
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
            const user = await User.findById(req.params.id).populate("roles");
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

    signInUser: async(req, res) => {
        try {
            User.findOne({$or: [
                {username: req.body.username},
                {email: req.body.email},
            ]}, function(err, user) {
                if (err) {
                    res.status(500).json(err);
                }
                if (!user) {
                    res.status(401).json({ message: 'Authentication failed. User not found.' });
                } else {
                    if (!user.comparePassword(req.body.password)) {
                        res.status(401).json({ message: 'Authentication failed. Wrong password.' });
                    } else {
                        return res.json({
                            token: jwt.sign({ email: user.email, hoten: user.hoten, username: user.username, _id: user._id}, 'RESTFULAPIs'),
                            hoten: user.hoten, 
                            username: user.username
                        });
                    }
                }
            });
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = userController;