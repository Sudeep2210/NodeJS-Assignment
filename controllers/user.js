
exports.getHome = (req, res, next) => {
      res.render('user/home', {
        path: '/home',
        pageTitle: 'Home',
      });
};