import React from "react";
import earnImg from "../../images/earnmoney.jpg";

import classes from "./Earn.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faDiamond } from "@fortawesome/free-solid-svg-icons";
const EarnMony = () => {
     return (
          <div className=" d-flex justify-content-center m-md-3 m-5">
               <div className={classes.earn}>
                    <div className={classes.item}>
                         <img src={earnImg} alt="earning direct" />
                    </div>
                    <div className={classes.item}>
                         <FontAwesomeIcon
                              icon={faDiamond}
                              style={{ color: "#2E3D62" }}
                         />
                         <p>Providing Best Services</p>
                         <h1 className="fw-bolder mb-5">
                              Earn Money with VIP Links{" "}
                         </h1>
                         <h5 className="mb-5">
                              Turning your traffic into profits
                         </h5>

                         <div className="d-flex mb-3">
                              <FontAwesomeIcon
                                   icon={faCheck}
                                   style={{ color: "#0080FF" }}
                                   className="pt-1 pe-2"
                              />
                              <h5>
                                   Highesh Rates : Make the most out of your
                                   traffic with our always increasing rates
                              </h5>
                         </div>
                         <div className="d-flex mb-3">
                              <FontAwesomeIcon
                                   icon={faCheck}
                                   style={{ color: "#0080FF" }}
                                   className="pt-1 pe-2"
                              />
                              <h5>
                                10% Referral bonus
                              </h5>
                         </div>
                         <div className="d-flex">
                              <FontAwesomeIcon
                                   icon={faCheck}
                                   style={{ color: "#0080FF" }}
                                   className="pt-1 pe-2"
                              />
                              <h5>
                                Low Minimum Payout
                              </h5>
                         </div>

                         <div className="mt-3">
                            <button className="btn btn-outline-info pt-2 pb-2 ps-3 pe-3 " >Learn More</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default EarnMony;
