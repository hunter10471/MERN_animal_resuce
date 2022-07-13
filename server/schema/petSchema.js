const Pet = require('../models/Pet');
const User = require('../models/User');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');


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
      owner:{ //Change mongodb schema (pet=>owner) 
        type: ClientType,
        resolve(parent, args){
          return clients.find(client => client.id === parent.clientId)
        }
      }
    },
  });


  const PetRootQuery = new GraphQLObjectType({
    name: 'PetRootQueryType',
    fields: {
      pets: {
        type: new GraphQLList(PetType),
        resolve(parent, args) {
          return Pet.find();
        },
      },
      pet: {
        type: ProjectType,
        args: { id: { type: GraphQLID } },
        resolve(parent, args) {
          return Pet.findById(args.id);
        },
      },
    },
  });
  
  module.exports = new GraphQLSchema({
    query: PetRootQuery,
  });