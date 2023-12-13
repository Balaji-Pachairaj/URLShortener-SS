import React, { useState } from "react";
import classes from "./Login.module.css";
import { Card, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faArrowRightToBracket,
     faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AuthSliceActions, createUserEandP, signinUserEandP } from "../../store/auth";

const TopCard = ({ isUser }) => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [rePassword, setRePassword] = useState("");
     const [userName, setUserName] = useState("");
     const [isRemember, setIsRemember] = useState(false);
     const [checkPrivacy, setCheckPrivacy] = useState(false);
     const [isSame, setIsSame] = useState(false);
     const [isAgreed, setIsAgreed] = useState(false);
     const navigate = useNavigate();

     const LoginUi = useSelector((state) => {
          return state.auth.ui;
     });
     const dispatch = useDispatch();

     const title = isUser ? "Login " : "Register";
     const action = isUser ? "Create an account" : "Login here";
     const actionMessage = isUser
          ? "You do not have an account?"
          : "Already have an account?";

     const navigationHandler = () => {
          if (isUser) {
               navigate("/auth/signup");
          } else {
               navigate("/auth/signin");
          }
     };

     const emailChangeHandler = (event) => {
          setEmail(event.target.value);
     };
     const passwordChangeHandler = (event) => {
          setPassword(event.target.value);
     };
     const rePasswordChangeHandler = (event) => {
          setRePassword(event.target.value);
     };
     const userNameChangeHandler = (event) => {
          setUserName(event.target.value);
     };
     const checkPrivacyChangeHandler = (event) => {
          setIsAgreed(false)
          setCheckPrivacy(event.target.checked);
     };
     const rememberMeChangeHandler = (event) => {
          setIsRemember(event.target.checked);
     };
     const resetState = ()=>{
          setEmail("");
          setPassword("");
          setRePassword("");
          setUserName("");
          setCheckPrivacy("");
          setIsRemember("");
           setIsAgreed(false)
           setIsSame(false);
     }
     const submitHandler = (event) => {
          event.preventDefault();
          dispatch(AuthSliceActions.resetError());
          setIsSame(false);
          setIsAgreed(false)
          if (isUser) {
               if (!email || !password) {
                    dispatch(
                         AuthSliceActions.setError({
                              error: true,
                              errorMessage: "Every input should be answered",
                         })
                    );
                    return ;
               }

               const userObj = {email , password , navigate}

               dispatch(signinUserEandP(userObj))
               resetState()
          }

          if (!isUser) {
               console.log("dasfadsfasd");
               if (!email && !password && !rePassword && !userName) {
                    dispatch(
                         AuthSliceActions.setError({
                              error: true,
                              errorMessage: "Every input should be answered",
                         })
                    );
                    return 
               }
               if (password !== rePassword) {
                    setIsSame(true);
                    return 
               }
               if (!checkPrivacy){
                    setIsAgreed(true)
                    return
               }
               let userObj = {
                    email,
                    password,
                    userName,
                    navigate 
               }

               dispatch(createUserEandP(userObj))
               resetState()
          }
     };
     return (
          <div className={classes.container}>
               <Card className={classes.card}>
                    <div className=" text-center pb-4">
                         <Card.Title className=" fs-2 fw-semibold">
                              {title}
                         </Card.Title>
                    </div>
                    {LoginUi.error && (
                         <div className=" w-100 mb-4">
                              <div
                                   className="p-3 rounded-2"
                                   style={{ backgroundColor: "#F99B7D" }}
                              >
                                   <p className=" m-auto fw-semibold text-light">
                                        <FontAwesomeIcon
                                             icon={faTriangleExclamation}
                                        />{" "}
                                        {LoginUi.errorMessage}
                                   </p>
                              </div>
                         </div>
                    )}
                    <Form onSubmit={submitHandler}>
                         {isUser && (
                              <span>
                                   <Form.Group className="mb-4">
                                        <Form.Label className={classes.label}>
                                             Email address
                                        </Form.Label>
                                        <Form.Control
                                             className={classes.input}
                                             type="email"
                                             placeholder="Email address"
                                             value={email}
                                             onChange={emailChangeHandler}
                                        />
                                   </Form.Group>
                                   <Form.Group className="mb-4">
                                        <div className=" d-flex justify-content-between">
                                             <Form.Label
                                                  className={classes.label}
                                             >
                                                  Password
                                             </Form.Label>
                                             <p
                                                  className="m-0 fw-bold text-primary"
                                                  style={{ cursor: "pointer" }}
                                             >
                                                  Forget password?
                                             </p>
                                        </div>
                                        <Form.Control
                                             className={classes.input}
                                             type="password"
                                             placeholder="Password"
                                             value={password}
                                             onChange={passwordChangeHandler}
                                        />
                                   </Form.Group>

                                   <Form.Group className="mb-4">
                                        <div>
                                             <Form.Check
                                                  label="Remember me"
                                                  checked={isRemember}
                                                  onChange={
                                                       rememberMeChangeHandler
                                                  }
                                             />
                                        </div>
                                   </Form.Group>
                                   <Form.Group className=" mb-4 d-flex justify-content-center">
                                        <button className={classes.button}>
                                             Login{" "}
                                             <FontAwesomeIcon
                                                  icon={faArrowRightToBracket}
                                             />{" "}
                                        </button>
                                   </Form.Group>
                              </span>
                         )}
                         {!isUser && (
                              <span>
                                   <Form.Group className="mb-4">
                                        <Form.Control
                                             className={classes.input}
                                             type="text"
                                             placeholder="User name"
                                             value={userName}
                                             onChange={userNameChangeHandler}
                                        />
                                   </Form.Group>
                                   <Form.Group className="mb-4">
                                        <Form.Control
                                             className={classes.input}
                                             type="email"
                                             placeholder="Email address"
                                             value={email}
                                             onChange={emailChangeHandler}
                                        />
                                   </Form.Group>
                                   <Form.Group className="mb-4">
                                        <Form.Control
                                             className={classes.input}
                                             type="password"
                                             placeholder="Password"
                                             value={password}
                                             onChange={passwordChangeHandler}
                                        />
                                   </Form.Group>
                                   <Form.Group className="mb-4">
                                        <Form.Control
                                             className={classes.input}
                                             type="password"
                                             placeholder="Re-enter Password"
                                             value={rePassword}
                                             onChange={rePasswordChangeHandler}
                                        />
                                        {isSame && (
                                             <p className=" ms-2 mt-2 text-danger">
                                                  Not the same
                                             </p>
                                        )}
                                   </Form.Group>
                                   <Form.Group className="mb-4">
                                        <div>
                                             <Form.Check
                                                  label="I agree to the Terms of Use and Privacy Policy."
                                                  checked={checkPrivacy}
                                                  onChange={
                                                       checkPrivacyChangeHandler
                                                  }
                                             />

                                             {isAgreed && (
                                                  <p className="ms-2 mt-2 text-danger">
                                                       read the privacy Policy
                                                       and click the box
                                                  </p>
                                             )}
                                        </div>
                                   </Form.Group>
                                   <Form.Group className=" mb-4 d-flex justify-content-center">
                                        <button className={classes.button}>
                                             Register{" "}
                                             <FontAwesomeIcon
                                                  icon={faArrowRightToBracket}
                                             />{" "}
                                        </button>
                                   </Form.Group>
                              </span>
                         )}
                    </Form>
                  
                    <div className=" d-flex fw-bold ms-4">
                         <p>{actionMessage}</p>{" "}
                         <p
                              className="text-primary ms-2"
                              style={{ cursor: "pointer" }}
                              onClick={navigationHandler}
                         >
                              {action}
                         </p>
                    </div>
               </Card>
          </div>
     );
};

export default TopCard;


// <div className=" w-100 mb-3">
// <h6 className=" text-center"> - OR -</h6>
// </div>
// <div className=" d-flex justify-content-center mb-4">
// <button className={classes.googleButton}>
//      Log in with Google{" "}
//      <span className=" fw-bold">G</span>{" "}
// </button>
// </div>