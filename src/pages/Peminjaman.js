import React, { useEffect, useState } from "react";
import "../css/peminjaman.css";
import Modal from "react-bootstrap/Modal";

export default function Peminjaman() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="content">
        <div className="px-3 px-md-5 py-4">
          <div className="mb-4 mb-lg-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Peminjaman Buku</h2>
              <div className="profile-acc">
                <img src="/assets/user-icon.svg" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="detail-container d-flex gap-4 m-0 bg-white px-4 py-4 w-100">
            <div className="cover-section col">
              <div className="gambar-container p-4 mb-5">
                <img
                  src=""
                  alt="cover book"
                  className="img-fluid object-fit-cover"
                />
              </div>
              <button className="px-3 py-2" onClick={handleShowModal}>
                Pinjam
              </button>
              <Modal
                show={showModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                centered
              >
                {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
                <Modal.Body>
                  {/* <div className="d-flex-col"> */}
                  <img
                    src="./assets/daftarBuku/done.svg"
                    alt=""
                    className="img-fluid mb-3 mx-auto d-flex"
                  />
                  <h3 className="fw-bolder text-center mb-2">Succesfully</h3>
                  <h5 className="fw-normal text-center">
                    buku berhasil dipinjam
                  </h5>
                  <button
                    className="px-4 py-2 d-flex ms-auto cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    Ok
                  </button>
                  {/* </div> */}
                </Modal.Body>
              </Modal>
            </div>
            {/* <div className="desc-book col-12 col-md-6"> */}
            {/* <div className="deskripsi row m-0"> */}
            <div className="deskripsi col-6">
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
              {/* </div> */}
              {/* <div className="col-5"> */}
              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Nama peminjam :</p>
                <div className="d-flex event px-2 py-2">
                  <p className="m-0">aaa</p>
                </div>
              </div>

              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Kelas :</p>
                <div className="d-flex event px-2 py-2">
                  <p className="m-0">aaa</p>
                </div>
              </div>

              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Nohp :</p>
                <div className="d-flex event px-2 py-2">
                  <p className="m-0">aaa</p>
                </div>
              </div>
              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Tanggal peminjaman</p>
                <div className="d-flex event px-2 py-2">
                  <p className="m-0">aaa</p>
                </div>
              </div>
              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Tanggal pengembalian</p>
                <div className="d-flex event px-2 py-2">
                  <p className="m-0">aaa</p>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
            {/* <div className="bagian-kanan col-4 m-0 p-0">
                <div className="ket d-flex gap-2 mb-3">
                  <div className="total-books bg-white w-100 py-2 px-3">
                    <p className="fw-semibold m-0 p-0">Total Books</p>
                    <h4>36</h4>
                  </div>
                  <div className="available bg-white w-100 py-2 px-3">
                    <p className="fw-semibold m-0 p-0">Available</p>
                    <h4>22</h4>
                  </div>
                </div>
                <div className="action d-flex gap-2 mb-3">
                  <button className="edit-book px-1 py-2 w-100 d-flex gap-1 align-items-center justify-content-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                    <p className="p-0 m-0 fw-semibold">Edit Book</p>
                  </button>
                  <button className="delete-book px-1 w-100 py-2 d-flex gap-1 align-items-center justify-content-center">
                    <img src="./assets/daftarbuku/trash-white.svg" alt="" />
                    <p className="p-0 m-0 fw-semibold">Delete Book</p>
                  </button>
                </div>
                <button className="w-100 py-2">Borrow</button>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
