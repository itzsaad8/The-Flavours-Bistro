import React from 'react'
import './TakeAway.css'
import img1 from '../../asset/SelfCatFood/post1.avif'

const TakeAway = () => {
    return (
        <>

            <div className="hero-sec">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <p className=' text-white  custom-h'>High Quality Box Lunches in Haverfordwest </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className='para text-white'>Spice up your boring office lunch with a delicious boxed lunch from The Box by Ben Gobbi, we provide amazing food for customers across Pembrokeshire and in Haverfordwest.</p>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col">
                            <button className='btn btn-outline-secondary  rounded-0 custom-btn'>SELF CATERING MENU</button>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* ..................... */}
            <div className="post-1 my-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-10">
                            <img className='post1-img img-fluid' src={img1} alt="" />
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="custom-post1">
                                <p className='post1-heading'>Freshly made - with local produce</p>
                                <p className='post1-para'>Eating the same old sandwich for your lunch in the office can drive you crazy, the same goes for booking a self-catering holiday and realising that you're not quite the cook you thought you were! Don't suffer in silence, contact The Box and enjoy a delicious lunch crafted by us.

                                    Our lunch menu is available between 12 and 4pm and is changed daily so contact us to find out what we have to offer and don't miss out on our delicious box lunches. We can deliver or you can visit us on Withybush Trading Estate.</p>
                                <button className='btn btn-outline-secondary  rounded-0 post1-btn'>MENU</button>
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
                                <p className='post1-heading'>From gourmet sandwiches to delicious bao buns</p>
                                <p className='post1-para'>We offer a delicious range of boxed lunches that are sure to leave you satisfied, all made with locally sourced produce. Some examples from our current boxes include Welsh lamb kofte kebab with fattoush salad and tzatziki dressing or confit shredded duck noodles with spring onion and mulled cherry sauce! If you like the sound of that, give us a call or come see us, we look forward to satisfying you gastronomic needs.



We don't just offer boxed lunches though, if you're interested in something lighter, we offer gourmet grilled sandwiches, bao buns, delicious sides, sweet treats and much more!</p>
                                <button className='btn btn-outline-secondary  rounded-0 post1-btn'>BOOK NOW</button>
                            </div>
                        </div>
                        <div className="col-lg-6 col-10">
                            <img className='post1-img img-fluid' src={img1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ................... */}
            <div className="contact-form my-5 py-5 d-flex flex-column align-items-center justify-content-center">
                <div className="container">
                    <div className="heading-form-cat text-center">
                        <p className=''>CONTACT US</p>
                        <p className=''>07975 553654</p>
                    </div>
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



        </>
    )
}

export default TakeAway