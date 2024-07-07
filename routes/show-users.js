const path = require('path');

const express = require('express');

const userData = require('./add-user');

const router = express.Router();

router.get('/', (req, res, next) => {
  const users = userData.userName;
  res.render('show-users', {
    users: users,
    pageTitle: 'Users',
    path: '/',
    hasUsers: users.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
