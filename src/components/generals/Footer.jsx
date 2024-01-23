import React from "react";
import classes from "./general.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
     faSquarePhoneFlip,
     faEnvelope,
     faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
     return (
          <div className={classes.footer}>
               <div className={classes.item}>
                    <div>
                         <h3 className=" text-light">S links </h3>
                         <p className={classes.contentColor}>
                              S Link is a completely free tool where you can
                              create short links, which apart from being free,
                              you get paid! So, now you can make money from
                              home, when managing and protecting your links.
                         </p>
                         <div
                              className="bg-light rounded-circle position-relative"
                              style={{ width: "2rem", height: "2rem" }}
                         >
                              <FontAwesomeIcon
                                   icon={faPaperPlane}
                                   className=" rounded m-1 p-1"
                              />
                         </div>
                    </div>
               </div>
               <div className={classes.item}>
                    <div>
                         <h3 className=" text-light">Explore</h3>
                         <div className={classes.contentColor}>
                              <p>About</p>
                              <p>our team</p>
                              <p>Contact</p>
                              <p>Service</p>
                         </div>
                    </div>
                    <div>
                         <h3 className=" text-light">Contact</h3>
                         <div className={classes.contentColor}>
                              <div className=" d-flex gap-1 text-wrap">
                                   <FontAwesomeIcon
                                        icon={faSquarePhoneFlip}
                                        className="p-1"
                                        style={{ color: "#FF8257" }}
                                   />
                                   <p>9009339034</p>
                              </div>
                              <div className=" d-flex gap-1 text-wrap">
                                   <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="p-1"
                                        style={{ color: "#FF8257" }}
                                   />
                                   <p>viplinks@gmail.com</p>
                              </div>
                              <div className=" d-flex gap-1 text-wrap">
                                   <FontAwesomeIcon
                                        icon={faLocationDot}
                                        className="p-1"
                                        style={{ color: "#FF8257" }}
                                   />
                                   <div>
                                        <p className="m-1">23 th road</p>
                                        <p className="m-0">jeyaram nagar</p>
                                        <p>coimbatore</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div className={classes.item1}>
                    <div className="w-100">
                         <h3 className=" text-light mb-3">NewsLetter</h3>

                         <input type="email" placeholder="sign up newsletter" className=" rounded-2 ps-4 mb-4"  />
                         
                         <p className={classes.contentColor}>Sign up for our latest news & articles. We won’t give you
spam mails</p>
                    </div>
               </div>
          </div>
     );
};

export default Footer;
