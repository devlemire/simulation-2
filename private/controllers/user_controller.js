module.exports = {
  login: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Login hit');
    res.status(200).send();
  },

  register: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Register hit');
    res.status(200).send();
  },

  logout: ( req, res, next ) => {
    req.session.destroy();
    res.redirect('/login');
  }
}