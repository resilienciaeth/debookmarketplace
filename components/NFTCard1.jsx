import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NFTCard1({ nft }) {
  return (
    <Link href={{ pathname: '/debook-details', query: { nft } }}>
      <div className="px-2">
        <div className="w-[170px] nm:w-[330px] nm:h-[450px] h-[217px] min-h-[217px] nm:min-h-[450px] min-w-[170px] nm:min-w-[330px] bg-white border-[1px] border-[#ADADAD] rounded-2xl mb-4">
          <div key={nft.metadata.id.toString()}>
            <div className="flex h-[55%] w-full">
              {nft?.metadata?.image && (
              <Image
                src={nft.metadata.image}
                height={250}
                width={250}
                alt="nft"
              />
              )}
              <div className="flex h-[45%] flex-col px-4">
                <div className="z-0 flex-col -mt-4 nm:-mt-6 w-[40px] nm:w-[74px] h-[40px] nm:h-[74px] border-[2px] text-black rounded-full border-white ">{nft.metadata.description}</div>
                <h3 className="text-black">{nft.metadata.name}</h3>
                <h3 className="text-black text-[40px] mt-10">{nft.metadata.name.collection}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NFTCard1;
