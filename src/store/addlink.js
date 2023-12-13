import { createSlice } from "@reduxjs/toolkit";

import { set, ref } from "firebase/database";
import { db } from "../firebase";
import { generate } from "randomstring";
import { increaseTotalUrl } from "./ui";

const initialState = {
     short: false,
     shorthenUrl: "",

     ui: {
          modal: false,
          short: false,
          originUrl: "",
          shorthenUrl: "",
          shortLink: "",
     },
};

const addLink = createSlice({
     name: "Adding link",
     initialState,
     reducers: {
          setUrl(state, action) {
               return {
                    ...state,
                    short: true,
                    shorthenUrl: action.payload,
               };
          },

          resetUrl(state, action) {
               return initialState;
          },

          setModal(state, action) {
               return {
                    ...state,
                    ui: {
                         ...state.ui,
                         modal: true,
                         shorthenUrl: "",
                    },
               };
          },
          resetModal(state, action) {
               return {
                    ...state,
                    ui: initialState.ui,
               };
          },

          setUserLinkUi(state, action) {
               return {
                    ...state,
                    ui: {
                         modal: true,
                         short: true,
                         originUrl: action.payload.originUrl,
                         shorthenUrl: action.payload.shorthenUrl,
                         shortLink: action.payload.shortLink,
                    },
               };
          },
     },
});

export const addLinkActions = addLink.actions;
export default addLink;

// link , date , count ;

export const sentLink = (urlText) => {
     return async (dispatch) => {
          let random = generate(6);
          let linkObj = {
               link: urlText,
               linkId: random,
               count: "0",
          };

          const reponse = await set(ref(db, "links/" + random), linkObj);

          dispatch(increaseTotalUrl())
          dispatch(
               addLinkActions.setUrl(window.location.origin + "/l/" + random)
          );
     };
};

export const userAddLink = (urlText) => {
     return async (dispatch) => {
          console.log("userAddLink");
          let random = generate(5);
          let linkObj = {
               link: urlText,
               linkId: random,
               count: 0,
          };

          set(ref(db, "links/" + random), linkObj);
          let shorthenUrl = window.location.origin + "/l/" + random;
          let obj = {
               short: true,
               originUrl: urlText,
               shorthenUrl,
               shortLink: random,
          };
          dispatch(increaseTotalUrl())
          dispatch(addLinkActions.setUserLinkUi(obj));
     };
};
