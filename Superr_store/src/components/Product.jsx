import { Suspense, useEffect, useState } from "react";
import Item from "./Item";
import Loading from "../components/Loading";
import Pagination from "./Pagination";

const Product = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const itemPerPage = 12;
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    async function fetchPage() {
      const org_id = "a8f0919e8a41426aac7eaa953abfc1ce";
      const app_id = "N7ES3SGSZ5ENBON";
      const api_key = "c2d20b6a27a247e8abc8948a5d0e1a2e20240712224931277274";
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${org_id}&reverse_sort=false&page=1&size=32&Appid=${app_id}&Apikey=${api_key}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data.items);
        console.log(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPage();
  }, []);

  if (isLoading) {
    <Suspense>
      <Loading />
    </Suspense>;
  }
  //  Number of pages
  const pageCount = Math.ceil(data?.length / itemPerPage);

  // Page display
  const endIndex = (currentPage + 1) * itemPerPage;
  const startIndex = endIndex - itemPerPage;
  const currentItems = data?.slice(
    startIndex, endIndex
  );

  // handle page changes
  const handlePageChanges = (page) => {
    setCurrentPage(page);
    if (page === pageCount){
      setCurrentPage(page = 0)
    }
  };

  return (
    <div>
      <section className="w-full mx-[20px bg-app-bg">
        <div className="flex justify-center items-center gap-[24px] text-app-black-2 mb-[48px] pt-[48px] sm:text-2xl sm:font-bold">
          <button className="text-xl">Best Seller</button>
          <button className="text-xl border-b-4 border-app-orange">
            Featured
          </button>
          <button className="text-xl">New Arrival</button>
        </div>
        <div className="w-full px-[30px] flex flex-col gap-5 sm:grid sm:grid-cols-4 sm:px-[60px]">
          {currentItems?.map((product, index) => (
            <Item
              key={index}
              src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`}
              desc={product.description}
              name={product.name}
            />
          ))}
        </div>
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageChanges}
          currentPage={currentPage}
        />
      </section>
    </div>
  );
};

export default Product;
