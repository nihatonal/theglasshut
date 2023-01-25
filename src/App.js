import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import { LanguageProvider } from "./shared/context/Language";
import CartProvider from './shared/context/CartContext';
import MainNavigation from "./shared/navigation/MainNavigation";
import Footer from "./shared/footer/Footer";
import ScrollButton from "./shared/UI/ScrollButton";
import ScrollToTop from './shared/util/ScrollToTop';

import Home from "./Home/page/Home";
import TheHut from "./TheHut/page/TheHut";
import TheArea from "./TheArea/page/TheArea";
import AboutUs from "./AboutUs/page/AboutUs";
import Faq from "./Faq/page/Faq";
import Booking from "./Booking/page/Booking";
import Payment from "./Booking/page/Payment";

import './App.css'
function App() {


  return (
    <div className="root-wrapper">
      <LanguageProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop>
              <MainNavigation />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/thehut" element={<TheHut />} />
                <Route exact path="/thearea" element={<TheArea />} />
                <Route exact path="/aboutus" element={<AboutUs />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="/booking" element={<Booking />} />
                <Route exact path="/booking/payment" element={<Payment />} />
                <Route exact path="*" element={<Home />} />
              </Routes>
              {/* <Contact /> */}
              <Footer />
            </ScrollToTop>
            <ScrollButton />
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
