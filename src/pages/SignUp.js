import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 
import "../css/login.css";

export default function SignUp() {
    const [state, setState] = useState({
        name: "",
        nuptk: "",
        password: ""
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        
        let data = {
            name: state.name,
            nuptk: state.nuptk,
            password: state.password
        };

        let url = "http://localhost:8080/user/add";
        axios.post(url, data)
            .then(res => {
                window.alert("Success to Register");
                window.location.href = "/";
            })
            .catch(error => {
                console.log("error", error.response.status);
                if (error.response.status === 500) {
                    window.alert("Failed Register as Customer");
                }
            });
    };
    
    return (
        <>
            <div className="vh-100" style={{backgroundColor: "#F8F4EC"}}>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center ">
                    <div className="col-lg-6 px-0">
              <img
                src="/assets/login-image.svg"
                alt="Login image"
                className="login-img vh-100 d-none d-lg-flex"
                style={{ objectFit: "cover", width: "100%" }}
              />
              <img
                src="/assets/login-image.svg"
                alt="Login image"
                className="login-img mb-5 d-none d-md-flex d-lg-none "
                style={{ objectFit: "cover", width: "100%", height: "300px" }}
              />
              <img
                src="/assets/login-image.svg"
                alt="Login image"
                className="login-img d-flex d-md-none d-lg-none "
                style={{ objectFit: "cover", width: "100%", height: "170px" }}
              />
            </div>
                        <div className="col-11 col-md-8 col-lg-6 mb-5 mb-lg-0 text-black">
                            <div className="px-4 pt-5 pt-md-0 px-lg-5 mx-lg-5">
                                <div className="text-center">
                                    <img src="/assets/logo.svg" alt="" className="img-fluid"/>
                                </div>
                                <div className="form-outline mb-3 mt-5">
                                    <label className="form-label fs-6" htmlFor="name">
                                        Nama
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={state.name}
                                        onChange={handleChange}
                                        className="form-control form-control-lg fs-6"
                                        placeholder="Masukkan nama anda ..."
                                    />
                                </div>
                                <div className="form-outline mb-3">
                                    <label className="form-label fs-6" htmlFor="nuptk">
                                        NIP
                                    </label>
                                    <input
                                        type="number"
                                        id="nuptk"
                                        name="nuptk"
                                        value={state.nuptk}
                                        onChange={handleChange}
                                        className="form-control form-control-lg fs-6"
                                        placeholder="Masukkan NIP anda ..."
                                    />
                                </div>
                                <div className="form-outline mb-4">
                                    <label className="form-label fs-6" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={state.password}
                                        onChange={handleChange}
                                        className="form-control form-control-lg fs-6"
                                        placeholder="Buat password ..."
                                    />
                                </div>
                                <div className="pt-1  ">
                                    {/* <Link to="/beranda"> */}
                                        <button
                                            className="btn btn-block w-100 text-white fs-6"
                                            type="button"
                                            style={{ backgroundColor: "#009B4C" }}
                                            onClick={handleRegister}
                                        >
                                            Daftar
                                        </button>
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
