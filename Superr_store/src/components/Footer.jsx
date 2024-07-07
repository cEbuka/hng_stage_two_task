import Signup from "./Signup";
import About from "./About";

const Footer = () => {
  return (
    <div>
      <div className="p-5 mt-12">
        <Signup />
        <About />
        <div className="grid grid-cols-2 gap-2 mt-8">
          <div>
            <h1 className="text-md font-bold mb-5">Company</h1>
            <div className="flex flex-col text-gray-900">
              <a>About</a>
              <a>Features</a>
              <a>Works</a>
              <a>Career </a>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-md font-bold mb-5">Help</h1>
              <div className="flex flex-col text-gray-900">
                <a>Customer Support</a>
                <a>Delivery Details</a>
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-md font-bold mb-5">Resources</h1>
              <div className="flex flex-col text-gray-900">
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
  );
};

export default Footer;
