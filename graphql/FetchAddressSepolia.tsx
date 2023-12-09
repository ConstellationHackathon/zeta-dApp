import { gql } from "@apollo/client";

export const SepoliaReceiveMsg = gql`
  query SepoliaReceiveMsg{
    msgReceiveds{
      timestamp
      userAddress
      amountToTransferUSD
      transactionHash
      transactionId
    }
  }
`;
