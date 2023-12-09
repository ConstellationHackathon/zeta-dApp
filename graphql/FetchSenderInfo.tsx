import { gql } from "@apollo/client";

export const AvaxSenderEvents = gql`
  query AvaxSenderEvents {
    avaxReceiveds {
      transactionId
      transactionHash
      tokenAmount
      sender
      id
      timestamp
    }
    amountSentInUSDs {
      sender
      id
      amountSent
      timestamp
      transactionHash
    }
  }
`;
