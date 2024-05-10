import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";

export default function Login() {
    const [state, setState] = useState({
        name: "",
        nuptk: "",
        password: "",
        logged: false,
        message: ""
    });

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            nuptk: state.nuptk,
            password: state.password,
        };
        let url = "http://localhost:8080/user/login";
        axios
            .post(url, data)
            .then((response) => {
                setState({ logged: response.data.data.logged });
                if (response.status === 200) {
                    let id = response.data.data.id_user;
                    let nuptk = response.data.data.nuptk;
                    let token = response.data.data.token;
                    localStorage.setItem("id", id);
                    localStorage.setItem("nuptk", nuptk);
                    localStorage.setItem("token", token);
                    alert("Success Login");
                    window.location.href = "/beranda";
                } else {
                    alert(response.data.message);
                    setState({ message: response.data.message });
                }
            })
            .catch((error) => {
                console.log("error", error.response.status);
                if (error.response.status === 500 || error.response.status === 404) {
                    window.alert("Failed to login");
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
                    placeholder="Masukkan password anda ..."
                  />
                </div>
                <div className="pt-1  ">
                  <a href="/beranda">
                    <button
                      className="btn btn-block w-100 text-white fs-6"
                      type="button"
                      onClick={handleLogin}
                      style={{ backgroundColor: "#009B4C" }}
                    >
                      Get started
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}