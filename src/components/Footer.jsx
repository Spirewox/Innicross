import Logo from '../assets/images/Group.png';
import LogoDesktop from '../assets/images/Group_big.png';
import X from '../assets/images/Link - View Pipe on X → SVG.svg';
import LinkedIn from '../assets/images/Link - View Pipe on LinkedIn → SVG.svg';

const Footer = () => {
  return (
    <div className="bg-[#000] text-[#fff] flex flex-col  pl-[26px] ">
      <div className="lg:flex">
        <div className="mt-[54px] lg:flex lg:items- lg:flex-1 ">
          <span className="block lg:hidden">
            <img src={Logo} alt="" />
          </span>
          <span>
            <img src={LogoDesktop} alt="" className="hidden lg:block" />
          </span>
        </div>
        <div className="text-start mt-[63.93px] lg:flex lg:flex-col lg:items-start  lg:flex-1 lg:ml-[141px] ">
          <p
            className=" text-[23.04px] font-normal font-[500] leading-[30.217px] tracking-[-0.173px] text-[#FAFAFC] "
            style={{ fontFamily: 'Nekst-Medium' }}
          >
            Sign up to The Wrap Up
          </p>
          <p
            className="text-[#787c91] text-[14.812px] font-normal font-[500] leading-[20.979px] tracking-[0.086px] mt-[8.85px] "
            style={{ fontFamily: 'Nekst-Medium' }}
          >
            Your plug for business, and entertainment news you need to know each
            week.
          </p>
          <div>
            <input
              type="email"
              placeholder="Enter email address..."
              name=""
              id=""
              className="p-[11.223px] flex justify-center items-csnter rounded-[6.907px] bg-[#2E3038] text-[#9A9DAC] text-[11.223px] mt-[14.33px] w-full max-w-[290px]"
              style={{ fontFamily: 'Nekst-Medium' }}
            />
            <button
              className="flex pt-[9.411px] pr-[15.268px] pb-[10.273px] pl-[15.609px] bg-[#fff] rounded-[8632.542px] mt-[17.27px] text-[#000] "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-[48.08px] h-[0.863px] bg-[#2E3038] w-full  " />
      <div className="lg:flex lg:justify-between lg:mx-[104px] " >
        <div
          className="flex flex-col gap-[26px] text-[#fafafcd9] lg:flex-row"
          style={{ fontFamily: 'Nekst-Medium' }}
        >
          <span className="flex gap-[12.02px] mt-[24px] text-[9.497px] font-normal font-[500] leading-[13.77px] tracking-[0.086px]  ">
            <p>Privacy Policy</p>
            <p>Resposible Disclosure</p>
          </span>
          <span className="flex gap-[12.02px] mt-[24px] text-[9.497px] font-normal font-[500] leading-[13.77px] tracking-[0.086px] mb-[42px] ">
            <p>Terms of Use</p>
            <p className="text-[#5C5F70] ">
              ©2024 Innicross. All rights reserved.
            </p>
          </span>
        </div>

        <div className="hidden lg:flex">
          <img src={X} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
