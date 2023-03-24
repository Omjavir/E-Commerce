import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
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
      <div>
        <div className="flex justify-center">
          <img
            className="w-[100vw] sm:w-[100vw] h-[90vh]"
            src="https://m.media-amazon.com/images/I/81fl-uN9kOL._SX3000_.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-wrap justify-center -56 sm:-mt-72 -mt-24">
          {prods.map((data, i) => (
            <div className="border-2 m-5 sm:w-[25vw] w-[30vw] bg-white">
              <img
                className="object-contain w-full"
                src={data.image}
                alt={data.name}
              />
              <h3>{data.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
