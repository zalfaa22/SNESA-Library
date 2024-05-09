import React from "react";
import "../css/beranda.css";

export default function Beranda() {
  return (
    <div className="content beranda">
      <div className="px-3 px-md-5 py-4">
        <div className="mb-4 mb-md-5">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold page-title">Beranda</h2>
            <div className="profile-acc">
              <img src="/assets/user-icon.svg" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="p-4 bg-white rounded">
            <div className="d-md-flex align-items-center">
                <div className="col p-3" style={{backgroundColor: "#DD4C39"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">
                        <p className="total">192</p>
                        <p className="label">Judul Buku</p>
                        </div>
                        <div>
                            <img src="/assets/beranda/books-icon.svg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="col p-3 my-4 my-md-0 mx-md-4" style={{backgroundColor: "#0073B6"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">
                        <p className="total">54</p>
                        <p className="label">Peminjaman</p>
                        </div>
                        <div>
                            <img src="/assets/beranda/borrow-icon.svg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <div className="col p-3" style={{backgroundColor: "#D81A60"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="text-white">
                        <p className="total">80</p>
                        <p className="label">Pengembalian</p>
                        </div>
                        <div>
                            <img src="/assets/beranda/return-icon.svg" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="d-flex align-items-center text-white fw-semibold">
                <div className="col p-2" style={{backgroundColor: "#E78274"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div><p className="m-0 selengkapnya">Selengkapnya</p></div>
                        <div><img src="/assets/beranda/arrow-right.svg" alt="" className=" ms-2"/></div>
                    </div>
                </div>
                <div className="col p-2 mx-4" style={{backgroundColor: "#4C9DCC"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div><p className="m-0 selengkapnya">Selengkapnya</p></div>
                        <div><img src="/assets/beranda/arrow-right.svg" alt="" className=" ms-2"/></div>
                    </div>
                </div>
                <div className="col p-2" style={{backgroundColor: "#E45F90"}}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div><p className="m-0 selengkapnya">Selengkapnya</p></div>
                        <div><img src="/assets/beranda/arrow-right.svg" alt="" className=" ms-2"/></div>
                    </div>
                </div>
            </div> */}
        </div>

        <div className="d-lg-flex mt-5">
            <div className="col bg-white">
                <div className="d-flex align-items-center p-3">
                <img src="/assets/beranda/info.svg" alt="" className="img-fluid me-2"/>
                <p className="m-0 fw-semibold">information</p>
                </div>
                <div className="border mt-1 p-0"></div>
                <div className="px-3 pb-3 category">
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#00C0EF"}}>
                        <p className="m-0">Pengunjung Hari Ini</p>
                    </div>
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#F39C11"}}>
                        <p className="m-0">Peminjam Buku Hari Ini</p>
                    </div>
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#DD4C39"}}>
                        <p className="m-0">Terlambat Mengembalikan buku</p>
                    </div>
                </div>
            </div>
            <div className="col mx-lg-4 my-4 my-lg-0 bg-white">
            <div className="d-flex align-items-center p-3">
                <img src="/assets/beranda/book.svg" alt="" className="img-fluid me-2"/>
                <p className="m-0 fw-semibold">Buku Terbaru</p>
                </div>
                <div className="border mt-1 p-0"></div>
                <div className="px-3 pb-3">
                    <div className="card p-2 my-3 text-black">
                        <div className="d-flex w-100 align-items-center">
                            <div className="card" style={{width: "80px", height: "70px", backgroundImage: "url('/assets/logo.svg')",  backgroundSize: "100%",  backgroundRepeat: "no-repeat"}}></div>
                            <div className="ms-3">
                            <p className="text-uppercase judul">pendidikan pancasila dan kewarganegaraan</p>
                            <p className="text-uppercase author">Ida Suwardi, Luluk Puspita</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-2 my-3 text-black">
                    <div className="d-flex w-100 align-items-center">
                            <div className="card" style={{width: "80px", height: "70px", backgroundImage: "url('/assets/logo.svg')",  backgroundSize: "100%",  backgroundRepeat: "no-repeat"}}></div>
                            <div className="ms-3">
                            <p className="text-uppercase judul">pendidikan pancasila dan kewarganegaraan</p>
                            <p className="text-uppercase author">Ida Suwardi, Luluk Puspita</p>
                            </div>
                        </div>
                    </div>
                    <div className="card p-2 my-3 text-black">
                    <div className="d-flex w-100 align-items-center">
                            <div className="card" style={{width: "80px", height: "70px", backgroundImage: "url('/assets/logo.svg')",  backgroundSize: "100%",  backgroundRepeat: "no-repeat"}}></div>
                            <div className="ms-3">
                            <p className="text-uppercase judul">pendidikan pancasila dan kewarganegaraan</p>
                            <p className="text-uppercase author">Ida Suwardi, Luluk Puspita</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col bg-white">
            <div className="d-flex align-items-center p-3">
                <img src="/assets/beranda/info.svg" alt="" className="img-fluid me-2"/>
                <p className="m-0 fw-semibold">Jenis Buku</p>
                </div>
                <div className="border mt-1 p-0"></div>
                <div className="px-3 pb-3 category">
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#00A65A"}}>
                        <p className="m-0">Ensiklopedia</p>
                    </div>
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#00C0EF"}}>
                        <p className="m-0">Referensi</p>
                    </div>
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#F39C11"}}>
                        <p className="m-0">Novel</p>
                    </div>
                    <div className="card py-3 my-3 px-3 text-white" style={{backgroundColor: "#DD4C39"}}>
                        <p className="m-0">Komik</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}
