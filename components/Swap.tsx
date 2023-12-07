import React, {useState} from "react";
import InitialModal from "./InitialModal";

const Swap = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-[#f4f4f4] text-black gap-8">
            <div>
                Logo
            </div>
            <div className="flex flex-col w-[640px] bg-[#fafafa] shadow-md p-[32px] rounded-[24px] gap-2">
                <div className="flex flex-col w-full bg-[#E84142] text-white p-[24px] rounded-tl-[16px] rounded-tr-[16px]">
                    <div className="flex w-full justify-between">
                        <div>From</div>
                        <div>AVAX</div>
                    </div>
                    <div className="flex w-full justify-between">
                        <div>0.055</div>
                        <div>AVAX</div>
                    </div>
                </div>
                <div className="flex flex-col w-full bg-[#E84142] text-white p-[24px] rounded-bl-[16px] rounded-br-[16px] gap-1">
                    <div className="flex w-full justify-between">
                        <div>To (estimated)</div>
                        <div>Ethereum</div>
                    </div>
                    <div className="flex w-full justify-between gap-1">
                        <div>1.0124093</div>
                        <div>ETH</div>
                    </div>
                </div>

                <button
                    className="bg-black text-white rounded-full p-2 font-semibold"
                    onClick={openModal}
                >
                    Exchange now 
                </button>
                {isModalOpen && <InitialModal closeModal={closeModal} />}

                <div className="text-center">
                    Send to another address
                </div>

                <div className="mt-8">
                    <div className="flex justify-between">
                        <div>Fees</div>
                        <div>0.055 ETH</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Estimated Received</div>
                        <div>0.9574293 ETH</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swap
