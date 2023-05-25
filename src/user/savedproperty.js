import { useState, useEffect } from "react";

const SavedProperty = () =>{

    let [savedproperty, updateSavedProperty] = useState( [] );
    const getSavedProperty = () =>{
        let userid = localStorage.getItem("sellerid");    //whenever we login, it will return sellerid
        let url = "https://realestateapi.onrender.com/savedproperty";
        fetch(url)
        .then(response=>response.json())
        .then(productArray=>{
            const currentUserData = productArray.filter((p)=>p.user_id===userid)
            updateSavedProperty(currentUserData.reverse());   //.reverse() Newly added product will come on the top
        })
    }

    useEffect(()=>{
        getSavedProperty();
    },[1]);

    const deleteProperty = (id) =>{
        let url = "https://realestateapi.onrender.com/savedproperty/"+id;
        let postOption = { method:"DELETE" };
        fetch(url, postOption)
        .then(response => response.json())
        .then(serResponse =>{
            alert("You have removed property from Saved Property !")
            getSavedProperty();      //Reload the List
        })
    }

    return(
        <>
            <section>
                <div className="container mt-4">
                    <div className="row">
                        <h1 className="text-center text-success"> Saved Property </h1>
                        <div className="col-lg-12 mt-3">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th> Sr. No. </th>
                                        <th> Property Id </th>
                                        <th> Pic </th>
                                        <th> Type </th>
                                        <th> Details </th>
                                        <th> AgentDetails </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        savedproperty.map((savedpro, index) =>{
                                            //   if(savedpro == localStorage.getItem("sellerid")){
                                                return(
                                                    <tr key={index}>
                                                        <td> {index + 1} </td>
                                                        <td> {savedpro.id} </td>
                                                        <td> 
                                                            <img src={savedpro.photo} height="200" width="300"/>
                                                        </td>
                                                        <td> {savedpro.ptype} </td>
                                                        <td> 
                                                            <h6> {savedpro.pname} </h6> 
                                                            <p> {savedpro.price} </p>
                                                            <h6> {savedpro.city} </h6> 
                                                        </td>
                                                        <td> 
                                                            <p> {savedpro.agent_name} </p>
                                                            <p> {savedpro.agent_no} </p>
                                                            <p> {savedpro.agent_email} </p>   
                                                        </td>
                                                        <td> 
                                                            <button className="btn btn-danger mt-5" onClick={deleteProperty.bind(this, savedpro.id)}> Remove </button>
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

export default SavedProperty;