import { gql } from "@apollo/client";

export const senderEvents = gql`
    query MyQuery {
      avaxPriceInUSDs {
        price
        blockTimestamp
        timestamp
        transactionHash
        sender
        id
      }
      avaxReceiveds {
        sender
        tokenAmount
        transactionHash
        timestamp
        id
      }
      amountSentInUSDs {
        amountSent
        blockTimestamp
        transactionHash
        sender
        id
        timestamp
        blockNumber
      }
    }
`;
