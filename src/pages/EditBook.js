import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/addbook.css";

export default function EditBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

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

    const handleFileUpload = (files) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(files[0]);
    };

    const uploadImage = async () => {
        try {
          const formData = new FormData();
          formData.append("file", selectedImage);
      
          const response = await axios.post("http://localhost:8080/foto", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
      
          // Ambil URL gambar yang diunggah dari respons server dan set ke state buku
          const imageUrl = response.data.url;
          setBook({ ...book, pict: imageUrl });
      
          return imageUrl;
        } catch (error) {
          console.error("Error uploading image:", error);
          throw error;
        }
      };
      

    const handleSubmit = async () => {
        try {
          const token = localStorage.getItem('token');
          const headerConfig = {
            headers: { Authorization: `Bearer ${token}` },
          };
          const url = `http://localhost:8080/book/update/${id}`;
          const response = await axios.put(url, book, headerConfig);
          console.log(response.data);
          window.alert("Success to Edit book");
          window.location.href = `/detailbuku/${id}`;
          // Handle kesuksesan, misalnya redirect atau tampilkan pesan sukses
        } catch (error) {
          // Handle kesalahan, tampilkan pesan kesalahan
          console.error('Error updating book:', error);
        }
      };

    return (
      <div className="content addbook">
        <div className="px-3 px-md-5 py-4">
          <div className="mb-4 mb-md-5">
            <div className="d-flex justify-content-between">
              <h2 className="fw-bold page-title">Edit Buku</h2>
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
                          backgroundImage: `url(${selectedImage || "http://localhost:8080/foto/" +  book.pict})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <input
                          type="file"
                          id="uploadInput"
                          style={{ display: "none" }}
                          onChange={(e) => handleFileUpload(e.target.files)}
                        />
                        {!selectedImage && !book.pict && (
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
                    value={book.code} 
                    onChange={(e) => {
                      setBook({ ...book, code: e.target.value });
                    }}
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
                    value={book.title} 
                    onChange={(e) => {
                      setBook({ ...book, title: e.target.value });
                    }}
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
                    value={book.author} 
                    onChange={(e) => {
                      setBook({ ...book, author: e.target.value });
                    }}
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
                    value={book.penerbit} 
                    onChange={(e) => {
                      setBook({ ...book, penerbit: e.target.value });
                    }}
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
                    value={book.tahun_terbit} 
                    onChange={(e) => {
                      setBook({ ...book, tahun_terbit: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form">
                <p>Jenis Buku</p>
                <div className="d-flex event">
                  <select className="form-control1" value={book.category} 
                    onChange={(e) => {
                      setBook({ ...book, category: e.target.value });
                    }}>
                    <option value={book.category} disabled hidden>{book.category}</option>
                    <option value="ensiklopedia">Ensiklopedia</option>
                    <option value="referensi">Referensi</option>
                    <option value="novel">Novel</option>
                    <option value="komik">Komik</option>
                  </select>
                </div>
              </div>
              <div className="pt-1  ">
              <button
                className="btn btn-block text-white fs-6"
                type="button"
                style={{ backgroundColor: "#009B4C" }}
                onClick={handleSubmit}
              >
                Edit Buku
              </button>
            </div>

            </div>
          </div>
          
        </div>
      </div>
    );
}
