import React from "react";
import classes from "./feature.module.css";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FeatureIndiv = ({content}) => {
     return (
          <Card className={classes.card} style={{backgroundColor : content.BGColor}}>
               <Card.Text className=" fw-semibold" style={{color : content.fontColor}}>
                    {content.title}
               </Card.Text>
               <div className="mt-5 p-1 bg-light pt-3 pb-3" >
                    <Card.Text className="text-center d-flex">
                         <FontAwesomeIcon
                              icon={faCheck}
                              style={{ color: "#0080FF" }}
                              className="pt-1"
                         />
                         <p>
                            {content.step1}
                         </p>
                    </Card.Text>
                    <Card.Text className="text-center d-flex">
                         <FontAwesomeIcon
                              icon={faCheck}
                              style={{ color: "#0080FF" }}
                              className="pt-1"
                         />
                         <p>
                         {content.step2}
                         </p>
                    </Card.Text>
               </div>
          </Card>
     );
};

export default FeatureIndiv;
