const path = require('path');

const express = require('express');

const router = express.Router();

const userName = [];

// /admin/add-product => GET
router.get('/add-user', (req, res, next) => {
  res.render('add-user', {
    pageTitle: 'Add Users',
    path: '/admin/add-user',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-user', (req, res, next) => {
  userName.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = router;
exports.userName = userName;
