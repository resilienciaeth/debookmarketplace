import React from 'react';
import Image from 'next/image';
import images from '../public/assets';

function Card() {
  return (
    <div className="px-2">
      <div className="w-[170px] nm:w-[330px] nm:h-[450px] h-[217px] min-h-[217px] nm:min-h-[450px] min-w-[170px] nm:min-w-[330px] bg-white border-[1px] border-[#ADADAD] rounded-2xl mb-4">
        <div className="flex h-[55%] w-full ">
          <Image src={images.nftimage1} className="rounded-t-xl" objectFit="fill" />
        </div>
        <div className="flex h-[45%] flex-col px-4">
          <div className="z-0 flex-col -mt-4 nm:-mt-6 w-[40px] nm:w-[74px] h-[40px] nm:h-[74px] border-[2px] rounded-full border-white ">
            <Image src={images.authordesktop} className="border-2 rounded-full" />
          </div>
          <div className="text-left nm:mt-[1.5rem] text-bold font-larken text-[10px] nm:text-[15px] text-black">The Power of Now</div>
          <div className="flex flex-row justify-between font-larken text-[8px] nm:text-[14px] text-gray-600">
            <p>
              Last Sale: $26
            </p>
            <p>Floor Price: $34</p>
          </div>
          <div className="flex flex-row justify-center mt-2 nm:mt-6 space-x-4 nm:space-x-8">
            <button className="bg-debook-1 text-[8px] nm:text-[20px] text-white rounded-3xl px-3 nm:px-5 font-larken py-1">Buy now</button>
            <button className="bg-button-1 text-black font-larken px-2 nm:px-5 text-[8px] nm:text-[20px] rounded-3xl">Rent now</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Card;
