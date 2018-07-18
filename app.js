const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');

const pg = require('pg');

const app = express();
const services = require('./router/services');
const payment = require('./router/payment');
const register = require('./router/registration');
const dbConnectString = require('./db/connect').connectString;
const getCityAreas = require('./db/getcityarea');

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
//services
app.use('/services', services);

//registration
app.use('/register', register);

//payments
app.use('/payment', payment);

app.get('/', function (req, res) {

    getCityAreas((err, result) => {
        if (err) {
            consol.error(err.stack);
        } else {
            res.render('index', result);
        }
    });


})


const server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
const ipaddr = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';
app.listen(server_port, ipaddr, function () {
    console.log(`listening on port ${server_port} and ip ${ipaddr}`);
});
