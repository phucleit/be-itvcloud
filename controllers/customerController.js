const { Customer } = require('../model/modelCustomer');

const customerController = {
    //add Customer
    addCustomer: async(req, res) => {
        try {
            const newCustomer = new Customer(req.body);
            if (req.files.cmnd_mat_truoc) {
                let path = '';
                req.files.cmnd_mat_truoc.forEach(function(files, index, arr) {
                    path = path + files.path + ',';
                });
                path = path.substring(0, path.lastIndexOf(','));
                newCustomer.cmnd_mat_truoc = path;
            }

            if (req.files.cmnd_mat_sau) {
                let path = '';
                req.files.cmnd_mat_sau.forEach(function(files, index, arr) {
                    path = path + files.path + ',';
                });
                path = path.substring(0, path.lastIndexOf(','));
                newCustomer.cmnd_mat_sau = path;
            }
            const savedCustomer = await newCustomer.save();
            res.status(200).json(savedCustomer);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all Customers
    getAllCustomers: async(req, res) => {
        try {
            const customers = await Customer.find();
            res.status(200).json(customers);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete Customer
    deleteCustomer: async(req, res) => {
        try {
            await Customer.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail Customer
    getDetailCustomer: async(req, res) => {
        try {
            const customer = await Customer.findById(req.params.id);
            res.status(200).json(customer);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // update Customer
    updateCustomer: async(req, res) => {
        try {
            const customer = await Customer.findById(req.params.id);
            await customer.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}
module.exports = customerController;