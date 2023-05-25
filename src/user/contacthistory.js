import { useState, useEffect } from "react";

const ContactHistory = () =>{
    
    let [contactedproperty, updateContactedProperty] = useState( [] );
    const getContactedProperty = () =>{
        let contactid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
        let url = "https://realestateapi.onrender.com/contactedproperty";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            const currentUserData = productArray.filter((p)=>p.contact_id===contactid)
            updateContactedProperty(currentUserData.reverse());   //.reverse() Newly added product will come on the top
        })
    }

    useEffect(()=>{
        getContactedProperty();
    },[1]);

    const deleteProperty = (id) =>{
        let url = "https://realestateapi.onrender.com/contactedproperty/"+id;
        let postOption = { method:"DELETE" };
        fetch(url, postOption)
        .then(response => response.json())
        .then(serResponse =>{
            alert("You have removed property from Contacted Property !")
            getContactedProperty();      //Reload the List
        })
    }

    return(
        <>
            <section>
                <div className="container mt-4">
                    <div className="row">
                        <h1 className="text-center text-success mt-5"> Contacted Property </h1>
                        <div className="col-lg-12 mt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th> Sr. No. </th>
                                        <th> Property Id </th>
                                        <th> Pic </th>
                                        <th> Type </th>
                                        <th> Details </th>
                                        <th> Mail to Agent </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contactedproperty.map((contactedpro, index) =>{
                                            
                                                return(
                                                    <tr key={index}>
                                                        <td> {index + 1} </td>
                                                        <td> {contactedpro.id} </td>
                                                        <td> 
                                                            <img src={contactedpro.photo} height="200" width="300"/>
                                                        </td>
                                                        <td> {contactedpro.ptype} </td>
                                                        <td> 
                                                            <h6> {contactedpro.pname} </h6> 
                                                            <p> {contactedpro.price} </p>
                                                            <h6> {contactedpro.city} </h6>
                                                            <p> {contactedpro.address} </p> 
                                                        </td>
                                                        <td> 
                                                             <p> {contactedpro.agent_name} </p>
                                                            <p> {contactedpro.agent_no} </p>
                                                            <p> {contactedpro.agent_email} </p>   
                                                        </td>
                                                        <td> 
                                                            <button className="btn btn-danger mt-5" onClick={deleteProperty.bind(this, contactedpro.id)}> Remove </button>
                                                        </td>
                                                    </tr>
                                                )
                                                 
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default ContactHistory;