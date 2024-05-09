import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import "../css/peminjaman.css";

export default function Peminjaman() {
  const [statusBerita, setStatusBerita] = useState('semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  const handleStatusBeritaClick = (status) => {
    setStatusBerita(status);
  };

  const handleSearchClick = () => {
    setSearchMode(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log('Search Query:', searchQuery);
  };

  // Dummy data berita
  const daftarBerita = [
    { judul: "Rapat perencanaan Kick Off Reseosi 1 Abad, dihadiri oleh ...", status: "draft", jurnalis: "W. Nadia", tanggal: "Feb 05, 2023", gambar: "../assets/berita/1.svg" },
    { judul: "Kick Off Resepsi 1 Abad, PCNU Kota Batu Siapkan Beragam ...", status: "publish", jurnalis: "AH Baharuddin", tanggal: "Sep 13, 2023", gambar: "../assets/berita/2.svg" },
    // Tambahkan berita lainnya di sini
  ];

  const filteredBerita = daftarBerita.filter((berita) => {
    if (statusBerita === 'semua') {
      return true; // Tampilkan semua berita
    } else if (statusBerita === 'draft') {
      return berita.status === 'draft'; // Tampilkan hanya berita yang berstatus draft
    } else if (statusBerita === 'publish') {
      return berita.status === 'publish'; // Tampilkan hanya berita yang berstatus publish
    }
  }).filter((berita) => {
    // Filter based on search query
    return berita.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
           berita.jurnalis.toLowerCase().includes(searchQuery.toLowerCase()) ||
           berita.tanggal.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="content vh-100" style={{ backgroundColor: "#EDF6F0" }}>
      <div className="px-3 px-md-5 py-4">
        <div className="mb-4 mb-lg-5">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold page-title">Artikel</h2>
            <div className="profile-acc">
              <img src="/assets/user-icon.svg" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="mb-0">
          <div className="d-flex justify-content-between">
            <div>
              <Button
                variant={`outline-success-none fw-semibold text-black ${statusBerita === 'semua' && 'active'}`}
                className="berita-btn2"
                onClick={() => handleStatusBeritaClick('semua')}
              >
                Semua
              </Button>{" "}
              <Button
                variant={`outline-success-none fw-normal text-black ${statusBerita === 'draft' && 'active'}`}
                className="berita-btn2"
                onClick={() => handleStatusBeritaClick('draft')}
              >
                Draft
              </Button>{" "}
              <Button
                variant={`outline-success-none fw-normal text-black ${statusBerita === 'publish' && 'active'}`}
                className="berita-btn3"
                onClick={() => handleStatusBeritaClick('publish')}
              >
                Publish
              </Button>{" "}
              <Dropdown className="dropdown-berita">
                <Dropdown.Toggle variant="success" id="dropdown-basic" className="dropdown-berita">
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleStatusBeritaClick('semua')} className="dropdown-berita">Semua</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleStatusBeritaClick('draft')} className="dropdown-berita">Draft</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleStatusBeritaClick('publish')} className="dropdown-berita">Publish</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div >
              {!searchMode ? (
                <Button
                  variant="outline-success-none fw-semibold text-black"
                  className="search-berita"
                  onClick={handleSearchClick}
                >
                  Pencarian
                  <img
                    className="ms-2 search-icon-berita"
                    src="../assets/search-normal.svg"
                    alt="Search"
                  />
                </Button>
              ) : (
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Cari berita..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {/* <button type="submit" className="btn btn-primary mt-2">Cari</button> */}
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <div class="table-container-berita">
            <table class="table custom-table">
              <thead>
                <tr className="title">
                  <th scope="col" style={{ padding: "1rem" }}>
                    Judul Buku
                  </th>
                  <th scope="col" style={{ padding: "1rem" }}>
                    Status
                  </th>
                  <th scope="col" style={{ padding: "1rem" }}>
                    Jurnalis
                  </th>
                  <th
                    scope="col"
                    style={{ padding: "1rem", textAlign: "end" }}
                  >
                    Tanggal
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredBerita.map((berita, index) => (
                  <tr key={index}>
                    <th scope="row" className=" d-flex p-3 align-items-center">
                    <img src={berita.gambar} className="pe-3" style={{ width: '100px'}}></img>
                      <div className="d-block ">
                        <span className="title fw-semibold pt-5">
                          {berita.judul}
                        </span>
                        <div className="title fw-lighter d-flex  pt-1">
                          <a href="/editberita">
                            <button className="edit-btn">
                              <img src="../assets/berita/edit-icon.svg" />
                              <span className="ms-1">edit</span>
                            </button>
                          </a>
                          <div className="ms-4">
                            <a href="#">
                              <button className="del-btn">
                                <img src="../assets/berita/trash-icon.svg" />
                                <span className="ms-1">hapus</span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </th>
                    <td>
                      <div className="pt-2 me-5">
                        <img
                          src={`../assets/berita/${berita.status}.svg`}
                          className=""
                        ></img>
                      </div>
                    </td>
                    <td className="text-1 fw-normal py-3">{berita.jurnalis}</td>
                    <td className="text-1 fw-slug text-end py-3">
                      {berita.tanggal}
                    </td>
                  </tr>
                ))}
                <tr>
                    <th colspan="3" className="text-1 fw-normal ps-3 pt-3">
                      Page 1 of 1
                    </th>
                    <td className="text-end p-3 d-flex pe-3 justify-content-end">
                      <Button variant="outline-secondary fw-medium" size="sm">
                        Previous
                      </Button>{" "}
                      <Button
                        variant="outline-secondary ms-2 fw-medium"
                        size="sm"
                      >
                        Next
                      </Button>{" "}
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
