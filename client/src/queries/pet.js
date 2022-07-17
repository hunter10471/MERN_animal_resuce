import { gql } from '@apollo/client';

export const GET_PETS = gql`
  query {
    getPets {
      id
      name
      breed
      age
      pictures {
        url
      }
    }
  }
`;

export const GET_PET = gql`
  query($id:ID){
    getPet(id:$id){
        name
        pictures{
          url
        }
        vaccinated
        litterTrained
        description
    }
}
`;
