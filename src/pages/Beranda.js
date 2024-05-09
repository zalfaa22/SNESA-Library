import React from "react";
import "../css/beranda.css";

export default function Beranda() {
  return (
    <div className="content">
      <div className="px-3 px-md-5 py-4">
        <div className="mb-4 mb-md-5">
          <div className="d-flex justify-content-between">
            <h2 className="fw-bold page-title">Beranda</h2>
            <div className="profile-acc">
              <img src="/assets/user-icon.svg" className="img-fluid" />
            </div>
          </div>
        </div>

        {/* <!-- CARD --> */}
        <div class="row p-0 m-0 ">
          <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Program (Disetujui)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">10</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-success shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Donatur
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      228
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-info shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Pengurus
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">28</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-md-6 mb-4">
            <div class="card border-left-warning shadow h-100 py-2">
              <div class="card-body">
                <div class="row no-gutters align-items-center">
                  <div class="col mr-2">
                    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Anggota
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">62</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- PROGRAM --> */}
        <div class="row">
          <div class="col-lg-12 mb-4 px-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Program</h6>
              </div>
              <div class="card-body">
                <h4 class="small font-weight-bold">
                  Berita<span class="float-right"></span>
                </h4>
                <div class="progress mb-4">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <h4 class="small font-weight-bold">
                  Artikel<span class="float-right"></span>
                </h4>
                <div class="progress mb-4">
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <h4 class="small font-weight-bold">
                  Youtube<span class="float-right"></span>
                </h4>
                <div class="progress mb-4">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <h4 class="small font-weight-bold">
                  Instagram<span class="float-right"></span>
                </h4>
                <div class="progress mb-4">
                  <div
                    class="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <h4 class="small font-weight-bold">
                  Event<span class="float-right"></span>
                </h4>
                <div class="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
