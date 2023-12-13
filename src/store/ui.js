import { createSlice } from "@reduxjs/toolkit";
import { onValue, ref, update } from "firebase/database";
import { db } from "../firebase";

const initialState = {
     stat: {
          totalClicks: 0,
          totalUrl: 0,
          RegisteredUsers: 0,
          Sites: 0,
     },
};

const uiSlice = createSlice({
     name: " ui elements",
     initialState,
     reducers: {
          setStat(state, action) {
               return {
                    ...state,
                    stat: action.payload,
               };
          },
     },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice;

export const getStatOfWhole = () => {
     return async (dispatch) => {
          const data = await getData();

          dispatch(uiSliceActions.setStat(data));
     };
};

const getData = async () => {
     let data;
     await new Promise((resolve) => {
          onValue(ref(db, "/stat"), (snapshot) => {
               data = snapshot.val();
               resolve(data);
          });
     });

     return data;
};

export const increaseRegisterUsers = () => {
     return async (dispatch) => {
          const data = await getData();

          update(ref(db, "/stat"), {
               RegisteredUsers: ++data.RegisteredUsers,
          });
     };
};
export const increaseTotalClick = () => {
     return async (dispatch) => {
          const data = await getData();

          update(ref(db, "/stat"), {
               totalClicks: ++data.totalClicks,
          });
     };
};
export const increaseTotalUrl = () => {
     return async (dispatch) => {
          const data = await getData();

          update(ref(db, "/stat"), {
               totalUrl: ++data.totalUrl,
          });
     };
};
export const increaseSites = () => {
     return async (dispatch) => {
          const data = await getData();

          update(ref(db, "/stat"), {
               Sites: ++data.Sites,
          });
     };
};

export const increaseCountForLinkId = (linkId , count) => {
     return async (dispatch) => {
         
          update(ref(db, "/links/" + linkId), {
               count: ++count,
          });
     };
};


// const initalCallStat = () => {
//      set(ref(db , "/stat") , initialState.stat)
// }
// initalCallStat()
