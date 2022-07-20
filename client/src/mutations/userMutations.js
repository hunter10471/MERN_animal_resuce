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
      email
      address
      postal
      city
      token
      avatar
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
      address
      postal
      city
      token
      avatar
      isAdmin
      _id
    }
  }

`;

export const UPDATE_USER = gql`
    mutation updateUser(
    $id:ID!
    $password: String
    $email: String
    $username:String
    $address:String
    $city:String
    $postal:String
    $avatar:String
  ) {
    updateUser(id:$id,password: $password,avatar:$avatar, email: $email, username:$username, postal:$postal, address:$address, city:$city) {
      username
      email
      address
      postal
      city
      token
      avatar
      isAdmin
      _id
    }
  }
`;


export const SUBSCRIBE_USER = gql`
  mutation subscribeUser($email:String!){
    subscribeUser(email:$email){
      email
    }
  }

`;
