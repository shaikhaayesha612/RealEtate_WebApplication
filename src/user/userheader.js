import { Link } from "react-router-dom";
import swal from "sweetalert";

//For Dropdown-Menu
import { CDropdown } from "@coreui/react";
import { CDropdownToggle } from "@coreui/react";
import { CDropdownMenu } from "@coreui/react";
import { CDropdownItem } from "@coreui/react";

const UserHeader = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand text-white fw-bold  pe-5" href="#">User Dashboard</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ps-5">
                            <Link className="nav-link text-white" to="/"><i className="fa fa-home"></i> Dashboard </Link>
                        </li>
                        <li className="nav-item ps-4">
                            <CDropdown dark>
                                <CDropdownToggle color="dark"> <i className="fa fa-building"></i> Our Projects </CDropdownToggle>
                                <CDropdownMenu>
                                    <CDropdownItem> <Link className="nav-link active text-light" to="/cityproperty"> By City </Link> </CDropdownItem>
                                    <CDropdownItem> <Link className="nav-link active text-light" to="/resproperty"> Residential </Link> </CDropdownItem>
                                    <CDropdownItem> <Link className="nav-link active text-light" to="/commproperty"> Commercial </Link> </CDropdownItem>
                                    <CDropdownItem> <Link className="nav-link active text-light" to="/plotproperty"> Plotted </Link> </CDropdownItem>
                                </CDropdownMenu>
                            </CDropdown>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-white" to="/savedproperty"> <i className="fa-regular fa-bookmark"></i> Saved Properties </Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-white" to="/contacthistory"> <i className="fa-regular fa-address-book"></i> Contact History </Link>
                        </li>
                        <li className="nav-item ps-3">
                            <Link className="nav-link text-danger" to="/login" onClick={Logout}> <i className="fa fa-power-off"></i> 
                                {localStorage.getItem('name')} Logout </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default UserHeader;

const Logout = () =>{
    localStorage.clear();
    //window.location.href="http://localhost:3000/#/";
    swal({
        title: "Success!",
        text : "You have logged out successfully !",
        icon : "success", 
        timer: 3000,
        confirnButtonText : "OK",
    }).then(function(){
        window.location.reload(); 
    });
      
}