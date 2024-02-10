import Music1 from '../assets/images/music-1.png';
import Music2 from '../assets/images/music-2.png';
import halfMusic1 from '../assets/images/Frame 1000008194.png';
import halfMusic2 from '../assets/images/Frame 1000008193.png';
import Music3 from '../assets/images/music-3.png';

const Images = () => {
  return (
    <div className="flex w-full min-w-full gap-[35px] lg:gap-[40px] overflow-x-hidden mt-[84px] mb-[34px] ">
      <img
        src={Music1}
        alt=""
        className="hidden lg:block w-full object-cover"
      />
      <img src={halfMusic1} alt="" className="lg:hidden w-full object-cover" />
      <img src={halfMusic2} alt="" className="lg:hidden w-full object-cover" />
      <img
        src={Music2}
        alt=""
        className=" hidden lg:block w-full object-cover"
      />
      <img
        src={Music3}
        alt=""
        className="hidden lg:block w-full object-cover"
      />
    </div>
  );
};

export default Images;
