import Gradient from '../../assets/images/image.png';
import Gradient2 from '../../assets/images/image (1).png';
import { useState } from 'react';
import PropTypes from 'prop-types';

const services = [
  'Digital Advertisement',
  'Release Strategies',
  'Data Analytics',
  'Content Creation',
  'TV & Radio Promotions',
  'Events and Live Shows',
  'Recording Camps',
  'Campaign Management',
];

const Checkbox = ({ service }) => (
  <div className="flex items-center gap-[26.8px] ml-[22.37px] mt-[32px] ">
    <input
      type="checkbox"
      className="bg-[#fff]  w-[32.16px] h-[32.16px] rounded-md border-2 border-[#D0D5DD]"
    />
    <span
      className="text-[24px] font-normal input-span text-[#475367] leading-[38px] "
      style={{ fontFamily: 'Nekst-Regular' }}
    >
      {service}
    </span>
  </div>
);

const Step1 = ({ nextStep }) => (
  <div className="flex flex-col gap-[16.78px] mt-[30px] lg:mt-[56px] lg:mb-[78px] bg-[#fff] mx-auto w-[342.579px] min-w-fit rounded-[6.991px] z-10 lg:w-[490px] ">
    {services.map((service) => (
      <Checkbox key={service} service={service} />
    ))}
    <button
      type=""
      className="w-[ 290.842px] text-[#fff] font-[600] leading-[13px] mt-[33.56px] mb-[22.37px] mx-[26.16px] py-[12px] text-[11.2px] min-w-fit bg-[#1481ba] flex justify-center items-center rounded-[8px] "
      onClick={nextStep}
    >
      Next
    </button>
  </div>
);

Checkbox.propTypes = {
  service: PropTypes.string.isRequired,
};

Step1.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

const Step2 = ({ handlePreviousStep }) => (
  <div className="flex flex-col bg-[#fff] gap-[40px] mx-auto w-[342.579px] min-w-fit rounded-[6.991px] px-[32px] mt-[30px] lg:mt-[56px] lg:mb-[78px] lg:w-[490px] ">
    <button className="mt-[32px] text-start" onClick={handlePreviousStep}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20 12H4M4 12L10 6M4 12L10 18"
          stroke="#1C274C"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
    <label
      htmlFor="text"
      className="text-[#101928] text-[14px] font-[500] leading-[20.3px] "
      style={{ fontFamily: 'Nekst-Medium' }}
    >
      Any further descriptions of your project and its goals?
    </label>
    <textarea
      type="text"
      placeholder="Give details of your project"
      className="flex items-start h-[121px] p-[16px] w-full min-w-fit border border-[#D0D5DD] clicked:border-[#1481BA] focus:border-[#1481BA] rounded-[6px] text-[14px] font-[300]"
      style={{ fontFamily: 'Nekst-Light' }}
    />
    <label
      htmlFor="text"
      className="text-[#101928] text-[14px] font-[500] leading-[20.3px] "
      style={{ fontFamily: 'Nekst-Medium' }}
    >
      What&apos;s your budget?
    </label>
    <input
      type="numeric"
      placeholder="Enter your budget"
      className="h-[56px] w-full min-w-fit border border-[#D0D5DD] p-[16px] clicked:border-[#1481BA] focus:border-[#1481BA] rounded-[6px] text-[14px] font-[300]"
      style={{ fontFamily: 'Nekst-Light' }}
    />
    <label
      htmlFor="text"
      className="text-[#101928] text-[14px] font-[500] leading-[20.3px] "
      style={{ fontFamily: 'Nekst-Medium' }}
    >
      Kindly provide your email address
    </label>
    <input
      type="text"
      placeholder="Enter email here"
      className="h-[56px] w-full min-w-fit border border-[#D0D5DD] p-[16px] clicked:border-[#1481BA] focus:border-[#1481BA] rounded-[6px] text-[14px] font-[300]"
      style={{ fontFamily: 'Nekst-Light' }}
    />
    <button
      type=""
      className="w-[ 290.842px] text-[#fff] font-[600] leading-[13px] mt-[33.56px] mb-[22.37px] mx-[26.16px] py-[12px] text-[11.2px] min-w-fit bg-[#1481ba] flex justify-center items-center rounded-[8px] "
    >
      Submit
    </button>
  </div>
);

Step2.propTypes = {
  handlePreviousStep: PropTypes.func.isRequired,
};

const Service = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="h-fit relative bg-[#09090B] overflow-hidden">
      <div className="  ">
        <div className="h-full">
          <img
            src={Gradient}
            alt=""
            className="absolute inset-0 z-0 left-[-119px] lg:left-[-30px] "
          />
          <div className="text-center">
            <h3
              className="ml-[22px] text-start mt-[146px] w-full max-w-[372px] lg:text-center text-[#fff] text-[54px] font-[700] capitalize lg:max-w-full "
              style={{ lineHeight: 'normal', fontFamily: 'Nekst-Bold' }}
            >
              Which of our services would you like to explore?
            </h3>
          </div>

          {/* Step Content */}
          {currentStep === 1 && <Step1 nextStep={handleNextStep} />}
          {currentStep === 2 && (
            <Step2 handlePreviousStep={() => setCurrentStep(currentStep - 1)} />
          )}

          <img
            src={Gradient2}
            alt=""
            className="absolute bottom-[-164px] right-[-204px] z-0 lg:bottom-0 lg:right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
