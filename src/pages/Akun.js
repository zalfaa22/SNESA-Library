import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../css/akun.css";

export default function Akun() {
  return (
    <div className="content">
      <div className="px-3 px-md-5 py-4">
        <div className="mb-4 mb-md-5">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold page-title">Akun</h2>
            <div className="profile-acc">
              <img src="/assets/user-icon.svg" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="p-3 bg-white rounded-4 mb-3">
          <div className="d-md-flex col">
            <div className="col-md-4 col-lg-6">
              <p className="fw-semibold setting-title">Detail Akun</p>
            </div>
            <div className="col-md-8 col-lg-6 pe-3">
              <p className="fw-semibold text1-set">Foto Profil</p>
              <div className="d-flex align-items-center">
                <img
                  src="../../assets/profile-set.svg"
                  alt="profile"
                  className="me-3 img-fluid profile-set-img"
                />
                <p className="fw-regular m-0 text2-set">
                  Update your avatar by clicking the image beside. 288x288 px
                  size recommended in PNG or JPG format only.
                </p>
              </div>
              <p className="fw-semibold mt-4 text1-set">Detail</p>
              <p className="fw-regular mb-0 text2-set">Nama</p>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control rounded"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              {/* <label for="exampleInputEmail1" class="form-label">
                      Nama Program
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Nama Program"
                    /> */}
              <p className="fw-regular mb-0 text2-set">Email</p>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control rounded mb-3"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
          </div>
          <div className="border"></div>
          <div className="d-md-flex col pt-4">
            <div className="col-md-4 col-lg-6">
              <p className="fw-semibold setting-title">Security</p>
            </div>
            <div className="col-md-8 col-lg-6 pe-3">
              <p className="fw-semibold mb-4 text1-set">Reset Password</p>
              <p className="fw-regular mb-0 text2-set">Password lama</p>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control rounded"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
              <p className="fw-regular mb-0 text2-set">Password baru</p>
              <div class="input-group input-group-sm mb-3">
                <input
                  type="text"
                  className="form-control rounded"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                />
              </div>
            </div>
          </div>
          <Button variant="success" className="btn-setting">
            Simpan Perubahan
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
