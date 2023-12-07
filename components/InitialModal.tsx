import { IconClose } from './Icon'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const InitialModal: React.FC =  () => {    
    return (
        <Modal
            isOpen={}
            onRequestClose={}
            contentLabel="Example Modal"
            className="fixed inset-0 flex flex-col gap-4 p-[24px] rounded-[32px] shadow-lg m-auto w-[700px] h-[600px] bg-[#fafafa] z-10"
            overlayClassName="fixed inset-0 bg-primary bg-opacity-80"
        >
            <div className='flex w-full gap-1'>
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
                className='bg-black text-white rounded-full p-2 font-semibold'
            >
                Done
            </button>
        </Modal>
    )
}

export default InitialModal