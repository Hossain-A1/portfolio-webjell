import { Route, Routes } from "react-router-dom";
import Navber from './components/Navber'
import Home from "./components/Home";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="app">
      <Navber/>
      <div className="sound"></div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;