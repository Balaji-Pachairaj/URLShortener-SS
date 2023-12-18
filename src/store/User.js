import { createSlice } from "@reduxjs/toolkit";
import { onValue, ref, update } from "firebase/database";
import { db } from "../firebase";
import { addLinkActions } from "./addlink";

const initialState = {
     email: "",
     userName: "",
     userId: "",
     totalViewsCount: 0,
     totalDollars: 0,
     linksArray: [],

     ui: {
          addlink: false,
     },
};

const userSlice = createSlice({
     name: "user Elements",
     initialState,
     reducers: {
          setUserData(state, action) {
               const user = action.payload;
               return {
                    ...initialState,
                    email: user.email,
                    userName: user.userName,
                    userId: user.userId,
                    linksArray: user.linksArray,
               };
          },

          setOtherItems(state, action) {
               let array = action.payload[0];
          },

          setUserLinkArrayData(state, action) {
               const linkarr = action.payload[0];
               const views = action.payload[1];
               const dollar = action.payload[2];

               return {
                    ...state,
                    linksArray: linkarr,
                    totalViewsCount: views,
                    totalDollars: dollar,
               };
          },

          resetUserState(state, action) {
               return initialState;
          },
     },
});

export const userSliceActions = userSlice.actions;
export default userSlice;

//const eachLink = {title , count , shorthenUrl , originUrl}
export const gettingdatafromfirebase = (array) => {
     return async (dispatch) => {
          console.log("getLInkIdsData");
          let totalCount = 0;
          let totalDollar = 0;
          let sentArray = [];
          let length = array.length;

          for (let i = 0; i < length; i++) {
               if (array[i].title === "dummy") {
               } else {
                    console.log(array[i], array[i].linkId);

                    let data = null;

                    data = await getLinkIdData(array[i].linkId);

                    console.log("fsfsdg");
                    totalCount = totalCount + data.count;

                    let shorthenUrl =
                         window.location.origin + "/l/" + array[i].linkId;

                    let obj = {
                         title: array[i].title,
                         count: data.count,
                         originUrl: data.link,
                         shorthenUrl,
                         shorthenLink: array[i].linkId,
                    };

                    // title : "samplesamplesample" ,
                    // shorthenLink : "http://localhost:3000/member",
                    // originLink: "https://firebase.google.com/" ,
                    // count : "1213"
                    totalDollar = (totalCount * 0.005).toFixed(2);

                    sentArray.push(obj);
               }
          }

          console.log(sentArray, totalDollar, totalCount);
          dispatch(
               userSliceActions.setUserLinkArrayData([
                    sentArray,
                    totalCount,
                    totalDollar,
               ])
          );
     };
};

async function getLinkIdData(linkId) {
     let data;
     return new Promise((resolve) => {
          onValue(ref(db, "/links/" + linkId), (snapshot) => {
               data = snapshot.val();
               resolve(data);
               console.log(data);
          });
     });

     return data;
}

///adding addedlink in userprofile

export const addingAddedLink = (obj) => {
     return async (dispatch) => {
          let userId = obj.userId;
          console.log(obj);
          let array = await getUserData(userId);

          console.log(obj);
          let arrayobj = {
               title: obj.title,
               linkId: obj.short,
          };
          array.push(arrayobj);

          update(ref(db, "/users/" + userId), {
               linksArray: array,
          });

          dispatch(addLinkActions.resetModal());
     };
};

async function getUserData(userId) {
     let data;
     onValue(ref(db, "/users/" + userId), (snapshot) => {
          data = snapshot.val();
     });
     console.log(data.linksArray);
     return data.linksArray;
}

//Delete link
// ui  :  , linkId : ""
export const deleteUserLink = (obj) => {
     return async (dispatch) => {
          const userId = obj.userId;
          const linkId = obj.linkId;
          let array = [];
          const data = await getUserData(userId);
          console.log(data);
          for (let i = 0; i < data.length; i++) {
               if (data[i].linkId === linkId) {
               } else {
                    array.push(data[i]);
               }
          }
          console.log(array);
          update(ref(db, "/users/" + userId), {
               linksArray: array,
          });
     };
};

async function getLinkArray(userId) {
     await new Promise((resolve) => {
          onValue(ref(db, "/users/" + userId), (snapshot) => {
               const data = snapshot.val();

               resolve(data.linksArray);
          });
     });
}
