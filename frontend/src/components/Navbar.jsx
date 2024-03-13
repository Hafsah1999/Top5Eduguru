import { LuUserCircle2 } from "react-icons/lu";

import logo from '../assets/Logo2.png'
// import { Link } from 'react-router-dom'
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
// import { IoAddCircleOutline } from "react-icons/io5";

const Navbar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showMenu, setshowMenu] = useState(false)
    const handleShowMenu = () => {
        setshowMenu(preve => !preve)
    }

    const location = useLocation();

    // Specify the paths where you want to hide the Navbar
    const hideNavbarPaths = ['/login', '/Signup', '/AddCollege','/Admin/Dashboard','/Admin/ManageReviews','/Admin/Manage','/Admin/AddPlayway','/Admin/AddSchool','/Admin/AddCollege','/Admin/AddUniversity','/Admin/ManageSchool','/Admin/ManagePlayway','/Admin/ManageUniversity','/Admin/Manageuser' ];

    // Check if the current path is in the hideNavbarPaths array
    const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

    // Render Navbar only if shouldHideNavbar is false

  
    
    return shouldHideNavbar ? null : (
        <>

            <nav className="navbar bg-body-tertiary  navbar-expand-lg py-0  sticky-top shadow-lg">
                <div className="container-fluid">
                    <div>
                        <img src={logo} onClick={handleShow} alt="" style={{ width: "200px" }} />

                        {/* </Button> */}

                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton >
                                <img src={logo} className='w-50 ' alt="" />
                                <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Link className="nav-link fs-4  navbar-2 text-center mb-3" aria-current="page" to="/">
                                    Home
                                </Link>
                                <Link className="nav-link fs-4  navbar-2 text-center mb-3" aria-current="page" to="/All">
                                    All
                                </Link>
                                <Link className="nav-link fs-4  navbar-2 text-center mb-3" aria-current="page" to="/Playway">
                                    Playway
                                </Link>
                                <Link className="nav-link fs-4  navbar-2 text-center mb-3" aria-current="page" to="/School">
                                    School
                                </Link>
                                <Link className="nav-link fs-4  navbar-2 text-center mb-3" aria-current="page" to="/College">
                                    College
                                </Link>
                                <Link className="nav-link fs-4  navbar-2 text-center mb-3" aria-current="page" to="/University">
                                    University
                                </Link>

                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>



                    <div className=" text-slate-600" onClick={handleShowMenu}>
                        <div className="text-2xl cursor-pointer">
                            <LuUserCircle2 className="text-slate-600 fw-bold fs-2 hover:text-blue-500 " />

                        </div>
                        {showMenu &&
                            <div className="absolute right-0 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col">

                                <div>
                                    <Link to="Signup" className='nav-link fs-4 text-center mb-3 py-1 navbar-1 rounded me-2 px-3' >Signup</Link>
                                    <Link to="Login" className='nav-link fs-4 text-center mb-3 navbar-1 py-1 rounded px-3 me-2' >Login</Link>
                                </div>
                            </div>
                        }

                    </div>

                </div>
            </nav>




            {/* <ul className="navbar-nav mx-auto  mb-2 mb-lg-0">
                            <Button variant='none' className="me-3 navbar-1 px-3">
                                <FaSearch className='fs-5 ' />
                            </Button>
                            <Button className='navbar-1 px-3' variant='none'>
                                <span className="fs-4 fw-semibold"><IoAddCircleOutline />  Add Listing</span>
                            </Button>
                        </ul> */}



        </>
    )
}

export default Navbar