import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Myhome = () =>{

    let[featuredproperty, updateFeaturedProperty] = useState( [] );
    let getFeaturedProperty = () =>{
        fetch("https://realestateapi.onrender.com/featuredproperty")
        .then(response => response.json())
        .then(propertyArray=>{
            updateFeaturedProperty(propertyArray.reverse());    ////.reverse() Newly added property will come on the top
        })
    }

    useEffect ( () =>{
        getFeaturedProperty();
    }, [1]);


    return(
        <>
            {/* banner start */}
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg" height="500" width="100%"/>
                        
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1 className="heading1"> Find Your Dream House </h1>
                                <h1 className="heading1"> With Us </h1>
                                <h6 className="sub_heading1"> The Best Real Estate Service ! </h6>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://www.regnews.in/wp-content/uploads/2022/03/Indian-realty-towards-high-voltage-growth-1.jpg" height="500" width="100%"/>
                        <div className="container">
                            <div className="carousel-caption text-center">
                                <h1 className="heading2"> Buy The Property Of Your Dreams </h1>
                                <h6 className="sub_heading2"> Your Gateway To A Richer Life!
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://assets-news.housing.com/news/wp-content/uploads/2021/11/25203239/Indian-property-market-shutterstock_1700575657-1200x700-compressed.jpg" height="500" width="100%"/>
                        <div className="container">
                            <div className="carousel-caption text-center">
                                <h1 className="heading3"> Real Estate can be a Source of Secondary Income </h1>
                                <p className="sub_heading1"> Creating Real Value in Property... Outstanding Results! </p>           
                                <p className="sub_heading3"> Move toward success with us.</p>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/5g-communication-technology-internet-network_31965-4119.jpg" height="500" width="100%"/>
                        
                        <div className="container">
                            <div className="carousel-caption text-center">
                                <h1 className="heading4"> Your Dream Our Wish !</h1>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://www.godrejproperties.com/images/sustainability-banners/design_new5.jpg" height="500" width="100%"/>
                        <div className="container">
                            <div className="carousel-caption text-center">
                                <h1 className="heading5"> We Are Here To Find The Best For You !</h1>
                            </div>
                        </div>
                    </div>

                </div>
        
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
            {/* banner end */}

            <section>
                <div className="container">
                    <h3 className="heading6 mt-5"> Our Best Projects </h3>
                    <div className="row text-center mt-3">
                        {
                            featuredproperty.map((property,index) =>{
                                return(
                                    <div className="col-lg-6 mb-3 key={index}">
                                        <div className="p-4">
                                            <img src={property.photo} height="300" width="100%" className="rounded"/>
                                            <p className="mt-2"> {property.pname} - {property.price} : 
                                                <h5 className="fw-bold"> {property.city} </h5> 
                                                <Link className="link active" to={'/readMore/' + property.id}> Read More... </Link> 
                                            </p>
                                            <Link className="link active btn2" to="/contactus"> Contact </Link>   
                                        </div>
                                    </div>
                                )
                            })
                        }  
                    </div>
                </div>
            </section>

            <section className="bg1 mb-5">
                <div className="container mt5">
                    <div className="row mt-5">
                        <div className="col-lg-6 mt-5">
                            <h5 className="sub_heading1 mt-5"> WHY CHOOSE </h5>
                            <h3 className="heading8 mt-3"> Why Our Customer </h3>
                            <h3 className="heading8 mb-5"> Choose Us? </h3>
                            <p className="fs-5 mb-5">
                                Great choices of plots & lots of amenities opening up avenue to an excellent investment opportunity.
                            </p>
                            <Link className="link active btn3 mb-5 mt-5" to="/cityproperty"> Our Projects </Link>
                        </div>
                        <div className="col-lg-6 border rounded bg-white mt-3 mb-3">
                            <div className="row m-3">
                                <div className="col-lg-3 mt-3">
                                    <i className="fa-solid fa-people-group fa-3x sub_heading4"></i>
                                </div>
                                <div className="col-lg-9">
                                    <h3 className="sub_heading4"> Best Team </h3>
                                    <p>
                                        We have the best team of real estate development professionals 
                                        with an average experience of 10 years in various domains.
                                    </p>
                                </div>
                            </div>

                            <div className="row m-3">
                                <div className="col-lg-3 mt-3">
                                    <i className="fa-solid fa-trophy fa-3x sub_heading4"></i>
                                </div>
                                <div className="col-lg-9">
                                    <h3 className="sub_heading4"> Successful Ventures </h3>
                                    <p>
                                        We have delivered successful real estate ventures to our customers
                                    </p>
                                </div>
                            </div>

                            <div className="row m-3">
                                <div className="col-lg-3 mt-3">
                                    <i className="fa-solid fa-gem fa-3x sub_heading4"></i>
                                </div>
                                <div className="col-lg-9">
                                    <h3 className="sub_heading4"> Commitment, Quality </h3>
                                    <p>
                                        Faith and quality are the mantras for our success
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5 text-center">
                        <div className="col-lg-4">
                            <div className="bg-light border rounded m-4 p-4">
                                <h1 className="heading2"> 25k+ </h1>
                                <h6> Completed Ventures </h6>
                            </div>  
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light border rounded m-4 p-4">
                                <h1 className="heading2"> 5k+ </h1>
                                <h6> Ongoing Ventures </h6>
                            </div>  
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light border rounded m-4 p-4">
                                <h1 className="heading2"> 5k+ </h1>
                                <h6> Upcoming Ventures </h6>  
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mb-5">
                        <div className="col-lg-4">
                            <div className="bg-light border rounded m-4 p-4">
                                <h1 className="heading2"> 5k+ </h1>
                                <h5> Marketing Team </h5>  
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light border rounded m-4 p-4">
                                <h1 className="heading2"> 25k+ </h1>
                                <h5> Happy Customers </h5> 
                            </div> 
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light border rounded m-4 p-4">
                                <h1 className="heading2"> 10+ </h1>
                                <h5> Years </h5> 
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Myhome;