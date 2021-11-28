const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

var app = express();
mongoose.connect(
  "mongodb+srv://username:password%40123@graphql.cydfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

mongoose.connection.once("open", () => {
  console.log("Connected To The Database");
});

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
