import { gql } from "@apollo/client";

export const AvaxSenderEvents = gql`
    query AvaxSenderEvents {
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
