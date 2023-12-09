import React, { useState, ChangeEvent } from "react";
import InitialModal from "./InitialModal";
import Image from "next/image";
import ResponseModal from "./ResponseModal";

const Swap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<string>("AVAX1");
  const [fromValue, setFromValue] = useState<number | null>(null);
  const [toValue, setToValue] = useState<number>(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCoinChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCoin(event.target.value);
  };

  const onDoneButton = () => {
    console.log("done button");
    
    setResponseModal(true);
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[#f4f4f4] text-black gap-8">
      <Image src="/assets/logo.png" width={100} height={100} alt="zeta Logo" />
      <div className="flex flex-col w-[640px] bg-[#fafafa] shadow-md p-[32px] rounded-[24px] gap-2">
        <div className="flex flex-col w-full bg-[#E84142] text-white p-[24px] rounded-tl-[16px] rounded-tr-[16px]">
          <div className="flex w-full justify-between">
            <div>From</div>
            <div>AVAX</div>
          </div>
          <div className="flex w-full justify-between items-center">
            <input 
              type="number" 
              value={fromValue!}
              onChange={(e) => setFromValue(parseFloat(e.target.value))} 
              className="bg-[#E84142] text-white border-none"
              placeholder="Amount to send . . ."
            />
            <div className="bg-[#E84142] px-4 py-2 border-2 border-white rounded-[12px] ">
              <label htmlFor="coinSelectFrom" />
              <select
                id="coinSelectFrom"
                value={selectedCoin}
                onChange={handleCoinChange}
                aria-label="Select Coin"
                className="bg-transparent"
              >
                <option value="AVAX" className="text-black">
                  AVAX
                </option>
                <option value="ETH" className="text-black">
                  ETH
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-[#E84142] text-white p-[24px] rounded-bl-[16px] rounded-br-[16px] gap-1">
          <div className="flex w-full justify-between">
            <div>To (estimated)</div>
            <div>Ethereum</div>
          </div>
          <div className="flex w-full justify-between items-center">
            <input 
              type="text" 
              value={toValue} 
              onChange={(e) => setToValue(e.target.value)} 
              className="bg-[#E84142] text-white border-none"
            />
            <div className="bg-[#E84142] px-4 py-2 border-2 border-white rounded-[12px] ">
              <label htmlFor="coinSelectTo" />
              <select
                id="coinSelectTo"
                value={selectedCoin}
                onChange={handleCoinChange}
                aria-label="Select Coin"
                className="bg-transparent"
              >
                <option value="ETH" className="text-black">
                  ETH
                </option>
                <option value="AVAX" className="text-black">
                  AVAX
                </option>
              </select>
            </div>
          </div>
        </div>

        <button
          className="bg-black text-white rounded-full p-2 font-semibold"
          onClick={openModal}
        >
          Exchange now
        </button>
        {isModalOpen && (
          <InitialModal
            closeModal={() => setIsModalOpen(false)}
            onDoneButton={onDoneButton}
          />
        )}
        {responseModal && (
          <ResponseModal closeModal={() => setResponseModal(false)} />
        )}
        <div className="text-center">Send to another address</div>

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

export default Swap;
