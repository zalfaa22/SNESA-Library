import React, { useState } from "react";
import "../css/daftarbuku.css";

export default function DaftarBuku() {
  const [categoryBuku, setCategoryBuku] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMode, setSearchMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const handleCategoryBukuClick = (category) => {
    setCategoryBuku(category);
    setSelectedCategory(category === "" ? "Semua" : category); // Update teks kategori terpilih
  };

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

  // Dummy data berita
  const daftarBuku = [
    {
      judul: "Not Here to be Liked",
      penulis: "Mikael Quach",
      tahunTerbit: "2021",
      category: "ensiklopedia",
      isbn: "1234593",
      gambar: "../assets/daftarbuku/book1.svg",
    },
    {
      judul: "novel Not Here to be Liked",
      penulis: "Michele Quach",
      tahunTerbit: "2021",
      category: "novel",
      isbn: "81",
      gambar: "../assets/daftarbuku/book1.svg",
    },
    {
      judul: "komik Not Here to be Liked",
      penulis: "Michele Quach",
      tahunTerbit: "2021",
      category: "komik",
      isbn: "1234593",
      gambar: "../assets/daftarbuku/book1.svg",
    },
    {
      judul: "referensi Not Here to be Liked",
      penulis: "Michele Quach",
      tahunTerbit: "2021",
      category: "referensi",
      isbn: "1234593",
      gambar: "../assets/daftarbuku/book1.svg",
    },
    {
      judul: "Not Here to be Liked",
      penulis: "Michele Quach",
      tahunTerbit: "2021",
      category: "ensiklopedia",
      isbn: "1234593",
      gambar: "../assets/daftarbuku/book1.svg",
    },
    {
      judul: "Not Here to be Liked",
      penulis: "Michele Quach",
      tahunTerbit: "2021",
      category: "ensiklopedia",
      isbn: "1234593",
      gambar: "../assets/daftarbuku/book1.svg",
    },
    // Tambahkan berita lainnya di sini
  ];

  const filteredBuku = daftarBuku
    .filter((buku) => {
      // Filter berdasarkan kategori
      if (categoryBuku === "" || categoryBuku.toLowerCase() === "semua") {
        return true; // Tampilkan semua buku jika kategori kosong atau "Semua" dipilih
      } else {
        return buku.category.toLowerCase() === categoryBuku.toLowerCase();
      }
    })
    .filter((buku) => {
      // Filter berdasarkan pencarian
      if (searchQuery.trim() === "") {
        return true; // Tampilkan semua buku jika tidak ada query pencarian
      } else {
        return buku.isbn.toLowerCase().includes(searchQuery.toLowerCase());
      }
    });

  return (
    <div className="content">
      <div className="daftarBuku">
        <div className="px-3 px-md-5 py-4">
          <div className="mb-4 mb-md-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Daftar Buku</h2>
              <div className="profile-acc">
                <img src="/assets/user-icon.svg" className="img-fluid" />
              </div>
            </div>
          </div>

          {/* NAVBAR */}
          <div className="navbar d-flex justify-between mb-4">
            <div className="navbar-kiri d-flex gap-2">
              {/* {!searchMode ? ( */}
                <div
                  // variant="outline-success-none"
                  className="search-container bg-transparent d-flex px-3 py-2 gap-2 align-items-center"
                  onClick={handleSearchClick}
                >
                  <img
                    src="./assets/daftarbuku/Search.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <form onSubmit={handleSearchSubmit}>
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
              {/* ) : (
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </form>
              )} */}
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle filter-container bg-transparent px-3 py-2 gap-2 d-flex align-items-center"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="./assets/daftarbuku/Sort.svg" alt="" />
                  {`${selectedCategory}`} {/* Tampilkan kategori terpilih di dalam button */}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <a
                      className="dropdown-item"
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
            <div className="navbar-kanan">
              <button className="add-container d-flex px-3 py-2 gap-2 align-items-center">
                <img
                  src="./assets/daftarbuku/add.svg"
                  className="img-fluid"
                  alt=""
                />
                Tambah Buku
              </button>
            </div>
          </div>

          {/* CARD */}
          <div className="content-container d-flex flex-wrap gap-4">
            {filteredBuku.map((buku, index) => (
              <div key={index} className="card-container px-4 py-4">
                <img src={buku.gambar} alt="" className="d-flex mx-auto" />
                <div className="desc-container mt-3">
                  <h3 className="p-0 m-0 fw-bold mb-2">
                    {buku.judul.substring(0, 17)}...
                  </h3>
                  <div className="desc d-flex align-items-center gap-2 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                    </svg>
                    <p className="p-0 m-0 fw-semibold">{buku.penulis}</p>
                  </div>
                  <div className="desc d-flex align-items-center gap-2">
                    <img src="./assets/daftarBuku/Calendar.svg" alt="" />
                    <p className="p-0 m-0 fw-semibold">{buku.tahunTerbit}</p>
                  </div>
                </div>
                <div className="card-bottom ">
                  <button className="detail py-1 px-3 mt-4 bg-transparent">
                  <a href="/detailbuku" className="p-0 m-0 fw-semibold">
                    Detail
                  </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
