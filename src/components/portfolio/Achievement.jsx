import Portfolio1 from '../../assets/images/portfolio1.png';
import Portfolio2 from '../../assets/images/portfolio2.png';
import Portfolio3 from '../../assets/images/portfolio3.png';
import Portfolio4 from '../../assets/images/portfolio4.png';
import Portfolio5 from '../../assets/images/portfolio5.png';
import Portfolio6 from '../../assets/images/portfolio6.png';
import Portfolio1Desktop from '../../assets/images/portfolio1_big.png';
import Portfolio2Desktop from '../../assets/images/portfolio2_big.png';
import Portfolio3Desktop from '../../assets/images/portfolio3_big.png';
import Portfolio4Desktop from '../../assets/images/portfolio4_big.png';
import Portfolio5Desktop from '../../assets/images/portfolio5_big.png';
import Portfolio6Desktop from '../../assets/images/portfolio6_big.png';
import ArrowUp from '../../assets/images/Arrow Right Up.svg';

const Achievement = () => {
  return (
    <div className="bg-[#fff] ">
      <h3
        className="text-center text-[24px] font-[400] capitalize my-[59px] lg:text-[40px]"
        style={{ fontFamily: 'Nekst-Regular' }}
      >
        Here are some of our notable achievements
      </h3>
      <div className="flex flex-col justify-center items-center bg-[#F0F2F5] rounded-[19.179px] mt-[59px] mx-[20px] lg:mx-auto lg:max-w-[1441px] ">
        <div className="lg:flex mx-[144px]">
          <div className="flex-1">
            <h3
              className="text-[12px] font-normal text-center leading-[10.229px] tracking-[1.279px] uppercase mt-[61.2px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Inter',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              THE SARZ ACADEMY
            </h3>

            <p
              className="text-[26px] font-[600] mt-[20.85px] text-center min-w-[244px] mx-[45px] lg:text-start lg:mx-[0px] lg:text-[48px]  "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Memories That Last Forever 2 Compilation
            </p>
          </div>
          <div className="flex-1">
            <p
              className="text-base font-[400] leading-[22.48px] tracking-[-0.32px] mt-[24px] text-center min-w-[284px] mx-[45px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Nekst-Medium',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              In collaboration with The Sarz Academy, we curated the
              &quot;Memories That Last Forever 2&quot; compilation featuring 7
              artists and 8 producers.
            </p>
            <p
              className="text-base font-[400] leading-[22.48px] tracking-[-0.32px] mt-[24px] text-center min-w-[284px] mx-[45px] lg:text-start  lg:text-[24px]  "
              style={{
                fontFamily: 'Nekst-Medium',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              Within a month of launch, we delivered a million streams,
              showcasing the project&apos;s widespread success and impact.
            </p>
            <div
              className=" mt-[40px] text-center lg:text-start"
              style={{
                fontFamily: 'Nekst-Medium',
              }}
            >
              <span className="flex flex-row items-center justify-center lg:justify-start lg:ml-[45px]">
                <a
                  href="https://culturecustodian.com/review-memories-that-last-forever-2-is-a-showcase-of-brimming-talent/"
                  target="__blank"
                  className="text-[24px] text-[#1481BA] font-[500] underline  "
                >
                  Read More{' '}
                </a>

                <img src={ArrowUp} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[24px] mt-[42px] mb-[15px] lg:hidden">
          <img src={Portfolio1} alt="" />
          <img src={Portfolio2} alt="" />
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center gap-[24px] mt-[42px] mb-[75px] ">
          <img src={Portfolio1Desktop} alt="" />
          <img src={Portfolio2Desktop} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#FEF6E7] rounded-[19.179px] mt-[59px] mx-[20px] lg:mx-auto lg:max-w-[1441px]">
        <div className="lg:flex mx-[144px]">
          <div className="flex-1">
            <h3
              className="text-[12px] font-normal text-center leading-[10.229px] tracking-[1.279px] uppercase mt-[61.2px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Inter',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              ULTIMA STUDIOS
            </h3>

            <p
              className="text-[26px] font-[600] mt-[20.85px] text-center min-w-[244px] mx-[45px] lg:text-start lg:mx-[0px] lg:text-[48px]  "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Next Afrobeats Star
            </p>
          </div>
          <div className="flex-1">
            <p
              className="text-base font-[400] leading-[22.48px] tracking-[-0.32px] mt-[24px] text-center min-w-[284px] mx-[45px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Nekst-Medium',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              Innicross partnered with Ultima Studios to launch the &quot;Next
              Afrobeats Star&quot; initiative, nurturing emerging talents in the
              Afrobeats genre.
            </p>
            <p
              className="text-base font-[400] leading-[22.48px] tracking-[-0.32px] mt-[24px] text-center min-w-[284px] mx-[45px] lg:text-start  lg:text-[24px]  "
              style={{
                fontFamily: 'Nekst-Medium',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              The project garnered significant attention and acclaim within the
              industry, establishing a platform for budding artists to shine.
            </p>
            <div
              className=" mt-[40px] text-center lg:text-start"
              style={{
                fontFamily: 'Nekst-Medium',
              }}
            >
              <span className="flex flex-row items-center justify-center lg:justify-start lg:ml-[45px]">
                <a
                  href="https://punchng.com/next-afrobeats-star-to-groom-new-talents/?amp"
                  target="__blank"
                  className="text-[24px] text-[#1481BA] font-[500] underline  "
                >
                  Read More{' '}
                </a>

                <img src={ArrowUp} alt="" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-[24px] mt-[42px] mb-[15px] lg:hidden">
          <img src={Portfolio3} alt="" />
          <img src={Portfolio4} alt="" />
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center gap-[24px] mt-[42px] mb-[75px] ">
          <img src={Portfolio3Desktop} alt="" />
          <img src={Portfolio4Desktop} alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#F0F2F5] rounded-[19.179px] mt-[59px] mx-[20px] lg:mx-auto lg:max-w-[1441px] ">
        <div className="lg:flex mx-[144px]">
          <div className="flex-1">
            <h3
              className="text-[12px] font-normal text-center leading-[10.229px] tracking-[1.279px] uppercase mt-[61.2px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Inter',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              WARNER MUSIC AFRICA
            </h3>

            <p
              className="text-[26px] font-[600] mt-[20.85px] text-center min-w-[244px] mx-[45px] lg:text-start lg:mx-[0px] lg:text-[48px]  "
              style={{ fontFamily: 'Nekst-Semibold' }}
            >
              Live Performance Sessions with Yeni Kuti
            </p>
          </div>
          <div className="flex-1">
            <p
              className="text-base font-[400] leading-[22.48px] tracking-[-0.32px] mt-[24px] text-center min-w-[284px] mx-[45px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Nekst-Medium',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              In collaboration with Warner Music Africa, we orchestrated live
              performance sessions featuring Yeni Kuti, delivering captivating
              experiences for music enthusiasts.
            </p>
            <p
              className="text-base font-[400] leading-[22.48px] tracking-[-0.32px] mt-[24px] text-center min-w-[284px] mx-[45px] lg:text-start lg:text-[24px] "
              style={{
                fontFamily: 'Nekst-Medium',
                '@media (min-width: 1024px)': {
                  fontFamily: ' Nekst-Regular',
                },
              }}
            >
              The sessions garnered widespread engagement and praise, amplifying
              the artist&apos;s presence and connection with fans.
            </p>
            <div
              className=" mt-[40px] text-center lg:text-start"
              style={{
                fontFamily: 'Nekst-Medium',
              }}
            >
              <span className="flex flex-row items-center justify-center lg:justify-start lg:ml-[45px] ">
                <a
                  href="https://culturecustodian.com/the-sarz-academy-artistes-close-out-3-weekend-residency-at-afrika-shrine/"
                  target="__blank"
                  className="text-[24px] text-[#1481BA] font-[500] underline  "
                >
                  Read More{' '}
                </a>

                <img src={ArrowUp} alt="" />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-[24px] mt-[42px] mb-[15px] lg:hidden">
          <img src={Portfolio5} alt="" />
          <img src={Portfolio6} alt="" />
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center gap-[24px] mt-[42px] mb-[75px] ">
          <img src={Portfolio5Desktop} alt="" />
          <img src={Portfolio6Desktop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
