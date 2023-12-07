import { use, useEffect, useState } from "react";
import { IconClose } from "./Icon";
import Modal from "react-modal";
import { FETCH_ADDRESS_AVAX } from "@/graphql/FetchSenderInfo";
import { useQuery } from "@apollo/client";

interface ResponseModalProps {
  closeModal: () => void;
}
Modal.setAppElement('#__next');
const ResponseModal: React.FC<ResponseModalProps> = ({ closeModal }) => {
  const [scanOn, setScanOn] = useState(true);
  const [senderInfo, setSenderInfo] = useState<string>('');
  const { data } = useQuery(FETCH_ADDRESS_AVAX, { variables: { senderInfo } });
  useEffect(() => {
    console.log('on mount component');
    
    console.log('sender info is ', data);
  }, [data])
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSenderInfo(event.target.value);
  };
  if(scanOn) {
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
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="fixed inset-0 flex flex-col gap-[48px] p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] text-black z-10 text-2xl justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-20"
    >
      <div className="flex flex-col w-full gap-1 items-center">
        <div>You are exchanging 0.055 BTC</div>
        <div>{"Bitcoin > Ethereum"}</div>
        <div>
          {"If you want to follow your transaction, put your address below:"}
        </div>
      </div>
      <div className="text-center">
        <div className="w-[500px] h-[135px] p-6 bg-red-500 rounded-2xl flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch justify-start items-center gap-[426px] inline-flex">
            <div className="text-neutral-100 text-base font-bold font-['Nunito'] tracking-wider">
              Address
            </div>
          </div>
          <input
            type="text"
            placeholder="Your Address (e.g. 0x123...)"
            className="w-full p-3 opacity-80 bg-neutral-100 rounded-2xl text-2xl font-normal font-['Montserrat']"
            value={senderInfo} // Vincula el valor del input al estado senderInfo
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="bg-black text-white rounded-full px-[32px] py-[8px] font-semibold w-fit mx-auto">
        Follow Transaction
      </button>
      <div className="flex flex-col w-full gap-1 items-center">
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
