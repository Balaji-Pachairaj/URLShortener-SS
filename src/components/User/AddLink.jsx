import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import classes from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addLinkActions, userAddLink } from "../../store/addlink";
import copy from "copy-to-clipboard";
import { addingAddedLink ,addLinkItem } from "../../store/User";

const char30 = (text) => {
     if (text.trim().length > 15) {
          return true;
     }

     return false;
};

const AddLink = () => {
     const ui = useSelector((state) => {
          return state.addLink.ui;
     });
     console.log(ui)
     const user = useSelector((state ) =>{
          return state.user 
     })
     const dispatch = useDispatch();
     const [enteredTitle, setEnteredTitle] = useState("");
     const [errorTitle, setErrorTitle] = useState(false);
     const [enteredUrl, setEnteredUrl] = useState("");

     const titleChangeHandler = (event) => {
          setEnteredTitle(event.target.value);
          setErrorTitle(char30(event.target.value));
     };
     const urlChangeHandler = (event) => {
          setEnteredUrl(event.target.value);
     };
     const closeHandler = () => {
          dispatch(addLinkActions.resetModal());
     };

     const copyShortUrl =() =>{
          copy(ui.shorthenUrl)
     }
     const shorthenButton = () => {
          if (enteredUrl) {
               dispatch(userAddLink(enteredUrl));
          }
     };

     const submitHandler = (event) => {
          event.preventDefault();
          console.log(ui)
          let obj = {
               userId : user.userId ,
               short : ui.shortLink,
               title : enteredTitle
          }
          console.log(obj)
          console.log(obj , errorTitle)
          if (!ui.short) {
               console.log("short")
               return;
          }
          if (errorTitle) {
               console.log("error")
               return;
          }

          

          dispatch(addingAddedLink(obj))
     };

     return (
          <div className="w-100 d-flex justify-content-center mt-4">
               <Card className={classes.addLink}>
                    <div className="d-flex justify-content-between">
                         <Card.Title>Add Link</Card.Title>
                         <FontAwesomeIcon
                              icon={faXmark}
                              className="fs-4 me-2"
                              onClick={closeHandler}
                         />
                    </div>
                    <Form onSubmit={submitHandler}>
                         <Form.Group>
                              <Form.Control
                                   className=" shadow mt-2"
                                   placeholder="Link title here"
                                   type="text"
                                   required
                                   value={enteredTitle}
                                   onChange={titleChangeHandler}
                              />
                              {errorTitle && (
                                   <p className="m-0 ms-2 mt-1 text-danger">
                                        ***less than 15 characters
                                   </p>
                              )}
                         </Form.Group>
                         <Form.Group>
                              <Form.Control
                                   className=" shadow mt-2"
                                   placeholder="Your Url Here"
                                   type="url"
                                   required
                                   value={enteredUrl}
                                   onChange={urlChangeHandler}
                              />
                         </Form.Group>
                         {ui.short && (
                              <div className=" pt-2 pb-2 shadow mt-3 d-flex justify-content-between pe-4 rounded-3">
                                   <p className="ms-2 m-auto">
                                        {ui.shorthenUrl}
                                   </p>
                                   <FontAwesomeIcon
                                        icon={faCopy}
                                        className="pt-2 fs-4"
                                        onClick={copyShortUrl}
                                   />
                              </div>
                         )}
                         <Form.Group className="mt-3">
                              {!ui.short && (
                                   <button
                                        className="btn btn-primary me-3"
                                        onClick={shorthenButton}
                                   >
                                        Shorthen
                                   </button>
                              )}
                              {ui.short && (
                                   <button
                                        className="btn btn-success "
                                        type="submit"
                                   >
                                        Post the link
                                   </button>
                              )}
                         </Form.Group>
                    </Form>
               </Card>
          </div>
     );
};

export default AddLink;
