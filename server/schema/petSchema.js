// const Pet = require('../models/Pet');
// const User = require('../models/User');

// const {
//   GraphQLObjectType,
//   GraphQLID,
//   GraphQLString,
//   GraphQLSchema,
//   GraphQLList,
//   GraphQLBoolean,
//   GraphQLInt,
// } = require('graphql');
// const { UserType } = require('./userSchema');


// const PetType = new GraphQLObjectType({
//     name: 'Pet',
//     fields: {
//       id: {
//         type: GraphQLID,
//       },
//       name: {
//         type: GraphQLString,
//       },
//       ownerName: {
//         type: GraphQLString,
//       },
//       age: {
//         type: GraphQLInt,
//       },
//       owner:{
//         type: UserType,
//         resolve(parent, args){
//           return User.findById(parent.ownerId)
//         }
//       }
//     },
//   });


//   const PetRootQuery = new GraphQLObjectType({
//     name: 'PetRootQueryType',
//     fields: {
//       pets: {
//         type: new GraphQLList(PetType),
//         resolve(parent, args) {
//           return Pet.find();
//         },
//       },
//       pet: {
//         type: PetType,
//         args: { id: { type: GraphQLID } },
//         resolve(parent, args) {
//           return Pet.findById(args.id);
//         },
//       },
//     },
//   });
  
//   module.exports = new GraphQLSchema({
//     query: PetRootQuery,
//   });