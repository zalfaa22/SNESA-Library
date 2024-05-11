import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/daftarpeminjaman.css";
import { daftarBuku } from "./DaftarBuku";
import { Link, useLocation } from "react-router-dom";

export default function Peminjaman() {
  const [categoryBuku, setCategoryBuku] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleCategoryBukuClick = (category) => {
    setCategoryBuku(category);
    setSelectedCategory(category === "" ? "Semua" : category);
  }

    const handleSearchClick = () => {
      setSearchMode(true);
    };

    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
      event.preventDefault();
      console.log("Search Query:", searchQuery);
    };
  
  

    const filteredBuku = daftarBuku
      .filter((buku) => {
        if (searchQuery.trim() === "") {
          return true;
        } else {
          return buku.isbn.toLowerCase().includes(searchQuery.toLowerCase());
        }
      });

    return (
      <div className="content" >
        <div className="px-3 px-md-5 py-4">
          <div className="mb-4 mb-lg-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Daftar Peminjaman Buku</h2>
              <div className="profile-acc">
                <img src="/assets/user-icon.svg" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="">
            <div className="navbar row mb-4 mx-0">
              <div
                // variant="outline-success-none"
                className="search-container col-4 bg-transparent d-flex px-3 py-2 gap-2 align-items-center"
                onClick={handleSearchClick}
              >
                <img
                  src="./assets/daftarbuku/Search.svg"
                  className="img-fluid"
                  alt=""
                />
                <form
                  onSubmit={handleSearchSubmit}
                  className="m-0 p-0">
                  <input
                    type="text"
                    className="m-0 p-0 fw-semibold bg-transparent border-0"
                    placeholder="Cari berdasarkan kode"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </form>
                {/* <input
                    type="text"
                    className="m-0 p-0 fw-semibold bg-transparent border-0"
                    placeholder="Cari berdasarkan kode"
                  /> */}
              </div>
            </div>

            <div className="table-pinjam">
              <table class="table custom-table bg-transparent">
                <thead className="table-color ">
                  <tr>
                    <th className="text-white fw-semibold" scope="col">Nama</th>
                    <th className="text-white fw-semibold" scope="col">Judul Buku</th>
                    <th className="text-white fw-semibold" scope="col">ISBN</th>
                    <th className="text-white fw-semibold" scope="col">Tgl Peminjaman</th>
                    <th className="text-white fw-semibold" scope="col">Status</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="">
                    {filteredBuku.map((buku, index) => (
                    <>
                  <tr className="">
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>Alexander Wolfe</td>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>Not Here to be Liked</td>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>123</td>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>28, Nov 2023</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                      <div className="d-flex align-items-center gap-2">
                      <div className="bulat"></div>
                        <p className="m-0">overdue, 2 days</p>
                        </div>
                    </td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                            <button className="px-2 py-1 fw-semibold">
                            <Link
                    to={{
                      pathname: `/detailpeminjaman/${buku.id}`,
                      state: { selecteditem: buku },
                    }}
                    className="text-dark"
                  >
                    <p className="text-start text-decoration-none m-0 p-0">
                        {/* {item.lihat} */}
                        detail
                    </p>
                  </Link>
                      </button>
                    </td>
                  </tr>
                    </>
                     ))}
                  <tr>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>Steve Rogers</td>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>Not Here to be Liked</td>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>4</td>
                    <td className="fw-semibold" style={{ verticalAlign: 'middle' }}>28, Nov 2023</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>3 minutes left</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                      <button className="px-2 py-1 fw-semibold">detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td className="" style={{ verticalAlign: 'middle' }}>Jeongwoo</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>Not Here to be Liked</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>123</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>28, Nov 2023</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>Returned</td>
                    <td className="" style={{ verticalAlign: 'middle' }}>
                      <button className="px-2 py-1">detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
