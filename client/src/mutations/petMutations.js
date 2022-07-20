import { gql } from '@apollo/client';


export const ADD_PET = gql`
  mutation addPet(
    $name: String!
    $age: String!
    $type: String!
    $description:String!
    $vaccinated:Boolean!
    $litterTrained:Boolean!
    $breed:String!
    $gender:String!
    $pictures:[InputPicture]
  ) {
    addPet(name: $name, age: $age, type:$type, description:$description,vaccinated:$vaccinated,pictures:$pictures, litterTrained:$litterTrained, breed:$breed, gender:$gender) {
      name
      type
    }
  }
`;

export const DELETE_PET = gql`
  mutation deletePet(
    $id:ID!
  ) {
    deletePet(id:$id) {
      name
      type
    }
  }
`;
