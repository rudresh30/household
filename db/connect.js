const pg = require('pg');

function connectdb() {

    const connectString = 'postgres://avnadmin:ke61hhhyjsry4wda@pg-7e33eeb-rudresh-3416.aivencloud.com:20375/defaultdb?sslmode=require';

    var client = new pg.Client({ connectionString: connectString });

    client.connect()
        .then(() => {
            console.log('connected');
        })
        .catch((err) => {
            console.error(err.stack);
        })


};

module.exports = connectdb;
