import React, { useState, useEffect, useContext } from 'react';
import { useAddress, useMarketplace, useActiveListings } from '@thirdweb-dev/react';
import { BigNumber } from 'ethers';
import Image from 'next/image';
import { useRouter } from 'next/router';

function PaymentBodyCmp({
  image, listing, price, buyNFT,
}) {
  return (
    <div className="flex flex-col">
      <div className="flexBetween">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Item</p>
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl">Subtotal</p>
      </div>

      <div className="flexBetweenStart my-5">
        <div className="flex-1 flexStartCenter">
          <div className="relative w-28 h-28">
            <Image
              src={image}
              alt="nft"
              height={350}
              width={350}
              className="rounded-xl"
            />
          </div>
          <div className="flexCenterStart flex-col ml-5">
            <p>{listing}</p>
          </div>
        </div>
        <div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">
            {price}
            {' '}
            ETH
          </p>
        </div>
      </div>
    </div>
  );
}

function NFT() {
  const { nftCurrency } = useContext(NFTContext);
  const [listing, setListing] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { tokenID } = router.query;
  console.log(tokenID);

  const marketplace = useMarketplace('0x81b86CCF930058dE6816fF4e5DF3Ff0828F9DB6a');
  const address = useAddress();

  useEffect(() => {
    getListing();
  }, []);

  const getListing = async () => {
    try {
      setLoading(true);
      const listing = await marketplace.getListing(BigNumber.from(tokenID));
      console.log('running');

      setListing(listing);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [paymentModal, setPaymentModal] = useState(false);

  const buyNFT = async () => {
    try {
      await marketplace.buyoutListing(tokenID, 1);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(listing);

  return (
    <div className="relative flex justify-center md:flex-col min-h-screen">
      <div className="relative flex-1 flexCenter sm:px-4 p-12 border-r md:border-r-0 md:border-b dark:border-nft-black-1 border-nft-gray-1">

        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="">
              <div className="relative minmd:w-2/3 minmd:h-2/3 sm:w-full sm:h-200 ">
                <NFTImage image={listing?.asset?.image} className="rounded-xl" />
              </div>
              <div>
                <div className="flex"><p className="text-2xl" /></div>
                <NFTBasicInfo name={listing?.asset?.name} collection={listing?.asset?.collection?.name} />

              </div>
              <div className="mt-10 flex flex-col">
                <div className="w-full border-b dark:border-nft-black-1 border-nft-gray-1 flex flex-row">
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base minlg:text-base font-medium mb-2">Detalles</p>
                </div>
                <div className="mt-3">
                  <p className="font-poppins dark:text-white text-nft-black-1 text-base font-normal" />
                  <div className="font-poppins text-nft-black-1 text-base minlg:text-base font-medium" />
                </div>

              </div>

              <div className="flex flex-row sm:flex-col mt-10">
                <div>
                  <Button
                    className="nft-gradient text-sm minlg:text-large py-2 px-6 minlg:px-8 font-poppins font-semibold text-white"
                    handleClick={() => setPaymentModal(true)}
                    btnName={`Comprar por ${listing?.buyoutCurrencyValuePerToken?.displayValue} ETH`}
                  />
                </div>

              </div>
              <div />

            </div>
          )}
        </div>
      </div>
      {listing?.asset?.image && paymentModal && (
      <Modal
        header="Check Out"
        body={<PaymentBodyCmp image={listing?.asset?.image} listing={listing?.asset?.name} price={listing?.buyoutCurrencyValuePerToken?.displayValue} />}
        footer={(
          <div className="flex flex-row sm:flex-col">
            <button
              type="button"
              price={listing?.buyoutCurrencyValuePerToken?.displayValue}
              className="mr-5 sm:mb-5 sm:r-0 rounded-xl nft-gradient text-sm minlg:text-large py-2 px-6 minlg:px-8 font-poppins font-semibold text-white"
              onClick={buyNFT}
            >
              {' '}
              COMPRAR
            </button>
            <Button
              btnName="Cancelar"
              classStyles="rounded-xl mr-5 sm:r-0 "
              handleClick={() => setPaymentModal(false)}
            />
          </div>
        )}
        handleClose={() => setPaymentModal(false)}
      />
      )}

    </div>
  );
}

export default NFT;
