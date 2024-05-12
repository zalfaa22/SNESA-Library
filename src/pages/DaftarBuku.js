import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/daftarbuku.css";

export default function DaftarBuku() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBuku, setFilteredBuku] = useState([]);

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

        const url = 'http://localhost:8080/book/getAll';
        const response = await axios.get(url, headerConfig);
        const books = response.data.data;

        const filteredBooks = books.filter((buku) => {
          if (selectedCategory === '' || selectedCategory.toLowerCase() === 'semua') {
            return true;
          } else {
            return buku.category.toLowerCase() === selectedCategory.toLowerCase();
          }
        }).filter((buku) => {
          if (searchQuery.trim() === '') {
            return true;
          } else {
            return buku.isbn.toLowerCase().includes(searchQuery.toLowerCase());
          }
        });

        setFilteredBuku(filteredBooks);
      } catch (error) {
        console.error('Error fetching book list:', error);
        // Tambahkan penanganan error di sini jika diperlukan
      }
    };

    fetchData();
  }, [selectedCategory, searchQuery]);

  const handleCategoryBukuClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchClick = () => {
    // Tambahkan logika jika diperlukan
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Search Query:", searchQuery);
    // Tambahkan logika pencarian jika diperlukan
  };

  return (
    <div className="content daftarBuku">
      <div className="px-3 px-md-5 py-4">
        <div className="mb-4 mb-md-5">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold page-title">Daftar Buku</h2>
            <div className="profile-acc">
              <img src="/assets/user-icon.svg" className="img-fluid" alt="User Icon" />
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <div className="navbar d-flex justify-between mb-4">
          <div className="navbar-kiri d-flex gap-2">
            <div
              className="search-container bg-transparent d-flex px-3 py-2 gap-2 align-items-center"
              onClick={handleSearchClick}
            >
              <img
                src="./assets/daftarbuku/Search.svg"
                className="img-fluid"
                alt="Search Icon"
              />
              <form onSubmit={handleSearchSubmit} className="m-0 p-0">
                <input
                  type="text"
                  className="m-0 p-0 fw-semibold bg-transparent border-0"
                  placeholder="Cari berdasarkan kode"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            </div>

            {/* Dropdown Kategori */}
            <div className="dropdown m-0 p-0 d-flex align-items-center">
              <a
                className="btn dropdown-toggle fw-semibold gap-2 d-flex align-items-center"
                href="#"
                role="button"
                onClick={() => handleCategoryBukuClick("")}
              >
                <img src="./assets/daftarbuku/Sort.svg" alt="Sort Icon" />
                {` ${selectedCategory}`}
              </a>
              <ul className="dropdown-menu m-0 p-0">
                <li>
                  <a
                    className="dropdown-item m-0"
                    href="#"
                    onClick={() => handleCategoryBukuClick("")}
                  >
                    Semua
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategoryBukuClick("Referensi")}
                  >
                    Referensi
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategoryBukuClick("Novel")}
                  >
                    Novel
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategoryBukuClick("Ensiklopedia")}
                  >
                    Ensiklopedia
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleCategoryBukuClick("Komik")}
                  >
                    Komik
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Tombol Tambah Buku */}
          <div className="navbar-kanan">
            <Link to="/tambahbuku">
            <button className="add-container d-flex px-3 py-2 gap-2 align-items-center">
              <img
                src="./assets/daftarbuku/add.svg"
                className="img-fluid"
                alt="Add Icon"
              />
              Tambah Buku
            </button>
            </Link>
          </div>
        </div>

        {/* CARD */}
        <div className="content-container d-flex flex-wrap gap-4">
          {filteredBuku.map((buku, index) => (
            <div key={buku.id} className="card-container px-4 py-4">
              <img src={"http://localhost:8080/foto/" +  buku.pict} alt="Book Cover" className="d-flex mx-auto img-fluid" />
              <div className="desc-container mt-3">
                <h3 className="p-0 m-0 fw-bold mb-2">{buku.title}</h3>
                <div className="desc d-flex align-items-center gap-2 mb-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .175.032l.179-.178a.5.5 0 0 0 .11-.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                  </svg>
                  <p className="p-0 m-0 fw-semibold">{buku.author}</p>
                </div>
                <div className="desc d-flex align-items-center gap-2">
                  <img src="./assets/daftarBuku/Calendar.svg" alt="Calendar Icon" />
                  <p className="p-0 m-0 fw-semibold">{buku.code}</p>
                </div>
              </div>
              <div className="card-bottom">
                <Link
                    to={{
                      pathname: `/detailbuku/${buku.id}`,
                      state: { selecteditem: buku },
                    }}
                    className="text-dark"
                  >
                <button className="detail py-1 px-3 mt-4 bg-transparent">
                    <p className="text-start text-decoration-none m-0 p-0">Detail</p>
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}