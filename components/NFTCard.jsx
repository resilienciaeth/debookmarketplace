import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import images from '../public/assets';

function NFTCard({ nft, metadata }) {
  return (
    <Link
      nft={{ nft }}
      href={{ pathname: '/debook-details', query: nft }}
    >
      <div className="px-2">
        <div className="w-[170px] nm:w-[330px] nm:h-[450px] h-[217px] min-h-[217px] nm:min-h-[450px] min-w-[170px] nm:max-w-[300px] bg-white border-[1px] border-[#ADADAD] rounded-2xl mb-4">
          <div className="flex h-[55%] w-full ">
            <Image
              height={300}
              width={300}
              alt="nft"
              src={nft.image || images.nftimage1}
              className="rounded-t-xl"
              objectFit="cover"
            />
          </div>
          <div className="flex h-[45%] flex-col px-4">
            <div className="text-left nm:mt-[1.5rem] text-bold font-larken text-[10px] nm:text-[15px] text-black">DEBOOK MAGICKEY</div>
            <div className="text-left nm:mt-4 text-bold font-larken text-[10px] nm:text-[15px] text-black">{nft.name}</div>
            <div className="flex flex-row justify-between font-larken text-[8px] nm:text-[14px] text-gray-600">
              <p>
                {nft.description}
              </p>
            </div>
            <div className="flex flex-row justify-center mt-2 nm:mt-6 space-x-4 nm:space-x-8">
              <button className="bg-debook-1 text-[8px] nm:text-[14px] text-white rounded-3xl px-3 nm:px-5 font-larken py-1">View debook</button>
              {/* <button className="bg-button-1 text-black font-larken px-2 nm:px-5 text-[8px] nm:text-[14px] rounded-3xl">Rent now</button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NFTCard;
