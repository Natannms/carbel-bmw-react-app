import React from 'react'  
import banner from '../../assets/imgs/banners/desktop.jpg'
import FormCotacao from '../FormCotacao';
const AboveTheFoldWeb = () => {  

    return (
        // <div
        //     style={{ backgroundImage: `url(${banner})`}}
        //     className='bg-center bg-contain h-screen items-center justify-center bg-no-repeat hidden lg:flex'
        // >
        // </div>
        

<section style={{ backgroundImage: `url(${banner})`}} 
    className="bg-cover bg-no-repeat bg-gray-700 hidden lg:flex">
    <div className="lg:py-24 px-72 flex justify-end w-full">
        <FormCotacao />
    </div>
</section>

    );  

}
export default AboveTheFoldWeb; 
