import React, { useState, useEffect } from "react";
import rate from "../image/Rates.png";
import tracking from "../image/Tracking.png";
import schedule from "../image/Schedule.png";
import { motion } from "framer-motion";
import global from "../image/globe 10.mp4";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { MdPlayArrow } from "react-icons/md";
import advertising from "../image/logisticVideo.mp4";
import strategy from "../image/strategy.png";
import stars from "../image/stars.png";

const Home = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [calendar, setCalendar] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <div className="HomePageHerosection1 px-5">
                <h1 className="my-5" style={{ color: "#5A6980" }}>
                    Global Connectivity <span style={{ position: "relative" }}>
                        {Array.from("Simplified").map((letter, index) => (
                            <span key={index} style={{
                                position: "relative",
                                display: "inline-block",
                                animation: `fadeInOut 6s ${(index * 0.5)}s infinite alternate forwards`,
                            }}>{letter}</span>
                        ))}
                    </span> by <br />
                    <span style={{ backgroundImage: 'linear-gradient(to right, #C381DB, #4E92F9)', color: 'transparent', WebkitBackgroundClip: 'text' }}>Logistics Solution</span>
                </h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2 }}
                    transition={{ duration: 0.5 }}
                    style={{ position: "absolute", top: "3%", left: screenWidth < 500 ? "0%" : "50%", width: screenWidth < 500 ? "100%" : "50%", zIndex: -1, padding: " 0% 5% 0% 5%" }}
                >
                    <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        autoPlay
                        loop
                        muted
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    >
                        <source src={global} type="video/mp4" />
                    </motion.video>
                </motion.div>

                <div className=" mb-3 d-flex flex-wrap gap-2">
                    <button className="d-inline btn1"><img src={rate} alt="rate" /> RATES</button>
                    <button className="d-inline btn2"><img src={tracking} alt="tracking" /> TRACKING</button>
                    <button className="d-inline btn3"><img src={schedule} alt="schedule" /> SCHEDULE</button>
                    <button className="d-inline btn4"> Request Quote </button>
                </div>

                <div className="d-flex flex-wrap gap-2">
                    <div className=" d-block">
                        <input className="d-inline searchinput me-2 mb-2" type="text" name="fromAddress" id="from" placeholder="From" />
                        <FaArrowRightArrowLeft className="me-2" color="lightgray" />
                        <input className="d-inline searchinput" type="text" name="toAddress" id="to" placeholder=" To" />
                    </div>
                    <div>
                        <input className="d-inline searchinput me-2 mb-2" name="orderDate" id="orderDate" type={calendar ? "date" : "text"} placeholder="1 JAN 2024" onMouseEnter={() => setCalendar(true)} onMouseLeave={() => setCalendar(false)} onClick={() => setCalendar(true)} />
                        <input className="d-inline searchinput me-2" type="text" name="shipName" id="ship" placeholder=" FCE 20 st" />
                        <button className="searchButton"><FaSearch /></button>
                    </div>


                </div>
            </div>
            <div className="HomePageHerosection2 ">
                <div className="p-5 ">
                    <div className="row">
                        <div className="col-md-6">

                            <video controls width="100%" className="advertiseVideo" style={{ borderRadius: "9px" }}>
                                <source src={advertising} type="video/mp4" />
                            </video>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className=" flex-wrap ">
                                <h2>Why Choose Us?</h2>
                                <p className="" style={{ textAlign: "justify", letterSpacing: "2px" }}>Our commitment to efficiency ensures timely deliveries and smooth operations, while our track record of reliability speaks for itself. With customized solutions tailored to your specific requirements we guarantee a seamless and stress-free logistics experience</p>
                                <button type="button" style={{ backgroundImage: 'linear-gradient(to right,#C381DB 0%,#4E92F9 100%)', border: "none", outline: "none", color: "white", padding: "4px 20px 4px 20px", borderRadius: "4px", display: "flex", alignItems: "center" }}>click to watch <MdPlayArrow /> </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="HomePageHerosection3  ">
                <div className="borderways overflow-hidden">
                    <h2 style={{ backgroundImage: 'linear-gradient(to right, #C381DB, #4E92F9)', color: 'transparent', WebkitBackgroundClip: 'text', padding: "5%", textAlign: "center" }}>WE ARE RECOMMENDED BY 98K+ BUSSINESS</h2>
                    <div className="row px-5 pb-5 g-5">

                        <div className="col-md-4 col-sm-6 ">
                            <div className="advertiseVideo" style={{ display: "flex", flex: "wrap", backgroundColor: "#97BDFD", alignItems: "center", color: "white", padding: "6%" }}>
                                <div style={{ textAlign: "start" }}>
                                    <h2>70</h2>
                                    <p>ACTIVE STRATEGY PARTNERSHIPS</p>
                                </div>
                                <div >
                                    <img src={strategy} alt="strategy" width="80%" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 ">
                            <div className="advertiseVideo" style={{ display: "flex", flex: "wrap", backgroundColor: "#E4AEFC", alignItems: "center", color: "white", padding: "6%" }}>
                                <div style={{ textAlign: "start", width: "50%" }}>
                                    <h2>95k+</h2>
                                    <p>RECOMMENDATION AND REFERALS</p>
                                </div>
                                <div >

                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6 overflow-hidden">
                            <div className="advertiseVideo" style={{ display: "flex", flex: "wrap", backgroundColor: "#97BDFD", alignItems: "center", color: "white", padding: "6%" }}>
                                <div style={{ textAlign: "start" }}>
                                    <h2>1000+</h2>
                                    <p>5 STARS REVIEWS FROM HAPPY CLIENTS</p>
                                </div>
                                <div >
                                    <img src={stars} alt="stars" width="80%" />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
