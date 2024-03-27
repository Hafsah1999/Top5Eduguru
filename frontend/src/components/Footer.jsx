import { useLocation } from 'react-router-dom';
import logo from '../assets/Logo.png'

const Footer = () => {
    //Logic for footer hide from some components
    const location = useLocation();

    // Specify the paths where you want to hide the Navbar
    const hideFooterPaths = ['/Login','/Signup','/Admin/ManageReviews','/Admin/UpdateCollege','/Admin/Dashboard','/Admin/Manage','/Admin/AddPlayway','/Admin/AddSchool','/Admin/AddCollege','/Admin/AddUniversity','/Admin/ManageSchool','/Admin/ManagePlayway','/Admin/ManageUniversity','/Admin/Manageuser'];
  
    // Check if the current path is in the hideNavbarPaths array
    const shouldHideFooter = hideFooterPaths.includes(location.pathname);
  
    return shouldHideFooter ? null : (
        <>

            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                        <img src={logo} alt="loading" />
                       
                    </div>
                    <div className="col mb-3"></div>
                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Features
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    Pricing
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    FAQs
                                </a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 text-body-secondary">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>


        </>
    )
}

export default Footer