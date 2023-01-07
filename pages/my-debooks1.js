import {
  useContext, useEffect, useState, useRef,
} from 'react';
import {
  useMarketplace, MediaRenderer, useAddress,
  useActiveListings, useOwnedNFTs, useContract, useMetadata, useNFTs, useNFTDrop, ThirdwebNftMedia,
} from '@thirdweb-dev/react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Link from 'next/link';
import NFTCard from '../components/NFTCard';
import NFTCard1 from '../components/NFTCard1';
import Banner from '../components/Banner';

import images from '../public/assets';

const myNFTs = () => {
  const address = useAddress();

  const nftDrop = useContract('0x4C50852f241cCC9CD421D8403E4Ab120c6cE9733', 'nft-drop').contract;

  const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(nftDrop, address);

  return (
    <div className="w-full bg-white flex justify-center items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        <div className="flexCenter flex-col -mt-20 z-0">
          <p className="text-black font-bold">
            Your Wallet:
            {' '}
            {address}
          </p>
        </div>
        <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
          {!isLoading ? (
            <>
              {ownedNFTs?.map((nft, index) => (
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

          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>

  );
};

export default myNFTs;
