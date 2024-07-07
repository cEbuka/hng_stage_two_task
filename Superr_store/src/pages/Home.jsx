import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewProduct from "../components/NewProduct";
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Hero />
      <Product />
      <NewProduct/>
      <Footer/>
    </div>
  );
};

export default Home;
