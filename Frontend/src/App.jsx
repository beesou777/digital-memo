import React from "react";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";

import "./App.css";
import Navbar from "./globals/components/navbar/Navbar";
import Footer from "./globals/components/footer/Footer";
import { Provider } from "react-redux";
import store from "./store/store";
// import router from "./router";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";

const App = () => {
  return (
    <>
      {/* <Provider store={store}>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </Provider> */}
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
