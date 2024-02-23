import React from "react";
import { GoMail } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import logo from "../image/PORT.png"
const Footer = () => {
    return (
        <div className="p-5" style={{color:"#6F6C8F"}}>
            <div className=" row g-5">
                <div className="col-md-3 col-6">
                    <div className="d-block ">
                        <h6 className="mb-4">About</h6>
                        <p>Prices</p>
                        <p>About</p>
                        <p>Services</p>
                        <p>Career</p>
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="d-block ">
                        <h6 className="mb-4">Company</h6>
                        <p>Terms</p>
                        <p>Help</p>
                        <p>Privacy</p>
                    
                    </div>
                </div>
                <div className="col-md-3 col-6">
                    <div className="d-block ">
                        <h6 className="mb-4">Support</h6>
                        <p>Getting started</p>
                        <p>Help center</p>
                        <p>Report a bug</p>
                        <p>chat support</p>
                    </div>
                </div>
                <div className="col-md-3 col-6 ">
                    <div className="d-block ">
                        <h6 className="mb-4">Contact Us</h6>
                        <p><GoMail />  Contact@company.com</p>
                        <p><FaPhone /> xxx-xxxxxx</p>
                        <img src={logo} alt="logo" width="70%" />
                    </div>
                </div>
            </div>
            <div className="py-4">
                <hr ></hr>
            </div>
            <div className="clearfix">
                <p className="float-start">Copyright &copy;2024 PORT</p>
                <p className="float-end">All Rights Reserved | terms and Conditions | Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer;