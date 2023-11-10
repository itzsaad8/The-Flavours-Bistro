import React from 'react'
import './ContactUs.css'
import img from '../../asset/contactUs-imgs/contact-det.webp'

const ContactUs = () => {
  return (
    <>
      {/* 1 */}
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col text-white d-flex flex-column align-items-center justify-content-center ">
              <h1 className='contact-text'>Contact us</h1>
              <p className='para text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa fugiat quisquam fuga at suscipit optio quia accusamus placeat tempora. Optio aut repellat vero ea modi accusamus! Sapiente officia reprehenderit ducimus.placeat tempora Optio aut repellat vero officia reprehenderit ducimus.placeat tempora.</p>
              <p className='mt-3 para text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nihil commodi nobis laudantium ut inventore hic! Voluptates tenetur sunt.</p>
            </div>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="contact-detail my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12  text-center">
              <h3 className='contact-det-h'>Contact details</h3>
              <h5 className=''>call us</h5>
              <p className='m-0'>07975 553654</p>
              <p>07928 486245</p>
              <h5 className='my-2'>Email us</h5>
              <p className='m-0'>example2222@gmail.com</p>
              <h5 className='my-2'>Find us</h5>
              <p className='m-0'>The Flavours bistro</p>
              <p className='m-0'>Unit 19 Withybush Trading Est Withybush Rd, Haverfordwest, SA62 4BS</p>
              <h5 className='my-2'>Business hours</h5>
              <div className="hours d-flex align-items-center justify-content-center">
                <div className="left">
                  <p>Monday</p>
                  <p>Tue - Friday</p>
                  <p>saturday</p>
                  <p>Sunday</p>
                </div>
                <div className="right ms-3">
                  <p>Closed</p>
                  <p>12pm </p>
                  <p>12pm</p>
                  <p>Closed</p>
                </div>
              </div>
              <h5 className='mt-3'>Find us on 'add to event'</h5>
              <a className='text-decoration-none' href="">https://www.addtoevent.co.uk/</a>



            </div>
            <div className="col-lg-6 col-12 mt-sm-3">
              <img src={img} width={"96%"} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
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
    </>
  )
}

export default ContactUs
