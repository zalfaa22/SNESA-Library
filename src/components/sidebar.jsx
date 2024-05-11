import React, { useState, useEffect } from 'react'
import "../css/sidebar.css"
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse"

function Sidebar() {
  const [minimized, setMinimized] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [submenu2Open, setSubmenu2Open] = useState(false);
  const [activeMenu, setActiveMenu] = useState('beranda');


  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSubmenu2 = () => {
    setSubmenu2Open(!submenu2Open);
  };

  const toggleSidebar = () => {
    setMinimized(!minimized);
  };

  const handleKoinClick = () => {
    // Set the sidebar to full size when the koin icon is clicked
    setMinimized(false);
    setSubmenuOpen(!submenuOpen);
  };

  const handleKontenClick = () => {
    // Set the sidebar to full size when the koin icon is clicked
    setMinimized(false);
    setSubmenu2Open(!submenu2Open);
  };

  useEffect(() => {
    // Check the window width on mount and resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // For small screens, initially set the sidebar to be minimized
        setMinimized(true);
      } else {
        // For medium and larger screens, initially set the sidebar to be visible
        setMinimized(false);
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Call the handleResize function to set the initial state
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`sidebar ${minimized ? 'minimized' : ''}`} style={{ backgroundColor: "#41B06E" }}>
        <div className='d-flex'>
        <button className="toggle-btn-menu d-flex d-md-none" onClick={toggleSidebar}>
          {/* <img className="mt-4 img-fluid" src="../assets/sidebar-logo.svg" alt="Logo" /> */}
          <i className="bi bi-list menu-open text-white"></i>
        </button>
            {/* <span className='brand-name'>sidebar</span> */}
            {!minimized && <img className="mt-0 p-2 img-fluid logo-sidebar" src="/assets/sidebar/sidebar-img.svg" alt=''/>}
        </div>
        {/* <hr className='text-dark'/> */}
        <div className='list-group list-group-flush'>
        <ul className="nav nav-pills flex-column mt-md-3 " id="parentM">
                <li className="nav-item text-white my-1">
                  <a href="/beranda" className="nav-link" aria-current="page">
                    <img src="/assets/sidebar/home-icon.svg" alt='' className='sidebar-icon'/>
                    {!minimized && <span className="ms-2 text-white">Beranda</span>}
                  </a>
                </li>

                {/* <li className="nav-item text-white my-1" onClick={handleKoinClick}>
                <a
                    href="#submenu"
                    className="nav-link"
                    data-bs-toggle="collapse"
                    aria-current="page"
                  ><div className='d-flex justify-content-between'>
                    <div>
                    <img src="../assets/sidebar/koin-icon.svg" />
                    {!minimized && <span className="ms-2 text-white ">Koin Nusantara</span>}
                    </div>
                    {!minimized && <img className="" src={submenuOpen ? "../assets/sidebar/arrow-down.svg" : "../assets/sidebar/arrow-right.svg"} />}
                    </div>
                  </a>
                  <ul
                    className={`nav collapse row ${submenuOpen ? 'show' : ''}`}
                    id="submenu"
                    data-bs-parent="#parentM"
                  >
                    {!minimized && <li className="nav-item">
                      <a className="nav-link text-white" href="/campaign" aria-current="page">
                        <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Campaign Program</span>
                      </a>
                    </li>}
                    {!minimized && <li className="nav-item">
                      <a className="nav-link text-white" href="/donatur">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Donatur</span>
                      </a>
                    </li>}
                  </ul>
                </li> */}

                <li className="nav-item text-white my-1">
                  <a href="/daftarbuku" className="nav-link" aria-current="page">
                    <img src="/assets/sidebar/book-icon.svg" alt='' className='sidebar-icon' />
                    {!minimized && <span className="ms-2 text-white">Daftar Buku</span>}
                  </a>
                </li>

                {/* <li className="nav-item text-white my-1 " onClick={handleKontenClick}>
                  <a href="#submenu2" className="nav-link" data-bs-toggle="collapse" aria-current="page">
                  <div className='d-flex justify-content-between'>
                    <div>
                    <img src="../assets/sidebar/konten-icon.svg" />
                    {!minimized && <span className="ms-2 text-white">Konten</span>}
                    </div>
                    {!minimized && <img className="" src={submenu2Open ? "../assets/sidebar/arrow-down.svg" : "../assets/sidebar/arrow-right.svg"}/>}
                  </div>
                  </a>
                  <ul
                    className={`nav collapse row ${submenu2Open ? 'show' : ''}`}
                    id="submenu2"
                    data-bs-parent="#parentM"
                  >
                    {!minimized && <li className="nav-item">
                      <a className="nav-link text-white" href="/berita" aria-current="page">
                        <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Berita</span>
                      </a>
                    </li>}
                    {!minimized && <li className="nav-item">
                      <a className="nav-link text-white" href="/artikel">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Artikel</span>
                      </a>
                    </li>}
                    {!minimized && <li className="nav-item">
                      <a className="nav-link text-white" href="/event">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Event</span>
                      </a>
                    </li>}
                    {!minimized && <li className="nav-item">
                      <a className="nav-link text-white" href="#">
                      <img src="../assets/sidebar/dot-icon.svg"/><span className="ms-2">Partnerhip/Ads</span>
                      </a>
                    </li>}
                  </ul>
                </li> */}

                {/* <li className="nav-item text-white my-1">
                  <a href="#" className="nav-link" aria-current="page">
                    <img src="../assets/sidebar/anggota-icon.svg" />
                    {!minimized && <span className="ms-2 text-white">Anggota</span>}
                  </a>
                </li> */}

                <li className="nav-item text-white my-1">
                  <a href="/daftarpeminjaman" className="nav-link" aria-current="page">
                    <img src="/assets/sidebar/peminjaman-icon.svg" alt='' className='sidebar-icon' />
                    {!minimized && <span className="ms-2 text-white">Peminjaman</span>}
                  </a>
                </li>
                <li className="nav-item text-white my-1">
                  <a href="/akun" className="nav-link" aria-current="page">
                    <img src="/assets/sidebar/user-icon.svg" alt='' className='sidebar-icon'/>
                    {!minimized && <span className="ms-2 text-white">Akun</span>}
                  </a>
                </li>
              </ul>
        </div>
    </div>
  )
}

export default Sidebar