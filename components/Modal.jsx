import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { AiOutlineClose, AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';

import images from '../public/assets';

function Modal({
  header, body, footer, handleClose,
}) {
  const modalRef = useRef(null);
  const { theme } = useTheme();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return (
    <div className="flexCenter fixed inset-0 z-10 bg-overlay-black animated fadeIn" onClick={handleClickOutside}>
      <div ref={modalRef} className="w-11/12 nm:w-2/5 bg-white flex flex-col rounded-lg">
        <div className="flex justify-end mt-4 mr-4">
          <div onClick={handleClose} className="relative w-[2rem] h-[2rem]">
            <AiOutlineClose size={30} className="text-black cursor-pointer" />
          </div>
        </div>

        <div className="flexCenter w-full text-center p-4">
          <h2 className="text-black font-normal text-2xl">{header}</h2>
        </div>
        <div className="px-4 p-10 border-t border-b border-gray-300 text-black">{body}</div>
        <div className="flexCenter p-4 text-black">
          {footer}
        </div>
      </div>
    </div>
  );
}

export default Modal;
