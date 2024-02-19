import Logo from '../../assets/images/Icon_big.svg';
import Gradient2 from '../../assets/images/image (1).png';
import Gradient from '../../assets/images/image.png';

const Hero = () => {
  return (
    <div className=" h-screen relative overflow-y-auto overflow-x-hidden bg-[#09090B]">
      <div className="h-full ">
        <img
          src={Gradient}
          alt=""
          className="absolute inset-0 z-0 left-[-119px] lg:left-[-30px] "
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 m-auto flex flex-col justify-center items-center lg:max-w-[1021px]">
          <div className="text-center pt-[192px] ">
            <img src={Logo} alt="" className="mx-auto" />
          </div>

          <p
            className="text-center text-[16px] font-[400] capitalize text-[#D0D5DD] mt-[56.5px] "
            style={{ fontFamily: 'Nekst-Regular' }}
          >
            THE WORK WE’VE DONE
          </p>
          <p
            className="text-[#fff] text-center text-[32px] font-[700] mt-[16px] lg:min-w-[1021px] "
            style={{ fontFamily: 'Nekst-Bold' }}
          >
            Our comprehensive approach has propelled numerous businesses, both
            local and international, to maximize their potential in the market
          </p>
        </div>
        <img
          src={Gradient2}
          alt=""
          className="absolute bottom-[-164px] right-[-204px] z-0 lg:bottom-0 lg:right-0"
        />
      </div>
    </div>
  );
};

export default Hero;
