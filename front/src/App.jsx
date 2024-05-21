
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLAyout from "./layout/MainLAyout";
import Home from "./pages/user/Home";
import Abou from "./pages/user/Abou";
import AdminLayout from "./layout/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import AdminAdd from "./pages/admin/AdminAdd";
import MainProvider from "./context/MainProvider";
import BasketPage from "./pages/user/BasketPage";
import Detail from "./pages/user/Detail";
import WishProvider from "./context/WishProvider";
import WishlistPage from "./pages/user/WishlistPage";
import {  HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
    <HelmetProvider>


      <WishProvider>
      <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLAyout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Abou />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="wishlist" element={<WishlistPage />} />


        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="/admin/adminadd" element={<AdminAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
       </MainProvider>
      </WishProvider>
      </HelmetProvider>
    </>
  )
}

export default App
