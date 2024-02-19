import Staff1 from '../../assets/images/staff1.png';
import Staff2 from '../../assets/images/staff2.png';
import Staff3 from '../../assets/images/staff3.png';
import Staff4 from '../../assets/images/staff4.png';
import Staff5 from '../../assets/images/staff5.png';
import Staff6 from '../../assets/images/staff6.png';
import Board1 from '../../assets/images/board1.png';
import Board2 from '../../assets/images/board2.png';
import Board3 from '../../assets/images/board3.png';
import Board4 from '../../assets/images/board4.png';
import Board5 from '../../assets/images/board5.png';
import Board6 from '../../assets/images/board6.png';
import Board7 from '../../assets/images/board7.png';
import Board8 from '../../assets/images/board8.png';
import ArrowUp from '../../assets/images/Arrow Right Up.svg';

const StaffBoard = () => {

    const staff = [
      {
        name: 'Ifeanyi Okafor',
        position: 'Client & Project Manager',
        LinkedIn: 'https://www.linkedin.com/in/ifeanyi-chidinma-okafor/',
        img: Staff1,
      },
      {
        name: 'Tasen Owisi',
        position: 'Talent &  Label Services Manager',
        LinkedIn: 'https://www.linkedin.com/in/tasen-owisi-b132ab241/',
        img: Staff2,
      },
      {
        name: 'Ayobami Shittu',
        position: 'Marketing & Public Relations Manager',
        LinkedIn: 'https://www.linkedin.com/in/ayobami-shittu-208462247/',
        img: Staff3,
      },
      {
        name: 'Eniola Oroale',
        position: ' Graphics & Motion Editing Manager',
        LinkedIn: 'https://www.linkedin.com/in/eniolaoroale/',
        img: Staff4,
      },
      {
        name: 'Adetoun Akerele',
        position: 'Social Media & Community Management Executive',
        LinkedIn: '#',
        img: Staff5,
      },
      {
        name: 'Favour Agbai',
        position: 'Content Creation & Visual Studio Executive',
        LinkedIn: 'https://www.linkedin.com/in/fayfaytalks/',
        img: Staff6,
      },
    ];

    const board = [
      {
        name: 'Opeyemi Iredumare',
        position: 'Legal & Business Operations',
        LinkedIn:
          'https://www.linkedin.com/in/iredumare?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ',
        img: Board1,
      },
      {
        name: 'Jephthah Aletan',
        position: 'Visual & Brand Direction',
        LinkedIn:
          'https://www.linkedin.com/in/jephaletan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        img: Board2,
      },
      {
        name: 'Titilayo Adesoga',
        position: 'Royalties',
        LinkedIn:
          'https://www.linkedin.com/in/titilayo-adesoga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        img: Board3,
      },

      {
        name: 'Osikhena Dirisu',
        position: 'Media Relations (Radio & TV)',
        LinkedIn:
          'https://www.linkedin.com/in/osikhena-dirisu-9557b2129?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ',
        img: Board4,
      },
      {
        name: 'Oyins Ekperi',
        position: 'Brand Engagements (FMCG)',
        LinkedIn: 'https://www.linkedin.com/in/ekperi-w-oyins-639a1639/',
        img: Board5,
      },
      {
        name: 'Itohowo Okim',
        position: 'Media Relations (Micro Influencer Management)',
        LinkedIn: '#',
        img: Board6,
      },
      {
        name: 'Wingonia Ikpi',
        position: 'Content Creation (Film)',
        LinkedIn: 'https://www.linkedin.com/in/wingoniaikpi/',
        img: Board7,
      },
      {
        name: 'Mayor Otu',
        position: 'Content Creation (Photography)',
        LinkedIn:
          'https://www.linkedin.com/in/mayor-otu-documentary-photographer-195626173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ',
        img: Board8,
      },
    ];

  
  return (
    <div className=" mt-[96px]">
      <div>
        <p
          className="text-center text-[24px] font-normal "
          style={{ fontFamily: 'Nekst-Regular' }}
        >
          MEET OUR TEAM
        </p>
        <h3
          className="text-[40px] text-center font-[600] "
          style={{ fontFamily: 'Nekst-Semibold' }}
        >
          Our Staff
        </h3>
        <div className="flex gap-[24px] flex-col justify-center items-center mt-[61px] mx-[16px] lg:grid grid-cols-2 gap-[24px] lg:w-[1150px] lg:mx-auto ">
          {staff.map((staff, index) => (
            <div
              key={index}
              className="relative max-w-[388.714px] lg:max-w-[569px]"
            >
              <img
                src={staff.img}
                alt="Staff Member"
                className="rounded-[19.297px] max-h-[422.953px] lg:max-w-[569px] lg:max-h-[631px] "
              />
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-[19.297px] lg:right-[-10px] "
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
                }}
              >
                {' '}
                <p
                  className="text-center text-[30px] font-[600] text-[#fff] mt-[170px]"
                  style={{ fontFamily: 'Nekst-Bold' }}
                >
                  {staff.name}
                </p>
                <p
                  className="text-center text-[18px] font-[300] text-[#fff] "
                  style={{ fontFamily: 'Nekst-Light' }}
                >
                  {staff.position}
                </p>
                <a
                  href={staff.LinkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center pb-[32px] mt-[10px] "
                >
                  <p
                    className="text-center text-[18px] font-[500] text-[#00A7FF]  underline "
                    style={{ fontFamily: 'Nekst-Medium' }}
                  >
                    LinkedIn
                  </p>
                  <img src={ArrowUp} alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[80.77px] ">
        <p
          className="text-center text-[24px] font-normal "
          style={{ fontFamily: 'Nekst-Regular' }}
        >
          MEET OUR TEAM
        </p>
        <h3
          className="text-[40px] text-center font-[600] "
          style={{ fontFamily: 'Nekst-Semibold' }}
        >
          Board of Advisors
        </h3>
        <div className="flex gap-[24px] flex-col justify-center items-center mt-[61px] mx-[16px] lg:grid grid-cols-2 gap-[24px] lg:w-[1150px] mb-[165px] lg:mx-auto lg:mb-[669px] ">
          {board.map((staff, index) => (
            <div
              key={index}
              className="relative max-w-[388.714px] lg:max-w-[569px]"
            >
              <img
                src={staff.img}
                alt="Staff Member"
                className="rounded-[19.297px] max-h-[422.953px] lg:max-w-[569px] lg:max-h-[631px] "
              />
              <div
                className="absolute bottom-0 left-0 right-0 rounded-b-[19.297px] lg:right-[-10px] "
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)',
                }}
              >
                {' '}
                <p
                  className="text-center text-[30px] font-[600] text-[#fff] mt-[170px]"
                  style={{ fontFamily: 'Nekst-Bold' }}
                >
                  {staff.name}
                </p>
                <p
                  className="text-center text-[18px] font-[300] text-[#fff] "
                  style={{ fontFamily: 'Nekst-Light' }}
                >
                  {staff.position}
                </p>
                <a
                  href={staff.LinkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-center items-center pb-[32px] mt-[10px] "
                >
                  <p
                    className="text-center text-[18px] font-[500] text-[#00A7FF]  underline "
                    style={{ fontFamily: 'Nekst-Medium' }}
                  >
                    LinkedIn
                  </p>
                  <img src={ArrowUp} alt="" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StaffBoard;
