import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
