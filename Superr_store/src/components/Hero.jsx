import Navbar from "./Navbar";
import heroImage from "../assets/pat-taylor-12V36G17IbQ-unsplash 1.png";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-hero-bg text-app-bg px-[20px] py-[10px]">
        <div>
          <div className="mb-[32px]">
            <h1>Casio F90s</h1>
            <p>
              where timeless elegance meets modern innovation. For a limited
              time only, enjoy <span className="text-app-orange">20%</span> off
              your purchase
            </p>
          </div>

          <img src={heroImage} alt="hero_image" className="m-auto" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
