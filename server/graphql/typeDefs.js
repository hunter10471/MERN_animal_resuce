const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLInputObjectType,
    GraphQLList,

  } = require('graphql');
const Pet = require('../models/Pet');
  
  
  
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
        type: GraphQLInt,
      },
      avatar: {
        type: GraphQLString,
      },
      address: {
       type: GraphQLString,
      },
      country: {
       type: GraphQLString,
      },
      city: {
       type: GraphQLString,
      },
      postal: {
       type: GraphQLString,
      },
      password: {
        type: GraphQLString,
      },
      isAdmin: {
        type: GraphQLBoolean,
      },
      token: {
        type: GraphQLString,
      },
      googleId:{
        type:GraphQLString
      }
      
    },
  });
  
  const PetPictureType = new GraphQLObjectType({
    name:'Picture',
    fields:{
      url:{
        type: GraphQLString
      }
    }
  })

  const PetPictureInputType = new GraphQLInputObjectType({
    name:'InputPicture',
    fields:{
      url:{
        type: GraphQLString
      }
    }
  })
  
  const PetPreviousOwnerType = new GraphQLInputObjectType({
    name:'Owner',
    fields:{
      ownerId:{
        type: GraphQLID
      }
    }
  })
  
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
        type: GraphQLString,
      },
      breed: {
        type: GraphQLString,
      },
      type: {
        type: GraphQLString,
      },
      gender: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      },
      litterTrained: {
        type: GraphQLBoolean
      },
      vaccinated: {
        type: GraphQLBoolean
      },
      ownerId: {
        type: UserType,
        resolve(parent, args) {
          return User.findById(parent.ownerId);
        },
      },
      pictures:{
        type: new GraphQLList(PetPictureType),
      }
    },
  });
  

  module.exports = { UserType, PetType, PetPictureInputType, PetPreviousOwnerType }