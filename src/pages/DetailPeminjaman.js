import React from "react";
import { useParams, Link } from "react-router-dom";
import { daftarBuku } from "./DaftarBuku";
import "../css/detailpeminjaman.css";

export default function DetailPeminjaman() {
  const { id } = useParams();
  const bukuId = id;
  const buku = daftarBuku.find((item) => item.id === bukuId);
  return (
    <>
      <div className="content detail-peminjaman">
        <div className="px-3 px-md-5 py-4">
          <div className="mb-4 mb-lg-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Detail Peminjaman Buku</h2>
              <div className="profile-acc">
                <img src="/assets/user-icon.svg" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* CONTENT  */}
          <div className="bg-white p-4 rounded-4">
            <div className="top d-flex justify-content-between mb-4">
              <p className="m-0 d-flex gap-2">
                Kode Buku :<span>9781474989732</span>
              </p>
              <p className="m-0 d-flex gap-2">
                Status :
                <span>
                  <div className="d-flex align-items-center gap-2">
                    <div className="bulat"></div>
                    <p className="m-0">overdue, 2 days</p>
                  </div>
                </span>
              </p>
            </div>
            <div className="ket row m-0 gap-2 mb-5">
              <div className="col card-ket p-3 text-white">
                <p className="m-0 nama fw-semibold mb-2">
                  Tanggal Pengembalian
                </p>
                <p className="m-0 isi">28 Novemmber 2023</p>
              </div>
              <div className="col card-ket p-3 text-white">
                <p className="m-0 nama fw-semibold mb-2">
                  Tanggal Pengembalian
                </p>
                <p className="m-0 isi">28 Novemmber 2023</p>
              </div>
              <div className="col card-ket p-3 text-white">
                <p className="m-0 nama fw-semibold mb-2">
                  Tanggal Pengembalian
                </p>
                <p className="m-0 isi">28 Novemmber 2023</p>
              </div>
            </div>
            <div className="deskripsi row m-0 gap-4">
              <div className="col-5  p-0">
                <div className="form mb-3 w-100">
                  <p className="mb-1 fw-semibold">Judul buku</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">aaa</p>
                  </div>
                </div>

                <div className="form mb-3 w-100">
                  <p className="mb-1 fw-semibold">Penulis buku</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">aaa</p>
                  </div>
                </div>

                <div className="form mb-3">
                  <p className="mb-1 fw-semibold">ISBN</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">aaa</p>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="form mb-3">
                  <p className="mb-1 fw-semibold">Nama peminjam</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">aaa</p>
                  </div>
                </div>

                <div className="form mb-3">
                  <p className="mb-1 fw-semibold">Kelas</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">aaa</p>
                  </div>
                </div>

                <div className="form">
                  <p className="mb-1 fw-semibold">Nohp:</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">aaa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
