
import Hero from "../components/homepage/Hero";
import Images from '../components/homepage/Images';
import MediaCustomer from '../components/homepage/Media_Customer';
import Partners from '../components/homepage/Partners';
import Services from '../components/homepage/Services';

const Homepage = () => {
  return (
    <div className="bg-[#fff]">
      <Hero />
      <Images />
      <Partners />
      <Services />
      <MediaCustomer />
    </div>
  );
}

export default Homepage;
