import axios from "axios";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function ProductData() {
      try {
        let val = await axios.get("https://fakestoreapi.com/products");
        setData(val.data);
        console.log(val.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    ProductData();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-4 gap-10 px-4 bg-gray-100">
      {data.map((item) => (
        <div
          className="bg-white h-auto border-[1px] border-gray-200 py-7 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
          key={item.id}
        >
          <div className="w-full h-auto flex items-center justify-center">
            <img
              className="w-52 h-64 object-contain"
              src={item.image}
              alt={item.title}
                  />
                  <span className="text-xs capitalize italic absolute top-2 right-2 text-gray-500">{item.category}</span>
          </div>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <h2 className="font-title-Font tracking-wide text-lg text-amazon_blue font-medium">
                {item.title.substring(0, 15)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                &#8377;{item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">
                {item.description.substring(0, 100)}....
              </p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button
              className="w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover: to-yellow-400
                 border-yellow 500 hover:border-yellow-700 active:bg-gradient-to-bl
                      active: from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
