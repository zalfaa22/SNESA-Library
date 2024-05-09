import React, { useState } from "react";
import "../css/addbook.css";

export default function EditBook() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileUpload = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="content addbook">
      <div className="px-3 px-md-5 py-4">
        <div className="mb-4 mb-md-5">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold page-title">Tambah Buku</h2>
            <div className="profile-acc">
              <img src="/assets/user-icon.svg" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="d-md-flex">
          <div className="col-12 px-5 px-md-0 col-md-5 upload-cover">
          <div className="form">
              <div className="d-flex row row-cols-1 card-wrap p-0 m-0">
              <div className="group" style={{paddingRight: "8px"}}>
                <div className="col">
                    <label
                      htmlFor="uploadInput"
                      className="card text-center"
                      style={{
                        backgroundImage: `url(${selectedImage})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <input
                        type="file"
                        id="uploadInput"
                        style={{ display: "none" }}
                        onChange={(e) => handleFileUpload(e.target.files)}
                      />
                      {!selectedImage && (
                        <>
                          <img
                            src="/assets/camera-icon.svg"
                            className=""
                            alt="..."
                          />
                          <p className="m-0">Upload Cover Buku</p>
                        </>
                      )}
                    </label>
                  </div>
              </div>
              </div>
            </div>

          </div>
          <div className="col-12 col-md-7 ms-md-5">
          <div className="form">
              <p>ISBN</p>
              <div className="d-flex event">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="ISBN buku ..."
                />
              </div>
            </div>

            <div className="form">
              <p>Judul Buku</p>
              <div className="d-flex event">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Judul Buku ..."
                />
              </div>
            </div>

            <div className="form">
              <p>Penulis</p>
              <div className="d-flex event">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Penulis buku ..."
                />
              </div>
            </div>

            <div className="form">
              <p>Penerbit</p>
              <div className="d-flex event">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Penerbit buku ..."
                />
              </div>
            </div>

            <div className="form">
              <p>Tahun Terbit</p>
              <div className="d-flex event">
                <input
                  type="text"
                  className="form-control1"
                  placeholder="Tahun terbit buku ..."
                />
              </div>
            </div>

            <div className="form">
      <p>Jenis Buku</p>
      <div className="d-flex event">
        <select className="form-control1">
          <option selected>Pilih jenis buku ...</option>
          <option value="option1">Ensiklopedia</option>
          <option value="option2">Referensi</option>
          <option value="option3">Novel</option>
          <option value="option3">Komik</option>
        </select>
      </div>
    </div>

          </div>
        </div>
        
      </div>
    </div>
  );
}
