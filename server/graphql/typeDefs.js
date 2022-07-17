const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLInputObjectType,
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
      country: {
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
  
  const PetPictureType = new GraphQLInputObjectType({
    name:'Picture',
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
  

  module.exports = { UserType, PetType, PetPictureType, PetPreviousOwnerType }