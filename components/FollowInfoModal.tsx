import React from "react";
import { useEffect, useState } from "react";
import { IconClose } from "./Icon";
import Modal from "react-modal";
import { AvaxFetchAddress } from "@/graphql/FetchAddressAvax";
import { useQuery } from "@apollo/client";
import { ethers } from "ethers";

interface ResponseModalProps {
  closeModal: () => void;
  senderInfo: string;
}
const FollowInfoModal: React.FC<ResponseModalProps> = ({
  closeModal,
  senderInfo,
}) => {
  const { data, refetch } = useQuery(AvaxFetchAddress, {
    variables: { sender: senderInfo },
  });
  useEffect(() => {
    console.log(senderInfo);
    console.log("entering to use effect");

    if (!data) {
      console.log("refetching");

      refetch();
    }
    console.log("on mount component");
    console.log("sender info is ", data);
  }, [data, refetch, senderInfo]);

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="fixed inset-0 flex flex-col gap-[48px] p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] text-black z-10 text-2xl justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-20"
    >
      <div className="flex flex-col w-full gap-1 items-center">
        <div>This is the status of your last transaction</div>
      </div>
      <button className="absolute right-[16px] top-[16px]" onClick={closeModal}>
        <IconClose />
      </button>
    </Modal>
  );
};

export default FollowInfoModal;
