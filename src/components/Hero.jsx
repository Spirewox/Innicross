import Gradient from '../assets/images/image.png';
import Gradient2 from '../assets/images/image (1).png';
import RightArrow from '../assets/images/arrow-right.svg';

const Hero = () => {

  const scrollToService = () => {
    const serviceComponent = document.getElementById('serviceComponent');
  serviceComponent.scrollIntoView({ behavior: 'smooth', block: 'start'})
}
  

  return (
    <div className="h-screen relative overflow-hidden bg-[#09090B]">
      {/* Background image */}
      <img
        src={Gradient}
        alt=""
        className="absolute inset-0 z-0 left-[-119px] lg:left-[-30px] "
      />

      {/* Content */}
      <div className="absolute flex flex-col justify-center ml-[44px] lg:mt-[221px]  lg:ml-[118px] mt-[160px] ">
        <h3
          className="text-[#D0D5DD] font-normal text-base capitalize items-start  w-[300px] lg:text-[24px] lg:w-[456px] "
          style={{ fontFamily: 'Nekst-Regular' }}
        >
          for Artists, Agencies, and Businesses
        </h3>
        <h1
          className="text-[#fff] text-[40px] font-bold mb-[40px] mt-[24px] capitalize lg:w-[931px] lg:text-[72px] "
          style={{ fontFamily: 'Nekst-Bold' }}
        >
          Maximize Your Market Potential with Innicross
        </h1>
        <button
          className="bg-[#1481BA] flex text-white p-[16px] w-[218px] rounded hover:bg-blue-600 gap-[8px] "
          style={{ fontFamily: 'Nekst-Semibold' }}
          onClick={scrollToService}
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
        className="absolute bottom-[-164px] right-[-204px] z-0 lg:bottom-0 lg:right-0"
      />
    </div>
  );
};

export default Hero;
