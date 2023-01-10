import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { SlSocialInstagram } from 'react-icons/sl';
import { FiKey } from 'react-icons/fi';
import Image from 'next/image';

import { useAddress, useMetamask } from '@thirdweb-dev/react';
import images from '../public/assets';

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  const address = useAddress();
  const connectMetamask = useMetamask();

  return (
    <div className="flex font-creato justify-between items-center nm:h-24 h-14 ml-10 nm:ml-[5rem] nm:px-[7rem] text-black">
      <div onClick={() => window.open('/', '_self')} className=" cursor-pointer mt-2">
        <Image
          alt="logo"
          src={images.logomenu}
          priority
          width={96}
          height={18}
        />
      </div>
      <ul className="hidden text-black font-bold nm:flex nm:mr-10 space-x-[4rem] text-[15px]">
        <div onClick={() => window.open('https://debookmagickey.io/')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
          <FiKey size={30} />
          <li className="p-2 ">Magickey</li>
        </div>
        <div onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
          <BsJournalBookmark size={25} />
          <li className="p-2 cursor-pointer">Manifesto</li>
        </div>
        <div className="flex flex-row items-center px-2 cursor-pointer rounded-2xl bg-hover:bg-zinc-900 duration-[600ms]">
          <SlSocialInstagram size={25} />
          <li className="peer p-2 cursor-pointer">Socials</li>
          <div className="hidden peer-hover:flex top-[3.8rem] absolute hover:flex rounded-2xl
         w-[100px] flex-col drop-shadow-lg"
          >
            <a className="px-5 text-right py-3 text-white hover:bg-zinc-800" onClick={() => window.open('https://twitter.com/Debook_app')}>Twitter</a>
            <a className="px-5 py-3 text-right  text-white hover:bg-zinc-800" href="#" onClick={() => window.open('https://www.instagram.com/debook.app')}>Instagram</a>
          </div>
        </div>

        {address && (
        <button className=" text-white bg-debook-1 text-[15px] rounded-3xl px-4 py-1 font-bold" onClick={() => window.open('/my-debooks', '_self')}>
          My debooks
        </button>
        )}
        {!address && (
        <button className=" uppercase text-white bg-black text-[15px] rounded-3xl px-4 py-1 font-bold" onClick={connectMetamask}>
          Connect Wallet
        </button>
        )}
      </ul>
      <div className="cursor-pointer mr-5 z-20 flex nm:hidden" role="presentation" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={20} className="text-black" /> : <AiOutlineMenu size={20} className="text-black" />}
      </div>
      <div className={!nav ? 'fixed bg-white left-0 top-0 w-full z-0 h-full ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <div onClick={() => window.open('/', '_self')} onKeyDown={() => window.open('/', '_self')} role="presentation" className="mt-10 px-6 cursor-pointer">
          <Image alt="logo" src={images.logomenu} width={200} height={100} />
        </div>
        <ul className="pt-16 px-10 uppercase font-bold">
          <li onClick={() => window.open('https://debookmagickey.io/')} className="p-4 text-[50px]">MAGICKEY</li>
          <li onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="p-4 text-[50px]">MANIFESTO</li>
          <li onClick={() => window.open('https://www.instagram.com/debook.app')} className="p-4 text-[50px]">Instagram</li>
          {address && (
          <button className="uppercase text-[12px] nm:text-[30px] text-white  rounded-[6px] ml-2 mt-4 px-4 py-1 bg-debook-1" onClick={() => window.open('/my-debooks', '_self')}>
            My debooks
          </button>
          )}
          {!address && (
          <button className="uppercase text-[12px] nm:text-[30px] border-black border-2 rounded-[6px] ml-2 mt-4 px-4 py-1 hover:bg-black hover:text-white hover:border-white" onClick={connectMetamask}>
            Connect Wallet
          </button>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
