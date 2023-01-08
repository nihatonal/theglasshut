import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { LanguageProvider } from "./shared/context/Language";
import CartProvider from './shared/context/CartContext';
import MainNavigation from "./shared/navigation/MainNavigation";
import Footer from "./shared/footer/Footer";

import Home from "./Home/page/Home";

import './App.css'
function App() {


  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <CartProvider>
          <BrowserRouter>
            <MainNavigation />
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/delivery/:fname" element={<Store />} />
            <Route exact path="/delivery/:fname/:pname" element={<Store />} /> */}
            </Routes>
            {/* <Contact /> */}
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
