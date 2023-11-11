import React from 'react';
import './HomePage.css'
import HomeTopSection from './HomeSubComponents/HomeTopSection';
import HomeSecondSection from './HomeSubComponents/HomeSecondSection';
import img5 from '../../Assets/img5.webp'
import img2 from '../../Assets/img2.webp'
import img3 from '../../Assets/img4.webp'
import { BiLogoFacebook,BiMobile } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BsShop } from "react-icons/bs";
import { MdEmail , MdLocationOn} from "react-icons/md";


export default function HomePage() {
  return (
    <>
      <HomeTopSection content={"FRESHLY PREPARED TAKEAWAY LUNCHES, 3 COURSE A LA CARTE EVENING SERVICE"} />
      <HomeSecondSection />

      <div className="conatiner-fluid section-1">
        <h2 className='section_1_title'>#EXCITETHEAPPETITE</h2>
      </div>
      {/* <div class="fixed-icons d-flex flex-column">
    <i><BiMobile/></i>
    <i><MdEmail /></i>
    <i><MdLocationOn /></i>
  </div> */}

      <div className="section-2 container-fluid mt-3 ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-4 col-11 section-2-img">
            <img src={img5} alt="" />
          </div>
          <div className="col-lg-4 col-md-4 col-11 section-2-img">
            <img src={img2} alt="" />
          </div>
          <div className="col-lg-4 col-md-4 col-11  section-2-img">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>

      <div className="section-3 text-center mt-5">
        <h2>TAKEAWAY LUNCH & DINNER MENU</h2>
        <div className="row d-flex justify-content-center">
          <div className="col-10">
            <p >Here at The Box we have an exciting combination of Street Food & A La Carte dishes to tempt you. So whether it’s a tasty quick bite you’re after or something more substantial there’s something here for you, all prepared with locally sourced ingredients. The menu is available from 12-3pm and again at 5-8pm Tuesday – Friday & Sat 5-8pm. The evening service will include the ‘Dinners’ but as these are cooked to order we would appreciate at least an hours’ notice so that we can prepare the food. The rest of the menu can be pre-ordered or ordered on arrival with dishes taking between 10-15mins depending on busyness</p>
            <button className='section-3-btn'>QUICK BITE MENU</button>
          </div>
        </div>

      </div>

      <div className="section-4 mt-5">
      <div className="row d-flex justify-content-center">
      <img className='col-lg-2 col-6' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221028_123054-1920w.jpg" alt="" />
        <img className='col-lg-2 col-6' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221020_144944-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221108_125345-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221117_121121-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20220616_122057-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20230310_131017-1920w.jpg" alt="" />
      </div>

      </div>

     {/* <section-5></section-5> */}
      <div className="section-3 text-center mt-5">
        <h2>SELF CATERING</h2>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-10">
            <p>
              The food is delivered to your self-catering residence in heatproof biodegradable packaging. The tubs go straight into your preheated oven and heat for the time displayed on the accompanying advisory heating sheet provided with the food. <br /> <br />

              We do our best to cook and prepare the food as fresh as we can for maximum flavour and aesthetics, with this being said we ask for as much notice with the evening orders as possible to enable us to factor in sourcing the ingredients, preparation and potential delivery.</p>
            <button className='section-3-btn'>SELF CATERING</button>
          </div>
        </div>

      </div>


      {/* section-6 */}
      <div className="section-6 mt-5"></div>
       {/* section 7 */}

       <div className="section-3 text-center mt-5">
        <h2>WEDDINGS & EVENTS</h2>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-10">
            <p>
            Congratulations on you’re engagement! Planning your wedding can be tricky. But once you find your perfect venue and come to searching for a caterer, we provide a varied service depending on what your after. We have plenty of wedding experience, and are so confident that with our knowledge and suggestion, you will come way from any meetings or chats with us with lots of excitement and positivity! <br /> <br />
            We understand above all that weddings are personal and individual and look forward to hearing any new ideas, or favourite food choices. But to make choices easier for couples we have a pack of menus that can be perfectly executed to a high standard on the big day. Please get in touch with us for more details. /</p>
          
          </div>
        </div>

      </div>

      {/* section 8 */}
      <div className="section-4 mt-5">
      <div className="row d-flex justify-content-center">
      <img className='col-lg-2 col-6' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221028_123054-1920w.jpg" alt="" />
        <img className='col-lg-2 col-6' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221020_144944-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221108_125345-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221117_121121-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20220616_122057-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20230310_131017-1920w.jpg" alt="" />
      </div>

      </div>

      {/* section 9 */}

      
      <div className="section-3 text-center mt-5">
        <h2>PRIVATE DINES</h2>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-10">
<p>What better way to celebrate a big event or party than with a private dine just in the company of your nearest and dearest, with no need for a taxi at the end of the evening! Past Private Dines have been held at customers houses or in Self Catering accommodations.  All food is prepared through the day at our Unit and then transported over and finished off at the location. This takes the stress (and the mess!) out of the evening. Then we will ensure to leave the kitchen at the end of the night as spotless as it was found. So zero washing up or wiping down at the end of the night!</p>
            <button className='section-3-btn'>PRIVATE DINE MENU</button>
          </div>
        </div>

      </div>

      {/* section 9 */}
      
      <div className="section-4 mt-5">
      <div className="row d-flex justify-content-center">
      <img className='col-lg-2 col-6' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221028_123054-1920w.jpg" alt="" />
        <img className='col-lg-2 col-6' src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221020_144944-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221108_125345-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20221117_121121-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20220616_122057-1920w.jpg" alt="" />
        <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/20230310_131017-1920w.jpg" alt="" />
      </div>

      </div>

      {/* section 10 */}

      <div className="section-10 pt-5 bg-light pb-5">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-sm-6 order-lg-0 order-1">
              <img src="https://lirp.cdn-website.com/f85a9b25/dms3rep/multi/opt/hr1-660w.jpg" alt="" height='500px'/>
            </div>
            <div className="col-sm-6 mt-5 order-lg-1 order-0">
              <h3>THE TEAM</h3>
              <div className="row mt-5">
                <div className="col-6">
                  <h6 className='fw-bold'>Ben Gobbi</h6>
                  <h6 className='fst-italic opacity-75'>Chef Owner</h6>
                  <p>I have worked as a chef in Pembrokeshire for the past 20 years. This experience has allowed me to to develop my own culinary venture as The Box By Ben Gobbi.</p>
                </div>
                <div className="col-6">
                  <h6 className='fw-bold'>Eleanor Gobbi</h6>
                  <h6 className='fst-italic opacity-75'>Co-Owner</h6>
                 <p>I play an integral role to the front of house for the The Box By Ben Gobbi. Whilst undertaking the overall management of the business with my husband.</p>
                </div>
                
              </div>
             <div className="smooth-line"></div>

             <p className='fst-italic'>"Incredibly tasty food, being able to have high quality restaurant food at home is just amazing too! Will definitely be ordering again!!!!"</p>
             <h6 className='fw-bold'>- Danielle G</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-form my-5 py-5 d-flex flex-column align-items-center justify-content-center">
        <div className="container contact">
          <h2 className='text-center'>Contact Us</h2>
          <h2 className='text-center mt-3'>07975 553654</h2>
          <p className='text-center'>If you’d like to place an order with us or even if you have any queries please give us a call or drop us a message. We look forward We look forward to hearing from you.</p>
          <div className="row mt-5">
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
        <div className="icons">
        <p className='footer_icons'><span className='footer_icon'><BiLogoFacebook size={35}/></span> <span className='footer_icon'><BiLogoInstagram size={35}/></span> <span className='footer_icon'><BsShop size={35}/></span> </p>

        </div>
      </div>
    </>
  )
}
