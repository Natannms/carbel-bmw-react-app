import React, { useState } from "react";
import cars1 from "../../assets/imgs/veiculos/serie1.png";
import cars2 from "../../assets/imgs/veiculos/serie2.png";
import { listCarInHeaderStore } from "../../context";
import { motion } from "framer-motion";
import { GrFacebookOption } from "react-icons/gr";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const SlideHeader = () => {
  const listCarInHeaderContext = listCarInHeaderStore();

  const [cars, setCars] = useState([
    [{
        name:'BMW Serie1',
        src:cars1
    }, {
        name:'BMW Serie1',
        src:cars1
    }, {
        name:'BMW Serie1',
        src:cars1
    }, {
        name:'BMW Serie1',
        src:cars1
    }],
  ]);

  return (
    <motion.div id="carousel" className="items-center flex justify-center w-full">
      <motion.div id="inner" className="flex  p-2 gap-2">
        {cars[0].map((item, index) => (
          <motion.div key={index} className="p-[14px] border border-white">
            <img
              src={item.src}
              alt={`carro-${index}`}
              className="w-full"
            />
            <p className="pl-6">{item.name}</p>
            <p className="flex gap-4 pl-6"> Compartilhe: 
                <a href="facbook.com"><GrFacebookOption size={20} color="#000"/></a>
                <a href="#"><FaWhatsapp size={20} color="#000"/></a>
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SlideHeader;
