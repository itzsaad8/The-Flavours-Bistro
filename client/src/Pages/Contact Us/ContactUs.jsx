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
              <p className='m-0'>01416111531</p>
              
              <h5 className='my-2'>Email us</h5>
              <p className='m-0'>clearbusinessbyadrian@gmail.com</p>
              <h5 className='my-2'>Find us</h5>
              <p className='m-0'>The Flavours bistro</p>
              <p className='m-0'>Grosvenor Buildings, Wynnstay Rd, Ruthin LL15 1AS, UK</p>
              <h5 className='my-2'>Business hours</h5>
              <div className="hours d-flex align-items-center justify-content-center">
                <div className="left">
                  <p>Monday</p>
                  <p>Tue - Friday</p>
                  <p>saturday</p>
                  <p>Sunday</p>
                </div>
                <div className="right ms-3">
                  <p>1pm - 11am</p>
                  <p>1pm - 11am</p>
                  <p>1pm - 11am</p>
                  <p>1pm - 11am</p>
                </div>
              </div>
              <h5 className='mt-3'>Find us on 'add to event'</h5>
              <a className='text-decoration-none' href="">clearbusinessbyadrian@gmail.com</a>



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
              <input className='form-control border-0  border-bottom mt-2 border-1 border-dark rounded-0 py-2' type="text" />
            </div>
            <div className="col-lg-4 col-sm-12">
              <span>Email:</span>
              <input className='form-control border-0  border-bottom mt-2 border-1 border-dark py-2 rounded-0' type="text" />
            </div>
            <div className="col-lg-4 col-sm-12">
              <span>Phone:</span>
              <input className='form-control border-0 border-bottom mt-2 border-1 border-dark py-2 rounded-0' type="text" />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <span>Message:</span>
              <textarea className='form-control border-0 border-bottom mt-2 border-1 border-dark py-3 rounded-0' type="text" />
            </div>
          </div>
        </div>
        <div className="button text-center py-3">
          <button className='btn btn-outline-secondary rounded-0 border-2  fw-bold px-5 py-3'>Send Message</button>
        </div>
      </div>

      {/* Map Section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <iframe className='text-center' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.7841350954504!2d-3.3084185!3d53.1140682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865333df372144b%3A0x9d24146c4bd3cbd7!2sGrosvenor%20Buildings%2C%20Wynnstay%20Rd%2C%20Ruthin%20LL15%201AS%2C%20UK!5e0!3m2!1sen!2s!4v1699701029844!5m2!1sen!2s" width="100%" height="360" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </>
    // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.7841350954504!2d-3.3084185!3d53.1140682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4865333df372144b%3A0x9d24146c4bd3cbd7!2sGrosvenor%20Buildings%2C%20Wynnstay%20Rd%2C%20Ruthin%20LL15%201AS%2C%20UK!5e0!3m2!1sen!2s!4v1699701029844!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default ContactUs
