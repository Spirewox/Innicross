// import Vector1 from '../assets/images/vector1.png';
// import Vector2 from '../assets/images/vector2.png';
// import Vector3 from '../assets/images/vector3.png';
// import Vector4 from '../assets/images/vector4.png';
// import Vector5 from '../assets/images/vector5.png';
// import Vector6 from '../assets/images/vector6.png';
// import Vector7 from '../assets/images/vector7.png';
// import Vector8 from '../assets/images/vector8.png';
// import Vector9 from '../assets/images/vector9.png';
// import Vector10 from '../assets/images/vector10.png';
// import Vector11 from '../assets/images/vector11.svg';
// import Vector12 from '../assets/images/vector12.svg';
// import Vector13 from '../assets/images/vector13.svg';
// import Vector14 from '../assets/images/vector14.png';
// import Vector15 from '../assets/images/vector15.png';
import './css/media_customer.css';

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

        {/* <div className="w-fu">
          <div
            className="flex justify-evenly overflow-x-auto whitespace-nowrap animate-marquee w-fu"
            style={{ width: '100%' }}
          >
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Vector3} alt="" />
            <img src={Vector4} alt="" />
            <img src={Vector5} alt="" />
            <img src={Vector6} alt="" />
            <img src={Vector7} alt="" />
            <img src={Vector8} alt="" />
            <img src={Vector9} alt="" />
            <img src={Vector10} alt="" />
            <img src={Vector11} alt="" />
            <img src={Vector12} alt="" />
            <img src={Vector13} alt="" />
            <img src={Vector14} alt="" />
            <img src={Vector15} alt="" />
          </div>
        </div> */}
      </div>

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
          Join the customers who&apos;ve already used Innicross to promote their
          brands
        </h3>
      </div>
      <div className="flex gap-[24px] w-full overflow-x-hidden mt-[58px]  ">
        {testimonies().map((testimony, index) => (
          <div
            key={index}
            className="text-[#09090B] flex flex-col justify-between p-[32px] min-h-[360px] min-w-[429px] bg-[#D0D5DD] "
          >
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
        ))}
      </div>
    </div>
  );
};

export default MediaCustomer;
