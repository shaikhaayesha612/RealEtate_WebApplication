import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ReadMore() {
  const { id } = useParams()
  let[property, updateProperty] = useState( [] );

    fetch("https://realestateapi.onrender.com/property/" + id)
      .then(response => response.json())
      .then(p => {
        updateProperty(p)
      })

  return (
    <>
      <section>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-1'>
              <div className='text-end'>
                <Link className="link active btn btn-danger" to="/cityproperty"> Back </Link>
              </div>
            </div>

            <div className='col-lg-10'>
              <div className='row'>
                <div className='mb-4'>
                    <img src={property.photo} height="400" width="800" />
                </div>

                <div className='row'>
                    <p> <h3 className='text-danger fw-bold'> {property.pname} </h3> </p>
                    <p> <h5> {property.city} : {property.address}</h5> </p>
                    <p> <h5 className='text-success'> Contact Detals: </h5>
                        <p> {property.agent_name} , {property.agent_no} </p>
                        <p> {property.agent_email} </p>
                    </p>
                    <p> <h5 className='text-success'> Property Details: </h5>
                        <p> {property.details} </p>
                    </p>
                </div>

                <div className='row mb-5'>
                    <h5 className='text-danger fw-bold'> More Images : </h5>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div>
                        <img src={property.image1} height="300" width="400" />
                        </div>
                      </div>

                        <div className='col-lg-6'>
                        <div>
                          <img src={property.image2} height="300" width="400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className='row mt-3'>
                      <div className='col-lg-6'>
                        <div>
                          <img src={property.image3} height="300" width="400" />
                        </div>
                      </div>
                    </div>

                    <div className='row mt-3'>
                      <div className='text-end'>
                        <Link className="link active btn btn-danger" to="/cityproperty"> Back </Link>
                      </div>
                    </div>
                </div>
                    
              </div>
            </div>

            <div className='col-lg-1'></div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ReadMore;