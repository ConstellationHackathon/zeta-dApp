import { IconAvalanche, IconEthereum, IconClose, IconRight } from "./Icon";
import Modal from "react-modal";
interface ResponseModalProps {
  closeModal: () => void;
  onDoneButton: () => void;
  estimatedReceived: number;
  fee: number;
  fromValue: number | null;
}
Modal.setAppElement("#__next");
const InitialModal: React.FC<ResponseModalProps> = ({
  closeModal,
  onDoneButton,
  estimatedReceived,
  fee,
  fromValue
}) => {
  return (
    <Modal
      isOpen={true}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="fixed inset-0 flex flex-col gap-[48px] p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] text-black z-10 text-2xl justify-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-20"
      appElement={document.getElementById("root") as HTMLElement}
    >
      <div className="flex flex-col w-full gap-3 items-center">
        <div className="flex gap-2">
          Send
          <span className="font-semibold">{fromValue}</span>
          <IconAvalanche />
          <span className="font-semibold">AVAX</span>
          to the address
        </div>
        <div className="font-semibold">
          0xe520Cad33d788e38FE7d7Dced1b7e11bb0457B9C
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
      <div className="flex flex-col gap-3 items-center">
        <div>Estimated Received</div>
        <div className="font-semibold">{`${estimatedReceived} ETH`}</div>
      </div>
      <button
        className="bg-black text-white rounded-full px-[32px] py-[8px] font-semibold w-fit mx-auto hover:bg-[#E84142]"
        onClick={() => onDoneButton()}
      >
        Done
      </button>
      <button
        className="absolute right-[16px] top-[16px]"
        onClick={closeModal}
        title="Close Modal"
      >
        <IconClose />
      </button>
    </Modal>
  );
};

export default InitialModal;
