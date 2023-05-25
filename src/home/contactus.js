import { useRef } from "react";
import emailjs from '@emailjs/browser';

const ContactUs = () =>{

    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();     // prevents the page from reloading when you hit “Send”
        emailjs.sendForm('service_18cacdy', 'template_hj3n4ke', form.current, 'TCCkK1aqYSRXt2bFq')
            .then((result) => {
                // show the user a success message
                console.log(result);
                alert("Your Request has sent !");
                window.location.reload();
             }, (error) => {
                // show the user an error
                console.log(error.text);
     });
    };

    return(
        <>
            <section>

                <div className="container">
                    <h1 className="text-danger text-center mt-5"> Get In Touch <hr/> </h1>
                    <p className="text-center"> Please fill in following details. We will get back to you shortly. </p>
                    <div className="row">
                        <div className="col-lg-2"></div>

                        <div className="col-lg-8 border shadow-lg m-3 mb-5">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row mt-3">
                                    <div className="col-lg-6">
                                        <label> Name </label> 
                                        <input type="text" name="name" className="form-control" />
                                    </div>
                                    <div className="col-lg-6"> 
                                    <label> Email Id </label> 
                                        <input type="email" name="email" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className=" col-lg-6">
                                        <label> Mobile No </label> 
                                        <input type="number" name="mobile" className="form-control" />
                                    </div>
                                    <div className="col-lg-6">
                                    <label> City </label> 
                                        <input type="text" name="city" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-lg-12">
                                        <label> Your Message </label>
                                        <textarea name="message" className="form-control"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="text-center mt-3 mb-3">
                                        <input type="submit" value="Send Request" className="btn btn-danger"/>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    
                    <div className="col-lg-2"></div>

                </div>
            </div>
       
            </section>
        </>
    )
}

export default ContactUs