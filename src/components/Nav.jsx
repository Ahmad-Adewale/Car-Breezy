import { Link } from 'react-router-dom'
import logo from '/logo.jpeg'
import React, { useEffect, useState } from 'react';

function Nav() {
    const [visits, setVisits] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem('visitCount');
    const newCount = storedVisits ? parseInt(storedVisits) + 1 : 1;
    setVisits(newCount);
    localStorage.setItem('visitCount', newCount);
  }, []);
  return (
    <>
      {/* NAVBAR */}
        <div className="nav w-100 fixed-top shadow-sm">
        <nav className="navbar navbar-expand-lg py-1 px-2 justify-content-between align-items-center w-100 nav-wrapper">
            {/* TOGGLE BUTTON */}
            <button 
            className="navbar-toggler text-white bg-white" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* MOBILE LOGO */}
            <Link to='/' className="navbar-brand mx-auto order-0 d-lg-none d-flex align-items-center gap-2">
            <h2 className="brand-title">
                <img src={logo} alt="Car Breezy Logo"
                style={{height: '30px',  width: 'auto', verticalAlign: 'middle', borderRadius: '5rem'}}/>
                CAR-BREEZY
            </h2>
            </Link>

            {/* MOBILE ICON */}
            <ul className="d-lg-none d-flex align-items-center gap-3">
                <li className="nav-item">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                        <i className="bi bi-person fs-5 text-white"></i>
                    </a>
                </li>
            </ul>

            {/* MAIN NAV */}

            <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                {/* LEFT NAV LINK */}
                <ul className="navbar-nav nav-menu align-items-center gap-4">
                    <li className="nav-item">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products/new' className="nav-link">New</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products/used'  className="nav-link">Used</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products/brands' className="nav-link">Brands</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/products/offers'  className="nav-link">Offers</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Gallery'  className="nav-link">Gallery</Link>
                    </li>
                </ul>

                
                

                {/* CENTER LOGO */}

                <Link to='' className="navbar-brand order-0 d-none d-lg-flex">
                    <h2 className="m-0 fw-bold" style={{letterSpacing:'2px', color:'#14ff72cb'}}>
                        <img src={logo} alt="Car Breezy Logo"
                        style={{height: '30px',  width: 'auto', verticalAlign: 'middle', borderRadius: '5rem'}}/>
                        CAR-BREEZY</h2>
                </Link>
                
                <div className="visit-count">  Visitors: {visits}</div>

                {/* RIGHT ICONS */}
                <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4">
                <li className="nav-item">
                    <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                        <i className="bi bi-person fs-5 text-white"></i>
                    </a>
                </li>
                </ul>
            </div>
        </nav>
      </div>

      {/* SIGN-UP MODAL */}
      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-4">
                <div className="modal-header border-0">
                    <h5 className="modal-title fw-bold" id="signupModalLabel">Sign Up</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" placeholder="Enter your Name" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" placeholder="Enter your Email Address" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">PassWord</label>
                            <input type="password" className="form-control" placeholder="Enter your Password" required/>
                        </div>
                        <p className="text-muted">
                            By signing up, you agree to our <a href="#" className="text-success text-decoration-none">Terms & Conditions</a> and <a href="#" className="text-success text-decoration-none">Privacy Policy</a>.
                        </p>
                        <button type="button" className="btn btn-dark w-100">Sign Up</button>
                    </form>
                    <div className="text-center mt-3">
                        <p>Aleady have an account? <a href="" className="text-success fw-bold">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
export default Nav;