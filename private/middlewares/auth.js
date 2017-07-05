module.exports = ( req, res, next ) => {
  if ( req.session.user || req.path === "/api/auth/login" || req.path === "/api/auth/register" ) {
    next();
  } else {
    res.redirect('/login');
  }
};