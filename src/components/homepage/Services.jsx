import RightArrow from '../../assets/images/arrow-right.svg';
import Service1 from '../../assets/images/service1.png'
import Service2 from '../../assets/images/service2.png';
import Service2_big from '../../assets/images/service2-big.png';
import Service3 from '../../assets/images/service3.png';
import Service4 from '../../assets/images/service4.png';
import Service4_big from '../../assets/images/service4-big.png';
import Service5 from '../../assets/images/service5.png';
import Service6 from '../../assets/images/service6.png';
import Service6_big from '../../assets/images/service6-big.png'

const Services = () => {
  return (
    <div className="bg-[#fff] ">
      <div
        className="ml-[40px] w-[282px] lg:w-[646px] lg:mt-[126px] lg:ml-[131px]"
        id="serviceComponent"
      >
        <h3
          className="text-[#000] text-[32px] font-bold pt-[64px] lg:text-[72px] lg:font-[700]    "
          style={{ fontFamily: 'Nekst-Bold' }}
        >
          Everything you need{' '}
          <span className="text-[#1481BA] "> to sell better</span>
        </h3>
      </div>

      <div className="lg:flex flex-row-reverse justify-center items-center gap-[24px] lg:mx-[131px] ">
        <div className="flex flex-col justify-center items-center bg-[#E7F6EC] mt-[65px] mx-[20px] rounded-[19.179px] flex-1 lg:min-h-[630px] ">
          <p
            className="text-[12px] uppercase font-normal tracking-[1.279px] mt-[61.5px] text-center lg:text-[18px] lg:tracking-[2px]"
            style={{ fontFamily: 'Inter' }}
          >
            RELEASE STRATEGIES
          </p>
          <h3
            className="text-[#000] text-[26px] font-normal font-[600] mt-[20px] text-center w-[249px] lg:text-[40px] lg:w-[390px] "
            style={{ fontFamily: 'Nekst-Semibold', lineHeight: 'normal' }}
          >
            Ignite your global presence with our release strategies
          </h3>
          <p
            className="mt-[15px] text-base font-[500] tracking-[-0.32px] text-center w-[284px] lg:mt-[24px] lg:text-[20px] leading-[22.48px] lg:leading-[28.1px] lg:tracking-[-0.4px] "
            style={{ fontFamily: 'Nekst-Medium' }}
          >
            We ensure that your releases capture attention, dominate charts, and
            leave a lasting impression.
          </p>
          <button
            className=" flex gap-[8px] justify-center items-center mt-[32px] text-[#fff] mb-[60px] w-[197px] p-[16px] bg-[#1481BA] rounded-[8px] text-base font-[600] font-normal lg:mt-[59px] "
            style={{ fontFamily: 'Nekst-Semibold' }}
          >
            Get Started{' '}
            <span>
              {' '}
              <img src={RightArrow} alt="" />
            </span>
          </button>
        </div>
        <div className=" lg:h-[630px] flex-1 mt-[65px] mx-[20px]  rounded-[19.179px] ">
          <img
            src={Service1}
            alt=""
            style={{ maxWidth: '100%' }}
            className="w-full object-cover rounded-[19.179px] lg:h-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:mx-[131px]">
        <div className="flex flex-col justify-center items-center bg-[#000] text-[#fff] mt-[65px] mx-[20px] rounded-[19.179px] lg:rounded-b-[0] lg:flex-row lg:justify-between lg:flex-1 lg:pb-[78px] ">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:ml-[128px] ">
            <p
              className="text-[12px] uppercase font-normal tracking-[1.279px] mt-[61.5px] text-center lg:text-[18px] lg:tracking-[2px] "
              style={{ fontFamily: 'Inter' }}
            >
              DIGITAL ADVERTISEMENTS
            </p>
            <h3
              className="text-[26px] font-normal font-[600] mt-[20px] text-center w-[249px] lg:text-start lg:text-[40px] lg:w-[551px]  "
              style={{ fontFamily: 'Nekst-Semibold', lineHeight: 'normal' }}
            >
              Curate campaigns that captivate your audience
            </h3>
            <p
              className="  mt-[15px] text-base font-[500] tracking-[-0.32px] text-center w-[284px] lg:text-start lg:text-[20px]  leading-[22.48px] lg:leading-[28.1px] lg:tracking-[-0.4px]"
              style={{ fontFamily: 'Nekst-Medium' }}
            >
              Orchestrate your success with Campaign Management that resonates
            </p>
          </div>
          <div>
            <button
              className=" flex gap-[8px] justify-center items-center mt-[32px] text-[#fff] mb-[60px] w-[197px] p-[16px] bg-[#1481BA] rounded-[8px] text-base font-[600] font-normal lg:flex-1 lg:mr-[177px] "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Get Started{' '}
              <span>
                {' '}
                <img src={RightArrow} alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className=" hidden lg:block ">
          <img
            src={Service2_big}
            alt=""
            className="h-full w-full rounded-lg px-[20px]"
          />
        </div>

        <div className="h-[414px] lg:min-h-[630px] flex-1 mt-[65px] mx-[20px]  rounded-[19.179px] lg:hidden">
          <img src={Service2} alt="" className="h-full w-full " />
        </div>
      </div>

      <div className="lg:flex flex-row justify-center items-center gap-[24px] lg:mx-[131px] ">
        <div className="flex flex-col justify-center items-center bg-[#F0F2F5] mt-[65px] mx-[20px] rounded-[19.179px] flex-1 lg:min-h-[630px] ">
          <p
            className="text-[12px] uppercase font-normal tracking-[1.279px] mt-[61.5px] text-center lg:text-[18px] lg:tracking-[2px]"
            style={{ fontFamily: 'Inter' }}
          >
            TV AND RADIO PROMOTIONS
          </p>
          <h3
            className="text-[#000] text-[26px] font-normal font-[600] mt-[20px] text-center w-[249px]  lg:text-[40px] lg:w-[390px] "
            style={{ fontFamily: 'Nekst-Semibold', lineHeight: 'normal' }}
          >
            Step into the spotlight with our TV and Radio promotions
          </h3>
          <p
            className="mt-[15px] text-base font-[500] tracking-[-0.32px] text-center w-[284px] lg:mt-[24px] lg:text-[20px]  leading-[22.48px] lg:leading-[28.1px] lg:tracking-[-0.4px] "
            style={{ fontFamily: 'Nekst-Medium' }}
          >
            We ensure that your releases capture attention, dominate charts, and
            leave a lasting impression.
          </p>
          <button
            className=" flex gap-[8px] justify-center items-center mt-[32px] text-[#fff] mb-[60px] w-[197px] p-[16px] bg-[#1481BA] rounded-[8px] text-base font-[600] font-normal lg:mt-[59px] "
            style={{ fontFamily: 'Nekst-Semibold' }}
          >
            Get Started{' '}
            <span>
              {' '}
              <img src={RightArrow} alt="" />
            </span>
          </button>
        </div>

        <div className=" lg:h-[630px] flex-1 mt-[65px] mx-[20px]  rounded-[19.179px] ">
          <img
            src={Service3}
            alt=""
            style={{ maxWidth: '100%' }}
            className="w-full object-cover rounded-[19.179px] lg:h-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:mx-[131px]">
        <div className="bg-[#F0F2F5] flex flex-col justify-center items-center text-[#fff] mt-[65px] mx-[20px] rounded-[19.179px] lg:rounded-b-[0] lg:flex-row lg:justify-between lg:flex-1 lg:pb-[78px] ">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:ml-[128px] ">
            <p
              className="text-[#000] text-[12px] uppercase font-normal tracking-[1.279px] mt-[61.5px] text-center lg:text-[18px] lg:tracking-[2px] "
              style={{ fontFamily: 'Inter' }}
            >
              PRESS RELEASES AND EDITORIALS
            </p>
            <h3
              className="text-[#000] text-[26px] font-normal font-[600] mt-[20px] text-center w-[249px] lg:text-start lg:text-[40px] lg:w-[551px] "
              style={{ fontFamily: 'Nekst-Semibold', lineHeight: 'normal' }}
            >
              Craft your narrative with press releases and editorials
            </h3>
            <p
              className=" mt-[15px] text-base font-[500] tracking-[-0.32px] text-center w-[284px] lg:text-start lg:text-[20px]  leading-[22.48px] lg:leading-[28.1px] lg:tracking-[-0.4px] text-[#000] "
              style={{ fontFamily: 'Nekst-Medium' }}
            >
              We turn stories into headlines , creating narratives that demand
              attention.
            </p>
          </div>
          <div>
            <button
              className=" flex gap-[8px] justify-center items-center mt-[32px] text-[#fff] mb-[60px] w-[197px] p-[16px] bg-[#1481BA] rounded-[8px] text-base font-[600] font-normal lg:flex-1 lg:mr-[177px] "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Get Started{' '}
              <span>
                {' '}
                <img src={RightArrow} alt="" />
              </span>
            </button>
          </div>
        </div>

        <div className=" hidden lg:block ">
          <img
            src={Service4_big}
            alt=""
            className="h-full w-full rounded-lg px-[20px]"
          />
        </div>

        <div className="h-[414px] lg:min-h-[630px] flex-1 mt-[65px] mx-[20px]  rounded-[19.179px] lg:hidden">
          <img src={Service4} alt="" className="h-full w-full " />
        </div>
      </div>

      <div className="lg:flex flex-row-reverse justify-center items-center gap-[24px] lg:mx-[131px] ">
        <div className="flex flex-col justify-center items-center bg-[#FEF6E7] mt-[65px] mx-[20px] rounded-[19.179px]  flex-1 lg:min-h-[630px] lg:bg-[#000] lg:text-[#fff] ">
          <p
            className="text-[#000] text-[12px] uppercase font-normal tracking-[1.279px] mt-[61.5px] text-center lg:text-[18px] lg:tracking-[2px] lg:text-[#fff] "
            style={{ fontFamily: 'Inter' }}
          >
            DATA ANALYTICS
          </p>
          <h3
            className="text-[#000] text-[26px] font-normal font-[600] mt-[20px] text-center w-[249px] lg:text-[40px] lg:w-[390px] lg:text-[#fff] "
            style={{ fontFamily: 'Nekst-Semibold', lineHeight: 'normal' }}
          >
            Navigate the market with precision using Data Analytics
          </h3>
          <p
            className="mt-[15px] text-base font-[500] tracking-[-0.32px] text-center w-[284px] lg:mt-[24px] lg:text-[20px]  leading-[22.48px] lg:leading-[28.1px] lg:tracking-[-0.4px] lg:text-[#fff] "
            style={{ fontFamily: 'Nekst-Medium' }}
          >
            Our data-driven insights transform information into actionable
            strategies
          </p>
          <button
            className="flex gap-[8px] justify-center items-center mt-[32px] text-[#fff] mb-[60px] w-[197px] p-[16px] bg-[#1481BA] rounded-[8px] text-base font-[600] font-normal lg:mt-[59px] "
            style={{ fontFamily: 'Nekst-Semibold' }}
          >
            Get Started{' '}
            <span>
              <img src={RightArrow} alt="" />
            </span>
          </button>
        </div>

        <div className=" lg:h-[630px] flex-1 mt-[65px] mx-[20px]  rounded-[19.179px] ">
          <img
            src={Service5}
            alt=""
            style={{ maxWidth: '100%' }}
            className="w-full object-cover rounded-[19.179px] lg:h-full"
          />
        </div>
      </div>

      <div className="flex flex-col lg:mx-[131px]">
        <div className="flex flex-col justify-center items-center text-[#000] mt-[65px] mx-[20px] rounded-[19.179px] lg:rounded-b-[0] lg:flex-row lg:justify-between lg:flex-1 lg:pb-[78px] bg-[#F0F2F5] ">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:ml-[128px] ">
            <p
              className="text-[12px] uppercase font-normal tracking-[1.279px] mt-[61.5px] text-center lg:text-[18px] lg:tracking-[2px] "
              style={{ fontFamily: 'Inter' }}
            >
              EVENTS AND LIVE SHOWS
            </p>
            <h3
              className="text-[26px] font-normal font-[600] mt-[20px] text-center w-[249px] lg:text-start lg:text-[40px] lg:w-[551px] "
              style={{ fontFamily: 'Nekst-Semibold', lineHeight: 'normal' }}
            >
              Elevate your events to experience that resonate
            </h3>
            <p
              className="mt-[15px] text-base font-[500] tracking-[-0.32px] text-center w-[284px] lg:text-start lg:text-[20px]  leading-[22.48px] lg:leading-[28.1px] lg:tracking-[-0.4px]"
              style={{ fontFamily: 'Nekst-Medium' }}
            >
              We create lasting memories that linger in the heart of your
              audience
            </p>
          </div>
          <div>
            <button
              className="flex gap-[8px] justify-center items-center mt-[32px] text-[#fff] mb-[60px] w-[197px] p-[16px] bg-[#1481BA] rounded-[8px] text-base font-[600] font-normal lg:flex-1 lg:mr-[177px] "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Get Started{' '}
              <span>
                <img src={RightArrow} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className=" hidden lg:block ">
          <img
            src={Service6_big}
            alt=""
            className="h-full w-full rounded-lg px-[20px]"
          />
        </div>

        <div className="h-[414px] lg:min-h-[630px] flex-1 mt-[65px] mx-[20px]  rounded-[19.179px] lg:hidden">
          <img
            src={Service6}
            alt=""
            className="h-full w-full  rounded-[19.179px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
