import { truncate } from "truncate-ethereum-address";
import { AvaxSenderEvents } from "@/graphql/FetchSenderInfo";
import { SepoliaReceiveMsg } from "@/graphql/FetchAddressSepolia";
import { useQuery } from "@apollo/client";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { IconAvalanche, IconEthereum } from "./Icon";
type ApiResponse = {};
interface AvaxReceived {
  transactionId: string;
  sender: string;
  tokenAmount: string;
  timestamp: string;
}
interface TransactionItem {
  transactionId: string;
  address: string;
  avax: string;
  eth: number | null;
  totalReceived: number | bigint | string | any;
  status: string;
  transactionDate: string;
  date: Date;
}
interface TransactionSort {
  date : number;
}
const MovementsTable = () => {
  const [time, setTime] = useState(new Date());
  const transactions: any = [];

  const {
    loading,
    error,
    data,
    refetch: refetchAvaxSenderEvents,
  } = useQuery(AvaxSenderEvents);
  const { data: querySepoliaReceiver, refetch: refetchSepoliaReceiveMsg } =
    useQuery(SepoliaReceiveMsg);
  const [fujiEthPrice, setResult] = useState<number | null>(null);
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
  if (!fujiEthPrice) {
    getFujiEthPrice();
  }
  useEffect(() => {
    const interval = setInterval(() => {
      refetchAvaxSenderEvents(); // Refetch AvaxSenderEvents data
      refetchSepoliaReceiveMsg(); // Refetch SepoliaReceiveMsg data
    }, 2000); // Refetch every second

    return () => clearInterval(interval);
  }, [refetchAvaxSenderEvents, refetchSepoliaReceiveMsg]);

  if (loading) return "Loading...";
  data?.avaxReceiveds.map((item: AvaxReceived) => {
    const event_receiver =
      querySepoliaReceiver?.fundsTransferreds.find(
        (event : any) => event.transactionId == item.transactionId
      ) || {};
    // _item.transactionId = truncate(item.transactionId, { nPrefix: 1 });
    // _item.address = truncate(item.sender, { nPrefix: 1 });
    // _item.avax = ethers.formatEther(item.tokenAmount);
    // _item.eth = fujiEthPrice;
    // _item.totalReceived = ethers.formatEther(item.tokenAmount) * fujiEthPrice;
    // _item.status = event_receiver?.transactionId
    //   ? "Completed"
    //   : "Processing ...";
    // _item.transactionDate = new Date(item.timestamp * 1000).toString();
    // _item.date = new Date(item.timestamp * 1000);

    const _item: TransactionItem = {
      transactionId: truncate(item.transactionId, { nPrefix: 1 }),
      address: truncate(item.sender, { nPrefix: 1 }),
      avax: ethers.formatEther(item.tokenAmount),
      eth: fujiEthPrice,
      totalReceived: parseFloat(ethers.formatEther(item.tokenAmount) )* (fujiEthPrice || 0),
      status: event_receiver?.transactionId ? "Completed" : "Processing ...",
      transactionDate: new Date(parseInt(item.timestamp) * 1000).toString(),
      date: new Date(parseInt(item.timestamp) * 1000)
    };

    transactions.push(_item);
  });
  return (
    <div className="movement-table flex flex-col justify-center items-center bg-[#fafafa] shadow-sm p-16 gap-2 w-full text-black">
      <section className="grid table-header grid-cols-12 w-[1400px] bg-[#E84142] shadow-md p-[16px] rounded-t-[24px] rounded-b-[4px] text-white font-bold">
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          Transaction Id
        </div>
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          Address
        </div>
        <div className="flex gap-2 col-span-2 items-center justify-center text-center">
          Total AVAX <IconAvalanche width={24} height={24} />
        </div>
        <div className="flex gap-2 col-span-2 items-center justify-center text-center">
          AVAX <IconAvalanche width={24} height={24} /> / ETH{" "}
          <IconEthereum width={24} height={24} />
        </div>
        <div className="flex gap-2 col-span-2 items-center justify-center text-center">
          Total recived <IconEthereum width={24} height={24} />
        </div>
        <div className="flex flex-col gap-1 col-span-2 items-center justify-center text-center">
          Status
        </div>
        <div className="flex flex-col gap-2 col-span-2 items-center justify-center text-center">
          Date
        </div>
      </section>
      <section>
        {transactions
          .sort((a: TransactionSort, b: TransactionSort) => b.date - a.date)
          .map((item : TransactionItem, index : number) => (
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
                className="flex gap-2 col-span-2 items-center justify-center"
                title={item.avax}
              >
                {item.avax}
                <IconAvalanche width={20} height={20} />
              </div>
              <div
                className="flex gap-2 col-span-2 items-center justify-center"
                title={item.eth ? (item.eth).toString() : "error"}
              >
                {item.eth}
                <IconEthereum width={20} height={20} />
              </div>
              <div
                className="flex gap-2 col-span-2 items-center justify-center font-semibold"
                title={item.totalReceived}
              >
                {item.totalReceived}
                <IconEthereum width={20} height={20} />
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
