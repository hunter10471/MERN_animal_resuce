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

const {
  UserType,
  PetType,
  PetPictureInputType,
  PetPreviousOwnerType,
} = require('./typeDefs');

const { loginUser, registerUser, googleContinue } = require('./resolvers/user');
const { AuthenticationError } = require('apollo-server');

//Queries

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

        //<-----GET ALL USERS----->//

    getUsers: {
      type: new GraphQLList(UserType),
      resolve(parent, args, context) {
        if (!context.req.isAdmin)
          throw new AuthenticationError('Unauthenticated action.');
        return User.find();
      },
    },

            //<-----GET USER----->//

    getUser: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args, context) {
        if (!context.req.isAuth) throw new Error('Unauthenticated action.');
        return User.findById(args.id);
      },
    },

          //<-----GET ALL PETS----->//

    getPets: {
      type: new GraphQLList(PetType),
      resolve(parent, args) {
        return Pet.find();
      },
    },

       //<-----GET PET----->//

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
        const user = await registerUser(parent, args);
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
        const user = await loginUser(parent, args);
        return user;
      },
    },


        //<----LOGIN/REGISTER WITH GOOGLE---->//
        loginUserGoogle: {
          type: UserType,
          args: {
            email: { type: GraphQLNonNull(GraphQLString) },
            username: { type: GraphQLNonNull(GraphQLString) },
            avatar: { type: GraphQLString},
            password: { type: GraphQLNonNull(GraphQLString) },
            googleId: { type: GraphQLNonNull(GraphQLString) },
           },
          async resolve(parent, args) {
            const user = await googleContinue(parent,args);
            return user;
          },
        },


        //<----DELETE-USER---->//

    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args, context) {
        if (!context.req.isAuth)
          throw new AuthenticationError(
            'You can only delete your own account.'
          );
        const user = User.findByIdAndDelete(args.id);
        return user;
      },
    },

        //<----UPDATE-USER---->//


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
      resolve(parent, args, context) {
        if (!context.req.isAuth)
          throw new AuthenticationError(
            'You can only update your own account.'
          );
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

        //<----ADD-PET---->//


    addPet: {
      type: PetType,
      args: {
        name: { type: GraphQLNonNull(GraphQLID) },
        ownerId: { type: GraphQLNonNull(GraphQLID) },
        age: { type: GraphQLNonNull(GraphQLInt) },
        type: { type: GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args, context) {
        if (!context.req.isAuth)
          throw new AuthenticationError('Login to add a pet.');
        const pet = new Pet({
          ...args,
        });
        return await pet.save();
      },
    },

        //<----DELETE-PET---->//


    deletePet: {
      type: PetType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args, context) {
        if (!context.req.isAuth)
          throw new AuthenticationError('You can only delete your own pet.');
        return Pet.findByIdAndDelete(args.id);
      },
    },

        //<----UPDATE-PET---->//


    updatePet: {
      type: PetType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        gender: { type: GraphQLString },
        breed: { type: GraphQLString },
        pictures: { type: GraphQLList(PetPictureInputType) },
        vaccinated: { type: GraphQLBoolean },
        favouriteFood: { type: GraphQLString },
        litterTrained: { type: GraphQLBoolean },
        previousOwners: { type: GraphQLList(PetPreviousOwnerType) },
        description: { type: GraphQLString },
        punchline: { type: GraphQLString },
        boldline: { type: GraphQLString },
      },
      resolve(parent, args, context) {
        if (!context.req.isAuth)
          throw new AuthenticationError('You can only delete your own pet.');
        const { id, ...others } = args;
        return Pet.findByIdAndUpdate(
          args.id,
          { $set: { ...others } },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
