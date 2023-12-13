import React from "react";

import { Button, Card } from "react-bootstrap";
import classes from "./Ads.module.css";
import { useNavigate } from "react-router-dom";
const ContentAds = () => {
     const navigate = useNavigate();

     const homeNaviagtion = () => {
          navigate("/");
     };
     const signupNavigation = () => {
          navigate("/auth/signup");
     };
     return (
          <div className="d-flex justify-content-center mt-4">
               <Card
                    className={classes.card}
                    style={{ backgroundColor: "#99DBF5" }}
               >
                    <Card.Title className=" text-center fw-bolder">
                         VIP LINKs
                    </Card.Title>
                    <hr className="m-0 mt-3 mb-3" />
                    <Card.Text className="text-center">
                         Create your own shorthen link and earn money
                    </Card.Text>
                    <div className="d-flex  justify-content-center mt-4">
                         <Button onClick={homeNaviagtion}>
                              Click this view HOME page
                         </Button>
                    </div>
                    <div className="d-flex  justify-content-center mt-4">
                         <Button variant="success" onClick={signupNavigation}>
                              Click this to become member{" "}
                         </Button>
                    </div>
               </Card>
          </div>
     );
};

export default ContentAds;
