import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import {
  useMarketplace, MediaRenderer, useAddress,
  useListings, useOwnedNFTs, useContract, useContractMetadata, useMetadata, useNFTs, ThirdwebNftMedia,
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

  const nftDrop = useContract('0xc4dBB75364cF86F7c02234a0374167D0Fc31c797', 'nft-drop').contract;

  const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(nftDrop, address);

  return (

    <div className="w-full bg-white flex justify-center items-center flex-col min-h-screen">
      <div className="w-full flexCenter flex-col">
        {!address ? (
          <div className="flexCenter flex-col mt-20 z-0">
            <p className="text-black font-bold">
              Please connect your wallet
            </p>
          </div>
        ) : (
          <div className="flexCenter flex-col mt-20 z-0">
            <p className="text-black font-bold">
              Your Wallet:
              {' '}
              {address}
            </p>
          </div>
        )}
        <div className="mt-3 w-full flex flex-wrap justify-start md:justify-center">
          {!isLoading && !ownedNFTs?.length ? (
            <div className="flexCenter p-4 nm:p-16">
              <h1 className="text-3xl text-debook-1">You don't own any debooks.</h1>
            </div>
          ) : (
            <>
              {ownedNFTs?.map((nft, index) => (
                <div className="px-10">
                  <div key={nft.metadata.id.toString()}>
                    <div>{}</div>

                    <a>
                      <NFTCard
                        nft={{
                          image: nft.metadata.image,
                          tokenId: nft.metadata.id,
                          name: nft.metadata.name,
                          owner: nft.owner,
                          description: nft.metadata.description,
                        }}
                      />
                    </a>

                  </div>
                </div>
              ))}
            </>

          )}
        </div>
      </div>
    </div>

  );
};

export default myNFTs;
