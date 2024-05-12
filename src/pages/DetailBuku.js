import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/detailbuku.css";

export default function DetailBuku() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

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

  return (
    <>
      <div className="content">
        <div className="detailBuku">
          <div className="px-3 px-md-5 py-4">
            <div className="mb-4 mb-md-5">
              <div className="d-flex justify-content-between">
                <h2 className="fw-bold page-title">Detail Buku</h2>
                <div className="profile-acc">
                  <img src="/assets/user-icon.svg" className="img-fluid" />
                </div>
              </div>
            </div>

            {/* Detail */}
            <a href="/daftarbuku">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </a>
            <div className="detail-container d-flex gap-4 m-0 bg-white px-4 py-4 w-100">
              <img
                src={"http://localhost:8080/foto/" +  book.pict}
                alt=""
                className="img-fluid col-5 object-fit-cover"
              />
              <div className="desc-book col-12 col-md-6">
                <h3 className="mb-4 fw-semibold">{book.title}</h3>
                <div className="sub-desc d-flex justify-content-between py-3">
                  <p className="nama-kolom p-0 m-0 fw-bold">ISBN</p>
                  <p className="isi p-0 m-0 fw-normal">{book.code}</p>
                </div>
                <div className="sub-desc d-flex justify-content-between py-3">
                  <p className="nama-kolom p-0 m-0 fw-bold">Penulis</p>
                  <p className="isi p-0 m-0 fw-normal">{book.author}</p>
                </div>
                <div className="sub-desc d-flex justify-content-between py-3">
                  <p className="nama-kolom p-0 m-0 fw-bold">Penerbit</p>
                  <p className="isi p-0 m-0 fw-normal">Mizan</p>
                </div>

                <div className="sub-desc d-flex justify-content-between py-3">
                  <p className="nama-kolom p-0 m-0 fw-bold">Tahun Terbit</p>
                  <p className="isi p-0 m-0 fw-normal">2025</p>
                </div>
                <div className="sub-desc d-flex justify-content-between py-3">
                  <p className="nama-kolom p-0 m-0 fw-bold">Jenis Buku</p>
                  <p className="isi p-0 m-0 fw-normal">{book.category}</p>
                </div>

                <div className="action row mx-0 mb-3 mt-5 gap-2 ">
                  <button className="edit-book col-6 px-1 py-2 d-flex gap-1 align-items-center justify-content-center" onClick={() => window.location = `/editbuku/${book.id}`}>
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
                  <button className="delete-book col px-1 py-2 d-flex gap-1 align-items-center justify-content-center">
                    <i class="bi bi-trash3-fill"></i>
                    <p className="p-0 m-0 fw-semibold">Delete Book</p>
                  </button>
                </div>
                <button className="borrow w-100 py-2">
                  <a
                    href="/peminjamanbuku"
                    className="text-decoration-none fw-semibold text-white"
                  >
                    Borrow
                  </a>
                </button>
              </div>
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

            {/* Borrow History */}
            {/* <div className="bagianBorrowHistory">
              <h2 className="fw-bold mb-3">Borrow History</h2>
              <table class="table custom-table">
                <thead className="table-color">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Book Title</th>
                    <th scope="col">Borrowing Date</th>
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="">
                    <td className="" style={{ verticalAlign: 'middle' }}>Alexander Wolfe</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>Not Here to be Liked</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>02-05-2024</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>3 minutes left</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                      <button className="px-2 py-1">View Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="" style={{ verticalAlign: 'middle' }}>Steve Rogers</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>Not Here to be Liked</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>02-05-2024</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>3 minutes left</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                      <button className="px-2 py-1">View Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="" style={{ verticalAlign: 'middle' }}>Jeongwoo</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>Not Here to be Liked</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>02-05-2024</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>Returned</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                      <button className="px-2 py-1">View Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}