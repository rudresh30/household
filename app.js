const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');


const app = express();

app.use(helmet());

const staticpath = path.join(__dirname, '/');
app.use(express.static(staticpath));

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('listening on port 3000');
});
