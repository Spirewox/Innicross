import Staff1 from '../../assets/images/staff1.png'
import Staff1Desktop from '../../assets/images/staff1_big.png';
import Staff2Desktop from '../../assets/images/staff2_big.png';
import Staff3Desktop from '../../assets/images/staff3_big.png';
import Staff4Desktop from '../../assets/images/staff4_big.png';
import Staff5Desktop from '../../assets/images/staff5_big.png';
import Staff6Desktop from '../../assets/images/staff6_big.png';
import Board1 from '../../assets/images/board1.png';
import Board2 from '../../assets/images/board2.png';
import Board3 from '../../assets/images/board3.png';
import Board4 from '../../assets/images/board4.png';
import Board1Desktop from '../../assets/images/board1big.png';
import Board2Desktop from '../../assets/images/board2big.png';
import Board3Desktop from '../../assets/images/board3big.png';
import Board4Desktop from '../../assets/images/board4big.png';

const StaffBoard = () => {
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
        <div className="flex gap-[24px] flex-col justify-center items-center mt-[61px] lg:hidden ">
          <img
            src={Staff1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Staff1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Staff1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Staff1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Staff1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Staff1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
        </div>
        <div className=" hidden lg:block max-w-[1441px] mx-auto ">
          <div className="lg:grid grid-cols-2 gap-[24px] flex-col justify-center items-center mt-[61px] mx-[139px] ">
            <img
              src={Staff1Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Staff2Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Staff3Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Staff4Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Staff5Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Staff6Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
          </div>
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
        <div className="flex gap-[24px] flex-col justify-center items-center mt-[61px] lg:hidden ">
          <img
            src={Board1}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board2}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board3}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board4}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board4}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board4}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board4}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
          <img
            src={Board4}
            alt="Staff Member"
            className="rounded-[19.297px] "
          />
        </div>
        <div className=" hidden lg:block max-w-[1441px] mx-auto mb-[270px] ">
          <div className="lg:grid grid-cols-2 gap-[24px] flex-col justify-center items-center mt-[61px] mx-[139px] ">
            <img
              src={Board1Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Board2Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Board3Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Board4Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Board4Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
            <img
              src={Board4Desktop}
              alt="Staff Member"
              className="rounded-[19.297px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffBoard;
