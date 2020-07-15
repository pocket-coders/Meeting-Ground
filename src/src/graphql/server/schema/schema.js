const graphql = require("graphql");

const hosts = [
  {
    email: "123@123.com",
    firstname: "qwerty",
    lastname: "asdfg",
    links: [
      { duration: 15, link: "asdfghjk" },
      { duration: 30, link: "asdfghjk" },
      { duration: 60, link: "asdfghjk" },
    ],
  },
  {
    email: "456@456.com",
    firstname: "azerty",
    lastname: "zxcvbn",
    links: [
      { duration: 15, link: "mnbvc" },
      { duration: 30, link: "lkjhgf" },
      { duration: 60, link: "poiuyt" },
    ],
  },
  {
    email: "789@789.com",
    firstname: "compu",
    lastname: "scien",
    links: [
      { duration: 15, link: "hggffj" },
      { duration: 30, link: "g78t76r76" },
      { duration: 60, link: "87667f6vbg" },
    ],
  },
];

const {
  GraphQLObjectType,
  GraphQLString,
  GrapthQLList,
  GraphQLNonNull,
  GraphQLSchema,
} = graphql;

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
      type: new GrapthQLList(LinkType),
      description: "List of all Links",
      resolve: () => links,
    },
  }),
});

const LinkType = new GraphQLObjectType({
  name: "Link",
  description: "this is a single link for a host",
  fields: () => ({
    duration: GraphQLNonNull(GraphQLInt),
    link: GraphQLNonNull(GraphQLString),
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    host: {
      type: HostType,
      args: {
        email: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, agrs) {
        // code to get the result from the db
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
