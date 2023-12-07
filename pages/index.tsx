import type { NextPage } from "next";
import React, { useState } from "react";

const Home: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <div className="w-[640px] h-[577px] px-8 py-[31px] bg-neutral-50 rounded-[32px] shadow border flex-col justify-end items-start gap-3 inline-flex">
          <div className="h-[126px] p-6 bg-red-500 rounded-tl-2xl rounded-tr-2xl flex-col justify-start items-end gap-3 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-neutral-100 text-base font-bold font-['Nunito'] tracking-wider">
                From
              </div>
              <div className="text-right text-neutral-100 text-base font-bold font-['Nunito'] tracking-wider">
                Bitcoin
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-neutral-100 text-[32px] font-medium font-['Nunito']">
                0.055
              </div>
              <div className="h-[43px] px-4 py-2 rounded-2xl border-2 border-neutral-100 justify-between items-center flex">
                <div className="w-[18px] h-5 relative" />
                <div className="grow shrink basis-0 text-center text-neutral-100 text-xl font-medium font-['Nunito']">
                  BTC
                </div>
                <div className="w-5 h-5 relative" />
              </div>
            </div>
          </div>
          <div className="h-[126px] p-6 bg-red-500 rounded-bl-2xl rounded-br-2xl flex-col justify-start items-end gap-3 flex">
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-neutral-100 text-base font-bold font-['Nunito'] tracking-wider">
                To (estimated)
              </div>
              <div className="text-right text-neutral-100 text-base font-bold font-['Nunito'] tracking-wider">
                Ethereum
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-neutral-100 text-[32px] font-medium font-['Nunito']">
                1.0124093
              </div>
              <div className="h-[43px] px-4 py-2 rounded-2xl border-2 border-neutral-100 justify-between items-center flex">
                <div className="w-[18px] h-5 relative" />
                <div className="grow shrink basis-0 text-center text-neutral-100 text-xl font-medium font-['Nunito']">
                  ETH
                </div>
                <div className="w-5 h-5 relative" />
              </div>
            </div>
          </div>
          <div className="self-stretch px-[170px] py-3 bg-stone-950 rounded-[50px] justify-center items-center gap-2 inline-flex">
            <div className="text-center text-neutral-100 text-2xl font-bold font-['Nunito']">
              Exchange now
            </div>
          </div>
          <div className="self-stretch justify-center items-center gap-3 inline-flex">
            <div className="text-center text-stone-950 text-2xl font-normal font-['Nunito']">
              Send to another address
            </div>
          </div>
          <div className="self-stretch h-[125px] pt-8 flex-col justify-end items-start gap-4 flex">
            <div className="self-stretch justify-between items-start inline-flex">
              <div className="text-stone-950 text-2xl font-normal font-['Nunito']">
                Fees
              </div>
              <div className="text-right text-stone-950 text-2xl font-normal font-['Nunito']">
                0.055 ETH
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-stone-950 text-2xl font-normal font-['Nunito']">
                Stimated Received
              </div>
              <div className="text-right text-stone-950 text-[32px] font-normal font-['Nunito']">
                0.9574293 ETH
              </div>
            </div>
          </div>
          <div className="w-[60px] h-[60px] left-[290px] top-[135px] absolute bg-red-500 rounded-2xl border-2 border-neutral-50">
            <div className="w-6 h-6 left-[18px] top-[18px] absolute" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
