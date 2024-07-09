import Navbar from "./Navbar";
import heroImage from "../assets/pat-taylor-12V36G17IbQ-unsplash 1.png";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <section className="h-[421px] bg-hero-bg text-app-bg px-[60px] py-[10px] md:h-[556px] md:px-[150px] md:flex">
        <div className="md:flex md:gap-[145px] md:items-center md:justify-center">
          <div className="h-[146px] mb-[32px] md:flex md:flex-col gap-[52px]">
            <h1 className="text-xl md:text-3xl font-bold">Casio F90s</h1>
            <p className="text-xl">
              where timeless elegance meets modern innovation. For a limited
              time only, enjoy <span className="text-app-orange text-2xl">20%</span> off
              your purchase
            </p>
          </div>

          <div className="hidden md:block">
            <img src="pat-taylor_big.png" alt="hero_image" />
          </div>
          <div className="md:hidden">
            <img src={heroImage} alt="hero_image" className="m-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
