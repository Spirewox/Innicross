import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Images from "../components/Images";
import MediaCustomer from "../components/Media_Customer";
import Partners from "../components/Partners";
import Services from "../components/Services";

const Homepage = () => {
  return (
    <div className="bg-[#fff]">
      <Hero />
      <Images />
      <Partners />
      <Services />
      <MediaCustomer />
      <Footer />
    </div>
  );
}

export default Homepage;
