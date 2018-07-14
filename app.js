const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');

const pg = require('pg');

const app = express();
const services = require('./router/services');

const connectString = 'postgres://wmdmqpyz:MqiIqVWCLpEyTmeirBsFIUjNIiP5C2RN@horton.elephantsql.com:5432/wmdmqpyz';


const client = new pg.Client({ connectionString: connectString })
client.connect((err) => {
    if (err) {
        console.error('error connecting', err.stack)
    } else {
        console.log('connected')
        client.end()
    }
})
client.end();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//security middleware
app.use(helmet());

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static path
const staticpath = path.join(__dirname, 'public');
app.use(express.static(staticpath));


//routes

app.use('/services', services);

app.get('/', function (req, res) {
    res.render('index');
})

const server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
const ipaddr = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';
app.listen(server_port, ipaddr, function () {
    console.log(`listening on port ${server_port} and ip ${ipaddr}`);
});
