import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Topbar from "./Components/Layouts/Topbar";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import HomeComponents from "./Components/Pages/Home/HomeComponents";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Topbar/>
      <Header/>
        <Routes>
          <Route path="/" element={<HomeComponents/>} />
        </Routes>
       <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
