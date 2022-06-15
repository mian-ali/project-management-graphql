const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: (process.env.NODE_ENV = 'development'),
  })
);

app.get('/', (req, res) => {
  res.send('Hello');
});
app.listen(port, () => {
  console.log(`Server is runing ${process.env.NODE_ENV} on this ${port}`);
});
