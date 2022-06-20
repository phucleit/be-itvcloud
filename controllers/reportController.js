const { Report } = require('../model/modelReport');

const reportController = {
    //add report
    addReport: async(req, res) => {
        try {
            const newReport = new Report(req.body);
            if (req.files) {
                let path = '';
                req.files.forEach(function(files, index, arr) {
                    path = path + files.path + ',';
                });
                path = path.substring(0, path.lastIndexOf(','));
                newReport.image = path;
            }
            const savedReport = await newReport.save();
            res.status(200).json(savedReport);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    //get report
    getReport: async(req, res) => {
        try {
            console.log('a')     ;
        } catch(err) {
            res.status(500).json(err);
        }
    },

}

module.exports = reportController;