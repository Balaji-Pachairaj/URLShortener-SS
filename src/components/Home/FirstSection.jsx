import React, { useState } from "react";
import classes from "./Home.module.css";
import firstImage from "../../images/firstImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addLinkActions, sentLink } from "../../store/addlink";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import copy from "copy-to-clipboard";
const FirstSection = () => {
     const addLink = useSelector((state) => {
          return state.addLink;
     });
     const navigate = useNavigate();

     const [urlText, setUrlText] = useState();
     const dispatch = useDispatch();

     const createUser = () => {
          navigate("/auth/signup");
     };
     const loginUser = () => {
          navigate("/auth/signin");
     };

     const changeHandler = (event) => {
          setUrlText(event.target.value);
     };

     const submitHandler = (event) => {
          event.preventDefault();

          if (urlText){

               dispatch(sentLink(urlText));
          }
     };

     const copyHandler = () =>{
          copy(addLink.shorthenUrl)
     }
     const resetHandler = () =>{
          dispatch(addLinkActions.resetUrl())
          setUrlText("")
     }
     return (
          <div className={classes.firstSection}>
               <div className={classes.item}>
                    <div className={classes.item1}>
                         <div className=" d-flex flex-column justify-content-center mb-2">
                              <h3 className="m-0 mb-1 fw-normal">
                                   Short Link{" "}
                                   <span className="fw-bold">Share</span>
                              </h3>
                              <h3 className="m-0 fw-normal">
                                   Earn Money{" "}
                                   <p className="fs-6 d-inline ms-2 text-primary">
                                        Earn up to $5/1000 views
                                   </p>
                              </h3>
                         </div>
                         {!addLink.short && (
                              <Form
                                   className="mt-3 d-flex gap-0 mt-3 mb-4"
                                   onSubmit={submitHandler}
                              >
                                   <input
                                        type="url"
                                        className={classes.inInput}
                                        placeholder="Your Url Here"
                                        value={urlText}
                                        onChange={changeHandler}
                                   />
                                   <div className={classes.buttonPart}>
                                        <button animation="wave">
                                             {" "}
                                             <FontAwesomeIcon
                                                  icon={faArrowRight}
                                                  className="text-light"
                                             />
                                        </button>
                                   </div>
                              </Form>
                         )}
                         {addLink.short && (

                              <div
                                   className="mt-3 d-flex gap-0 mt-3 mb-4"
                                   onSubmit={submitHandler}
                              >
                                   <input
                                        type="url"
                                        className={classes.inInput1}
                                        placeholder="shorthen Link"
                                        value={addLink.shorthenUrl}
                                   />
                                   <div className={classes.buttonPart1} >
                                        <button animation="wave" onClick={copyHandler} className={classes.btn1}>
                                             {" "}
                                             <FontAwesomeIcon
                                                  icon={faCopy}
                                                  className="text-light"
                                             />

                                        </button>
                                        <button animation="wave" onClick={resetHandler} className={classes.btn2}>
                                             {" "}
                                             <FontAwesomeIcon
                                                  icon={faSpinner}
                                                  className="text-light"
                                             />

                                        </button>
                                   </div>

                              </div>
                         )}
                         <div className="mt-3 d-flex gap-4 ">
                              <button
                                   className="btn btn-dark border-0 rounded-4 pt-2 pb-2 ps-4 pe-4"
                                   style={{ backgroundColor: "#7cbbf9" }}
                                   onClick={loginUser}
                              >
                                   Login in
                              </button>
                              <button
                                   className="btn btn-dark border-0 pt-2 pb-2 ps-4 pe-4"
                                   style={{ backgroundColor: "#7cbbf9" }}
                                   onClick={createUser}
                              >
                                   Create account
                              </button>
                         </div>
                    </div>
               </div>
               <div className={classes.item}>
                    <img src={firstImage} alt="welcoming" />
               </div>
          </div>
     );
};

export default FirstSection;
