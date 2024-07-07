

exports.getProducts = (req, res, next) => {
  res.render('shop/product-detail', {
    pageTitle: 'Session',
    path: '/products'
  });
};

exports.getIndex = (req, res, next) => {
  res.render('shop/index', {
    pageTitle: 'Session',
    path: '/'
  });
};
