import newProductImage from "../assets/new-productImage.png";

const NewProduct = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-3 bg-app-black-1 text-app-bg md:flex-row-reverse md:px-[60px] md:h-[554px] md:gap-[145px] ">
        <div className="flex gap-8 flex-col pt-2 md:gap[52px] md:m-auto ">
          <h1 className="text-2xl md:text-5xl font-bold">Casio F20</h1>
          <p className="md:w-[503px] md:text-3xl">
            Introducing our latest masterpiece – the [Watch Name]. Meticulously
            crafted with precision and elegance, this new timepiece is the
            epitome of style and sophistication. Elevate your look with its
            sleek design, durable materials, and unparalleled accuracy.
          </p>
        </div>
        <div className="hidden md:block">
          <img src="newproductImage_big.png" alt="new-product Image"/>
        </div>
        <div className="md:hidden">
          <img src={newProductImage} alt="new-product Image" />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
