import { IconClose } from './Icon'
import Modal from 'react-modal';
interface ResponseModalProps {
    closeModal: () => void;
    onDoneButton: () => void;
}
Modal.setAppElement('#__next');
const InitialModal: React.FC<ResponseModalProps> =  ({ closeModal, onDoneButton }) => {    
    return (
        <Modal
            isOpen={true}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            className="fixed inset-0 flex flex-col gap-[48px] p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] text-black z-10 text-2xl justify-center"
            overlayClassName="fixed inset-0 bg-black bg-opacity-20"
            appElement={document.getElementById('root') as HTMLElement}
        >
            <div className='flex flex-col w-full gap-1 items-center'>
                <div>Send 0.055 BTC to the address</div>
                <div>0x250c91aa8DD7BB893402e6f86938B945c7289eF7</div>
                <div className='flex gap-3'>
                    <div>AVAX</div>
                    <div>-</div>
                    <div>Ethereum</div>
                </div>
            </div>
            <div className='text-center'>
                <div>Estimated Received</div>
                <div>0.9574293 ETH</div>
            </div>
            <button
                className='bg-black text-white rounded-full px-[32px] py-[8px] font-semibold w-fit mx-auto'
                onClick={() => onDoneButton()}
            >
                Done
            </button>
            <button
                className='absolute right-[16px] top-[16px]'
                onClick={closeModal}
            >
                <IconClose/>
            </button>
        </Modal>
    )
}

export default InitialModal
