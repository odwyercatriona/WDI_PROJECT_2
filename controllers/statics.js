const User = require('../models/user');

function staticsIndex(req, res) {
  // check if logged in
  if (!req.session.isAuthenticated) {
    res.redirect('/login');
  } else {
    User
      .findById(req.session.userId)
      .populate('places')
      .exec()
      .then(user => {
        res.render('homepage', { user });
      });
  }
}

module.exports = {
  index: staticsIndex
};
