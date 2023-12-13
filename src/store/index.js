import { configureStore } from "@reduxjs/toolkit";

import addLink from "./addlink";
import AuthSlice from "./auth";
import userSlice from "./User";
import uiSlice from "./ui";
export const store = configureStore({
     reducer: {
          addLink: addLink.reducer,
          auth: AuthSlice.reducer,
          user: userSlice.reducer,
          ui : uiSlice.reducer
     },
});

export default store;
