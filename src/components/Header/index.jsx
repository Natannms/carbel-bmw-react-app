import React, { useState } from "react";
import logo from "../../assets/imgs/logos/logo-bmw-rio.svg";
import { TbView360 } from "react-icons/tb";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { headerStore, listCarInHeaderStore } from "../../context";
import FormCotacao from "../FormCotacao";

const Header = () => {
  const [optionFilters] = useState([
    1,
    2,
    3,
    4,
    5,
    7,
    8,
    "X",
    "Z",
    "M",
    "I",
    "Plugin-in-Hybrid",
  ]);
  const [isVisibleForm, setIsvisibleForm] = useState(false);
  const headerContext = headerStore();
  const listCarInHeaderStoreContext = listCarInHeaderStore();
  function handleChangeVisibleForm() {
    setIsvisibleForm(!isVisibleForm);
  }
  return (
    <div
      className={
        headerContext.isVisible
          ? "flex justify-between  lg:items-center lg:py-0 py-0 bg-white w-full fixed"
          : "flex justify-between  lg:items-center lg:justify-around lg:py-0 py-0 bg-white w-full"
      }
    >
      {/* left */}
      {!headerContext.isVisible && (
        <div className="">
          {/* buttons */}
          <div className="flex lg:gap-8 px-6 lg:px-0 py-4 lg:py-0">
            <a
              className="text-gray-gray666 bold btn-text-link lg:bg-black lg:text-white lg:w-165 lg:h-43 flex items-center lg:gap-2 gap-4 justify-center"
              href="tel:+552120424442"
            >
              <FaPhoneAlt size={19} className="lg:flex hidden" />
              <FaPhoneAlt size={15} className="lg:hidden flex" />
              (21) 2042-4442
            </a>
            <a
              href="https://www.press.bmwgroup.com/brazil/article/detail/T0382993PT/novo-bmw-s%C3%A9rie-7-ganha-visual-atualizado-vers%C3%A3o-100-el%C3%A9trica-e-tela-retr%C3%A1til-de-31-polegadas-para-os-ocupantes-do-banco-traseiro"
              className="uppercase hidden lg:flex text-gray-500 btn-text-link lg:bg-black lg:text-white lg:w-165 lg:h-43 items-center lg:gap-2 justify-center"
            >
              <TbView360 size={20} className="hidden lg:flex" />
              Tour Virtual
            </a>
            <a
              href="whatsapp://send?abid=+552120424442&text=Hello!"
              className="uppercase hidden lg:flex btn-text-link text-gray-500 lg:bg-[#25d366] lg:text-white lg:w-165 lg:h-43 lg:gap-2 items-center justify-center"
            >
              <FaWhatsapp size={30} className="hidden lg:flex" />
              whatsapp
            </a>
          </div>

          {/* options */}
          <ul className="lg:flex gap-12 py-2 px-2 hidden ">
            {optionFilters.map((item) => (
              <li className="cursor-pointer" onClick={()=>listCarInHeaderStoreContext.setVisible(!listCarInHeaderStoreContext.isVisible, item)}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {/* end left */}
      {/* right */}
      <div className={!headerContext.isVisible ? "px-4 py-2" : "py-1 px-12"}>
        <img
          src={logo}
          alt="IMAGEM BWM RIO"
          width={!headerContext.isVisible ? 92 : 50}
        />
      </div>
      {headerContext.isVisible && (
        <div
          className={
            !isVisibleForm
              ? "w-[255px] fixed right-0"
              : "w-[255px] fixed mt-[525px] right-0"
          }
        >
          <button
            onClick={() => {
              handleChangeVisibleForm();
            }}
            className="bg-[#1C69D4] text-white p-4 flex items-center justify-center text-center w-[255px]"
          >
            Solicite uma cotação
          </button>
          {isVisibleForm && <FormCotacao />}
        </div>
      )}
      {/* end right */}
    </div>
  );
};
export default Header;
