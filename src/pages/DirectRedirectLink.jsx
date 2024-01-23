import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { increaseCountForLinkId, increaseTotalClick } from "../store/ui";
import { onValue, ref } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

const DirectRedirectLink = () => {
     // get link id from URL
     const linkId = useParams().linkId;

     // dispatch and navigate Hooks
     const dispatch = useDispatch();
     const navigate = useNavigate();

     useEffect(() => {
          //Calling Thunk to re-direct
          dispatch(shorthenLinkThunk(linkId), navigate);
     }, []);

     return <div className=" text-center">...</div>;
};

export default DirectRedirectLink;

const getLinkId = async (linkId) => {
     let data = null;
     await new Promise((resolve) => {
          onValue(ref(db, "/links/" + linkId), (snapshot) => {
               data = snapshot.val();
               resolve(data);
          });
     });

     return data;
};

export const shorthenLinkThunk = (linkId, navigate) => {
     return async (dispatch) => {
          dispatch(increaseTotalClick());
          // console.log("Total Click updated");

          let data = await getLinkId(linkId);

          console.log(data);

          if (!data) {
               window.location.replace("/");
               return;
          }

          dispatch(increaseCountForLinkId(linkId, data.count));

          window.location.replace(data.link);
     };
};
