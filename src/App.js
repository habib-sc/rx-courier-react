import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Coverage from "./components/Pages/Coverage";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";
AOS.init()

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/coverage' element={<Coverage></Coverage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
