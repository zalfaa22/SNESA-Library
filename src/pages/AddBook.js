import React, { useState } from "react";
import axios from "axios";
import "../css/addbook.css";

export default function AddBook() {
  const [state, setState] = useState({
    code: "",
    title: "",
    author: "",
    category: "",
    pict: "",
  });

  const token = localStorage.getItem("token");

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
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setState({
      ...state,
      pict: e.target.files[0]  // Save the file object
    });
  };

  // const handleAdd = () => {
  //   setState({
  //    id : "",
  //    code: "",
  //    title: "",
  //    author: "",
  //    category: "",
  //    pict: "",
  //   });
  // };

  const handleAddBook = (e) => {
    e.preventDefault();

    let data = new FormData();
      data.append("id",state.id);
      data.append("code", state.code);
      data.append("title", state.title);
      data.append("author", state.author);
      data.append("category", state.category);
      data.append("pict", state.pict);
    

    let url = "http://localhost:8080/book/add";
    axios.post(url, data, headerConfig)
      .then(response => {
        window.alert("Success to Add book");
        window.location.href = "/daftarbuku";
        // handleAdd()
      })
      .catch(error => {
        console.log("error", error.response.status);
        if (error.response.status === 500) {
          window.alert("Failed Add book");
        }
      });
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileUpload = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      setSelectedImage(e.target.result);
      setState({
        ...state,
        pict: e.target.result // Update foto state with base64 encoded image
      });
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
                <div className="group" style={{ paddingRight: "8px" }}>
                  <div className="col">
                    <label
                      htmlFor="pict"
                      className="card text-center"
                      style={{
                        backgroundImage: `url(${selectedImage})`,
                        backgroundSize: "cover",
                      }}
                    >
                      <input
                        type="file"
                        name="pict"
                        id="pict"
                        style={{ display: "none" }}
                        onChange={handleFileChange}
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
                  id="code"
                  name="code"
                  value={state.code}
                  onChange={handleChange}
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
                  id="title"
                  name="title"
                  value={state.title}
                  onChange={handleChange}
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
                  id="author"
                  name="author"
                  value={state.author}
                  onChange={handleChange}
                  className="form-control1"
                  placeholder="Penulis buku ..."
                />
              </div>
            </div>

            {/* <div className="form">
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
            </div> */}

            <div className="form">
              <p>Jenis Buku</p>
              <div className="d-flex event">
                <select
                  className="form-control1"
                  name="category"
                  value={state.category}
                  onChange={handleChange}
                >
                  <option selected>Pilih jenis buku ...</option>
                  <option value="Ensiklopedia">Ensiklopedia</option>
                  <option value="Referensi">Referensi</option>
                  <option value="Novel">Novel</option>
                  <option value="Komik">Komik</option>
                </select>
              </div>
            </div>

            <div className="pt-1  ">
              <button
                className="btn btn-block text-white fs-6"
                type="button"
                style={{ backgroundColor: "#009B4C" }}
                onClick={handleAddBook}
              >
                Tambah Buku
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}