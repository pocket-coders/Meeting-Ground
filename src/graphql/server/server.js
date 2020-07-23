// npm install express --save
// npm install nodemon -g
// npm install graphql express-graphql
// npm install apollo-server-express --save     -> not needed anymore
// npm install react-apollo
// run with nodemon server
//import express from "express";

// const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");
const { graphqlHTTP } = require("express-graphql");
const express = require("express");
const _ = require("lodash");
const cors = require("cors");

const server = express();

const hosts = [
  {
    email: "123@123.com",
    firstname: "qwerty",
    lastname: "asdfg",
    goa_code: "123456789",
  },
  {
    email: "456@456.com",
    firstname: "azerty",
    lastname: "zxcvbn",
    goa_code: "987654321",
  },
  {
    email: "789@789.com",
    firstname: "compu",
    lastname: "scien",
    goa_code: "abcdefgh",
  },
];

const links = [
  { link: "asdfghjk", email: "123@123.com", duration: 15 },
  { link: "doifjsad", email: "123@123.com", duration: 30 },
  { link: "jsdfoiewf", email: "123@123.com", duration: 60 },
  { link: "werdfg", email: "456@456.com", duration: 15 },
  { link: "asd", email: "456@456.com", duration: 30 },
  { link: "234sdf", email: "456@456.com", duration: 60 },
  { link: "jsdfo1234iewf", email: "789@789.com", duration: 15 },
  { link: "jsdfo12345iewf", email: "789@789.com", duration: 30 },
  { link: "hggffj", email: "789@789.com", duration: 60 },
];

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLInt,
} = require("graphql");

const HostType = new GraphQLObjectType({
  name: "Host",
  fields: () => ({
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    firstname: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: GraphQLNonNull(GraphQLString),
    },
    links: {
      type: new GraphQLList(LinkType),
      description: "List of all Links",
      resolve: (host) => {
        return links.filter((link) => link.email === host.email);
      },
    },
  }),
});

const LinkType = new GraphQLObjectType({
  name: "Link",
  description: "this is a single link for a host",
  fields: () => ({
    email: {
      type: GraphQLNonNull(GraphQLString),
      //  EmailType,
      // args: { id: { type: GraphQLString } },
      // resolve(parent, args) {
      //   return hosts.find((host) => host.email === args.id);
      // },
    },
    duration: {
      type: GraphQLNonNull(GraphQLInt),
    },
    link: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

const EmailType = new GraphQLObjectType({
  name: "email",
  description: "this is the email of a host",
  fields: () => ({
    goa_code: {
      type: GraphQLNonNull(GraphQLString),
      // resolve: () => {
      //   return hosts.filter(email);
      // },
    },
    firstname: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastname: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    host: {
      type: new GraphQLList(HostType),
      resolve: () => hosts,
    },
    link: {
      type: LinkType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return links.find((link) => link.link === args.id);
      },
    },
    email: {
      type: EmailType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        return hosts.find((host) => host.email === args.id);
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

server.use(cors());
server.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

// server.use(
//   "/graphiql",
//   graphiqlExpress({
//     endpointURL: "/graphql",
//   })
// );

// server.use("/graphql", graphqlExpress({}));

server.listen(4000, () => {
  console.log("now listening for request on port 4000");
});
