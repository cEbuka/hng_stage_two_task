import Item from "./Item";
import { productsData } from "./productsData";

const Product = () => {
  return (
    <div>
      <section className="mx-[20px bg-app-bg">
        <div className="flex justify-center items-center gap-[24px] text-app-black-2 mb-[48px] pt-[48px] md:text-2xl">
          <button className="text-xl">
            Best Seller
          </button>
          <button className="text-xl border-b-2 border-app-orange">
            Featured
          </button>
          <button className="text-xl">
            New Arrival
          </button>
        </div>
        <div className="px-[30px] flex flex-col gap-5 md:grid md:grid-cols-4 md:px-[60px]">
          {console.log(productsData)}
          {productsData?.map((product, index) => (
            <Item key={index} src={product.src} />
          ))}
        </div>
        <div className="py-12 flex items-center justify-center gap-6">
          <div className="flex gap-3 text-blue-500 text-xl">
            <button className="focus:text-app-black-1">1</button>
            <button>2</button>
            <button>3</button>
            <p>...</p>
          </div>
          <button className="bg-app-orange text-app-bg px-4 py-2 rounded-xl">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Product;
