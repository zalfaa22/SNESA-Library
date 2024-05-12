import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/daftarpeminjaman.css";
import { daftarBuku } from "./DaftarBuku";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from 'axios';

export default function Peminjaman() {
  const { id } = useParams();
  const [daftarBorrow, setDaftarBorrow] = useState([]);
  const [filteredBuku, setFilteredBuku] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);
  useEffect(() => {
    fetchData();
  }, [searchQuery]);

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
  
      const url = 'http://localhost:8080/borrow/getAll';
      const response = await axios.get(url, headerConfig);
      const borrow = response.data.data;
  
      // Simpan data buku ke dalam state daftarBorrow
      setDaftarBorrow(borrow);

      // Filter data buku berdasarkan kategori dan pencarian
      let filteredBorrow = [...borrow]; // Copy semua buku
  
     
  
      if (searchQuery.trim() !== '') {
        filteredBorrow = filteredBorrow.filter((borrow) => {
          return borrow.code.toLowerCase().includes(searchQuery.toLowerCase());
        });
      }
  
      // Simpan data buku yang sudah difilter ke dalam state filteredBuku
      setFilteredBuku(filteredBorrow);
    } catch (error) {
      console.error('Error fetching book list:', error);
      // Tambahkan penanganan error di sini jika diperlukan
    }
  };

  const getStatusColor = (status) => {
    if (status.toLowerCase() === 'dipinjam') {
      return 'yellow'; // Warna kuning untuk status 'dipinjam'
    } else if (status.toLowerCase() === 'dikembalikan') {
      return 'green'; // Warna merah untuk status 'telat'
    } else {
      return 'black'; // Warna default jika status tidak cocok dengan kondisi di atas
    }
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

  const handleReturn = async (borrowId) => {
    try {
      const token = localStorage.getItem("token");
      const headerConfig = {
        headers: { Authorization: `Bearer ${token}` },
      };
  
      // Tampilkan pesan konfirmasi
      const isConfirmed = window.confirm("Apakah Anda yakin ingin mengubah status peminjaman ini?");
  
      if (isConfirmed) {
        const url = `http://localhost:8080/borrow/update/${borrowId}`;
        await axios.put(url, { status: "dikembalikan" }, headerConfig);
  
        // Refresh data setelah berhasil mengubah status
        fetchData();
      }
    } catch (error) {
      console.error("Error updating borrow:", error);
    }
  };
  

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
          <div
              className="search-container mb-3 bg-transparent d-flex px-3 py-2 gap-2 align-items-center"
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

          
            <div className="table-pinjam overflow-x-auto">
              <table class="table custom-table bg-transparent">
                <thead className="table-color ">
                  <tr>
                    <th className="text-white fw-semibold" scope="col">Code</th>
                    <th className="text-white fw-semibold" scope="col">Student Name</th>
                    <th className="text-white fw-semibold" scope="col">Class</th>
                    <th className="text-white fw-semibold" scope="col">Absen</th>
                    <th className="text-white fw-semibold" scope="col">Date of Borrow</th>
                    <th className="text-white fw-semibold" scope="col">Date of Return</th>
                    <th className="text-white fw-semibold" scope="col">Return Date</th>
                    <th className="text-white fw-semibold" scope="col">Status</th>
                    <th className="text-white fw-semibold" scope="col">Aksi</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
              {/* Mapping data dari daftarBorrow ke dalam baris tabel */}
              {filteredBuku.map((borrow, index) => (
                <tr key={index}>
                  <td>{borrow.code}</td>
                  <td>{borrow.student_name}</td>
                  <td>{borrow.class}</td>
                  <td>{borrow.absen}</td>
                  <td>{borrow.date_of_borrow}</td>
                  <td>{borrow.date_of_return}</td>
                  <td>{borrow.return_date}</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div className="bulat" style={{ backgroundColor: getStatusColor(borrow.status) }}></div>
                      <p className="m-0">{borrow.status}</p>
                    </div>
                  </td>
                  <td>
                    <button onClick={() => handleReturn(borrow.id)}>✔️</button>
                  </td>
                  <td>
                    {/* Tambahkan tombol detail atau link ke halaman detail */}
                    {/* <button className="px-2 py-1 fw-semibold">
                      Detail
                    </button> */}
                    <Link
                    to={{
                      pathname: `/detailpeminjaman/${borrow.id}`,
                      state: { selecteditem: borrow },
                    }}
                    className="text-dark"
                  >
                <button className="detail py-1 px-3">
                    <p className="text-start text-decoration-none m-0 p-0">Detail</p>
                </button>
                </Link>
                  </td>
                </tr>
              ))}
            </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
