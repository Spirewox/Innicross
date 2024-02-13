import './css/images.css';
import Music1 from '../../assets/images/music-1.png';
import Music2 from '../../assets/images/music-2.png';
import Music3 from '../../assets/images/music-3.png';

const Images = () => {
  const images = [Music1, Music2, Music3];

  return (
    <div className="bg-[#000] flex w-full min-w-full overflow-x-hidden mt-[84px] pb-[34px] ">
      <div className="image-container flex gap-[35px] lg:gap-[40px] ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className="  sm:max-h-[317px] lg:max-h-full lg:block w-full object-cover "
          />
        ))}
        {images.map((image, index) => (
          <img
            key={index + images.length}
            src={image}
            alt=""
            className=" sm:max-h-[317px] lg:max-h-full lg:block w-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
