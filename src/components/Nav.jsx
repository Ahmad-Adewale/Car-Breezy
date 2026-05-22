import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    Menu,
    X,
    User,
    Search,
    Bell,
    ChevronRight
} from "lucide-react";

import "../styles/navbar.css";
import logo from "/logo.jpeg";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [visits, setVisits] = useState(0);

    // VISITOR COUNTER
    useEffect(() => {

        const storedVisits =
            localStorage.getItem("visitCount");

        const newCount =
            storedVisits
                ? parseInt(storedVisits) + 1
                : 1;

        setVisits(newCount);

        localStorage.setItem(
            "visitCount",
            newCount
        );

    }, []);

    // SCROLL EFFECT
    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    // NAVIGATION LINKS
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "New Cars", path: "/products/new" },
        { name: "Used Cars", path: "/products/used" },
        { name: "Brands", path: "/products/brands" },
        { name: "Gallery", path: "/gallery" },
        { name: "Offers", path: "/products/offers" },
    ];

    return (
        <>
            {/* =========================
                NAVBAR
            ========================= */}

            <header
                className={`navbar ${isScrolled ? "scrolled" : ""
                    }`}
            >

                <div className="container navbar-container">

                    {/* =========================
                        LOGO
                    ========================= */}

                    <Link
                        to="/"
                        className="navbar-logo"
                    >
                        <img
                            src={logo}
                            alt="Car Breezy Logo"
                        />

                        <div className="logo-text">
                            <span>CAR-BREEZY</span>

                            <small>
                                Luxury Automotive
                            </small>
                        </div>
                    </Link>

                    {/* =========================
                        DESKTOP NAV
                    ========================= */}

                    <nav className="navbar-links">

                        {navLinks.map((link) => (

                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "navbar-link active"
                                        : "navbar-link"
                                }
                            >
                                {link.name}
                            </NavLink>

                        ))}

                    </nav>

                    {/* =========================
                        ACTIONS
                    ========================= */}

                    <div className="navbar-actions">

                        {/* ACCOUNT */}

                        <button
                            className="account-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#signupModal"
                        >
                            <User size={18} />

                            <span>Account</span>
                        </button>

                        {/* VISITORS */}

                        <div className="visit-pill">
                            <span className="pulse"></span>

                            {visits}+ Visitors
                        </div>

                        {/* MOBILE TOGGLE */}

                        <button
                            className="mobile-toggle"
                            onClick={() =>
                                setMenuOpen(!menuOpen)
                            }
                        >
                            {menuOpen
                                ? <X size={28} />
                                : <Menu size={28} />
                            }
                        </button>

                    </div>

                </div>

                {/* =========================
                    MOBILE MENU
                ========================= */}

                <div
                    className={`mobile-menu ${menuOpen ? "active" : ""
                        }`}
                >

                    {navLinks.map((link) => (

                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "mobile-link active"
                                    : "mobile-link"
                            }
                            onClick={() =>
                                setMenuOpen(false)
                            }
                        >

                            <span>{link.name}</span>

                            <ChevronRight size={18} />

                        </NavLink>

                    ))}

                    <button
                        className="mobile-account-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#signupModal"
                    >
                        Create Account
                    </button>

                </div>

            </header>

            {/* =========================
                SIGNUP MODAL
            ========================= */}

            <div
                className="modal fade"
                id="signupModal"
                tabIndex="-1"
                aria-hidden="true"
            >

                <div className="modal-dialog modal-dialog-centered">

                    <div className="modal-content signup-modal">

                        <div className="modal-header border-0">

                            <div>
                                <h5 className="modal-title">
                                    Welcome Back
                                </h5>

                                <p className="modal-subtitle">
                                    Create your Car-Breezy account
                                </p>
                            </div>

                            <button
                                type="button"
                                className="btn-close btn-close-white"
                                data-bs-dismiss="modal"
                            ></button>

                        </div>

                        <div className="modal-body">

                            <form className="signup-form">

                                <div className="input-group-custom">
                                    <label>
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="input-group-custom">
                                    <label>
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="input-group-custom">
                                    <label>
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                    />
                                </div>

                                <button className="btn-primary-custom">
                                    Create Account
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default Navbar;