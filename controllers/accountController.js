const md5 = require("md5");

const { Account } = require('../model/modelAccount');

const accountController = {
    //add account
    addAccount: async(req, res) => {
        try {
            // const newAccount = new Account(req.body);
            // const savedAccount = await newAccount.save();
            const newAccount = new Account({
                hoten: req.body.hoten,
                username: req.body.username,
                password: md5(req.body.password),
                email: req.body.email,
                phone: req.body.phone,
            });
            const savedAccount = await newAccount.save();
            res.status(200).json(savedAccount);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all accounts
    getAllAccounts: async(req, res) => {
        try {
            const accounts = await Account.find();
            res.status(200).json(accounts);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete account
    deleteAccount: async(req, res) => {
        try {
            await Account.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail account
    getDetailAccount: async(req, res) => {
        try {
            const account = await Account.findById(req.params.id);
            res.status(200).json(account);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update account
    updateAccount: async(req, res) => {
        try {
            const account = await Account.findById(req.params.id);
            await account.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },
}

module.exports = accountController;