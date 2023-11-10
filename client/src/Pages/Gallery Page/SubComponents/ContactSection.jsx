import React from 'react'

const ContactSection = ({ title, phoneNum }) => {
    return (
        <>
            <div className="container contact-height">
                <div className="row my-5">
                    <div className="col">
                        <div className='text-center mt-5'>
                            <h1>{title}</h1>
                            <h1>{phoneNum}</h1>
                        </div>
                    </div>
                </div>
                <form action="">
                    {/* <div className="container"> */}
                    <div className="row my-5">
                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <label htmlFor="name" class="form-label">Name:</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label htmlFor="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" id="emai" aria-describedby="emailHelp" />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label htmlFor="phone" class="form-label">Phone:</label>
                            <input type="number" class="form-control" id="phone" aria-describedby="emailHelp" />
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-12'>
                            <label htmlFor="message" class="form-label">Message:</label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
                            <div className="btn d-flex justify-content-center my-5">
                                <button className='btn btn-lg btn-outline-secondary'>Send Message</button>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </form>
            </div>
        </>
    )
}

export default ContactSection
