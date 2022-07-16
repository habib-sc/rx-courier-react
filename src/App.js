import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';

import AOS from 'aos';
import 'aos/dist/aos.css';
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
      </Routes>
      <Footer></Footer>

      {/* Merchant Login Modal start */}
      <div>
        <input type="checkbox" id="merchant-login" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative w-11/12 max-w-5xl">
            <label htmlFor="merchant-login" className="btn btn-sm btn-circle bg-primary border-primary hover:bg-primary absolute right-2 top-2">✕</label>
            {/* Modal container started  */}
            <div className="flex justify-center w-full my-10">
              <div className="lg:w-2/6 md:w-1/2 shadow-xl border rounded-lg p-8 flex flex-col text-center w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Login As Merchant</h2>
                <div className="relative mb-4">
                  <input type="email" placeholder="Email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <input type="password" placeholder="Password" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg">Login</button>
                <a href="#" className="text-xs text-primary mt-3">Forgot your password?</a>
              </div>
            </div>
            {/* Modal container ended  */}

          </div>
        </div>
      </div>
      {/* Merchant Login Modal End  */}

      {/* Merchant Register Modal start */}
      <div>
        <input type="checkbox" id="merchant-register" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative w-11/12 max-w-5xl">
            <label htmlFor="merchant-register" className="btn btn-sm btn-circle absolute right-2 top-2 bg-primary border-primary hover:bg-primary">✕</label>
            {/* Modal container started  */}
            <div className="flex justify-center w-full my-10">
              <div className="lg:w-2/6 md:w-1/2 shadow-xl border rounded-lg p-8 flex flex-col text-center w-full mt-10 md:mt-0">
                <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Join As Merchant</h2>
                <div className="relative mb-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <input type="tel" placeholder="Phone Number" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <input type="email" placeholder="Email" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <div className="relative mb-4">
                  <input type="password" placeholder="Password" className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button className="text-white bg-primary border-0 py-2 px-8 focus:outline-non rounded text-lg">Register</button>
                <a href="#" className="text-xs text-primary mt-3">Forgot your password?</a>
              </div>
            </div>
            {/* Modal container ended  */}
          </div>
        </div>
      </div>
      {/* Merchant Register Modal End  */}

    </div>
  );
}

export default App;
