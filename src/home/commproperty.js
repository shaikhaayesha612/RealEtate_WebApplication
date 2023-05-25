import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const CommProperty = () =>{
    let[commproperty, updateCommProperty] = useState( [] );
    let getCommProperty = () =>{
        let url= "https://realestateapi.onrender.com/property?ptype=commercial";
        fetch(url)
        .then(response => response.json())
        .then(propertyArray=>{
            updateCommProperty(propertyArray.reverse());    ////.reverse() Newly added property will come on the top
        })
    }

    useEffect ( () =>{
        getCommProperty();
    }, [1]);

    let [keyword, updateKeyword] = useState("");

    //pagination start
    const PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(commproperty.length / PER_PAGE);
    // pagination end 

    const save = () =>{
        alert("Please Login to save the property !");
    }  


    return(
        <>
            <section>
                <div className="contaimer mt-5">

                    <div className="row mt-4 mb-3">
                        <div className="col-lg-6">
                            <h3 className="text-success text-center"> Real Estate Commercial Properties </h3>
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
                            commproperty.filter(post => {
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
                                                <Link className="link active btn btn-danger m-1" to="/contactus"> Contact </Link>
                                                <Link className="link active btn btn-success m-1" to="/login" onClick={save}> Save Property </Link>    
                                            </p>    
                                        </div>
                                    </div>
                                )
                            })
                        }    
                    </div>
                </div>

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

export default CommProperty;