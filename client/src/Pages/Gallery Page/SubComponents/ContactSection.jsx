import React from 'react'

const ContactSection = ({ title, phoneNum }) => {
    return (
        <>
            <div className="container contact-height">
                <div className="row my-5">
                    <div className="col">
                        <div className='contact-c text-center mt-5'>
                            <h1 className='gallery_contact_title'>{title}</h1>
                            <h1 className='gallery_contact_num'>{phoneNum}</h1>
                        </div>
                    </div>
                </div>
                <form action="">
                    {/* <div className="container">  bilal code*/}
                    {/* <div className="row my-5">
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
                    </div> */}
                    {/* </div>  saad code*/}
                    <div className="contact-form my-5 py-5 d-flex flex-column align-items-center justify-content-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12">
                                    <span>Name:</span>
                                    <input className='form-control border-0  border-bottom mt-2 py-2' type="text" />
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <span>Email:</span>
                                    <input className='form-control border-0  border-bottom mt-2 py-2' type="text" />
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <span>Phone:</span>
                                    <input className='form-control border-0 border-bottom mt-2 py-2' type="text" />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col">
                                    <span>Message:</span>
                                    <textarea className='form-control border-0 border-bottom mt-2 py-3' type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="button text-center py-3">
                            <button className='btn btn-outline-secondary rounded-0 border-2  fw-bold px-5 py-3'>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactSection
