import { senderEvents  } from '@/graphql/FetchSenderInfo'
import { useQuery } from '@apollo/client';
import { ethers } from "ethers";
import React from 'react'
const MovementsTable = () => {
    const transactions = []
    const { loading, error, data } = useQuery(senderEvents);

    if (loading) return 'Loading...';
    console.log(data)
    data.avaxReceiveds.map((item, index)=>{
       const _item = {}
        _item.address = item.sender
        _item.from = "Fuji"
        _item.avax = ethers.formatEther(item.tokenAmount);
        _item.to = "Sepolia"
        _item.eth = ""
        _item.totalReceived = ""
        _item.status = "pending"
        _item.transactionDate = new Date(item.timestamp * 1000).toString()
        transactions.push(_item)
    })
  return (
    <div className="movement-table flex flex-col justify-center items-center bg-[#fafafa] shadow-sm p-[16px] rounded-[16px] gap-2 w-full">
  <section  className="grid grid-cols-8 w-[1024px] bg-[#fafafa] shadow-md p-[16px] rounded-[8px]">
      <div className="flex flex-col gap-1 items-center justify-center">Address</div>
      <div className="flex flex-col gap-1 items-center justify-center">From</div>
      <div className="flex flex-col gap-1 items-center justify-center">Avax</div>
      <div className="flex flex-col gap-1 items-center justify-center">To</div>
      <div className="flex flex-col gap-1 items-center justify-center">Eth</div>
      <div className="flex flex-col gap-1 items-center justify-center">Total recived</div>
      <div className="flex flex-col gap-1 items-center justify-center">Status</div>
      <div className="flex flex-col gap-1 items-center justify-center">Date</div>
    
  </section>
  <section>
       {transactions.map((item, index) => (
       <div key={index}  className="detail-transaction grid grid-cols-8 w-[1024px] bg-[#fafafa] shadow-md p-[16px] rounded-[8px]">
           <div className="flex flex-col gap-1 items-center justify-center truncate overflow-hidden ..." title={item.address}>{item.address}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.from}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.avax}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.to}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.eth}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.totalReceived}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.status}</div>
        <div className="flex flex-col gap-1 items-center justify-center">{item.transactionDate}</div>
      </div>
      ))}
  </section>

    </div>
  );
};

export default MovementsTable;
