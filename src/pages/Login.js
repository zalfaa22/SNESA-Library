import React from "react";
import "../css/login.css";

export default function Login() {
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
                  <label className="form-label fs-6" htmlFor="form2Example18">
                    User
                  </label>
                  <input
                    type="name"
                    id="form2Example18"
                    className="form-control form-control-lg fs-6"
                    placeholder="nama user"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label fs-6" htmlFor="form2Example18">
                    Password
                  </label>
                  <input
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg fs-6"
                    placeholder="******"
                  />
                </div>
                <div className="pt-1  ">
                  <a href="/beranda">
                    <button
                      className="btn btn-block w-100 text-white fs-6"
                      type="button"
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