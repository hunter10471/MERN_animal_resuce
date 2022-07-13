const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config({path:__dirname+'/.env'});
const { graphqlHTTP } = require('express-graphql');
const connect = require('./config/db');
const schema = require('./schema/schema');
const PORT = process.env.PORT || 4000;


connect();
app.use(cookieParser());
app.use(
  '/graphql',
  graphqlHTTP({
    schema:schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
