import React from 'react';
import Image from 'next/image';
import images from '../public/assets';

function Footer() {
  return (
    <div className="h-auto bg-[#212121] font-larken ">
      <div className="flex flex-col items-center">
        <div className="mt-20">
          <Image src={images.logofooter} />
        </div>
        <div className="flex flex-col mt-12 mb-10">
          <div className="flex flex-row space-x-8 mt-10 w-full">
            <div className="flex flex-col space-y-5">
              <h1 className="text-[#808080] text-[14px]">Learn</h1>
              <p className="text-[18px] text-debook-1">Create</p>
              <p className="text-[18px] text-debook-1">Collect</p>
              <p className="text-[18px] text-debook-1">Sell</p>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-[#808080] text-[14px]">Company</h1>
              <p className="text-[18px] text-debook-1">Careers</p>
              <p className="text-[18px] text-debook-1">Help Center</p>
              <p className="text-[18px] text-debook-1">subscribe</p>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-[#808080] text-[14px]">Connect</h1>
              <p className="text-[18px] text-debook-1">Twitter</p>
              <p className="text-[18px] text-debook-1">Instagram</p>
              <p className="text-[18px] text-debook-1">Discord</p>
            </div>
          </div>
          <div className="flex flex-col mt-20 items-center space-y-6">
            <p className="text-debook-1 text-[18px]">Privacy Policy</p>
            <p className="text-debook-1 text-[18px]">Terms of Service</p>
          </div>
          <div className="flex flex-col items-center space-y-4 mt-10">
            <p className="text-white">Powered by NAKED META</p>
            <p className="text-white">2022. DEBOOK. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
