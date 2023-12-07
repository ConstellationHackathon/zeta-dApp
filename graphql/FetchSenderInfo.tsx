import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      token
      user {
        id
        address
        nickname
        roles
        isActive
      }
    }
  }
`;
