import { createSlice } from "@reduxjs/toolkit";
import {
     createUserWithEmailAndPassword,
     onAuthStateChanged,
     sendPasswordResetEmail,
     signInWithEmailAndPassword,
     signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { onValue, ref, set } from "firebase/database";
import { gettingdatafromfirebase, userSliceActions } from "./User";
import { increaseRegisterUsers } from "./ui";

const initialState = {
     auth: {
          userId: "",
          isAuthenticated: false,
     },
     ui: {
          error: false,
          errorMessage: "Invalid email or password, try again",
     },
};

const AuthSlice = createSlice({
     name: "Authenticated process slice ",
     initialState,
     reducers: {
          setError(state, action) {
               const { error, errorMessage } = action.payload;

               return {
                    ...state,
                    ui: {
                         error,
                         errorMessage,
                    },
               };
          },
          resetError(state, action) {
               return {
                    ...state,
                    ui: initialState.ui,
               };
          },

          setAuth(state, action) {
               return {
                    ...state,
                    auth: {
                         isAuthenticated: true,
                         userId: action.payload,
                    },
               };
          },
          resetAuth(state, action) {
               return initialState;
          },
     },
});

export const AuthSliceActions = AuthSlice.actions;
export default AuthSlice;

export const createUserEandP = (userObj) => {
     return async (dispatch) => {
          async function user() {
               const { email, password, userName, navigate } = userObj;
               let response;
               try {
                    response = await createUserWithEmailAndPassword(
                         auth,
                         email,
                         password
                    );
               } catch (e) {
                    dispatch(
                         AuthSliceActions.setError({
                              error: true,
                              errorMessage:
                                   "Invalid email address and password ! try again",
                         })
                    );
                    return;
               }

               console.log(response);
               console.log(response.user.uid);

               let obj = {
                    email,
                    userName,
                    userId: response.user.uid,
                    linksArray: [{ title: "dummy" }],
               };
               set(ref(db, "/users/" + response.user.uid), obj);

               dispatch(increaseRegisterUsers());
               navigate("/auth/signin");
          }

          user();
     };
};

export const signinUserEandP = (userObj) => {
     return async (dispatch) => {
          async function user() {
               const { email, password, navigate } = userObj;
               let response;

               try {
                    response = await signInWithEmailAndPassword(
                         auth,
                         email,
                         password
                    );
               } catch (e) {
                    let errr;
                    if (e.code === "auth/user-not-found") {
                         errr =
                              "This user email is not authenticated in this app, signup for this app";
                    } else if (e.code === "auth/wrong-password") {
                         errr = "Password is incorrect";
                    } else {
                         errr = "Something went wrong";
                    }

                    dispatch(
                         AuthSliceActions.setError({
                              error: true,
                              errorMessage: errr,
                         })
                    );

                    return;
               }

               console.log(response, response.user.uid);

               onValue(ref(db, "/users/" + response.user.uid), (snapshot) => {
                    const data = snapshot.val();
                    dispatch(AuthSliceActions.setAuth(response.user.uid));
                    dispatch(userSliceActions.setUserData(data));
                    dispatch(gettingdatafromfirebase(data.linksArray));
               });

               navigate("/member");
          }
          user();
     };
};

export const logoutMethod = (navigate) => {
     return async (dispatch) => {
          signOut(auth);
          dispatch(AuthSliceActions.resetAuth());
          navigate("/");
     };
};

export const authChange = (navigate) => {
     return async (dispatch) => {
          onAuthStateChanged(auth, (user) => {
               if (user) {
                    const uid = user.uid;
                    onValue(ref(db, "/users/" + uid), (snapshot) => {
                         const data = snapshot.val();
                         dispatch(AuthSliceActions.setAuth(uid));
                         dispatch(userSliceActions.setUserData(data));
                         dispatch(gettingdatafromfirebase(data.linksArray));
                    });

                    navigate("/member");
               }
          });
     };
};

export const resetPassword = async () => {
     console.log("clsadfsdafsdfasfsdafasf");
     sendPasswordResetEmail(auth, "summatroll@gmail.com")
          .then(() => {
               // Password reset email sent!
               // ..
          })
          .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               // ..
          });
};
