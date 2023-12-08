import { gql } from "@apollo/client";

export const AvaxFetchAddress = gql`
  query AvaxFetchAddress($sender: String!) {
    amountSentInUSDs(where: { sender: $sender }) {
      sender
      timestamp
      amountSent
      transactionHash
    }
    avaxReceiveds (where: { sender: $sender }) {
      sender
      timestamp
      tokenAmount
      transactionHash
    }
  }
`;
