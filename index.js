const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const websiteRouter = require('./routes/website');
const laptopRouter = require('./routes/laptop');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');
const serviceRouter = require('./routes/service');

dotenv.config({path: ".env"});
// connect database
mongoose.connect((process.env.MONGODB_URL), () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(morgan('common'));

// routes
app.use('/api/website', websiteRouter);
app.use('/api/laptop', laptopRouter);
app.use('/api/user', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/service', serviceRouter);

// listen port
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log('Server is running');
})