import React from 'react'  
import { listCarInHeaderStore } from "../../context";
import SlideHeader from '../SlideHeader';

const ListCarInHeader = () => {  
      const listCarInHeaderContext = listCarInHeaderStore();
    
    return (
        <div className={listCarInHeaderContext.isVisible ? 'bg-white border border-t-gray-600/20 h-[383px] fixed w-full top-[112px] lg:flex hidden z-50' : 'hidden'} >
           <SlideHeader />
        </div>
    );  

}
export default ListCarInHeader; 
