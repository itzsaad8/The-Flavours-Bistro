import React from 'react'
import './SelfCateringFood.css'
import img1 from '../../asset/SelfCatFood/post1.avif'

const SelfCateringFood = () => {
    return (
        <>
            <div className="hero-sec">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <p className=' text-white  custom-h'>SELF CATERING MEALS </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className='para text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto corrupti sint reiciendis delectus ut laborum minus quasi. Aliquid ut repudiandae exercitationem facilis reiciendis, nulla odit quasi quos. Ullam, corrupti neque.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className='btn btn-outline-secondary  rounded-0 custom-btn'>SELF CATERING MENU</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ..................... */}
            <div className="post-1 my-4">
                <div className="container-fluid">
                    <div className="row post1_row">
                        <div className="col-lg-6 col-12 d-flex">
                            <img className='post1-img ' src={img1} alt="" />
                        </div>
                        <div className="col-lg-6 col-12 order-sm-1">
                            <div className="custom-post1">
                                <p className='post1-heading'>TAKE THE STRESS OUT OF COOKING ON YOUR HOLIDAY</p>
                                <p className='post1-para'>There are two different styles the food can be delivered in. The ‘Oven Ready’ & ‘Plate Ready’ Oven ready means we get all the food cooked, seasoned, all ready in the service tubs, ready for you to warm through at your convenience. All you do is place the tubs straight into your preheated oven and heat for the time displayed on the accompanying advisory heating sheet provided with the food</p>
                                <button className='btn btn-outline-secondary  rounded-0 post1-btn'>GALLERY PAGE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ................. */}
            <div className="post-1 my-4">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <div className="container  custom-post1">
                                <p className='post1-heading'>From small plates to hearty main meals, we've got you covered</p>
                                <p className='post1-para'>Plate Ready means we heat the food in our kitchen and transport the food as hot as we can to your residence to go straight onto your plate. This tends to work better for customers ordering one course. So, we recommend the Oven Ready option for customers having more than one course so that the food doesn’t spoil.

                                    We do our best to cook and prepare the food as fresh as we can for maximum flavour and aesthetics, with this being said we ask for as much notice with the evening orders as possible to enable us to factor in sourcing the ingredients, preparation and potential delivery.</p>
                                <button className='btn btn-outline-secondary  rounded-0 post1-btn'>CONTACT US</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex">
                            <img className='post1-img ' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ................... */}
            <div className="contact-form my-5 py-5 d-flex flex-column align-items-center justify-content-center">
                <div className="container">
                    <div className="heading-form-cat text-center">
                    <p className=''>CONTACT US</p>
                    <p className=''>01416 111531</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-4 col-sm-12">
                            <span>Name:</span>
                            <input className='form-control border-0 rounded-0  border-bottom border-1 border-dark mt-2 py-2' type="text" />
                            
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <span>Email:</span>
                            <input className='form-control border-0 rounded-0  border-bottom border-1 border-dark mt-2 py-2' type="text" />
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <span>Phone:</span>
                            <input className='form-control border-0 rounded-0 border-bottom border-1 border-dark mt-2 py-2' type="text" />
                        </div>
                    </div>
                    <div className="row my-3">
                        <div className="col">
                            <span>Message:</span>
                            <textarea className='form-control border-0 rounded-0 border-bottom border-1 border-dark mt-2 py-3' type="text" />
                        </div>
                    </div>
                </div>
                <div className="button text-center py-3">
                    <button className='btn btn-outline-secondary rounded-0  border-2 border-dark  fw-bold px-5 py-3'>Send Message</button>
                </div>
            </div>



        </>
    )
}

export default SelfCateringFood