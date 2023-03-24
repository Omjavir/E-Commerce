import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [prods, setProds] = useState([]);

  const getCategories = async () => {
    const { data } = await axios.get(
      "https://api.escuelajs.co/api/v1/categories"
    );
    console.log("data", data);
    setProds(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-center items-center content-center">
        <div className="w-[100vw] ml-0 sm:ml-10 sm:w-[60vw]">
          <img
            className="p-2 rounded-xl"
            src="https://t3.ftcdn.net/jpg/03/65/52/86/360_F_365528663_miV08QzGGVLqhRRQVQ4B9C9PtoTRJiSv.jpg"
            alt=""
          />
        </div>
        <div className=" w-[100vw] sm:w-[40vw]">
          <h3 className="font-extrabold text-transparent m-4 text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Shop by Categories :
          </h3> 
          <div className="flex flex-wrap justify-center">
            {prods
              .map((data, i) => (
                <div key={i} className="m-2 sm:w-[16vw] w-[40vw]">
                  <img
                    className="sm:w-[15vw] sm:h-[20vw] rounded-md"
                    src={data.image}
                    alt={data.name}
                  />
                  <h3>{data.name}</h3>
                </div>
              ))
              .slice(0, 4)}
          </div>
        </div>
      </div>
      <div className="flex justify-center m-5">
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:-translate-y-1 hover:scale-100 transition ease-in-out delay-200 text-white p-2 rounded-md">
          View all Products
        </button>
      </div>
    </>
  );
};

export default App;
