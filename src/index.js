const express = require(`express`);


const configHbs = require('./config/configHbs')
const configExpress = require('./config/configExpress')
const routes = require('./routes')

const app = express();
const port = 5000;

configHbs(app);
configExpress(app);

app.use(routes);

app.listen(port, () => console.log(`Server is on port ${port}`));