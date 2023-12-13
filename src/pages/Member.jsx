import React from "react";
import { useSelector } from "react-redux";
import TopContainer from "../components/User/TopContainer";
import TotalStat from "../components/User/TotalStat";
import AddLink from "../components/User/AddLink";
import LinkList from "../components/User/LinkList";
import { useNavigate } from "react-router-dom";

const Member = () => {
     const addLink = useSelector((state) => {
          return state.addLink.ui;
     });
     const auth = useSelector((state) => {
          return state.auth.auth;
     });
     console.log(auth.isAuthenticated);

     const navigate = useNavigate();

     const buttonSignup = () => {
          navigate("/auth/signup");
     };

     return (
          <div className="mb-5">
               {auth.isAuthenticated && (
                    <div>
                         <TopContainer />
                    </div>
               )}
               {auth.isAuthenticated && addLink.modal && (
                    <div>
                         <AddLink />
                    </div>
               )}

               {auth.isAuthenticated && (
                    <>
                         <div>
                              <TotalStat />
                         </div>
                         <div>
                              <LinkList />
                         </div>
                    </>
               )}
               {!auth.isAuthenticated && (
                    <>
                         <h2 className="mt-3 text-danger text-center">
                              this page for registered users{" "}
                         </h2>
                         <div className=" d-flex justify-content-center mt-4">
                              <button
                                   onClick={buttonSignup}
                                   className="btn btn-success"
                              >
                                   Signin
                              </button>
                         </div>
                    </>
               )}
          </div>
     );
};

export default Member;
