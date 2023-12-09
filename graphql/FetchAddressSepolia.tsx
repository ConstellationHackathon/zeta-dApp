import { gql } from "@apollo/client";

export const SepoliaReceiveMsg = gql`
  query SepoliaReceiveMsg{
      fundsTransferreds {
        transactionId
        transactionHash
        timestamp
        recipient
        id
        blockTimestamp
        amount
        blockNumber
      }
      msgReceiveds {
        timestamp
        userAddress
        amountToTransferUSD
        transactionHash
        id
      }
  }
`;
