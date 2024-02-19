import './css/media_customer.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Vector1 from '../../assets/images/vector-1.svg';
import Vector2 from '../../assets/images/vector-2.svg';
import Vector3 from '../../assets/images/vector-3.png';
import Vector4 from '../../assets/images/vector-4.svg';
import Vector5 from '../../assets/images/vector-5.svg';
import Vector6 from '../../assets/images/vector-6.png';
import Vector7 from '../../assets/images/vector-7.png';
import Vector8 from '../../assets/images/vector-8.svg';
import Vector9 from '../../assets/images/vector-9.svg';
import Vector10 from '../../assets/images/vector-10.png';
import Vector11 from '../../assets/images/vector-11.png';
import Vector12 from '../../assets/images/vector-12.png';
import Vector13 from '../../assets/images/vector-13.png';
import Vector14 from '../../assets/images/vector-14.png';
import Vector15 from '../../assets/images/vector-15.svg';

const MediaCustomer = () => {
  const testimonies = () => [
    {
      text: "We've gone from having zero money and not knowing how we're going to be able to pay commissions to being able to have the financial freedom to grow the company however we want on our own terms.",
      name: 'Eric Campbell',
      position: 'CEO',
    },
    {
      text: "It's like our faceless funding partner that's there, that's reliable, that we can call on anytime we need it. It's there in a jam, and it's there when we need to grow.",
      name: 'Paul DeJoe',
      position: 'CO-FOUNDER & COO',
    },
    {
      text: "We've gone from having zero money and not knowing how we're going to be able to pay commissions to being able to have the financial freedom to grow the company however we want on our own terms.",
      name: 'Paul DeJoe',
      position: 'CO-FOUNDER & COO',
    },
  ];

  const vector = [
    Vector1,
    Vector5,
    Vector6,
    Vector4,
    Vector2,
    Vector3,
    Vector7,
    Vector8,
    Vector9,
    Vector10,
    Vector11,
    Vector12,
    Vector13,
    Vector14,
    Vector15,
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Set arrows to false
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#fff] mt-[188px] mb-[300px]">
      <div className=" ml-[23px] lg:ml-[118px]  ">
        <p
          className="text-[#84889A] w-[280.929px] lg:w-[368px] text-[20px] lg:text-[24px] uppercase font-[600] tracking-[1px] pt-[29px] "
          style={{ fontFamily: 'Nekst-Semibold' }}
        >
          OUR MEDIA PARTNERS
        </p>
        <h3
          className="text-[#121316] mt-[21.52px] text-[32px] lg:text-[38.281px] font-[600] tracking-[-0.6px] lg:w-[432px] "
          style={{ fontFamily: 'Nekst-Semibold' }}
        >
          We work with the best to promote your brand
        </h3>
      </div>

      <div className="flex w-full min-w-full overflow-x-hidden py-[18px] mt-[53px] bg-[#F7F9FC] ">
        <div className="slider w-full">
          <div className="image-container flex gap-[35px] max-h-[75px] lg:gap-[40px] lg:max-h-[115px] ">
            {vector.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className="max-h-[75px] lg:max-h-full lg:block w-full lg:max-h-[115px]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#fff] mt-[103px] lg:mt-[188px] mb-[300px]">
        <div className=" mt-[104.27px] ml-[23px] lg:ml-[118px]  ">
          <p
            className="text-[#84889A] w-[280.929px] lg:w-[368px] text-[20px] lg:text-[24px] uppercase font-[600] tracking-[1px] pt-[29px] "
            style={{ fontFamily: 'Nekst-Semibold' }}
          >
            Our customers
          </p>
          <h3
            className="text-[#121316] mt-[21.52px] text-[32px] lg:text-[38.281px] font-[600] tracking-[-0.6px] lg:w-[432px] "
            style={{ fontFamily: 'Nekst-Semibold' }}
          >
            Join the customers who&apos;ve already used Innicross to promote
            their brands
          </h3>
        </div>
        <Slider
          className="slider-flex gap-[24px] w-full  mt-[58px]"
          {...settings}
        >
          {testimonies().map((testimony, index) => (
            <div key={index} className=" ">
              <div className="text-[#09090B] flex flex-col justify-between p-[32px] min-h-[360px] min-w-[429px] bg-[#D0D5DD]">
                <p
                  className="text-center text-[16px] font-[500] tracking-[0.07px] leading-[31.2px] lg:text-[22.875px] lg:tracking-[0.1px] "
                  style={{ fontFamily: 'Nekst-Medium' }}
                >
                  &quot; {testimony.text}&quot;
                </p>
                <span
                  className="w-full text-center text-[#787c91] text-[14px] font-normal font-[500] tracking-[0.07px] leading-[14.217px] "
                  style={{ fontFamily: 'Inter' }}
                >
                  <p>{testimony.name}</p>
                  <p>{testimony.position}</p>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MediaCustomer;
