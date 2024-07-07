import newProductImage from "../assets/new-productImage.png"

const NewProduct = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-3 bg-app-black-1 text-app-bg">
        <div className="flex gap-8 flex-col pt-2">
          <h1 className="text-2xl">Casio F20</h1>
          <p>
            Introducing our latest masterpiece – the [Watch Name]. Meticulously
            crafted with precision and elegance, this new timepiece is the
            epitome of style and sophistication. Elevate your look with its
            sleek design, durable materials, and unparalleled accuracy.
          </p>
        </div>
        <img src={newProductImage} alt="new-product Image"/>
      </div>
    </div>
  );
};

export default NewProduct;
