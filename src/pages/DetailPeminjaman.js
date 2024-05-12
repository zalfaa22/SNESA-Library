import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/detailpeminjaman.css";
import axios from "axios";

export default function DetailPeminjaman() {
  const { id } = useParams();
  const [borrow, setBorrow] = useState(null);
  const [book, setBook] = useState(null);
  // const buku = daftarBuku.find((item) => item.id === bukuId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          window.alert("Token not found!");
          window.location = "/";
          return;
        }

        const headerConfig = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const borrowUrl = `http://localhost:8080/borrow/${id}`;
        const borrowResponse = await axios.get(borrowUrl, headerConfig);
        const borrowData = borrowResponse.data;
        setBorrow(borrowData.data);

        // Dapatkan book_id dari data borrow
        const bookId = borrowData.data.id;
        if (bookId) {
          const bookUrl = `http://localhost:8080/book/${bookId}`;
          const bookResponse = await axios.get(bookUrl, headerConfig);
          const bookData = bookResponse.data;
          setBook(bookData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!borrow || !book) {
    return <div>Loading...</div>;
  }

  const getStatusColor = (status) => {
    if (status.toLowerCase() === 'dipinjam') {
      return 'yellow'; // Warna kuning untuk status 'dipinjam'
    } else if (status.toLowerCase() === 'dikembalikan') {
      return 'green'; // Warna merah untuk status 'telat'
    } else {
      return 'black'; // Warna default jika status tidak cocok dengan kondisi di atas
    }
  };
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
                Kode Buku :<span>{book.code}</span>
              </p>
              <p className="m-0 d-flex gap-2">
                Status :
                <span>
                  <div className="d-flex align-items-center gap-2">
                      <div className="bulat" style={{ backgroundColor: getStatusColor(borrow.status) }}></div>
                      <p className="m-0">{borrow.status}</p>
                  </div>
                </span>
              </p>
            </div>
            <div className="ket row m-0 gap-2 mb-5">
              <div className="col card-ket p-3 text-white">
                <p className="m-0 nama fw-semibold mb-2">
                  Tanggal Pengembalian
                </p>
                <p className="m-0 isi">{borrow.date_of_borrow}</p>
              </div>
              {/* <div className="col card-ket p-3 text-white">
                <p className="m-0 nama fw-semibold mb-2">
                  Tanggal Pengembalian
                </p>
                <p className="m-0 isi">{borrow.date_of_return}</p>
              </div> */}
              <div className="col card-ket p-3 text-white">
                <p className="m-0 nama fw-semibold mb-2">
                  Tanggal Pengembalian
                </p>
                <p className="m-0 isi">{borrow.date_of_return}</p>
              </div>
            </div>
            <div className="deskripsi row m-0 gap-4">
              <div className="col-5  p-0">
                <div className="form mb-3 w-100">
                  <p className="mb-1 fw-semibold">Judul buku</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">{book.title}</p>
                  </div>
                </div>

                <div className="form mb-3 w-100">
                  <p className="mb-1 fw-semibold">Penulis buku</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">{book.author}</p>
                  </div>
                </div>

                <div className="form mb-3">
                  <p className="mb-1 fw-semibold">ISBN</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">{borrow.code}</p>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="form mb-3">
                  <p className="mb-1 fw-semibold">Nama peminjam</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">{borrow.student_name}</p>
                  </div>
                </div>

                <div className="form mb-3">
                  <p className="mb-1 fw-semibold">Kelas</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">{borrow.class}</p>
                  </div>
                </div>

                <div className="form">
                  <p className="mb-1 fw-semibold">No absen:</p>
                  <div className="d-flex event px-2 py-2">
                    <p className="m-0">{borrow.absen}</p>
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
