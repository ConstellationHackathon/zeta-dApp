import React from "react";
import { useEffect, useState } from "react";
import { IconClose } from "./Icon";
import Modal from "react-modal";
import { AvaxFetchAddress } from "@/graphql/FetchAddressAvax";
import { useQuery } from "@apollo/client";
import { ethers } from "ethers";
import Loader from "react-loader-spinner";
import { SepoliaReceiveMsg } from "@/graphql/FetchAddressSepolia";
interface ResponseModalProps {
  closeModal: () => void;
  senderInfo: string;
}
interface AvaxReceived {
  sender: string;
  timestamp: string;
  tokenAmount: string;
  __typename: string;
  transactionHash: string;
}
interface UsdAvaxSent {
  amountSent: string;
  sender: string;
  timestamp: string;
  __typename: string;
  transactionHash: string;
}
interface MsgReceived {
  timestamp: string;
  userAddress: string;
  amountToTransferUSD: string;
  transactionHash: string;
}
interface FundsTransferred {
  timestamp: string;
  recipient: string;
  transactionHash: string;
  amount: string;
}
const FollowInfoModal: React.FC<ResponseModalProps> = ({
  closeModal,
  senderInfo,
}) => {
  const {
    data: dataAvax,
    refetch,
    loading,
  } = useQuery(AvaxFetchAddress, {
    variables: { sender: senderInfo },
  });
  const {
    data: dataSepolia,
    refetch: refetchSepolia,
    loading: loadingSepolia,
  } = useQuery(SepoliaReceiveMsg, {
    variables: { sender: senderInfo },
  });
  const [recentAvaxReceived, setRecentAvaxReceived] = useState<AvaxReceived>();
  const [recentUsdAvaxSent, setRecentUsdAvaxSent] = useState<UsdAvaxSent>();
  const [recentMsgReceived, setRecentMsgReceived] = useState<MsgReceived>();
  const [recentFundsTransferred, setRecentFundsTransferred] =
    useState<FundsTransferred>();
  useEffect(() => {
    if (!dataAvax) {
      refetch();
    }
    console.log("data filtered avax is ", dataAvax);
    if (dataAvax) {
      processDataAvax();
    }
    const interval = setInterval(() => {
      if (!dataAvax) {
        refetch();
      }
      console.log("data filtered is ", dataAvax);
      if (dataAvax) {
        processDataAvax();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [dataAvax, refetch, senderInfo]);
  useEffect(() => {
    if (!dataSepolia) {
      refetchSepolia();
    }
    console.log("data filtered sepolia is ", dataSepolia);
    if (dataSepolia) {
      processDataSepolia();
    }
    const interval = setInterval(() => {
      if (!dataSepolia) {
        refetchSepolia();
      }
      console.log("data filtered sepolia is ", dataSepolia);
      if (dataSepolia) {
        processDataSepolia();
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [dataAvax, refetch, senderInfo]);
  const processDataAvax = () => {
    const avaxReceived: AvaxReceived[] = dataAvax?.avaxReceiveds;
    const usdAvaxSent: UsdAvaxSent[] = dataAvax?.amountSentInUSDs;
    const mostRecentAvaxReceived: AvaxReceived = mostRecentItem(
      avaxReceived
    ) as AvaxReceived;
    const mostRecentUsdAvaxSent: UsdAvaxSent = mostRecentItem(
      usdAvaxSent
    ) as UsdAvaxSent;
    console.log("most recent avax received is ", mostRecentAvaxReceived);
    console.log("most recent usd avax sent is ", mostRecentUsdAvaxSent);
    setRecentAvaxReceived(mostRecentAvaxReceived);
    setRecentUsdAvaxSent(mostRecentUsdAvaxSent);
  };
  const processDataSepolia = () => {
    const msgReceived: MsgReceived[] = dataSepolia?.msgReceiveds;
    const fundsTransferred: FundsTransferred[] = dataSepolia?.fundsTransferreds;
    const mostRecentMsgReceived: MsgReceived = mostRecentItemSepolia(
      msgReceived
    ) as MsgReceived;
    const mostRecentFundsTransferred: FundsTransferred = mostRecentItemSepolia(
      fundsTransferred
    ) as FundsTransferred;
    console.log("most recent msg received is ", mostRecentMsgReceived);
    console.log(
      "most recent funds transferred is ",
      mostRecentFundsTransferred
    );
    setRecentMsgReceived(mostRecentMsgReceived);
    setRecentFundsTransferred(mostRecentFundsTransferred);
  };
  const mostRecentItem = (elements: AvaxReceived[] | UsdAvaxSent[]) => {
    const elementWithMaxTimestamp: AvaxReceived | UsdAvaxSent = elements.reduce(
      (max, item) => {
        return parseInt(item.timestamp) > parseInt(max.timestamp) ? item : max;
      }
    );
    return elementWithMaxTimestamp;
  };
  const mostRecentItemSepolia = (
    elements: MsgReceived[] | FundsTransferred[]
  ) => {
    const elementWithMaxTimestamp: MsgReceived | FundsTransferred =
      elements.reduce((max, item) => {
        return parseInt(item.timestamp) > parseInt(max.timestamp) ? item : max;
      });
    return elementWithMaxTimestamp;
  };
  function convertTimestamp(timestamp: number) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }
  const SentFromOrigin = () => {
    if (recentUsdAvaxSent?.timestamp === recentAvaxReceived?.timestamp) {
      return (
        <div className="flex flex-col border-b py-2">
          <div className="flex justify-between">
            <div>{"Sent From Origin (USD)"}</div>
            <div className={`font-bold text-green-500`}>{"Processed"}</div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {recentUsdAvaxSent && (
              <div className="font-bold text-lg mb-2">
                Amount: {ethers.formatEther(recentUsdAvaxSent?.amountSent)}
              </div>
            )}
            {recentUsdAvaxSent && (
              <div>
                Processed at:{" "}
                {convertTimestamp(parseInt(recentUsdAvaxSent?.timestamp))}
              </div>
            )}
            <div>TX Hash: {recentUsdAvaxSent?.transactionHash}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col border-b py-2">
          <div className="flex justify-between">
            <div>{"Sent from origin (USD)"}</div>
            <div className={`font-bold "text-yellow-500"`}>{"In process"}</div>
          </div>
        </div>
      );
    }
  };
  const ReceivedOnDestiny = () => {
    if (
      recentMsgReceived?.amountToTransferUSD === recentUsdAvaxSent?.amountSent
    ) {
      return (
        <div className="flex flex-col border-b py-2">
          <div className="flex justify-between">
            <div>{"Received Message On Destiny (USD)"}</div>
            <div className={`font-bold text-green-500`}>{"Processed"}</div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {recentMsgReceived && (
              <div className="font-bold text-lg mb-2">
                Amount:{" "}
                {ethers.formatEther(recentMsgReceived?.amountToTransferUSD)}
              </div>
            )}
            {recentMsgReceived && (
              <div>
                Processed at:{" "}
                {convertTimestamp(parseInt(recentMsgReceived?.timestamp))}
              </div>
            )}
            <div>TX Hash: {recentMsgReceived?.transactionHash}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col border-b py-2">
          <div className="flex justify-between">
            <div>{"Received Message On Destiny (USD)"}</div>
            <div className={`font-bold "text-yellow-500"`}>{"In process"}</div>
          </div>
        </div>
      );
    }
  };
  const PaidOnDestiny = () => {
    if (
      recentMsgReceived?.amountToTransferUSD === recentUsdAvaxSent?.amountSent && 
      recentFundsTransferred?.timestamp === recentMsgReceived?.timestamp
    ) {
      return (
        <div className="flex flex-col border-b py-2">
          <div className="flex justify-between">
            <div>{"Paid On Destiny (ETH)"}</div>
            <div className={`font-bold text-green-500`}>{"Processed"}</div>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {recentFundsTransferred && (
              <div className="font-bold text-lg mb-2">
                Amount: {ethers.formatEther(recentFundsTransferred?.amount)}
              </div>
            )}
            {recentFundsTransferred && (
              <div>
                Processed at:{" "}
                {convertTimestamp(parseInt(recentFundsTransferred?.timestamp))}
              </div>
            )}
            <div>TX Hash: {recentFundsTransferred?.transactionHash}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col border-b py-2">
          <div className="flex justify-between">
            <div>{"Paid On Destiny (USD)"}</div>
            <div className={`font-bold "text-yellow-500"`}>{"In process"}</div>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <style jsx>{`
        .loader {
          border: 6px solid #f3f3f3; /* Light grey */
          border-top: 6px solid #db5b34; /* Blue */
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {loading || !dataAvax ? (
        <div className="flex justify-center items-center h-full">
          <div className="loader"></div>
        </div>
      ) : (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="fixed inset-0 flex flex-col gap-[48px] p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] text-black z-10 text-2xl justify-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-20"
        >
          <div className="flex flex-col w-full gap-1 items-center">
            <div>This is the status of your last transaction</div>
            <div className="w-full mt-4">
              <div className="flex flex-col border-b py-2">
                <div className="flex justify-between">
                  <div>{"Received On Origin (AVAX)"}</div>
                  <div className={`font-bold text-green-500`}>
                    {"Processed"}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  {recentAvaxReceived && (
                    <div className="font-bold text-lg mb-2">
                      Amount:{" "}
                      {ethers.formatEther(recentAvaxReceived?.tokenAmount)}
                    </div>
                  )}
                  {recentAvaxReceived && (
                    <div>
                      Processed at:{" "}
                      {convertTimestamp(
                        parseInt(recentAvaxReceived?.timestamp)
                      )}
                    </div>
                  )}
                  <div>TX Hash: {recentAvaxReceived?.transactionHash}</div>
                </div>
              </div>
              <SentFromOrigin />
              <ReceivedOnDestiny />
              <PaidOnDestiny />
            </div>
          </div>
          <button
            className="absolute right-[16px] top-[16px]"
            onClick={closeModal}
          >
            <IconClose />
          </button>
        </Modal>
      )}
    </>
  );
};
export default FollowInfoModal;
