const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config({path:__dirname+'/.env'});
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./graphql/schema');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const path = require('path');
const { verifyTokenAndAuth } = require('./utils/check-auth');

const corsOptions = {
  origin(origin, callback) {
      callback(null, true);
  },
  credentials: true
};

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,token');
  next();
}

connectDB();
app.use(cors(corsOptions));
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(verifyTokenAndAuth);

__dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.use(
  '/graphql',
  graphqlHTTP((req, res, graphQLParams) => ({
    schema: schema,
    context: { req, res },
    
  }))
);


app.listen(PORT, console.log(`Server running on port ${PORT}`));
