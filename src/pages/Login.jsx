import React from "react";
import TopCard from "../components/Login/TopCard";
import { useDispatch } from "react-redux";
import { AuthSliceActions } from "../store/auth";

const Login = ({ isUser }) => {
     const dispatch = useDispatch();
     dispatch(AuthSliceActions.resetError());
     return (
          <div>
               <TopCard isUser={isUser} />
          </div>
     );
};

export default Login;
