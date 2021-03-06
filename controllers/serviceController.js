const { Service } = require('../model/modelService');
const { Website } = require('../model/modelWebsite');

const serviceController = {
    //add service
    addService: async(req, res) => {
        try {
            const newService = new Service(req.body);
            const savedService = await newService.save();
            res.status(200).json(savedService);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get all services
    getAllServices: async(req, res) => {
        try {
            const services = await Service.find().populate('website');
            res.status(200).json(services);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // delete service
    deleteService: async(req, res) => {
        try {
            await Website.updateMany({service: req.params.id}, {service: null});
            await Service.findByIdAndDelete(req.params.id);
            res.status(200).json('Deleted successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get detail service
    getDetailService: async(req, res) => {
        try {
            const service = await Service.findById(req.params.id).populate('website');
            res.status(200).json(service);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // update service
    updateService: async(req, res) => {
        try {
            const service = await Service.findById(req.params.id);
            await service.updateOne({$set: req.body});
            res.status(200).json('Updated successfully');
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // getwebsite
    getDomainExpired: async(req, res) => {
        try {
            var currentDate = new Date();
            console.log(currentDate);
            // const services = await Service.find(
            //     {tengoidv: "Tên miền"},
            //     {website: {$elemMatch: {expiredAt: {$lte: currentDate}}}}
            // ).populate('website');

            const services = await Service.find(
                { tengoidv: "Tên miền" },
                // { website : { $elemMatch : { expiredAt : {$lte: currentDate} } } }
            ).populate('website');

            // const services = await Service.find(
            //     { website: {
            //         $elemMatch: {
            //             hoten: "Phúc 1",
            //         }
            //     } }
            // ).populate('website');

            res.status(200).json(services);

        } catch(err) {
            res.status(500).json(err);
        }
    }
}

module.exports = serviceController;