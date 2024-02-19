import './css/images.css';
import Music1 from '../../assets/images/music-1.png';
import Music2 from '../../assets/images/music-2.png';
import Music3 from '../../assets/images/music-3.png';
import Music4 from '../../assets/images/music-4.png';
import Music5 from '../../assets/images/music-5.png';
import Music6 from '../../assets/images/music-6.png';
import Music7 from '../../assets/images/music-7.png';
import Music8 from '../../assets/images/music-8.png';
import Music9 from '../../assets/images/music-9.png';
import Music10 from '../../assets/images/music-10.png';

const Images = () => {
  const images = [
    Music1,
    Music2,
    Music3,
    Music4,
    Music5,
    Music6,
    Music7,
    Music8,
    Music9,
    Music10,
  ];

  return (
    <div className="bg-[#000] flex w-full min-w-full overflow-x-hidden pt-[84px] pb-[34px] ">
      <div className="slider">
        <div className="image-container flex gap-[35px] lg:gap-[40px] ">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="sm:max-h-[317px] lg:max-h-full lg:block w-full object-cover"
            />
          ))}

          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className="sm:max-h-[317px] lg:max-h-full lg:block w-full object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Images;
