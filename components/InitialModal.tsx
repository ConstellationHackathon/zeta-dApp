import { IconAvalanche, IconEthereum, IconClose, IconRight } from "./Icon";
import Modal from "react-modal";
interface ResponseModalProps {
  closeModal: () => void;
  onDoneButton: () => void;
  estimatedReceived: number;
  fee: number;
}
Modal.setAppElement("#__next");
const InitialModal: React.FC<ResponseModalProps> = ({
  closeModal,
  onDoneButton,
  estimatedReceived,
  fee,
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
          <span className="font-semibold">{estimatedReceived-fee}</span>
          <IconAvalanche />
          <span className="font-semibold">AVAX</span>
          to the address
        </div>
        <div className="font-semibold">
          0x6D824716d4A7a20Bdf95b3286530240bAE3Bf7C0
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
