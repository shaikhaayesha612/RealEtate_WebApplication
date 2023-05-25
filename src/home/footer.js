
const Footer = () =>{
    return(
        <footer className="bg-dark p-5 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h4> About Us </h4>
                        <img src="https://www.seoclerk.com/pics/000/946/365/b6ea3812b81f0ab809cfe9fc56e07c78.png"
                                  height="100" width="40%"/>
                        <h5 className="mt-2"> Real Estate Application </h5>
                    </div>
                    <div className="col-lg-3">
                        <h4> Our Projects </h4>
                        <p> Residential Projects </p>
                        <p> Commercial Projects </p>
                        <p> Plotted Projects </p>
                    </div>
                    <div className="col-lg-3">
                        <h4> <i className="fa-solid fa-location-dot"></i> Corporate Address </h4>
                        <p> Real Estate Application </p>
                        <p> #123, Real Estate Application, </p>
                        <p> Mantri Square Park, </p>
                        <p> Bengaluru, Karnataka. </p>
                        <p> Contact: 9999999999</p>
                    </div>
                    <div className="col-lg-3">
                        <h4> In Social Media </h4>
                        <p> <i className="fab fa-facebook"></i> Follow in Facebook </p>
                        <p> <i className="fab fa-linkedin"></i> Follow in Linkedin </p>
                        <p> <i className="fab fa-twitter"></i> Follow in Twitter </p>
                        <p> <i className="fab fa-instagram"></i> Follow in Instagram </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;