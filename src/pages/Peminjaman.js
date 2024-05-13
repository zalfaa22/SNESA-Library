import React, { useEffect, useState } from "react";
import "../css/peminjaman.css";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Peminjaman() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [borrow, setBorrow] = useState(null);
  const [state, setState] = useState({
    borrow: [],
    book: [],
    id: "",
    code: "",
    student_name: "",
    class: "",
    absen: "",
    date_of_borrow: new Date().toISOString().split('T')[0], // Tanggal hari ini
    date_of_return: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 hari dari hari ini
    status: "",
    penalty: "",
    title: "",
    author: "",
    category: "",
    pict: "",
    token: "",
    action: "",
    keyword: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          window.alert('Token not found!');
          window.location = '/';
          return;
        }

        const headerConfig = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const url = `http://localhost:8080/book/${id}`;
        const response = await axios.get(url, headerConfig);
        const bookData = response.data;
        console.log(bookData);
        setBook(bookData.data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    window.location.href = "/daftarpeminjaman";
  };

  const token = localStorage.getItem('token');

  if (!token) {
    window.alert("Token not found!");
    window.location = "/";
  }

  const headerConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddPeminjaman = () => {
    const data = {
      code: book.code,
      student_name: state.student_name,
      class: state.class,
      absen: state.absen,
      date_of_borrow: state.date_of_borrow,
      date_of_return: state.date_of_return,
    };
  
    axios
      .post("http://localhost:8080/borrow/add", data, headerConfig)
      .then((response) => {
        setShowModal(true);
      })
      .catch((error) => {
        console.error("Error borrowing book:", error);
      });
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
                  src={"http://localhost:8080/foto/" +  book.pict}
                  alt="cover book"
                  className="img-fluid object-fit-cover"
                />
              </div>
              <button
                className="px-3 py-2"
                // onClick={handleShowModal}
                // onClick={handleAddPeminjaman}
                onClick={handleAddPeminjaman}
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
                    className="px-4 py-2 d-flex mb-3 ms-auto cursor-pointer"
                    onClick={handleCloseModal}
                  >
                    Ok
                  </button>
                </Modal.Body>
              </Modal>
            </div>
            {/* <div className="desc-book col-12 col-md-6"> */}
            {/* <div className="deskripsi row m-0"> */}
            <div className="deskripsi col-6">
              <div className="form mb-3 w-100">
                <p className="mb-1 fw-semibold">Judul buku</p>
                <div className="d-flex event px-2 py-2">
                  <input
                    type="text"
                    id="author"
                    name="author"
                    value={book.title}
                    onChange={handleChange}
                    className="form-control1"
                    placeholder="Judul buku ..."
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
                    value={book.author}
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
                    value={book.code}
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
                    id="student_name"
                    name="student_name"
                    value={state.student_name}
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
                    id="class"
                    name="class"
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
                    id="absen"
                    name="absen"
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
                    id="date_of_borrow"
                    name="date_of_borrow"
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
                    id="date_of_return"
                    name="date_of_return"
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
