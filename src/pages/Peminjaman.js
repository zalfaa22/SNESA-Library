import React, { useEffect, useState } from "react";
import "../css/peminjaman.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

export default function Peminjaman({ books }) {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [borrow, setBorrow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    // Mengambil data buku terpilih dari properti location.state
    if (location.state && location.state.selectedBook) {
      setSelectedBook(location.state.selectedBook);
    }
  }, [location.state]);

  // Fungsi untuk menangani pemilihan buku
  const handleSelectBook = (book) => {
    setSelectedBook(book); // Mengatur buku yang dipilih ke dalam state
    console.log("Selected Book:", book); // Periksa nilai buku yang dipilih di sini
  };

  // // State untuk menyimpan buku yang dipilih
  // const [selectedBook, setSelectedBook] = useState(null);

  // // Fungsi untuk menangani pemilihan buku
  // const handleSelectBook = (book) => {
  //   setSelectedBook(book); // Mengatur buku yang dipilih ke dalam state
  //   console.log("Selected Book:", book); // Periksa nilai buku yang dipilih di sini
  // };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [state, setState] = useState({
    borrow: [],
    book: [],
    id: "",
    code: "",
    student_name: "",
    class: "",
    absen: "",
    date_of_borrow: "",
    date_of_return: "",
    status: "",
    penalty: "",
    title: selectedBook ? selectedBook.title : "", // Mengisi title dari buku yang dipilih
    author: selectedBook ? selectedBook.author : "",
    category: selectedBook ? selectedBook.category : "",
    pict: selectedBook ? selectedBook.pict : "",
    token: "",
    action: "",
    keyword: "",
  });

  const token = localStorage.getItem("token");

  if (!token) {
    window.alert("Token not found!");
    window.location = "/";
  }

  const headerConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleBorrowBook = () => {
    // Lakukan permintaan HTTP untuk melakukan peminjaman buku
    // Menggunakan data dari selectedBook
    // Contoh:
    axios.post('http://localhost:8080/borrow/a', selectedBook)
      .then((response) => {
        console.log('Borrow successful:', response.data);
        // Tampilkan modal atau notifikasi sukses
      })
      .catch((error) => {
        console.error('Error borrowing book:', error);
        // Tampilkan pesan error kepada pengguna
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Mengubah state sesuai dengan input yang diubah
    setSelectedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
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
              <button
                className="px-3 py-2"
                // onClick={handleShowModal}
                // onClick={handleAddPeminjaman}
              >
                Pinjam
              </button>
              <Modal
                show={showModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                centered
              >
                <Modal.Body>
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
                </Modal.Body>
              </Modal>
            </div>

            {selectedBook && (
        <div className="detail-container">
          <h2 className="page-title">Peminjaman Buku</h2>
          <div className="book-info">
            <p>Judul: {selectedBook.title}</p>
            <p>Penulis: {selectedBook.author}</p>
            <p>ISBN: {selectedBook.code}</p>
            {/* Tambahkan input untuk data peminjam */}
            <input
              type="text"
              name="studentName"
              placeholder="Nama Peminjam"
              onChange={handleChange}
            />
            {/* Tambahkan tombol untuk melakukan peminjaman */}
            <button onClick={handleBorrowBook}>Pinjam Buku</button>
          </div>
        </div>
            )}
            
            <div className="deskripsi col-6">
              <div className="form mb-3 w-100">
                <p className="mb-1 fw-semibold">Judul buku</p>
                <div className="d-flex event px-2 py-2">
                <input
  type="text"
  id="title"
  name="title"
  value={state.title} // Gunakan state.title yang mengambil dari selectedBook.title
  readOnly
  className="form-control1"
/>
                </div>
              </div>

              <div className="form mb-3 w-100">
                <p className="mb-1 fw-semibold">Penulis buku</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.author}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Penulis buku ..."
                  />
                </div>
              </div>

              <div className="form mb-3">
                <p className="mb-1 fw-semibold">ISBN</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.code}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="ISBN buku ..."
                  />
                </div>
              </div>
              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Nama peminjam :</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.author}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Nama Peminjam ..."
                  />
                </div>
              </div>

              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Kelas :</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.class}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Kelas ..."
                  />
                </div>
              </div>

              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Absen :</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.absen}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Absen Peminjam ..."
                  />
                </div>
              </div>
              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Tanggal peminjaman</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.date_of_borrow}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Tanggal Pinjam ..."
                  />
                </div>
              </div>
              <div className="form mb-3">
                <p className="mb-1 fw-semibold">Tanggal pengembalian</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={state.date_of_return}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Tanggal Pengembalian ..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}