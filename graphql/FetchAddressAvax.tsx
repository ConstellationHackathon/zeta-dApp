import { gql } from "@apollo/client";

export const AvaxFetchAddress = gql`
  query AvaxFetchAddress($sender: String!) {
    amountSentInUSDs(where: { sender: $sender }) {
      sender
      timestamp
      amountSent
    }
    avaxReceiveds (where: { sender: $sender }) {
      sender
      timestamp
      tokenAmount
    }
  }
`;
