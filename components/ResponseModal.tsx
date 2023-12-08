import { useEffect, useState } from "react";
import { IconClose } from "./Icon";
import Modal from "react-modal";
import { ethers } from "ethers";
import FollowInfoModal from "./FollowInfoModal";

interface ResponseModalProps {
  closeModal: () => void;
}

Modal.setAppElement("#__next");

const ResponseModal: React.FC<ResponseModalProps> = ({ closeModal }) => {
  const [scanOn, setScanOn] = useState(false);
  const [senderInfo, setSenderInfo] = useState<string>("");
  const [isAddressValid, setIsAddressValid] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const address = event.target.value;
    setSenderInfo(address);
  };

  const onFollowTransaction = () => {
    console.log("on follow transaction");
    if (ethers.isAddress(senderInfo)) {
      setIsAddressValid(true);
      setScanOn(true);
    } else {
      setIsAddressValid(false);
    }
  };

  if (scanOn) {
    return (
      <FollowInfoModal closeModal={() => setScanOn(false)} senderInfo={senderInfo}/>
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
        <div>You are exchanging 0.055 BTC</div>
        <div>{"Bitcoin > Ethereum"}</div>
        <div>
          {"If you want to follow your transaction, put your address below:"}
        </div>
        <input
          type="text"
          placeholder="Your Address (e.g. 0x123...)"
          className="w-full p-3 opacity-80 bg-neutral-100 rounded-2xl text-2xl font-normal font-['Montserrat']"
          value={senderInfo}
          onChange={handleInputChange}
        />
        {!isAddressValid && (
          <div className="px-6 py-2 bg-red-100 border border-red-400 text-red-700 rounded-md">
            Invalid Ethereum address. Please enter a valid address.
          </div>
        )}
        <button
          className="bg-black text-white rounded-full px-[32px] py-[8px] font-semibold w-fit"
          onClick={onFollowTransaction}
        >
          Follow Transaction
        </button>
        <div>
          {"Or just continue"}
        </div>
      </div>
      <button className="absolute right-[16px] top-[16px]" onClick={closeModal}>
        <IconClose />
      </button>
    </Modal>
  );
};

export default ResponseModal;
