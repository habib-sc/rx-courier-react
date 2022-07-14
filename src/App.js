import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
import Pricing1 from "./components/Shared/Pricing/Pricing1";
import Pricing2 from "./components/Shared/Pricing/Pricing2";
import Pricing3 from "./components/Shared/Pricing/Pricing3";
AOS.init()

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/pricing1' element={<Pricing1></Pricing1>}></Route>
          <Route path='/pricing2' element={<Pricing2></Pricing2>}></Route>
          <Route path='/pricing3' element={<Pricing3></Pricing3>}></Route>
        </Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
