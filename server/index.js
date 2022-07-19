const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const connectDB = require('./config/db');
const schema = require('./graphql/schema');
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const path = require('path');
const { verifyTokenAndAuth } = require('./utils/check-auth');


app.use(cors());
connectDB();
app.use(cookieParser());
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
