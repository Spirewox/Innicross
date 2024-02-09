import Navbar from "./Navbar";
import Gradient from "../assets/images/image.png";
import Gradient2 from '../assets/images/image (1).png';
import RightArrow from '../assets/images/arrow-right.svg'


const Hero = () => {
  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background image */}
      <img
        src={Gradient}
        alt=""
        className="absolute inset-0 z-0 left-[-119px] md:left-[-30px] "
      />

      {/* Navbar */}
      <div className="pt-[30px] fixed z-10 ">
        <Navbar />
      </div>

      {/* Content */}
      <div className="absolute flex flex-col justify-center ml-[44px] md:mt-[221px] z-10 md:ml-[118px] mt-[160px] ">
        <h3
          className="text-[#D0D5DD] font-normal text-base capitalize items-start  w-[300px] md:text-[24px] md:w-[456px] "
          style={{ fontFamily: 'Nekst-Regular' }}
        >
          for Artists, Agencies, and Businesses
        </h3>
        <h1
          className="text-[#fff] text-[40px] font-bold mb-[40px] mt-[24px] capitalize md:w-[931px] md:text-[72px] "
          style={{ fontFamily: 'Nekst-Bold' }}
        >
          Maximize Your Market Potential with Innicross
        </h1>
        <button
          className="bg-[#1481BA] flex text-white p-[16px] w-[218px] rounded hover:bg-blue-600 gap-[8px] "
          style={{ fontFamily: 'Nekst-Semibold' }}
        >
          Explore Our Services{' '}
          <span>
            <img src={RightArrow} alt="" />
          </span>
        </button>
      </div>

      {/* Second image */}
      <img
        src={Gradient2}
        alt=""
        className="absolute bottom-[-164px] right-[-204px] z-0 md:bottom-0 md:right-0"
      />
    </div>
  );
}

export default Hero;
