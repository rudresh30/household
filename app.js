const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const app = express();

app.use(helmet());

const staticpath = path.join(__dirname, '/');
app.use(express.static(staticpath));

const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ipaddr = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.listen(server_port, ipaddr, function () {
    console.log(`listening on port ${server_port}`);
});
