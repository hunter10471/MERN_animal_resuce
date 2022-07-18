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
      _id
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
      avatar
      email
      token
      isAdmin
      _id
    }
  }
`;


export const GOOGLE_CONTINUE = gql`
  mutation loginUserGoogle(
    $password: String!
    $email: String!
    $avatar: String
    $googleId: String!
    $username: String!
  ){
    loginUserGoogle(password:$password, email:$email, googleId:$googleId, avatar:$avatar, username:$username){
      username
      email
      token
      avatar
      isAdmin
      _id
    }
  }

`;
