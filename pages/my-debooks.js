import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import {
  useMarketplace, MediaRenderer, useAddress,
  useActiveListings, useOwnedNFTs, useNFTs, useNFTDrop, ThirdwebNftMedia,
} from '@thirdweb-dev/react';
import Banner from '../components/Banner';

import NFTCard from '../components/NFTCard';

import images from '../public/assets';

function Mydebooks() {
  const [nfts, setNfts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const address = useAddress();
  const nftDrop = useNFTDrop('0x7c33F3B951d04e41b98b34575a7e1F5247cE846f');
  const { data: ownedNFTs } = useOwnedNFTs(nftDrop, address);

  if (isLoading) {
    return (
      <div className="flexStart min-h-screen">isloading...</div>
    );
  }
  return (
    <div className="w-full flex justify-start items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <Banner
          name="Your debooks"
          childStyles="text-center mb-4"
          parentStyles="h-80 justift-center"
        />
        <div className="flexCenter flex-col -mt-20 z-0">
          <div className="flexCenter mb-5 w-36 h-36 nm:w-50 nm:h-50 p-1 rounded-full">
            <Image src={images.creator} className="rounded-[5rem] object-cover" objectFit="cover" />
          </div>
          <p className="text-black font-bold">@ernest</p>
        </div>
      </div>
      {!isLoading && !nfts.length ? (
        <div className="flexCenter p-4 nm:p-16">
          <h1 className="text-3xl text-debook-1">You don't own any debooks.</h1>
        </div>
      ) : (
        <>
          {ownedNFTs?.map((nft) => (
            <div className="px-10">
              <div key={nft.metadata.id.toString()}>
                <div />
                <a>
                  <NFTCard nft={nft} />
                </a>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Mydebooks;
