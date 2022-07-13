const User = require('../models/User');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    _id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLString,
    },
    avatar:{
      type:GraphQLString
    },
    address:{
      type:GraphQLObjectType
    },
    password:{
      type:GraphQLString
    },
    isAdmin:{
      type:GraphQLBoolean
    }

  },
});



const UserRootQuery = new GraphQLObjectType({
  name: 'UserRootQueryType',
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: UserRootQuery,
});
