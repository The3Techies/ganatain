import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import NaveBar from './Components/NaveBar';
import Home from './Pages/HomePage/Home';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Achievement from './Pages/AchievementPage/Achievement';
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
    <div className=' font-mono'>
      <BrowserRouter>
        <ScrollToTop />
        <NaveBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Achievement" element={<Achievement />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App