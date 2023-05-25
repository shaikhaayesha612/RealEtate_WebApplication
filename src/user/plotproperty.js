import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import EmailModal from "../components/emailModal";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const PlotProperty = () =>{
    let[plotproperty, updatePlotProperty] = useState( [] );
    let getPlotProperty = () =>{
        let url= "https://realestateapi.onrender.com/property?ptype=plot";
        fetch(url)
        .then(response => response.json())
        .then(propertyArray=>{
            updatePlotProperty(propertyArray.reverse());    ////.reverse() Newly added property will come on the top
        })
    }

    useEffect ( () =>{
        getPlotProperty();
    }, [1]);

    let [keyword, updateKeyword] = useState("");

    //pagination start
    const PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(plotproperty.length / PER_PAGE);
    // pagination end 

    const save = (property) =>{                 //property is holding complete information
        let user = localStorage.getItem("sellerid");
        let url= "https://realestateapi.onrender.com/savedproperty";  

        property.user_id=user
        
        let postOption  = {
            headers:{'Content-Type':'application/json'},
            method:"POST",
            body:JSON.stringify(property)
        };

        fetch(url, postOption)
        .then(response=>response.json())
        .then(serverStatus =>{
            toast("Property is Saved !" ,{
                position: toast.POSITION.TOP_CENTER,
            });
        })
    }

   //Contact to Agent
   let [modalState, setModalState] = useState(false);
   let [emailProperty, setEmailProperty] = useState(false);
   let callModal = (property) => {
       setEmailProperty(property)
       setModalState(!modalState);
   }

    return(
        <>
            
            <section>
                <div className="contaimer mt-5">
                    <ToastContainer/>
                    <div className="row mt-4 mb-3">
                        <div className="col-lg-6">
                            <h3 className="text-success text-center"> Real Estate Plottes Properties </h3>
                        </div>
                        <div className="col-lg-4">
                            <input type="text"
                                className='form-control'
                                placeholder='Search Property by City'
                                onChange={obj => updateKeyword(obj.target.value)} 
                            />
                        </div>
                        <div className="col-lg-2"></div>
                    </div>

                    <div className="row text-center">
                        {
                            plotproperty.filter(post => {
                                if (post.city.toLowerCase().includes(keyword.toLowerCase()) ||
                                    post.ptype.toLowerCase().includes(keyword.toLowerCase()) ||
                                    post.price.toLowerCase().includes(keyword.toLowerCase()) ) 
                                {
                                    return post;
                                }
                            }).slice(offset, offset + PER_PAGE).map((property, index)=>{
                                return(
                                    <div className="col-lg-4 mb-5 key={index}">
                                        <div className="p-4">
                                            <img src={property.photo} height="200" width="100%" className="rounded"/>
                                            <p className="mt-2"> {property.pname} - {property.price} </p>
                                            <p className="fw-bold"> {property.city} </p>
                                            <Link className="link active" to={'/readMore/' + property.id}> Read More... </Link>
                                            <p> 
                                                <button className="btn btn-danger m-1" onClick={callModal.bind(this, property)}> Contact </button>
                                                <button className="btn btn-success" onClick={save.bind(this, property)}> Save Property </button> 
                                            </p>                                       
                                        </div>
                                    </div>
                                )
                            })
                        }    
                    </div>
                </div>

                {emailProperty && <EmailModal modalState={modalState} callModal={callModal} property={emailProperty} />}
                
                <div className="mb-4 mt-4">
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={3}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination  justify-content-center"}
                            pageClassName={"page-item "}
                            pageLinkClassName={"page-link"}
                            previousClassName={"page-item"}
                            previousLinkClassName={"page-link"}
                            nextClassName={"page-item"}
                            nextLinkClassName={"page-link"}
                            breakClassName={"page-item"}
                            breakLinkClassName={"page-link"}
                            activeClassName={"active primary"}
                        />
                </div>

            </section>
        </>
    )
}

export default PlotProperty;