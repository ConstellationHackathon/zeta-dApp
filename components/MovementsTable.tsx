import { truncate } from 'truncate-ethereum-address';
import { AvaxSenderEvents  } from '@/graphql/FetchSenderInfo'
import { SepoliaReceiveMsg } from '@/graphql/FetchAddressSepolia'
import { getFujiEthPrice} from '@/services/apiService';
import { useQuery } from '@apollo/client';
import { ethers } from "ethers";
import React, { useEffect, useState } from 'react'

const MovementsTable = () => {
    const [time, setTime] = useState(new Date());
    type ApiResponse = {
    };
    const transactions = []

    const { loading, error, data, refetch: refetchAvaxSenderEvents } = useQuery(AvaxSenderEvents);
    const { data: querySepoliaReceiver, refetch: refetchSepoliaReceiveMsg } = useQuery(SepoliaReceiveMsg);
    const [fujiEthPrice, setResult] = useState<ApiResponse | null>(null);

      useEffect(() => {
        const getFujiEthPrice = async () => {
          const data = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=eth", {
            method: "GET"
          });
          const jsonData = await data.json();
          setResult(jsonData["avalanche-2"].eth);
        };

        getFujiEthPrice();
       const interval = setInterval(() => {
       console.log("fetch events")
            refetchAvaxSenderEvents();  // Refetch AvaxSenderEvents data
            refetchSepoliaReceiveMsg(); // Refetch SepoliaReceiveMsg data
        }, 2000); // Refetch every second

        return () => clearInterval(interval); 
      }, [refetchAvaxSenderEvents, refetchSepoliaReceiveMsg]);
    
    if (loading) return 'Loading...';
    data?.avaxReceiveds.map((item, index)=>{
       const _item = {}
       const event_receiver =querySepoliaReceiver?.fundsTransferreds.find(event=>event.transactionId==item.transactionId) || {};
       _item.transactionId = truncate(item.transactionId, { nPrefix: 1 })
        _item.address = truncate(item.sender, { nPrefix: 1 })
        _item.avax = ethers.formatEther(item.tokenAmount);
        _item.eth = fujiEthPrice
        _item.totalReceived = ethers.formatEther(item.tokenAmount) * fujiEthPrice 
        _item.status = event_receiver?.transactionId ? "Completed" :  "Processing ...";
        _item.transactionDate = new Date(item.timestamp * 1000).toString()
        _item.date= new Date(item.timestamp * 1000)
        transactions.push(_item)
    })
  return (
    <div className="movement-table flex flex-col justify-center items-center bg-[#fafafa] shadow-sm p-16 gap-2 w-full text-black">
      <section className="grid grid-cols-12 w-[1400px] bg-[#E84142] shadow-md p-[16px] rounded-t-[24px] rounded-b-[4px] text-white font-bold">
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
      <section>
          {transactions.sort((a, b) => b.date - a.date).map((item, index) => (
          <div
            key={index}
            className="detail-transaction grid grid-cols-12 w-[1400px] bg-[#fafafa] shadow-md p-[16px] text-black rounded-b-[4px]
            even:bg-[#f4f4f4]"
          >
            <div
              className="flex flex-col gap-1 items-center justify-center truncate overflow-hidden  ..."
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
              className="flex flex-col gap-2 col-span-2 items-center justify-center font-semibold"
              title={item.totalReceived}
            >
              {item.totalReceived}
            </div>
            <div
              className="flex flex-col gap-1 col-span-2 items-center justify-center text-green-600 font-semibold"
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
