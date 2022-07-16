const User = require('../models/User');
const Pet = require('../models/Pet');
const bcrypt = require('bcrypt');
const { UserInputError } = require('apollo-server');

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

const {
  UserType,
  PetType,
  PetPictureType,
  PetPreviousOwnerType,
} = require('./typeDefs');

const { loginUser, registerUser } = require('./resolvers/user');

//Queries

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getUsers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    getUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    getPets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.find();
      },
    },
    getPet: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Pet.findById(args.id);
      },
    },
  },
});

//Mutations

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    //<-----REGISTER USER----->//

    registerUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
      const user = await registerUser(parent,args);
      return user;
      },
    },

    //<----LOGIN-USER---->//

    loginUser: {
      type: UserType,
      args: {
        email: { type: GraphQLNonNull(GraphQLString) },
        password: { type: GraphQLNonNull(GraphQLString) },
      },
      async resolve(parent, args) {
      const user = await  loginUser(parent,args);
      return user;
      },
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const user = User.findByIdAndDelete(args.id);
        return user;
      },
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        avatar: { type: GraphQLString },
        phone: { type: GraphQLInt },
        address: { type: GraphQLString },
        postal: { type: GraphQLString },
        country: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { id, ...others } = args;
        return User.findByIdAndUpdate(
          args.id,
          {
            $set: { ...others },
          },
          { new: true }
        );
      },
    },
    addPet: {
      type: PetType,
      args: {
        name: { type: GraphQLNonNull(GraphQLID) },
        ownerId: { type: GraphQLNonNull(GraphQLID) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        type: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const pet = new Pet({
          ...args,
        });
        return pet.save();
      },
    },
    deletePet: {
      type: PetType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parents, args) {
        return Pet.findByIdAndDelete(args.id);
      },
    },
    updatePet: {
      type: PetType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        breed: { type: GraphQLString },
        pictures: { type: GraphQLList(PetPictureType) },
        vaccinated: { type: GraphQLBoolean },
        favouriteFood: { type: GraphQLString },
        litterTrained: { type: GraphQLBoolean },
        previousOwners: { type: GraphQLList(PetPreviousOwnerType) },
        description: { type: GraphQLString },
        punchline: { type: GraphQLString },
        boldline: { type: GraphQLString },
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
