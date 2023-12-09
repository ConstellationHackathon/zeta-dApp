import { truncate } from "truncate-ethereum-address";
import { AvaxSenderEvents } from "@/graphql/FetchSenderInfo";
import { SepoliaReceiveMsg } from "@/graphql/FetchAddressSepolia";
import { useQuery } from "@apollo/client";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
const MovementsTable = () => {
  type ApiResponse = {};
  const transactions : any = [];
  const { loading, error, data } = useQuery(AvaxSenderEvents);
  const querySepoliaReceiver = useQuery(SepoliaReceiveMsg);
  const [fujiEthPrice, setResult] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const getFujiEthPrice = async () => {
      const data = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=eth",
        {
          method: "GET",
        }
      );
      const jsonData = await data.json();
      setResult(jsonData["avalanche-2"].eth);
    };

    getFujiEthPrice();
  }, []);

  if (loading) return "Loading...";
  data?.avaxReceiveds.map((item, index) => {
    const _item = {};
    const event_receiver =
      querySepoliaReceiver.data?.msgReceiveds.find(
        (event) => event.transactionId == item.transactionId
      ) || {};
    _item.transactionId = truncate(item.transactionId, { nPrefix: 1 });
    _item.address = truncate(item.sender, { nPrefix: 1 });
    _item.avax = ethers.formatEther(item.tokenAmount);
    _item.eth = fujiEthPrice;
    _item.totalReceived = ethers.formatEther(item.tokenAmount) * fujiEthPrice;
    _item.status = event_receiver ? "Completed" : "Processing ...";
    _item.transactionDate = new Date(item.timestamp * 1000).toString();
    transactions.push(_item);
  });
  return (
    <div className="movement-table flex flex-col justify-center items-center bg-[#fafafa] shadow-sm p-[16px] gap-2 w-full text-black">
      <section className="grid grid-cols-12 w-[1400px] bg-[#fafafa] shadow-md p-[16px] rounded-[8px] text-black">
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          Transaction Id
        </div>
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          Address
        </div>
        <div className="flex flex-col gap-2 col-span-2 items-center justify-center text-center">
          Total Avax
        </div>
        <div className="flex flex-col gap-2 col-span-2 items-center justify-center text-center">
          Avax/Eth
        </div>
        <div className="flex flex-col gap-2 col-span-2 items-center justify-center text-center">
          Total recived
        </div>
        <div className="flex flex-col gap-1 col-span-2 items-center justify-center text-center">
          Status
        </div>
        <div className="flex flex-col gap-2 col-span-2 items-center justify-center text-center">
          Date
        </div>
      </section>
      <section className="text-black">
        {transactions.map((item, index) => (
          <div
            key={index}
            className="detail-transaction grid grid-cols-12 w-[1400px] bg-[#fafafa] shadow-md p-[16px] text-black"
          >
            <div
              className="flex flex-col gap-1 items-center justify-center truncate overflow-hidden ..."
              title={item.transactionId}
            >
              {item.transactionId}
            </div>
            <div
              className="flex flex-col gap-1 items-center justify-center truncate overflow-hidden ..."
              title={item.address}
            >
              {item.address}
            </div>
            <div
              className="flex flex-col gap-2 col-span-2 items-center justify-center"
              title={item.avax}
            >
              {item.avax}
            </div>
            <div
              className="flex flex-col gap-2 col-span-2 items-center justify-center"
              title={item.eth}
            >
              {item.eth}
            </div>
            <div
              className="flex flex-col gap-2 col-span-2 items-center justify-center"
              title={item.totalReceived}
            >
              {item.totalReceived}
            </div>
            <div
              className="flex flex-col gap-1 col-span-2 items-center justify-center"
              title={item.status}
            >
              {item.status}
            </div>
            <div className="flex flex-col gap-2 col-span-2 items-center justify-center">
              {item.transactionDate}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MovementsTable;
