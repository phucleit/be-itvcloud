const md5 = require("md5");

const { Account } = require('../model/modelAccount');

const loginController = {
    // login
    loginAccount: async(req, res) => {
        const username = req.body.username;
        const password = md5(req.body.password);

        await Account.findOne({username: username}, function(err, foundUser) {
            if (err) {
                res.send(err);
            } else {
                if (foundUser) {
                    if (foundUser.password === password) {
                        res.render('Login successfully');
                    } else {
                        res.send("Wrong password");
                    }
                }
            }
        });
    }
}

module.exports = loginController;