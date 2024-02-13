import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NaveBar from './Components/NaveBar';
import Home from './Pages/HomePage/Home';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import ContactUs from './Pages/ContactUsPage/ContactUs';
import Footer from './Components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};



const App = () => {
  return (
    <div >
      <BrowserRouter>
        <ScrollToTop />
        <NaveBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App