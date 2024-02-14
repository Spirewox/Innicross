import { useState } from 'react';
import Logo from '../../assets/images/Group 25.svg';
import logoMobile from '../../assets/images/Group 25.svg';
import closeIcon from '../../assets/images/x.svg';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import Hambuger from '../../assets/images/DotsThreeVertical.svg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderMobileNav = () => {
    return (
      <div className="w-[90vw] mx-[20px] ">
        <div
          className={`h-[56px] text-[#fff] bg-[#0B1B2B] rounded-[10px] items-center flex capitalize w-full   ${
            isMenuOpen ? 'menu-open z-[100]' : ''
          } `}
          style={{ fontFamily: 'Nekst-Medium', zIndex: 100 }}
        >
          <div className="flex-1">
            <img
              src={Logo}
              alt="innicross logo"
              className="hidden pl-[24px] lg:pl-[54px] lg:block "
            />
            <img
              src={logoMobile}
              alt="innicross logo"
              className={`block left-0 ml-[24px] pl-[24px] lg:hidden lg:pl-[54px] ${
                isMenuOpen ? 'menu-open-logo' : ''
              }`}
            />
          </div>

          <div
            className={`fixed top-0 left-0 w-full h-full flex flex-col items-center bg-[#0B1B2B]   ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <ul
              className={`  gap-[42px] pb-[25px] text-base ${
                isMenuOpen ? 'menu-open-ul' : ''
              }`}
              style={{ zIndex: 102 }}
            >
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/our-services" onClick={closeMenu}>
                Our Services
              </Link>
              <Link to="/portfolio" onClick={closeMenu}>
                Portfolio
              </Link>
              <Link onClick={closeMenu}>Contact Us</Link>
            </ul>
            <button className="bg-[#1481BA] mt-[103px] rounded-[8px] px-[20px] py-[16px] flex justify-center items-center gap-[4px] ">
              {' '}
              Get Started
            </button>
          </div>
          <div className="">
            <img
              src={Hambuger}
              alt="menu"
              className={`lg:hidden absolute  right-[20px] top-[42px] cursor-pointer ${
                isMenuOpen ? 'hidden' : ''
              }`}
              onClick={toggleMenu}
            />
            {isMenuOpen && (
              <img
                src={closeIcon}
                alt="close menu"
                className=" lg:hidden absolute top-[33px] right-[5px] cursor-pointer"
                style={{ zIndex: 100 }}
                onClick={closeMenu}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  // Large screen layout
  const renderDesktopNavbar = () => (
    <div className='w-[100vw] mx-[20px] '>
      <div
        className={`h-[56px] mx-[20px] lg:h-[70px] text-[#fff] bg-[#0B1B2B] rounded-[10px] flex flex-row justify-between items-center lg:mx-[64px] capitalize ${
          isMenuOpen ? 'z-50' : ''
        } `}
        style={{ fontFamily: 'Nekst-Medium', zIndex: 100 }}
      >
        <div className="flex items-center">
          <img
            src={Logo}
            alt="innicross logo"
            className="pl-[24px] lg:pl-[54px]"
          />
        </div>
        <nav className="flex-grow flex justify-center">
          <ul className="flex flex-row gap-[42px] text-base">
            <Link to='/' >Home</Link>
            <Link to='/our-services' >Our Services</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link>Contact Us</Link>
          </ul>
        </nav>
        <button className="bg-[#1481BA] rounded-[8px] px-[20px] py-[16px] flex justify-center items-center gap-[4px] mr-[32px] ">
          {' '}
          Get Started
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <div className="lg:hidden">{renderMobileNav()}</div>
      <div className="hidden lg:block">{renderDesktopNavbar()}</div>
    </div>
  );
};

export default Navbar;
