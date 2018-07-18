const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    console.log('registration');
    res.render('registration');
});

module.exports = router;