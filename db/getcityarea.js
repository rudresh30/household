const dbConnectString = require('./connect').connectString;
const pg = require('pg');

module.exports = function (callback) {

    const client = new pg.Client({ connectionString: dbConnectString });
    client.connect((err) => {
        if (err) {
            callback(err);
        } else {
            console.log('connected')

        }
    });

    let queryObj = {
        text: `select a.ad_area_id as id, a.ad_area_name as area, b.ad_city_name as city
        from ad_area_master a, ad_city_master b
        where a.ad_area_city_id = b.ad_city_id`,
        values: []
    };

    client.query(queryObj)
        .then(result => {
            var cities = [];
            cities = result.rows.map((e) => {
                return e.city;
            });
            cities = cities.filter((e, i) => {
                return cities.indexOf(e) == i;
            });

            console.log(`cities = ${cities}`);
            var areas = result.rows;
            console.log(areas);
            var renderObj = {
                city: cities,
                dbRows: areas
            }
            client.end();
            callback(null, renderObj);
        })
        .catch(err => {
            client.end();
            res.send('404.html');
        })
};

