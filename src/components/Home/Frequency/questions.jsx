import React from "react";
import classes from "./question.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
import image from "../../../images/question.jpg";
import { Accordion } from "react-bootstrap";
const Questions = () => {
     return (
          <div className=" d-flex justify-content-center mt-5">
               <div className={classes.questions}>
                    <div className={classes.item}>
                         <Accordion className={classes.accor} defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is S Link?</Accordion.Header>
                                <Accordion.Body>A URL shortener, also known as a link shortener, seems like a simple tool, but it is a service that can have a dramatic impact on your earning efforts.by sharing the links you can earn money.</Accordion.Body>
                           </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Benefits of S Links</Accordion.Header>
                                <Accordion.Body>A short URL is also easier to incorporate into your collateral – whether you’re looking to engage with your users. its easy to earn with us.</Accordion.Body>
                           </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Features of S Link URL Shortner</Accordion.Header>
                                <Accordion.Body>High CPM,Low Minimum Payout,You are required to earn only $5 minimum threshold before you will be paid. We can pay all users via their prefered payment method.</Accordion.Body>
                           </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Why Choose S Link</Accordion.Header>
                                <Accordion.Body>Whether you’re sharing one link or millions, our platform was built to help you make every point of connection between your content and your audience ignite action. That’s why the most recognized brands in the world love our platform.</Accordion.Body>
                           </Accordion.Item>
                         </Accordion>
                    </div>
                    <div className={classes.item}>
                         <div>
                              <FontAwesomeIcon
                                   icon={faDiamond}
                                   style={{ color: "#2E3D62" }}
                              />
                              <p className="m-0">Frequently Asked Question</p>
                              <h1 className={classes.titleFont}>
                                   Do you've any questions?
                              </h1>

                              <div className={classes.image}>
                                   <img src={image} alt="Questioning" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Questions;
