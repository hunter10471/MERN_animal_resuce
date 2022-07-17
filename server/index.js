const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config({ path: __dirname + '/.env' });
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./graphql/schema');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const { verifyTokenAndAuth } = require('./utils/check-auth');


app.use(cors());
connectDB();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(verifyTokenAndAuth);

app.use(
  '/graphql',
  graphqlHTTP((req, res, graphQLParams) => ({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development',
    context: { req, res },
  }))
);


app.listen(PORT, console.log(`Server running on port ${PORT}`));
