import Signup from "./Signup";
import About from "./About";

const Footer = () => {
  return (
    <div>
      <div className="p-5 mt-12">
        <Signup />
        <div className="w-full block sm:flex sm:gap-[189px] sm:px-[60px] ">
          <About />
          <div className="grid grid-cols-2 gap-2 mt-8 sm:flex sm:gap-[121px] sm:mt-0 ">
            <div>
              <h1 className="text-sm font-semibold mb-5 sm:text-2xl">Company</h1>
              <div className="flex flex-col text-gray-900 sm:text-xl sm:gap-7 sm">
                <a>About</a>
                <a>Features</a>
                <a>Works</a>
                <a>Career </a>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-sm font-semibold mb-5 sm:text-2xl">Help</h1>
                <div className="flex flex-col text-gray-900 sm:text-xl sm:gap-7">
                  <a>Customer Support</a>
                  <a>Delivery Details</a>
                  <a>Terms & Conditions</a>
                  <a>Privacy Policy</a>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-sm font-semibold mb-5 sm:text-2xl">Resources</h1>
                <div className="flex flex-col text-gray-900 sm:text-xl :gap-7">
                  <a>Free eBooks</a>
                  <a>Development Tutorial</a>
                  <a>How to - Blog</a>
                  <a>Youtube Playlist</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
