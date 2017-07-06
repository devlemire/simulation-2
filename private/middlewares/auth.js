module.exports = ( req, res, next ) => {
  if ( req.path.includes('properties') ) {
    console.log('User is doing something with properties. Check for auth');
    if ( req.session.user ) {
      console.log('User has been authenticated');
      next();
    } else {
      console.log('User is not authenticated. Back to login.')
      res.status(500).send('Not authorized.');
    }
  } else {
    next();
  }
};