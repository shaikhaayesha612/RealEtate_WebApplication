
const About = () =>{
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
                  <img src="https://www.brigadecalista.com/images/gallery/01.webp" height="400" width="100%"/>
              </div>
              <div className="carousel-item">
                  <img src="https://www.godrejproperties.com/images/sustainability-banners/design_new7New.jpg" height="400" width="100%"/>
              </div>

              <div className="carousel-item">
                  <img src="https://www.prestigeprimrosehills.gen.in/images/gallery/top-luxury-apartments-in-bangalore.webp" height="400" width="100%"/>
              </div>

              <div className="carousel-item">
                  <img src="https://elledecor.in/wp-content/uploads/2021/10/H14_Mohanty-Villa-Kanhai-Gandhi.jpg" height="400" width="100%"/>
              </div>

              <div className="carousel-item">
                  <img src="https://liftlytics.imgix.net/aviva-goodyear/1669739456.689919MARK-TAYLORRESIDENTIAL_AvivaGoodyearPhaseII_Pool_22-023_011.jpg" height="400" width="100%"/>
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
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <h2 className="heading7"> What is Real Estate?</h2>
                            <p> 
                                Real estate is defined as the land and any permanent structures, like a home, or improvements attached to the land, whether natural or man-made.
                                Real estate is a form of real property. It differs from personal property, which is not permanently attached to the land, such as vehicles, boats, jewelry, furniture, and farm equipment.
                            </p>

                            <h3 className="heading7"> What Are Types of Real Estate? </h3>
                            <p>
                                <h6 className="text-success">Residential real estate: </h6> Any property used for residential purposes. Examples include single-family homes, condos, cooperatives, duplexes, townhouses, and multifamily residences.
                            </p>   
                            <p>
                                <h6 className="text-success"> Commercial real estate: </h6> Any property used exclusively for business purposes, such as apartment complexes, gas stations, grocery stores, hospitals, hotels, offices, parking facilities, restaurants, shopping centers, stores, and theaters.
                            </p>   
                            <p>
                                <h6 className="text-success"> Industrial real estate: </h6> Any property used for manufacturing, production, distribution, storage, and research and development.
                            </p>   
                            <p> 
                                <h6 className="text-success"> Land: </h6> Includes undeveloped property, vacant land, and agricultural lands such as farms, orchards, ranches, and timberland.
                            </p>   
                            <p>
                                <h6 className="text-success"> Special purpose: </h6> Property used by the public, such as cemeteries, government buildings, libraries, parks, places of worship, and schools.
                            </p>
                        </div>
                        <div className="col-lg-4 mt-5">
                            <img src="https://www.seoclerk.com/pics/000/946/365/b6ea3812b81f0ab809cfe9fc56e07c78.png" height="500" width="400" className="mt-5"/>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row mt-5 mb-5">
                    <h2 className="mb-4 text-danger text-center"> Advantages Of Investing In Real Estate </h2>
                        <div className="col-lg-6">
                            
                            <img src="https://ashurstandniemeyer.com/wp-content/uploads/2020/11/rental-property-investment-Photo-e1624298238421.jpeg" height="400" width="450"/>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://assets-news.housing.com/news/wp-content/uploads/2020/07/15144700/As-an-asset-class-real-estate-will-get-stronger-post-COVID-19-657x400.jpg" height="400" width="600"/>
                        </div>
                    </div>     
                </div>
            </section>

            <section>

            </section>
        </>
    )
}

export default About;