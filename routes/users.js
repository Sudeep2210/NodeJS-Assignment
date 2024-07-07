const path = require('path');

const express = require('express');

const dirName = require('../util/path');

const router = express.Router();

router.get('/users',(req , res, next) => {
    res.sendFile(path.join(dirName , 'views' , 'users.html'));
});

module.exports = router;
