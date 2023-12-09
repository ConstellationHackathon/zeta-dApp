import { gql } from "@apollo/client";

export const SepoliaReceiveMsg = gql`
  query SepoliaReceiveMsg($transactionId: String!) {
    msgReceiveds(where: { transactionId: $transactionId }) {
      timestamp
      userAddress
      amountToTransferUSD
      transactionHash
      transactionId
    }
  }
`;
