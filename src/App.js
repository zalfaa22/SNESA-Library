import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/sidebar";
import SignUp from "./pages/SignUp"
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";
import DaftarBuku from "./pages/DaftarBuku";
import DetailBuku from "./pages/DetailBuku";
import Peminjaman from "./pages/Peminjaman";
import DaftarPeminjaman from "./pages/DaftarPeminjaman";
import DetailPeminjaman from "./pages/DetailPeminjaman";
import Akun from "./pages/Akun";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/reg" element={<SignUp/>} />
        </Routes>
      </div>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/beranda" element={<Beranda/>} />
          <Route path="/daftarbuku" element={<DaftarBuku/>} />
          <Route path="/peminjamanbuku" element={<Peminjaman/>} />
          <Route path="/daftarpeminjaman" element={<DaftarPeminjaman/>} />
          <Route path="/detailpeminjaman/:id" element={<DetailPeminjaman/>} />
          <Route path="/akun" element={<Akun/>} />
          <Route path="/detailbuku/:id" element={<DetailBuku/>} />
          <Route path="/tambahbuku" element={<AddBook/>} />
          <Route path="/editbuku/:id" element={<EditBook/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
