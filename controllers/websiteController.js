const { Website } = require('../model/modelWebsite');
const { Service } = require('../model/modelService');

const websiteController = {
    //add website
    addWebsite: async(req, res) => {
        try {
            // let current_date = new Date();
            // const newWebsite = new Website({
            //     hoten: req.body.hoten,
            //     cmnd: req.body.cmnd,
            //     phone: req.body.phone,
            //     website: req.body.website,
            //     nhanvienphutrach: req.body.nhanvienphutrach,
            //     khuvuc: req.body.khuvuc,
            //     goidungluong: req.body.goidungluong,
            //     ghichu: req.body.ghichu,
            //     createdDate: current_date
            // });
            const newWebsite = new Website(req.body);
            const savedWebsite = await newWebsite.save();
            if (req.body.service) {
                const service = Service.findById(req.body.service);
                await service.updateOne({$push: {website: savedWebsite.id}});
            }
            res.status(200).json(savedWebsite);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all websites
    getAllWebsites: async(req, res) => {
        try {
            const websites = await Website.find().populate("service");
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
    },

    // get detail website
    getDetailWebsite: async(req, res) => {
        try {
            const website = await Website.findById(req.params.id);
            res.status(200).json(website);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //update website
    updateWebsite: async(req, res) => {
        try {
            const website = await Website.findById(req.params.id);
            await website.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = websiteController;