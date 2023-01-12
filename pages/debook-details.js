import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import {
  useAddress, useListing, useContract, useMar,
} from '@thirdweb-dev/react';
import {
  Loader,
} from '../components/Loader';

import images from '../public/assets';

function PaymentBodyCmp({ nft, nftCurrency }) {
  return (
    <div className="flex flex-col">
      <div className="flexBetween">
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl ">NFT</p>
        <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base minlg:text-xl ">Subtotal</p>

      </div>
      <div className="flexBetweenStart my-5">
        <div className="flex-1 flexStartCenter">
          <div className="relative w-28 h-28">
            <Image src={nft.image} objectfit="cover" />
          </div>
          <div className="flexCenterStart flex-col ml-5">
            <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-sm minlg:text-xl">{shortenAddress(nft.seller)}</p>
            <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl">
              {nft.name}
              {' '}
            </p>

          </div>

        </div>
        <div>
          <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl">
            {nft.price}
            {' '}
            <span className="font-semibold">{nftCurrency}</span>
          </p>
        </div>
      </div>

      <div className="flexBetween mt-10">
        <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-base minlg:text-xl">Total</p>
        <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl">
          {nft.price}
          {' '}
          <span className="font-semibold">{nftCurrency}</span>
        </p>
      </div>
    </div>
  );
}

function NftDetails({ tokenId }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [nft, setNft] = useState({
    image: '', tokenId: '', name: '', owner: '',
  });

  const address = useAddress();

  const [paymentModal, setPaymentModal] = useState(false);
  const { marketplace } = useContract('0x18c16F3F606f8961aF6C491b758Ef0b70f592890', 'marketplace');

  const { data: listing, error } = useListing(marketplace, (nft.tokenId));

  const [successModal, setSuccessModal] = useState(false);
  const [isForSale, setIsForSale] = useState(true);
  const [price, setPrice] = useState();

  useEffect(() => {
    if (!router.isReady) return;

    setNft(router.query);

    setIsLoading(false);
  }, [router.isReady]);

  useEffect(() => {
    if (!isLoading && !listingError && listing) {
      setIsForSale(true);
      setPrice(listing.price);
    }
  }, [listing]);

  const checkout = async () => {
    await buyNFT(nft);

    setPaymentModal(false);
    setSuccessModal(true);
  };

  if (isLoading) return <div />;

  return (
    <div className="relative flex justify-center flex-row min-h-screen">
      <div className="relative flex flexCenter items-center sm:px-4 border-r md:border-r-0 md:border-b border-gray-500">
        <div className="relative items-center w-557 min-h-[580px]  h-557 min-w-[580px]">
          <Image src={nft?.image} objectFit="cover" className="rounded-xl shadow-lg" layout="fill" />
        </div>
      </div>

      <div className="flex flex-col justify-center sm:px-4 p-12 sm:pb-4">
        <div className="flex flex-row sm:flex-col">
          <h2 className="font-poppins text-black font-semibold text-2xl minlg:text-3xl">{nft.name}</h2>
        </div>
        <div className="mt-10">
          <p className="font-poppins text-black text-xs minlg:text-base font-normal">Creador</p>
          <div className="flex flex-row items-center mt-3">
            <div className="relative w-12 h-12 minlg:w-20 minlg:h-20 mr-2" />
            <p className="font-poppins text-black text-xs minlg:text-base font-semibold">{nft.seller}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col">
          <div className="w-full border-b dark:border-nft-gray-1 border-nft-black-1 flex flex-row">
            <p className="font-poppins text-black text-base minlg:text-base font-medium mb-2">{nft?.description}</p>

          </div>
          <div className="mt-3 ">
            <p className="font-poppins text-black text-base font-normal">
              {' '}
              {nft.collection}
            </p>
          </div>

        </div>
        <div className="flex flex-row sm:flex-col mt-10">

          {nft.owner === address ? (
            <>
              {!isForSale ? (
                <>
                  <h2 className="text-black">List this NFT for sale</h2>
                  <input
                    type="number"
                    placeholder="Enter a price in ETH"
                    onChange={(event) => setPrice(event.target.value)}
                  />
                  <button onClick={() => handleList(price)}>List</button>
                </>
              ) : (
                <h2 className="text-black">This NFT is already for sale</h2>
              )}
            </>
          ) : isForSale ? (
            <>
              <h2> Buy this NFT </h2>
              <p>
                Price:
                {' '}
                {price}
                {' '}
                ETH
              </p>
              <button onClick={() => handleBuy(price)}>Buy</button>
            </>
          ) : (
            <h2 className="text-black">This NFT is not for sale</h2>
          )}

          {/* }
          {address === nft?.owner && nft.tokenId === listing.id
            ? (
              <p className="font-poppins dark:text-white text-nft-black-1 text-base font-normal border border-gray p-2">
                No puedes comprar to propio NFT
              </p>
            ) : address === !nft?.owner ? (
              <button
                className="mr-5 bg-black text-white sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={() => router.push(`/resell-nft?tokenId=${nft.tokenId}&tokenURI=${nft.tokenURI}`)}
              >
                Hola

              </button>
            ) : (
              <button
                className="mr-5 bg-black text-white sm:mr-0 rounded-xl"
                handleClick={() => setPaymentModal(true)}
              >
                Hola que tal

                {() => setPaymentModal(true)}
              </button>

            )}
            */}

        </div>
      </div>

      {paymentModal && (
      <Modal
        header="Check Out"
        body={<PaymentBodyCmp nft={nft} nftCurrency={nftCurrency} />}
        footer={(
          <div className="flex flex-row sm:flex-col">
            <Button
              btnName="Checkout"
              classStyles="mr-5 sm:mb-5 sm:mr-0 rounded-xl"
              handleClick={checkout}
            />

            <Button
              btnName="Cancelar"
              classStyles="rounded-xl"
              handleClick={() => setPaymentModal(false)}
            />
          </div>
        )}
        handleClose={() => setPaymentModal(false)}
      />

      )}

      {successModal && (
      <Modal
        header="Pago realizado correctamente"
        body={(
          <div className="flexCenter flex-col text-center" onClick={() => setSuccessModal(false)}>
            <div className="relative w-52 h-52">
              <Image src={nft.image} objectFit="cover" layout="fill" />
            </div>
            <p className="font-poppins dark:text-white text-nft-black-1 font-normal text-sm minlg:text-xl">
              Enhorabuena! Acabas de comprar:
              <span className="font-semibold">{nft.name}</span>
            </p>
          </div>
      )}
        footer={(
          <div className="flexCenter flex-col">
            <Button
              btnName="Visita tu NFT"
              classStyles="sm:mb-5 sm:mr-0 rounded-xl"
              handleClick={() => router.push('/my-nfts')}
            />
          </div>
        )}
        handleClose={() => setPaymentModal(false)}
      />
      )}
    </div>
  );
}

export default NftDetails;
