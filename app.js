const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const fs = require('fs');

const pg = require('pg');

const app = express();



const connectString = 'postgres://avnadmin:ke61hhhyjsry4wda@pg-7e33eeb-rudresh-3416.aivencloud.com:20375/defaultdb?sslmode=require';

const config = {
    database: 'defaultdb',
    host: "pg-7e33eeb-rudresh-3416.aivencloud.com",
    user: 'avnadmin',
    password: 'ke61hhhyjsry4wda',
    port: 20375,
    // this object will be passed to the TLSSocket constructor
    ssl: {
        rejectUnauthorized: false,
        ca: fs.readFileSync("/home/rudi/certs/household-aiven/ca.pem")
    }
}

const client = new pg.Client(config)
client.connect((err) => {
    if (err) {
        console.error('error connecting', err.stack)
    } else {
        console.log('connected')
        client.end()
    }
})
let queryobj = {
    text: 'select * from ad_city_master where ad_city_id > $1',
    values: [0]
    //rowMode:'array'
}
client.query(queryobj, (err, res) => {
    if (err) {
        console.log(err.stack);

    } else {
        res.rows.forEach((resultRow) => {
            console.log(resultRow);
        })
    }
    client.end();
});





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
