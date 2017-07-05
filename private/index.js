const express = require('express');
const config = require(`${__dirname}/config.js`);
const massive = require('massive');
const connectionString = config.connectionString;
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

massive( connectionString ).then( dbInstance => {
  app.set('db', dbInstance);
}).catch( err => console.log('Error connecting to database:', err) );

app.use( bodyParser.json() );
app.use( cors() );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );