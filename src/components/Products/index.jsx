import React, { useState } from "react";
import cars1 from "../../assets/imgs/veiculos/serie1.png";
import cars2 from "../../assets/imgs/veiculos/serie2.png";
import cars3 from "../../assets/imgs/veiculos/serie-3.png";
import cars4 from "../../assets/imgs/veiculos/serie-4.png";
import m3 from "../../assets/imgs/veiculos/m3.png";
import m5 from "../../assets/imgs/veiculos/m5.png";


const Products = () => {
  const [cars] = useState([
    {
      name: "BMW Serie1",
      src: cars1,
    },
    {
      name: "BMW Serie1",
      src: cars2,
    },
    {
      name: "BMW Serie1",
      src: m3,
    },
    {
      name: "BMW Serie1",
      src: cars4,
    },
    
    {
        name: "BMW Serie1",
        src: cars1,
      },
      {
        name: "BMW Serie1",
        src: cars2,
      },
      {
        name: "BMW Serie1",
        src: cars3,
      },
      {
        name: "BMW Serie1",
        src: m5,
      },
  ]);
  return (
    <div className="bg-white lg:py-32 px-10 flex flex-col items-center gap-20">
      <div id="title" className="text-3xl flex justify-center items-center ">
        <p>ESCOLHA SEU BMW</p>
      </div>
      <div id="cars" className="w-10/12 flex justify-between flex-wrap">
        {cars.map((item) => (
          <div className="flex flex-col gap-6">
            <img src={item.src} alt={item.name} />
            <p className="pl-6">{item.name}</p>
            <button className="bg-[#1C69D4] text-white py-4 ml-6 flex items-center justify-center text-center w-full">
              Solicite uma cotação
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
