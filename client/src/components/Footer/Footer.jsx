import React from 'react'
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BsShop } from "react-icons/bs";

import './Footer.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-3 col-12">
                            <h5 className='footer_heading'>CONTACT US</h5>
                            <p className='mt-3'>01416 111531</p>
                            <p>01416 111531</p>
                            <p>clearbusinessbyadrian@gmail.com</p>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h5 className='footer_heading'>FIND US</h5>
                            <p className='mt-3'>Grosvenor Buildings, Wynnstay Rd, Ruthin LL15 1AS, UK</p>

                            <p className='footer_icons'><span className='footer_icon'><BiLogoFacebook /></span> <span className='footer_icon'><BiLogoInstagram /></span> <span className='footer_icon'><BsShop /></span> </p>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h5 className='footer_heading'>BUSINESS HOURS</h5>
                            <p className='d-flex justify-content-between mt-3'><span>Monday</span><span>1:00 pm - 11:00 am</span></p>
                            <p className='d-flex justify-content-between'><span>Tue - Fri</span><span>1:00 pm - 11:00 am</span></p>
                            <p className='d-flex justify-content-end'><span>1:00 pm - 11:00 am</span></p>
                            <p className='d-flex justify-content-between'><span>Saturday</span><span>1:00 pm - 11:00 am</span></p>
                            <p className='d-flex justify-content-between'><span>Sunday</span><span>1:00 pm - 11:00 am</span></p>
                        </div>
                        <div className="col-lg-3 col-12">
                            <h5 className='footer_heading'>WE ACCEPT</h5>
                            <div className="col-lg-12 col-3 payment_line mt-3">
                                <div className='payments'></div>
                                <div className='payments'></div>
                                <div className='payments'></div>
                                <div className='payments'></div>
                            </div>
                            <div className="col-lg-12 col-3 payment_line2">
                                <div className='payments'></div>
                                <div className='payments'></div>
                                <div className='payments'></div>
                                <div className='payments'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="container-fluid bg-black py-1">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <p className='text-white d-flex gap-2'><span>Terms of Use</span>  |  <span>Privacy & Cookie Policy</span>  |  <span>Trading Terms</span>  | <span>Powered by Yell Business</span></p>
                    </div>
                    <div className="col-12 mt-0">
                        <p className='text-white text-center'>&copy; 2023. The content on this website is owned by us and our licensors. Do not copy any content (including images) without our consent.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
