import newProductImage from "../assets/new-productImage.png";

const NewProduct = () => {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-3 bg-app-black-1 text-app-bg sm:flex-row-reverse sm:px-[60px] sm:h-[554px] sm:gap-[145px] ">
        <div className="flex gap-8 flex-col pt-2 sm:gap[52px] sm:m-auto ">
          <h1 className="text-2xl sm:text-5xl font-bold">Casio F20</h1>
          <p className="sm:w-[503px] sm:text-3xl">
            Introducing our latest masterpiece – the [Watch Name]. Meticulously
            crafted with precision and elegance, this new timepiece is the
            epitome of style and sophistication. Elevate your look with its
            sleek design, durable materials, and unparalleled accuracy.
          </p>
        </div>
        <div className="hidden sm:block">
          <img src="newproductImage_big.png" alt="new-product Image"/>
        </div>
        <div className="sm:hidden">
          <img src={newProductImage} alt="new-product Image" />
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
