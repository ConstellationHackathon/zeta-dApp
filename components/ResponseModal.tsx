import { useEffect, useState } from "react";
import { IconAvalanche, IconClose, IconEthereum, IconRight } from "./Icon";
import Modal from "react-modal";
import { ethers } from "ethers";
import FollowInfoModal from "./FollowInfoModal";

interface ResponseModalProps {
  closeModal: () => void;
  estimatedReceived: number;
  fee: number;
  fromValue: number | null;
}

Modal.setAppElement("#__next");

const ResponseModal: React.FC<ResponseModalProps> = ({
  closeModal,
  estimatedReceived,
  fee,
  fromValue,
}) => {
  const [scanOn, setScanOn] = useState(false);
  const [senderInfo, setSenderInfo] = useState<string>("");
  const [isAddressValid, setIsAddressValid] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value;
    setSenderInfo(address);
  };

  const onFollowTransaction = () => {
    if (ethers.isAddress(senderInfo)) {
      setIsAddressValid(true);
      setScanOn(true);
    } else {
      setIsAddressValid(false);
    }
  };

  if (scanOn) {
    return (
      <FollowInfoModal
        closeModal={() => setScanOn(false)}
        senderInfo={senderInfo}
      />
    );
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="fixed inset-0 flex flex-col gap-[48px] p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] text-black z-10 text-2xl justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-20"
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        <div className="flex gap-2">
          You are exchanging
          <span className="font-semibold">{fromValue}</span>
          <IconAvalanche />
          <span className="font-semibold">AVAX</span>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <IconAvalanche />
            AVAX
          </div>
          <IconRight />
          <div className="flex gap-2">
            <IconEthereum />
            ETH
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <div className="flex justify-center items-center text-center w-full">
          If you want to follow your last transaction, please put your address
          below
        </div>
        <div className="flex flex-col w-full px-4 pt-3 pb-6 gap-2 rounded-[12px] bg-[#E84142]">
          <p className="text-white">Address</p>
          <input
            type="text"
            placeholder="Your Address (e.g. 0x123...)"
            className="w-full p-3 opacity-80 bg-neutral-100 rounded-[8px] text-2xl font-normal font-['Montserrat']"
            value={senderInfo}
            onChange={handleInputChange}
          />
        </div>
        {!isAddressValid && (
          <div className="px-6 py-2 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Invalid Ethereum address. Please enter a valid address.
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          className="bg-black text-white rounded-full px-[32px] py-[8px] font-semibold w-fit hover:bg-[#E84142]"
          onClick={onFollowTransaction}
        >
          Follow Transaction
        </button>
        <div className="font-semibold hover:text-[#E84142]">
          {"Or just continue"}
        </div>
      </div>
      <button
        className="absolute right-[16px] top-[16px]"
        onClick={closeModal}
        title="Close Modal+"
      >
        <IconClose />
      </button>
    </Modal>
  );
};

export default ResponseModal;
