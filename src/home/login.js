import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";

const Login = () =>{

    let[email, pickEmail] = useState("");
    let[password, pickPassword] = useState("");
    let[msg, updateMsg] = useState("Enter Your Login Details");

    let goLogin = () =>{
        if( email === "" || password === ""){
            updateMsg("Please Enter Email-Id or Password !");
        }else{
            updateMsg("Please Wait Validating...");
        
            let url = "https://realestateapi.onrender.com/account?email="+email+"&password="+password;      //Query String
            fetch(url)
            .then(Response=>Response.json())
            .then(userInfo=>{
            //console.log( userInfo );        //if userInfo i.e. both useremail & password is matching simultaneously, 
                                                 //it gives all the user details otherwise empty array will come
                if(userInfo.length>0){                //length>0 i.e. user has found
                    updateMsg("Success : Redirecting...");
                    localStorage.setItem("sellerid", userInfo[0].id);    //userid value is coming from backend, change it to userid
                    localStorage.setItem("username", userInfo[0].fname);
                    //window.location.reload();       //refresh the current page i.e. redirecting to the user page
                    Swal.fire ({
                        title: "Suceess!",
                        text: "You have logged in successfully!",
                        icon: "success",
                        timer: 3000,
                        button: "OK!",
                    }).then(function(){
                        window.location.reload(); 
                    });
                }
                else{
                    alert("Failed: Invalid Email or Password !");
                    window.location.reload();
                }
            })                                                                              
        }
    }


    return(
        <>
            <section className="container mt-4">
                <p className="text-center text-danger">{msg}</p>
    
                <div className="row mt-4">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-lg mb-5">
                            <div className="card-header"> 
                                <h4 className="text-info text-center">
                                    <i className="fa fa-lock mb-2"></i> Login 
                                </h4>
                            </div>

                            <div className="card-body">
                                <div className="mb-3">
                                    <label>E-Mail Id</label> <i className="mandatory">*</i>
                                    <input type="email" className="form-control" 
                                     onChange={obj => pickEmail(obj.target.value)} />
                                </div>

                                <div className="mb-3">
                                    <label>Password</label> <i className="mandatory">*</i>
                                    <input type="password" className="form-control" 
                                     onChange={obj => pickPassword(obj.target.value)} />
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-dark" type="button" onClick={goLogin}> Login </button>
                                </div>
                            </div>

                            <div className="card-footer text-center">
                                <p className="text-center mt-2"> Not a Member? <Link className="link active" to="/signup"> Sign Up </Link> </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4"></div>

                </div>
            </section>
        </>
    )
}

export default Login;