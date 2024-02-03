import React, { useEffect, useState } from "react";
import banner from "../../assets/imgs/banners/desktop.jpg";
import FormCotacao from "../FormCotacao";
import { headerStore } from '../../context';

const AboveTheFoldWeb = () => {
  const headerContext = headerStore();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY || document.documentElement.scrollTop;
      if(position >= 185){
          headerContext.setVisible(true)
        }else{
          headerContext.setVisible(false)
      }
    };

    // Adiciona um ouvinte de evento de rolagem
    window.addEventListener("scroll", handleScroll);

    // Remove o ouvinte de evento ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-cover bg-no-repeat bg-gray-700 hidden lg:flex"
    >
      <div className={headerContext.isVisible ? "lg:py-96 px-72 flex justify-end w-full" : "lg:py-24 px-72 flex justify-end w-full"}>
            {!headerContext.isVisible &&
                <FormCotacao />
            }
      </div>
    </section>
  );
};
export default AboveTheFoldWeb;
