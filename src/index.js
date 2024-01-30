const express = require(`express`);
const mongoose = require('mongoose');

const configHbs = require('./config/configHbs')
const configExpress = require('./config/configExpress')
const routes = require('./routes')

const app = express();
const port = 5000;

configHbs(app);
configExpress(app);

app.use(routes);

mongoose.connect('mongodb://localhost:27017/magic-movies')
    .then(() => {
        console.log('DB connected');
        app.listen(port, () => console.log(`Server is on port ${port}`));
})
    .catch(error => console.log('Cannot connect to DB'));
