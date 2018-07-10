const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const app = express();

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

app.get('/', function (req, res) {
    res.render('index');
})

const server_port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8080;
const ipaddr = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || '0.0.0.0';
app.listen(server_port, ipaddr, function () {
    console.log(`listening on port ${server_port} and ip ${ipaddr}`);
});
