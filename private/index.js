const express = require('express');
const session = require('express-session');
const config = require(`${__dirname}/config`);
const massive = require('massive');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

massive( config.connectionString ).then( dbInstance => {
  app.set('db', dbInstance);
}).catch( err => console.log('Error connecting to database:', err) );

app.use( bodyParser.json() );
app.use( cors() );
app.use( session({
  secret: '@ny7h1ng y0u w@n7',
  resave: false,
  saveUninitialized: false
}));
// app.use( require(`${__dirname}/middlewares/auth`) );
app.use( express.static(`${__dirname}/../public/build`) );

app.use( '/api/auth', require(`${__dirname}/routes/user_router`) );
app.use( '/api/properties', require(`${__dirname}/routes/property_router`) );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );