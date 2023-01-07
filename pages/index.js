/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NFTCard from '../components/NFTCard';

import images from '../public/assets';

function Home() {
  return (
    <div className="font-larken bg-white">
      {/* Welcome */}
      <div className="bg-black h-auto">
        <div className="flex flex-col h-full bg-white">
          <div className="nm:flex flex-row ">
            <div className="mt-[8rem] nm:mt-10 nm:w-[50%] h-[20%] nm:h-auto flex items-center nm:justify-center flex-col">
              <div>
                <p className="text-[12px] nm:text-[15px] nm:text-left font-larken font-bold text-debook-1">Welcome to</p>
                <h1 className="text-[70px] nm:leading-[120px] nm:text-[120px] mt-0 font-larken font-bold text-debook-1">DEBOOK</h1>
                <p className="text-[12px] font-larken font-bold text-debook-1">The first Blockchain Platform to revolutionize books.</p>
              </div>
            </div>
            {/* NFT Card */}
            <div className="mt-[5rem] nm:mt-[8rem] mb-10 flex items-start justify-center bg-white nm:w-[50%] nm:h-auto h-[80%]">
              <div className="w-[290px] nm:w-[480px]  h-[330px] nm:h-[550px] border-2 bg-white rounded-2xl">
                <div className="h-[55%] flex nm:hidden w-full min-w-full ">
                  <Image src={images.nftimage} className="rounded-t-[1rem] hidden" objectFit="cover" />
                </div>
                {/* image desktop */}
                <div className="h-[55%] hidden nm:flex w-full min-w-full">
                  <Image src={images.nftcarddesktop} className="rounded-t-[1rem] hidden" objectFit="cover" />
                </div>
                {/* description */}
                <div className="h-[45%] flex justify-center flex-col">
                  <div className="w-full space-x-5 nm:space-x-32 flex justify-around nm:justify-start flex-row px-6 ">
                    <div className="flex flex-row space-x-4">
                      <div className="flex nm:hidden">
                        <Image src={images.author} />
                      </div>
                      <div className="nm:flex hidden">
                        <Image src={images.authordesktop} />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <p className="text-[10px] nm:text-[18px] text-black font-larken text-left">
                          Book's Name
                        </p>
                        <p className="text-[10px] nm:text-[15px] text-slate-500 font-larken">
                          Author's Name
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col text-slate-500 items-center justify-center ">
                      <p className="text-[10px] text-center nm:text-[18px] font-larken">
                        Price
                      </p>
                      <div className=" border-[1px] border-debook-1">
                        <p className="text-[8px] nm:text-[16px] px-2 text-debook-1 font-larken">
                          $30 USDC
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row mt-5 justify-center space-x-10">
                    <button className="bg-debook-1 text-[12px] nm:text-[18px] font-larken font-bold px-4 py-2 nm:px-6  rounded-3xl">Buy Now</button>
                    <button className="bg-button-1 text-[12px] nm:text-[18px] text-black font-larken px-4 nm:px-6 py-2 rounded-3xl font-bold">Rent Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Orange Section */}
          <div className="w-full nm:w-[30%] bg-debook-1 nm:rounded-tl-[6rem]">
            <div className="flex flex-col nm:items-center nm:justify-center ml-[3rem] nm:ml-0 nm:mt-4 py-4">
              <p className="font-larken text-[12px] nm:text-[15px]  text-white">From books to ebooks to now..</p>
              <h1 className="font-larken text-[40px] nm:text-[55px] w-full nm:text-center text-white">debooks</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Popular */}
      <div className="mt-10">
        <div className="flexBetween mx-0 nm:mx-4 px-10 nm:px-0 flex-row items-start">
          <h1 className="nm:text-4xl nm:ml-10 font-bold nm:mb-4 flex-1 text-debook-1">Popular debooks</h1>
          <div className="nm:text-4xl nm:mr-10 text-debook-1">Search bar</div>
        </div>
        <div className="flex justify-center mt-4 flex-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <NFTCard
              key={`nft-${i}`}
              nft={{
                i,
                name: `DEBOOK Magickey #${i}`,
                price: (1000 - i * 0.534).toFixed(2),
                seller: 'owner',
                owner: 'owner-1',
              }}
            />
          ))}
        </div>
      </div>
      {/* web3 */}
      <div className="h-auto bg-debook-1">
        <div className="flex flex-col items-center justify-center px-[2rem]">
          <div className="mt-[5rem] nm:flex nm:items-center nm:flex-col  nm:px-[5rem] space-y-6 mb-20">
            <h1 className="text-[30px] nm:text-[55px] font-bold text-center text-white">
              Bringing Authors and Readers into web3.
            </h1>
            <p className="text-[15px] nm:text-[22px] nm:w-[60%] font-normal text-center text-white">
              From physical books, to e-books to now decentralized books. From DEBOOK we are commited to bring you the education needed to get started.
            </p>
            <div className="nm:flex nm:px-[10rem] nm:flex-row space-y-4 nm:space-y-0 nm:space-x-12">
              {/* card 1 */}
              <div className="flex flex-col justify-center items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
                <h1 className="text-[18px] font-bold text-center text-white">Social books</h1>
                <p className="text-[15px] text-card1 text-center mb-4">Books as a Platform. Each debook gives you access to a private community. Surround yourself with like-minded people.</p>
              </div>
              {/* card 2 */}
              <div className="flex flex-col justify-center items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
                <h1 className="text-[18px] font-bold text-center text-white">Asset Books</h1>
                <p className="text-[15px] text-card1 text-center mb-4">Readers can now sell debooks whenever they want and even make some profit out of it. Authors keep a % of every resell. </p>
              </div>
              {/* card 3 */}
              <div className="flex flex-col justify-center items-center border-2 rounded-3xl px-[2rem] space-y-2 h-[258px] bg-blend-overlay bg-card">
                <h1 className="text-[18px] font-bold text-center text-white">Utility Books</h1>
                <p className="text-[15px] text-card1 text-center mb-4">Readers can intereact with the author. Authors know who their readers are. Books become alive with the power of the Blockchain.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* notable drops */}
      <div className="mt-20 h-auto mb-10">
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] font-bold text-black">Notable Drops</h1>
          <div className="mt-10">

            <div className="relative">
              <Image src={images.notable} className="relative" />
            </div>
            <div className="flex flex-row items-start justify-center space-x-2 text-debook-1 text-[30px]">
              <p>.</p>
              <p>.</p>
              <p>.</p>
              <p>.</p>
            </div>
          </div>
        </div>
      </div>
      {/* coming soon */}
      <div className="h-auto w-full bg-[#212121]">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-[8rem] flex flex-col items-center nm:items-start nm:justify-center">
            <div className="flex nm:absolute flex-col nm:w-[50%] px-[2rem] nm:px-[5rem] items-center nm:items-center nm:justify-center">
              <h1 className="text-white font-bold text-[28px] nm:text-[55px] text-center">
                1 debook, 1 Community.
              </h1>
              <h1 className="text-coming text-[15px] nm:text-[22px] text-center">
                DEBOOK App will be available soon for every reader to interact with their Community and Author. Readers will be able to chat with each others, add value to the book, post their thoughts on the debooks they are readong and much more.
              </h1>
              <div className="flex flex-col mt-4">
                <Image src={images.appstore} width={260} height={170} />
              </div>
              <h1 className="text-[20px] nm:text-[40px] font-bold mt-6 text-white">
                Coming Soon.
              </h1>
            </div>
            <div className="nm:hidden">
              <Image src={images.iphone} objectFit="fill" />
            </div>
            <div className="hidden nm:flex">
              <Image src={images.iphonedesktop} objectFit="fill" />
            </div>
          </div>
        </div>
      </div>
      {/* 1 book 1 community */}
      <div className="h-auto bg-circle bg-no-repeat nm:bg-repeat bg-debook-1">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center mt-[6rem] px-[2rem] mb-[9rem]">
            <h1 className="text-[22px] nm:text-[55px]  font-bold text-white">
              One debook, one Community.
            </h1>
            <p className="text-[14px] nm:text-[22px] text-center mt-5 text-white">DEBOOK is a tool to tokenize books. </p>
            <p className="text-[14px] nm:text-[22px]  text-center text-white">DEBOOK is a marketplace for tokenized books. </p>
            <p className="text-[14px] nm:text-[22px]  text-center text-white">DEBOOK is a social platform for readers and authors to interact on top of their debooks.  </p>
            <div className="flex flex-row mt-16 space-x-10">
              <button className="rounded-3xl px-5 nm:px-7 py-2 text-[15px] nm:text-[22px]  border-[2px] font-bold text-white">Learn More</button>
              <button className="rounded-3xl px-5 nm:px-7 py-2 text-[15px] nm:text-[22px]  bg-black font-bold text-white">Publish debook</button>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="h-auto">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col items-center mt-[5rem] space-y-4 mb-20">
            <p className="text-[8px] font-bold text-debook-1 text-center">Stay up to date on every debook.</p>
            <h1 className="text-[35px] font-bold text-debook-1 text-center">Subscribe to our Newsletter</h1>
            <input type="text" placeholder="Type your email..." />
            <button className="bg-debook-1 w-[80%] rounded-3xl py-4 text-[18px] font-bold text-white">Subscribe now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
