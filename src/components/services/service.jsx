import Gradient from '../../assets/images/image.png';
import Gradient2 from '../../assets/images/image (1).png';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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

const Checkbox = ({ service, onChange }) => {
  return (
    <div className="flex items-center gap-[26.8px] ml-[22.37px] mt-[32px]">
      <input
        type="checkbox"
        id={service} // Assigning unique id based on service name
        value={service}
        onChange={onChange}
        className="bg-[#fff] w-[32.16px] h-[32.16px] rounded-md border-2 border-[#D0D5DD]"
      />
      <label
        htmlFor={service}
        className="text-[24px] font-normal input-span text-[#475367] leading-[38px]"
      >
        {service}
      </label>
    </div>
  );
};

const Step1 = ({ nextStep, selectedServices, setSelectedServices }) => {


  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSelectedServices((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });

    // Log the selected services and their values
    console.log(
      `Checkbox with value ${value} is ${checked ? 'selected' : 'deselected'}`
    );
  };

  // Log selectedServices whenever it changes
  useEffect(() => {
    console.log('Selected Services:', selectedServices);
  }, [selectedServices]);

  return (
    <div className="flex flex-col gap-[16.78px] mt-[50px] lg:mt-[56px] mb-[78px] bg-[#fff] mx-auto w-[342.579px] min-w-fit rounded-[6.991px] z-10 lg:w-[490px]">
      {services.map((service) => (
        <Checkbox
          key={service}
          service={service}
          onChange={handleCheckboxChange}
        />
      ))}
      <button
        type="button"
        className="text-[#fff] font-[600] leading-[13px] mt-[33.56px] mb-[22.37px] mx-[26.16px] py-[12px] text-[16px] min-w-fit bg-[#1481ba] flex justify-center items-center rounded-[8px]"
        onClick={() => {
          nextStep();
          setSelectedServices(selectedServices);
        }}
      >
        Next
      </button>
    </div>
  );
};

Checkbox.propTypes = {
  service: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Step1.propTypes = {
  nextStep: PropTypes.func.isRequired,
  selectedServices: PropTypes.array.isRequired,
  setSelectedServices: PropTypes.func.isRequired,
};

const Step2 = ({
  handlePreviousStep,
  handleSubmit,
  form,
  selectedServices,
}) =>
 {
  console.log(selectedServices);
  return (
    <div className="flex flex-col bg-[#fff] mt-[50px] w-[342.579px] mb-[78px] min-w-fit rounded-[6.991px] mx-[15px] lg:mx-auto">
      <div className="flex flex-col mx-[32px] mt-[30px] lg:w-[490px] gap-[40px] lg:mt-[56px]">
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
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col gap-[40px]"
        >
          <span>
            <label
              htmlFor="project_details"
              className="text-[#101928] text-[14px] font-[500] leading-[20.3px] "
              style={{ fontFamily: 'Nekst-Medium' }}
            >
              Any further descriptions of your project and its goals?
            </label>
            <textarea
              type="text"
              htmlFor="text"
              required
              name="project_details"
              placeholder="Give details of your project"
              className="flex items-start h-[121px] p-[16px] w-full min-w-fit border border-[#D0D5DD] clicked:border-[#1481BA] focus:border-[#1481BA] rounded-[6px] text-[14px] font-[300]"
              style={{ fontFamily: 'Nekst-Light' }}
            />
          </span>
          <span>
            <label
              htmlFor="budget"
              className="text-[#101928] text-[14px] font-[500] leading-[20.3px] "
              style={{ fontFamily: 'Nekst-Medium' }}
            >
              What&apos;s your budget?
            </label>
            <input
              type="number"
              htmlFor="number"
              name="budget"
              required
              placeholder="Enter your budget"
              className="h-[56px] w-full min-w-fit border border-[#D0D5DD] p-[16px] clicked:border-[#1481BA] focus:border-[#1481BA] rounded-[6px] text-[14px] font-[300]"
              style={{ fontFamily: 'Nekst-Light' }}
            />
          </span>
          <span>
            <label
              htmlFor="email"
              className="text-[#101928] text-[14px] font-[500] leading-[20.3px] "
              style={{ fontFamily: 'Nekst-Medium' }}
            >
              Kindly provide your email address
            </label>
            <input
              type="text"
              name="email"
              htmlFor="email"
              required
              placeholder="Enter email here"
              className="h-[56px] w-full min-w-fit border border-[#D0D5DD] p-[16px] clicked:border-[#1481BA] focus:border-[#1481BA] rounded-[6px] text-[14px] font-[300]"
              style={{ fontFamily: 'Nekst-Light' }}
            />
          </span>

          <button
            type=""
            className="w-[ 290.842px] text-[#fff] font-[600] leading-[13px] mt-[33.56px] mb-[22.37px] mx-[26.16px] py-[12px] text-[16px] min-w-fit bg-[#1481ba] flex justify-center items-center rounded-[8px] "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Step2.propTypes = {
  handlePreviousStep: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  selectedServices: PropTypes.func.isRequired,
};



const Service = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const form = useRef();



  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();

     

    // Collect form data
    let formData = new FormData(form.current);
    let data = Object.fromEntries(formData);

    console.log('Form Data:', data);
    console.log('Form Current:', form.current);

    // Collect selected services from checkboxes
  

    console.log('Selected Services:', selectedServices);

  
    // Add selected services to form data
    data = {
      ...data,
      selectedServices: selectedServices.join(', '),
    };

    console.log('Updated Form Data:', data);


    // Send email with form data
    emailjs
      .send(
        'service_svbtkw9',
        'template_780nr5f',
        data,
        'vrKjn3W0j8cUKAOpw'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form inputs
          form.current.reset();
          setIsSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <div className="text-center ">
            <h3
              className="ml-[22px] text-start mt-[165px] w-full max-w-[300px]  text-[#fff] text-[32px] lg:text-[54px] font-[700] capitalize lg:max-w-[713px] lg:text-center lg:mx-auto"
              style={{ lineHeight: 'normal', fontFamily: 'Nekst-Bold' }}
            >
              Which of our services would you like to explore?
            </h3>
          </div>

          {isSubmitted && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
              <div className="flex flex-col bg-white p-4 rounded-md m-[20px] ">
                <h2 style={{ fontFamily: 'Nekst-Medium' }}>
                  Form Submitted Successfully!
                </h2>
                <button
                  className="p-[12px] bg-red-600 text-[#fff] mt-[20px] "
                  onClick={() => setIsSubmitted(false)}
                  style={{ fontFamily: 'Nekst-Light' }}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* Step Content */}
          {currentStep === 1 && (
            <Step1
              nextStep={handleNextStep}
              selectedServices={selectedServices}
              setSelectedServices={setSelectedServices}
            />
          )}
          {currentStep === 2 && (
            <Step2
              handlePreviousStep={() => setCurrentStep(currentStep - 1)}
              handleSubmit={handleSubmit}
              form={form}
              selectedServices={selectedServices} // Pass selectedServices as prop
            />
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
