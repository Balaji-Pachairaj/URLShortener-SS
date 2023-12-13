import React from "react";
import classes from "./User.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { addLinkActions } from "../../store/addlink";
import { useNavigate } from "react-router-dom";
import { logoutMethod } from "../../store/auth";
const TopContainer = () => {
     const user = useSelector((state) => {return state.user})
     const dispatch = useDispatch()
     const navigate = useNavigate()
     const createModalHandler = () =>{
          dispatch(addLinkActions.setModal())
     }

     const logoutHandler =()=>{
          dispatch(logoutMethod(navigate))
     }
     return (
          <div className={classes.topContainer}>
               <div className={classes.card}>
                    <div className="pt-2 ps-2 fw-semibold text-light d-flex">
                         <div>
                              <FontAwesomeIcon
                                   icon={faUser}
                                   className="fs-2 pt-2 pe-2 ps-2 text-black"
                              />
                         </div>
                         <h1>{user.userName}</h1>
                         <div className="pt-1 ms-2">

                         <button className="btn btn-danger" onClick={logoutHandler}>Logout</button>
                         </div>
                    </div>
                    <hr className="m-0 mt-2 ms-3 me-3 text-dark" />
                    <div className=" fs-1 fw-medium text-center mt-4 text-light ms-3 me-3">Create short and branded links with VIP Links</div>
                    
                    <div className="text-center mt-4">
                        <button className="fw-semibold btn btn-outline-dark" onClick={createModalHandler} > 
                            Create shorthen Link
                        </button>
                    </div>
               </div>
          </div>
     );
};

export default TopContainer;
