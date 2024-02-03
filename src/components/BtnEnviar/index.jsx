import React from 'react'  

const BtnEnviar = ({isVisible}) => {  

    return (
        <button className={isVisible ?'bg-[#1C69D4] text-white py-3 lg:flex items-center justify-center text-center':  'bg-[#1C69D4] text-white py-3 hidden lg:flex items-center justify-center text-center' }>
           Enviar
        </button>
    );  

}
export default BtnEnviar; 
