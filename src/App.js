import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Login from "./pages/Login";
import Beranda from "./pages/Beranda";
import DaftarBuku from "./pages/DaftarBuku";
import DetailBuku from "./pages/DetailBuku";
import Peminjaman from "./pages/Peminjaman";
import Akun from "./pages/Akun";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/beranda" element={<Beranda/>} />
          <Route path="/daftarbuku" element={<DaftarBuku/>} />
          <Route path="/peminjaman" element={<Peminjaman/>} />
          <Route path="/akun" element={<Akun/>} />
          <Route path="/detailbuku" element={<DetailBuku/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
