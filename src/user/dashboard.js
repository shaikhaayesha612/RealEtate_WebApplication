import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () =>{

    let[savedProperty, updateSavedProperty] = useState( [] );
    let[contactedProperty, updateContactedProperty] = useState( [] );
        
        const getSavedProperty = () =>{
            let userid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
            let url = "https://realestateapi.onrender.com/savedproperty?user_id="+userid;
            fetch(url)
            .then(response=>response.json())
            .then(productArray=>{
                updateSavedProperty(productArray.reverse());          //.reverse() Newly added product will come on the top
            })
        }

        const getContactedProperty = () =>{
            let userid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
            let url = "https://realestateapi.onrender.com/contactedproperty?contact_id="+userid;
            fetch(url)
            .then(response=>response.json())
            .then(productArray=>{
                updateContactedProperty(productArray.reverse());          //.reverse() Newly added product will come on the top
            })
        }
    
        useEffect(()=>{
            getSavedProperty();
            getContactedProperty();
        },[1]);

    return(
        <section className="container mt-4">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h1 className="text-danger"> User Dashboard </h1>
                </div>
            </div>

            <div className="row text-center mt-5">
                <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <Link className="link active" to="/savedproperty"> 
                        <i className="fa-solid fa-building fa-5x text-success mb-3"></i> 
                    </Link>
                    <Link className="link active" to="/savedproperty"> 
                        <h3> {savedProperty.length} : Total Saved Properties </h3>
                    </Link>
                </div>
                <div className="col-lg-4">
                    <Link className="link active" to="/contacthistory">
                        <i className="fa fa-headset fa-5x text-warning mb-3"></i>
                    </Link>
                
                    <Link className="link active decoration" to="/contacthistory"> 
                        <h3> {contactedProperty.length} : Total Contacted Properties </h3>
                    </Link>
                </div>
                <div className="col-lg-2"></div>
            </div>
        </section>
    )
}

export default Dashboard;