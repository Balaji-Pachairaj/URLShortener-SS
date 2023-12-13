import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import MainNav from "../components/generals/MainNav";
import Footer from "../components/generals/Footer";

import { authChange, resetPassword } from "../store/auth";
import { useDispatch } from "react-redux";
let intitalTime = 0;
const Root = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();
     useEffect(() => {
          resetPassword();
          if (!intitalTime) {
               dispatch(authChange(navigate));
          }
     }, [dispatch]);
     return (
          <div>
               <MainNav />
               <div style={{ animation: "slideUp 1.5s" }}>
                    <div>
                         <Outlet />
                    </div>
                    <div>
                         <Footer />
                    </div>
               </div>
          </div>
     );
};

export default Root;
