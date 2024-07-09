import Navbar from "./Navbar";
import heroImage from "../assets/pat-taylor-12V36G17IbQ-unsplash 1.png";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-hero-bg text-app-bg px-[60px] py-[10px] sm:h-[556px] sm:px-[150px] sm:flex">
        <div className="sm:flex sm:gap-[145px] sm:items-center sm:justify-center">
          <div className="mb-[32px] sm:flex sm:flex-col gap-[52px] w-2/5">
            <h1 className="text-xl sm:text-3xl font-bold">Casio F90s</h1>
            <p className="text-xl">
              where timeless elegance meets modern innovation. For a limited
              time only, enjoy <span className="text-app-orange text-2xl">20%</span> off
              your purchase
            </p>
          </div>

          <div className="hidden sm:block">
            <img src="pat-taylor_big.png" alt="hero_image" />
          </div>
          <div className="sm:hidden">
            <img src={heroImage} alt="hero_image" className="m-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
