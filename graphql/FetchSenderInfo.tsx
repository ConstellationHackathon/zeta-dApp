import { gql } from "@apollo/client";

export const AMOUNTSENT = gql`
  query MyQuery {
    amountSentInUSDs {
      sender
      timestamp
      amountSent
    }
  }
`;
