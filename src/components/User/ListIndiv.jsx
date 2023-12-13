import React from "react";
import { Card, Button } from "react-bootstrap";
import classes from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faEye } from "@fortawesome/free-solid-svg-icons";
import copy from "copy-to-clipboard";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserLink } from "../../store/User";

const ListIndiv = ({ linkObj }) => {
     const user = useSelector((state) => {
          return state.user;
     });
     const dispatch = useDispatch();
     const userId = user.userId;
     const shorthenLinkClickHandler = () => {
          copy(linkObj.shorthenUrl);
     };
     const originalLinkClickHandler = () => {
          copy(linkObj.originUrl);
     };
     const deleteHandler = () => {
          let obj = {
               userId,
               linkId: linkObj.shorthenLink,
          };
          console.log(obj);

          const confirm = window.confirm("Are you sure to delete the link");
          if (confirm) {
               dispatch(deleteUserLink(obj));
          }
     };
     return (
          <div className=" d-flex justify-content-center mb-2">
               <Card
                    className={classes.list}
                    style={{ backgroundColor: "#CDE6FF" }}
               >
                    <div className="d-flex justify-content-between ms-3 me-3 flex-wrap ">
                         <div className=" d-flex gap-3 flex-wrap justify-content-center">
                              <Card.Title>{linkObj.title}</Card.Title>
                              <div className=" d-flex">
                                   <p className="m-0 me-2">{linkObj.count}</p>
                                   <FontAwesomeIcon
                                        icon={faEye}
                                        className="pt-1"
                                   />
                              </div>
                         </div>
                         <div>
                              <Button variant="danger" onClick={deleteHandler}>
                                   Delete
                              </Button>
                         </div>
                    </div>
                    <div className="mt-1">
                         <div className=" text-center ">
                              <div
                                   className=" d-flex justify-content-center gap-3"
                                   onClick={shorthenLinkClickHandler}
                              >
                                   <h6 className="m-0">Shorthen Link</h6>
                                   <FontAwesomeIcon icon={faCopy} />
                              </div>
                              <p className="m-0">{linkObj.shorthenUrl}</p>
                         </div>
                    </div>
                    <div className="mt-3">
                         <div className=" text-center ">
                              <div
                                   className=" d-flex justify-content-center gap-3"
                                   onClick={originalLinkClickHandler}
                              >
                                   <h6 className="m-0">Original Link</h6>
                                   <FontAwesomeIcon icon={faCopy} />
                              </div>
                              <p className="m-0">{linkObj.originUrl}</p>
                         </div>
                    </div>
               </Card>
          </div>
     );
};

export default ListIndiv;
