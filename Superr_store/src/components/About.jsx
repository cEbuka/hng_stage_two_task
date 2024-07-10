import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div>
      <div className="flex flex-col gap-7 sm:w-[356px]">
        <h1 className="text-app-black-2 text-xl font-semibold sm:text-3xl">About Superr</h1>
        <p className="text-gray-600 sm:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum
          aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in
          volutpat ullamcorper amet adipiscing fermentum.
        </p>
        <div className="flex gap-5">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaGithub />
        </div>
      </div>
    </div>
  );
}

export default About;
