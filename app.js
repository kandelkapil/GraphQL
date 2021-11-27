const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

var app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server Started on port 4000");
});
