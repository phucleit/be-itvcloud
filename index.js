const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const websiteRouter = require('./routes/website');
const laptopRouter = require('./routes/laptop');
const accountRouter = require('./routes/account');
const loginRouter = require('./routes/login');

dotenv.config();
// connect database
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan('common'));

// routes
app.use('/website', websiteRouter);
app.use('/laptop', laptopRouter);
app.use('/account', accountRouter);
app.use('/login', loginRouter);

// listen port
app.listen(8000, () => {
    console.log('Server is running');
})