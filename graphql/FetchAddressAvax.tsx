import { gql } from "@apollo/client";

export const FETCH_ADDRESS_AVAX = gql`
  query GetAllAvax($sender: String!) {
    amountSentInUSDs(where: { sender: $sender }) {
      sender
      timestamp
      amountSent
    }
    avaxReceiveds {
      sender
      timestamp
      tokenAmount
    }
  }
`;
