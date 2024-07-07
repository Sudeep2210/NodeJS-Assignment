const path = require('path');

const express = require('express');

const dirName = require('../util/path');

const router = express.Router();

router.get('/',(req , res, next) => {
    res.sendFile(path.join(dirName , 'views' , 'home.html'));
});

module.exports = router ;