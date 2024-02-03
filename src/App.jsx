import { useState } from 'react';
import './App.css';
import AboveTheFoldMobile from './components/AboveTheFoldMobile';
import AboveTheFoldWeb from './components/AboveTheFoldWeb';
import BtnCotacao from './components/BtnCotacao';
import Footer from './components/Footer';
import Header from './components/Header'
import Products from './components/Products';
import ListCarInHeader from './components/ListCarInHeader';
function App() {
  return (
    <div className="flex flex-col w-screen">
        <Header />
        <ListCarInHeader />
        <BtnCotacao />        
        <AboveTheFoldWeb />
        <AboveTheFoldMobile />

        {/* products */}
        <Products />
        {/* fim products */}

        {/* footer */}
        {/* <Footer /> */}
        {/* fim footer */}
    </div>
  );
}

export default App;
