import { gql } from '@apollo/client';

export const REGISTER_USER = gql`
  mutation registerUser(
    $username: String!
    $password: String!
    $email: String!
  ) {
    registerUser(username: $username, password: $password, email: $email) {
      username
      email
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser(
    $password: String!
    $email: String!
  ) {
    loginUser(password: $password, email: $email) {
      username
      email
      token
      _id
    }
  }
`;
