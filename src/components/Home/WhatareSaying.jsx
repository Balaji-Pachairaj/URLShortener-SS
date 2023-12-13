import React from "react";
import classes from "./stat.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import whatImg from "../../images/what.jpg" 

const WhatareSaying = () => {
     return (
          <div style={{backgroundColor : "#"}}  className={classes.card}>
               <div className="text-center">
                    <FontAwesomeIcon
                         icon={faDiamond}
                         style={{ color: "#2E3D62" }}
                    />
                    <h6 className="mt-2">
                        Check our client feedbacks  </h6>
                    <h1 className={classes.titleFont}>What are saying</h1>
               </div>
               <div className={classes.whatImg}>
                <img src={whatImg} alt="Testonimals" />
               </div>
          </div>
     );
};

export default WhatareSaying;
