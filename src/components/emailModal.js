import React, { useRef } from 'react'
import { Modal, Button } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function EmailModal({ modalState, callModal, property }) {

    const form = useRef();
    const sendEmail = (e) => {

        e.preventDefault();     // prevents the page from reloading when you hit “Send”

        let contact_user = localStorage.getItem("sellerid");

        let url = "https://realestateapi.onrender.com/contactedproperty";

        property.contact_id = contact_user
        let postOption = {
            headers: { 'Content-Type': 'application/json' },
            method: "POST",
            body: JSON.stringify(property)
        };

        fetch(url, postOption)
            .then(response => response.json())
            .then(serverStatus => {
                //alert("Request has Sent !");

                emailjs.sendForm('service_18cacdy', 'template_f5btmrb', form.current, 'TCCkK1aqYSRXt2bFq')
                    .then((result) => {
                        // show the user a success message
                        console.log(result);
                        alert("Your Request has sent !");
                        window.location.reload();
                    }, (error) => {
                        // show the user an error
                        console.log(error.text);
                    });
            })


    };

    return (
        <>

            {/* modal starts here */}
            <Modal show={modalState} onHide={callModal}>
                <Modal.Header closeButton className="modal-header bg-info text-white p-3">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Contact to Property Agent</h1>
                </Modal.Header>
                <Modal.Body className="modal-body">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="mb-3">
                            <label>Enter Your Name</label>
                            <input type="text" name="name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Enter Mobile No</label>
                            <input type="text" name="usermobile" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Enter e-Mail Id</label>
                            <input type="text" name="useremail" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label>Enter Message</label>
                            <textarea name="message" className="form-control"></textarea>
                        </div>
                        <input type="submit" value="Send Request" className="btn btn-danger" />
                    </form>
                </Modal.Body>

                <Modal.Footer></Modal.Footer>
                {/* <Modal.Footer className="modal-footer justify-content-center">
                        <Button type="button" className="btn btn-danger">Send Request <i className="fa fa-arrow-right"></i></Button>
                    </Modal.Footer> */}
            </Modal>
            {/* modal ends here */}

        </>
    )
}

export default EmailModal