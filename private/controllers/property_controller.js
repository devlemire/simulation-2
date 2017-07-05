module.exports = {
  create: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Property create hit');
    res.status(200).send();
  },

  read: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Property read hit:', req.params.id);
    res.status(200).send();
  },

  readAll: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Property read hit');
    res.status(200).send();
  },

  update: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Property update hit', req.params.id);
    res.status(200).send();
  },

  delete: ( req, res, next ) => {
    const db = req.app.get('db');
    console.log('Property delete hit', req.params.id);
    res.status(200).send();
  }
}