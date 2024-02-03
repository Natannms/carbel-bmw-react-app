import './App.css';
import AboveTheFoldMobile from './components/AboveTheFoldMobile';
import AboveTheFoldWeb from './components/AboveTheFoldWeb';
import BtnCotacao from './components/BtnCotacao';
import Footer from './components/Footer';
import Header from './components/Header'
import Products from './components/Products';
function App() {
  return (
    <div className="flex flex-col w-screen">
        <Header />
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
