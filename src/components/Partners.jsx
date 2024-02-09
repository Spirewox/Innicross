import Teni from '../assets/images/TENI.png';
import TSA from '../assets/images/1ekyv_gC_400x400 1.png';
import UM from '../assets/images/united-masters-review-930x562-1 1.png';
import US from '../assets/images/channels4_profile 1.png';
import Logo from '../assets/images/1680012057813 1.png';
import Warner from '../assets/images/twitch-warner-music-group-partnership-article 1.png';
import Sarz from '../assets/images/SARZ.png';
import Group37 from '../assets/images/Group 37.svg';

const Partners = () => {
  return (
    <div className="bg-[#FFF] h-screen z-10 ">
      <h3
        className="text-[23px] capitalize text-center w-[325px] pt-[60px] mx-auto text-[#000] md:w-[563px] "
        style={{ fontFamily: 'Nekst-Regular' }}
      >
        We are trusted by the most reputable people
      </h3>

      <div className=" flex flex-wrap bg-[#000] h-[295px] gap-[29px] py-[42px] pl-[30px] mt-[40px] ">
        <span>
          <img src={Teni} alt="" className="w-[100px] h-auto " />
        </span>
        <span>
          <img src={TSA} alt="" className="w-[100px] h-auto " />
        </span>
        <span>
          <img src={UM} alt="" className="w-[100px] h-auto " />
        </span>

        <span>
          <img src={US} alt="" className="w-[100px] h-auto " />
        </span>
        <span>
          <img src={Logo} alt="" className="w-[100px] h-auto " />
        </span>
        <span>
          <img src={Sarz} alt="" className="w-[100px] h-auto " />
        </span>
        <span>
          <img src={Warner} alt="" className="w-[100px] h-auto " />
        </span>
        <span>
          <img src={Group37} alt="" className="w-[100px] h-auto " />
        </span>
      </div>
    </div>
  );
};

export default Partners;
