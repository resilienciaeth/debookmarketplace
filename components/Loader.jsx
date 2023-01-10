import Image from 'next/image';
import images from '../public/assets';

function Loader() {
  return (
    <div className="flexCenter w-full my-4">
      <Image src={images.book} alt="loader" width={100} objectFit="contain" />
    </div>
  );
}

export default Loader;
