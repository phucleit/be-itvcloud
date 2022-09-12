const { Email } = require('../model/modelEmail');

const emailController = {
    //add email
    addEmail: async(req, res) => {
        try {
            const newEmail = new Email(req.body);
            const savedEmail = await newEmail.save();
            res.status(200).json(savedEmail);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all emails
    getAllEmails: async(req, res) => {
        try {
            const email = await Email.find();
            res.status(200).json(email);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete email
    deleteEmail: async(req, res) => {
        try {
            await Email.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail email
    getDetailEmail: async(req, res) => {
        try {
            const email = await Email.findById(req.params.id);
            res.status(200).json(email);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update email
    updateEmail: async(req, res) => {
        try {
            const email = await Email.findById(req.params.id);
            await email.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = emailController;