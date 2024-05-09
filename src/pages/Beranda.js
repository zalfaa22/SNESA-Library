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
            <div className="d-flex align-items-center">
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
                <div className="col p-3 mx-4" style={{backgroundColor: "#0073B6"}}>
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

            <div className="d-flex align-items-center text-white fw-semibold">
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
            </div>
        </div>

        <div className="d-flex p-4">
            <div className="col p-2 bg-white">
                <div className="d-flex align-items-center">
                <img src="/assets/beranda/info.svg" alt="" className="img-fluid me-2"/>
                <p className="m-0">information</p>
                </div>
            </div>
            <div className="col mx-4 p-2 bg-white"></div>
            <div className="col p-2 bg-white"></div>
        </div>

      </div>
    </div>
  );
}
