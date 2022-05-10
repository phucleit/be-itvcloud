const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const websiteRouter = require('./routes/website');

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

// listen port
app.listen(8000, () => {
    console.log('Server is running');
})