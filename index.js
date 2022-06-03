const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const jsonwebtoken = require("jsonwebtoken");

const websiteRouter = require('./routes/website');
const laptopRouter = require('./routes/laptop');
const userRouter = require('./routes/user');
const serviceRouter = require('./routes/service');
const permissionRouter = require('./routes/permission');
const roleRouter = require('./routes/role');
const statusRouter = require('./routes/status');
const packageRouter = require('./routes/package');

dotenv.config({path: ".env"});
// connect database
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan('common'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// routes
app.use('/api/website', websiteRouter);
app.use('/api/laptop', laptopRouter);
app.use('/api/user', userRouter);
app.use('/api/service', serviceRouter);
app.use('/api/permission', permissionRouter);
app.use('/api/role', roleRouter);
app.use('/api/status', statusRouter);
app.use('/api/package', packageRouter);

// login
app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
      req.user = undefined;
      next();
    }
});

// listen port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is running');
})