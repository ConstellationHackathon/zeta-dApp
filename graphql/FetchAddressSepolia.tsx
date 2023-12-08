import { gql } from "@apollo/client";

export const SepoliaReceiveMsg = gql`
  query SepoliaReceiveMsg($sender: String!) {
    msgReceiveds(where: { userAddress: $sender }) {
      timestamp
      userAddress
      amountToTransferUSD
      transactionHash
    }
    fundsTransferreds(where: { recipient: $sender }) {
      timestamp
      recipient
      transactionHash
      amount
    }
  }
`;
