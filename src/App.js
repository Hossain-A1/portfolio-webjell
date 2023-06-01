import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import Navber from "./components/Navber";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Social from "./components/Social";
import useSmoothScroll from "./hooks/useSmoothScroll";
import CustomCursor from "./components/CustomCursor";
import useCustomCursor from "./hooks/useCustomCursor";


const App = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  useSmoothScroll();
 useCustomCursor(innerRef, outerRef)
  return (
    <div className="app">
      <div className="sound"></div>
      <CustomCursor innerRef={innerRef} outerRef={outerRef} />
      <Navber />
      <Social />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Navber footer />
      <Footer />
    </div>
  );
};

export default App;
