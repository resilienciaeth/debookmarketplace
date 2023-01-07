import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  useAccount, useMetadata, useNFT, useContract,
} from '@thirdweb-dev/react';

import { id } from 'ethers/lib/utils';
import { NFTCard, Banner } from '../components';
import images from '../public/assets';
import Modal from '../components/Modal';

function PaymentBodyCmp({ nft, metadata }) {
  return (
    <div className="flex flex-col">
      <div className="flexBetween">
        <p className="text-black font-semibold text-base">Items</p>
        <p className="text-black font-semibold text-base">Subtotal</p>
      </div>
      <div className="flexBetweenStart my-5">
        <div className="flex-1 flexStartCenter">
          <div className="relative w-28 h-28">
            <Image src={nft.image || images.nftimage} layout="fill" objectFit="cover" />
          </div>
          <div className="flexCenterStart flex-col ml-5">
            <p className="text-black font-semibold text-base">0xdebook</p>
            <p className="text-black font-semibold text-base">{nft.name || 'DEBOOK Magickey'}</p>
          </div>

        </div>
        <div>
          <p className="text-black font-semibold text-base">
            {`$${nft.price || '990'} USD`}
          </p>
        </div>
      </div>
      <div className="flexBetween mt-10">
        <p className="text-black font-semibold text-base">Total</p>
        <p className="text-black font-semibold text-base">{`$${nft.price || '990'} USD`}</p>
      </div>
    </div>
  );
}

function Debookdetails() {
  const currentAccount = useContext(useAccount);

  const nftDrop = useContract('0x4C50852f241cCC9CD421D8403E4Ab120c6cE9733', 'nft-drop').contract;

  const { data: nft } = useNFT(nftDrop, id);

  const router = useRouter;

  const metadata = useMetadata(nftDrop);

  const [paymentModal, setPaymentModal] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    setNft(router.query);

    setIsLoading(false);
  }, [router.isReady]);

  return (
    <div className="relative flex justify-center flex-col nm:flex-row min-h-screen border-t-2">
      <div className="relative flex-1 flexCenter px-4 nm:px-0 nm:p-12 nm:border-r border-gray-400">
        <div className="relative w-full nm:w-2/3 h-300 bg-black nm:h-557">
          <Image src={nft.metadata?.image} layout="fill" objectFit="cover" className="rounded-xl shadow-lg" />
        </div>

        <div className="flex-1 justify-start px-4 nm:px-12 pb-4 nm:pb-0">
          <div className="flex mt-10 nm:flex-row flex-col">
            <h2 className="text-debook-1 font-bold text-2xl">{nft.name}</h2>
          </div>

          <div className="mt-10">
            <p className="text-black nm:text-base text-sm">Creator</p>
            <div className="mt-4">
              <Image src={images.authordesktop} objectFit="cover" className="rounded-2xl" />
            </div>
          </div>

          <div className="mt-10 flex flex-col">
            <div className="w-full border-b border-gray-400 flex flex-row">
              <p className="text-black text-xs nm:text-base font-medium mb-2">Details</p>
            </div>
            <div className="mt-3">
              <p className="text-black text-xs nm:text-base font-normal">{nft.metadata?.description}</p>
            </div>
          </div>

          <div className="flex flex-col nm:flex-row mt-10 mb-10">
            {/*
          { === nft.seller.toLowerCase()
            ? (
              <p>
                You cannot buy your own debook.
              </p>
            ) : (
                */}
            <button className="bg-debook-1 px-4 rounded-2xl text-2xl py-2" onClick={() => setPaymentModal(true)}>{`Buy for $300${nft.price}`}</button>

          </div>
        </div>
      </div>

      {/* Modal */}
      {paymentModal && (
      <Modal
        header="Check Out"
        body={<PaymentBodyCmp nft={nft} nftCurrency={nft.price} />}
        footer={(
          <div className="flex flex-col nm:flex-row">
            <button className="bg-debook-1 text-white rounded-2xl mr-5 mb-5 nm:mb-0  px-4 py-2 font-bold ">Checkout</button>
            <button onClick={() => setPaymentModal(false)} className="bg-debook-1 text-white rounded-2xl mr-5 px-4 py-2 font-bold">Cancel</button>
          </div>
        )}
        handleClose={() => setPaymentModal(false)}
      />
      )}
    </div>
  );
}

export default Debookdetails;
