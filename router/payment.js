const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    console.log('payments');
    res.render('payment');
});

module.exports = router;