import React from "react";
import { Card } from "react-bootstrap";
import classes from "./How.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faUserPlus,
     faLink,
     faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
const LinkBar = ({ content }) => {
   
     return (
          <div className="d-flex justify-content-center">
               <Card className={classes.card}>
                    <Card.Title className="d-flex justify-content-between">
                         {content.font === "faUserPlus" && (
                              <FontAwesomeIcon
                                   icon={faUserPlus}
                                   className={`${classes.h1} pt-2`}
                                   style={{ color: content.fontColor }}
                              />
                         )}
                         {content.font === "faLink" && (
                              <FontAwesomeIcon
                                   icon={faLink}
                                   className={`${classes.h1} pt-2`}
                                   style={{ color: content.fontColor }}
                              />
                         )}
                         {content.font === "faDollarSign" && (
                              <FontAwesomeIcon
                                   icon={faDollarSign}
                                   className={`${classes.h1} pt-2`}
                                   style={{ color: content.fontColor }}
                              />
                         )}

                         <h1 className={classes.h1}>{"0"+content.count}</h1>
                    </Card.Title>
                    <Card.Title className="mt-4 fw-bolder">
                         {content.title}
                    </Card.Title>
                    <Card.Text
                         className="mt-4 mb-5"
                         style={{ color: "lightgrey" }}
                    >
                         {content.text}
                    </Card.Text>
               </Card>
          </div>
     );
};

export default LinkBar;
