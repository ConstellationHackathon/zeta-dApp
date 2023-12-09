import React, { useState, ChangeEvent, useEffect } from "react";
import InitialModal from "./InitialModal";
import Image from "next/image";
import MovementsTable from "@/components/MovementsTable";
import ResponseModal from "./ResponseModal";
import { IconClose, IconRight_2 } from "./Icon";

const Swap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseModal, setResponseModal] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<string>("AVAX1");
  const [fromValue, setFromValue] = useState<number | null>(null);
  const [fujiEthPrice, setFujiEthPrice] = useState<number>(0);
  const [estimatedReceived, setEstimatedReceived] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);
  useEffect(() => {
    const getFujiEthPrice = async () => {
      const data = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=eth",
        {
          method: "GET",
        }
      );
      const jsonData = await data.json();
      setFujiEthPrice(jsonData["avalanche-2"].eth);
      console.log(jsonData["avalanche-2"].eth);
    };

    getFujiEthPrice();
  }, []);

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
  const onChangeFromValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFromValue(parseFloat(event.target.value));
    const fee = (parseFloat(event.target.value) * fujiEthPrice) / 100;
    setEstimatedReceived(parseFloat(event.target.value) * fujiEthPrice - fee);
    setFee(fee);
  };
  return (
  <div className="w-full h-screen ">
    <div className="zeta flex flex-col justify-center items-center bg-[#f4f4f4] text-black gap-5">
      <Image src="/assets/logo.png" width={100} height={100} alt="zeta Logo" />
      <div className="flex flex-col w-[640px] bg-[#fafafa] shadow-md p-[32px] rounded-[24px] gap-2">
        <div className="flex flex-col gap-3 w-full bg-[#E84142] text-white p-[24px] rounded-tl-[16px] rounded-tr-[16px]">
          <div className="flex w-full justify-between font-semibold">
            <div>From</div>
            <div>Avalanche</div>
          </div>
          <div className="flex w-full justify-between items-center">
            <input
              type="number"
              value={fromValue!}
              onChange={onChangeFromValue}
              className="bg-[#E84142] text-white border-none font-bold text-xl"
              placeholder="Amount to send . . ."
            />
            <div className="bg-[#E84142] px-4 py-2 border-2 border-white rounded-[12px] hover:bg-white hover:text-black ">
              <label htmlFor="coinSelectFrom" />
              <select
                id="coinSelectFrom"
                value={selectedCoin}
                onChange={handleCoinChange}
                aria-label="Select Coin"
                className="bg-transparent"
              >
                <option
                  data-img_src="/assets/logo.png"
                  value="AVAX"
                  className="text-black"
                >
                  AVAX
                </option>
                <option value="ETH" className="text-black">
                  ETH
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full bg-[#E84142] text-white p-[24px] rounded-bl-[16px] rounded-br-[16px]">
          <div className="flex w-full justify-between font-semibold">
            <div>To (estimated)</div>
            <div>Ethereum</div>
          </div>
          <div className="flex w-full justify-between items-center">
            <div className="font-bold text-xl">{estimatedReceived ? (estimatedReceived - fee) : 0}</div>
            <div className="bg-[#E84142] px-4 py-2 border-2 border-white rounded-[12px] hover:bg-white hover:text-black">
              <label htmlFor="coinSelectTo" />
              <select
                id="coinSelectTo"
                value={selectedCoin}
                onChange={handleCoinChange}
                aria-label="Select Coin"
                className="bg-transparent "
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
          className="bg-black text-white rounded-full py-[8px] font-semibold border-b-2 hover:bg-[#E84142] text-lg hover:border-b-2 hover:border-black "
          onClick={openModal}
        >
          Exchange now
        </button>
        {isModalOpen && (
          <InitialModal
            closeModal={() => setIsModalOpen(false)}
            onDoneButton={onDoneButton}
            estimatedReceived={estimatedReceived}
            fee={fee}
            fromValue={fromValue}
          />
        )}
        {responseModal && (
          <ResponseModal
            closeModal={() => setResponseModal(false)}
            estimatedReceived={estimatedReceived}
            fee={fee}
            fromValue={fromValue}
          />
        )}
        <div className="flex flex-col gap-2 mt-8">
          <div className="flex justify-between">
            <div>Fees</div>
            <div>{`${fee ? fee : 0} ETH`}</div>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <div>Estimated Received</div>
            <div>{`${estimatedReceived ? estimatedReceived : 0} ETH`}</div>
          </div>
        </div>
      </div>
    </div>
    <MovementsTable />
    </div>

  );
};

export default Swap;
