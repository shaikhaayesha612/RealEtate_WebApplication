import { BrowserRouter, Link } from "react-router-dom";

//For Dropdown-Menu
import { CDropdown } from "@coreui/react";
import { CDropdownToggle } from "@coreui/react";
import { CDropdownMenu } from "@coreui/react";
import { CDropdownItem } from "@coreui/react";

const Publicheader = () =>{

    return(
        <>            
            {/* top nav start */}
            <nav className="navbar navbar-expand-md sticky-top bg-light p-3">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bold fs-5" href="#">
                    <i className="fa-solid fa-building"></i> Real Estate Listing Web Application
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item ps-4">
                                <Link className="nav-link active fw-bold " to="/#"><i className="fa fa-home"></i> Home </Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link className="nav-link active fw-bold" to="/about"><i className="fa fa-tools"></i> About Us </Link>
                            </li>

                            <li className="nav-item ps-4">
                                <CDropdown>
                                    <CDropdownToggle color="white fw-bold"> <i className="fa fa-building"></i> Our Projects </CDropdownToggle>
                                    <CDropdownMenu>
                                        <CDropdownItem> <Link className="nav-link active fw-bold" to="/cityproperty"> By City </Link> </CDropdownItem>
                                        <CDropdownItem> <Link className="nav-link active fw-bold" to="/resproperty"> Residential </Link> </CDropdownItem>
                                        <CDropdownItem> <Link className="nav-link active fw-bold" to="/commproperty"> Commercial </Link> </CDropdownItem>
                                        <CDropdownItem> <Link className="nav-link active fw-bold" to="/plotproperty"> Plotted </Link> </CDropdownItem>
                                    </CDropdownMenu>
                                </CDropdown>
                            </li>


                            <li className="nav-item ps-4">
                                <Link className="nav-link active fw-bold" to="/contactus"><i className="fa fa-headset"></i> Contact Us </Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav me-auto mb-2 mb-md-0 float-right">
                            <li className="nav-item ps-4">
                                <Link className="nav-link active fw-bold text-white text-center btn1 m-1" to="/login"><i className="fa fa-lock"></i> Login </Link>
                            </li>
                            <li className="nav-item ps-4">
                                <Link className="nav-link active fw-bold text-white text-center btn1 m-1" to="/signup"><i className="fa fa-user-plus"></i> SignUp </Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-danger text-white" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
            {/* top nav end */}
        </>
    )
}

export default Publicheader;