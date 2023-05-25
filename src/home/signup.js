import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Signup = () =>{

    let[fname, pickFname] = useState("");
    let[lname, pickLname] = useState("");
    let[mobile, pickMobile] = useState("");
    let[email, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[cpassword, pickCpassword] = useState("");

    let [msg, updateMsg] = useState("Enter Details to Sign Up !");

    let[mobileError, updateMobileError] = useState("");
    let[emailError, updateEmailError] = useState("");

    const signup = () =>{
        let formstatus = true;
        if(fname === "" || mobile === "" || email === "" || password === "" || cpassword === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fields with * cannot be left blank!',
              })
        }else{
            let mpattern = /^[0]?[6789]\d{9}$/;

            if( ! mpattern.test(mobile)){
                updateMobileError("Invalid Mobile No.");
                formstatus = false;
            }
            else{
                updateMobileError();
            }

            var epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if( ! epattern.test(email)){
                updateEmailError("Invalid Email");
                formstatus = false;
            }
            else{
                updateEmailError("");
            }

            if(formstatus == true){
                let url = "https://realestateapi.onrender.com/account/";
                let sellerinfo = {
                    "fname" : fname,
                    "lname" : lname,
                    "mobile" : mobile,
                    "email" : email,
                    "password" : password,
                    "cpassword" : cpassword,
                };

                if(password != cpassword){
                    alert("Confirm the password correctly!");
                }else{
                    let postoption = {
                        headers:{'Content-Type':'application/json'},
                        method:"POST",
                        body:JSON.stringify(sellerinfo)
                    }
                    fetch(url, postoption)
                    .then(Response=>Response.json())
                    .then(serverRes=>{
                        // alert(email + " Saved Successfully !");
                        Swal.fire({
                            icon: 'success',
                            title: 'You have registered successfully!',
                            showConfirmButton: true,
                            timer: 1500
                        })
                        //toast(email + "Registered Successfully !");
                        let inputs = document.querySelectorAll("input");
                        inputs.forEach(input => input.value = '');
                        pickFname("");
                        pickLname("");
                        pickMobile("");
                        pickEmail("");
                        pickPassword("");
                        pickCpassword("");
                    })
                }

            }
                
        }
        
    }


    return(

        <>
            <section className="container mt-3">

                <div className="row mt-4">
                    <div className="col-lg-3"></div>

                    <div className="col-lg-6">
                        <p className="text-danger text-center"> {msg} </p>
                        <div className="card border-0 shadow-lg mb-5">
                            <div className="card-header"> 
                                <h4 className="text-info text-center"> 
                                    <i className="fa fa-user-plus"></i> Sign Up  
                                </h4>
                            </div>

                            <div className="card-body"> 
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>First Name</label> <i className="mandatory">*</i>
                                            <input type="text" className="form-control" value={fname}
                                             onChange={obj=>pickFname(obj.target.value)} />
                                    </div>

                                    <div className="col-lg-6">
                                        <label>Last Name</label> 
                                        <input type="text" className="form-control" value={lname}
                                         onChange={obj=>pickLname(obj.target.value)} />
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label> Mobile No.</label> <i className="mandatory">* {mobileError} </i>
                                        <input type="number" className="form-control" value={mobile}
                                         onChange={obj=>pickMobile(obj.target.value)} /> 
                                    </div>

                                    <div className="col-lg-6">
                                        <label>e-Mail id</label> <i className="mandatory">* {emailError} </i>
                                        <input type="email" className="form-control" value={email}
                                         onChange={obj=>pickEmail(obj.target.value)} />
                                    </div>
                                </div>
                                  
                                <div className="row">
                                    <div className="col-lg-6">
                                        <label>Password</label> <i className="mandatory">*</i>
                                        <input type="password" className="form-control" value={password}
                                         onChange={obj=>pickPassword(obj.target.value)} /> 
                                    </div>

                                    <div className="col-lg-6">
                                        <label>Confirm Password</label> <i className="mandatory">*</i>
                                        <input type="cpassword" className="form-control" value={cpassword}
                                         onChange={obj=>pickCpassword(obj.target.value)} /> 
                                    </div>
                                </div>
                                

                                <div>
                                    <p className="text-center mt-2"> Already a Member? <Link className="link active" to="/login"> Log In </Link> </p>
                                </div>
                           
                            </div>

                            <div className="card-footer text-center">
                                <button className="btn btn-dark" onClick={signup}> Sign Up </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3"></div>

                </div>
          </section>
        </>
    )
}

export default Signup;