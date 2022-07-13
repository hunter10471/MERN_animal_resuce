const User = require('../models/User');
const Pet = require('../models/Pet');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLNonNull,
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
    avatar: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
    isAdmin: {
      type: GraphQLBoolean,
    },
  },
});

const PetType = new GraphQLObjectType({
  name: 'Pet',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    ownerName: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    owner: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.ownerId);
      },
    },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
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
    pets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.find();
      },
    },
    pet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pet.findById(args.id);
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          ...args,
        });
        return user.save();
      },
    },
    deleteUser:{
      type:UserType,
      args:{
        id:{type:GraphQLNonNull(GraphQLID)}
      },
      resolve(parent, args){
        const user = User.findByIdAndDelete(args.id)
        return user;
      }
    }
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
