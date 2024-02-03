import React from 'react'  
import banner from '../../assets/imgs/banners/mobile-banner.png'
const AboveTheFoldMobile = () => {  

    return (
        <div
            style={{ backgroundImage: `url(${banner})`}}
            className='bg-contain h-screen bg-no-repeat flex lg:hidden'
        >
        </div>
    );  

}
export default AboveTheFoldMobile; 
