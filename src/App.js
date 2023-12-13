import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

//import Root from "./pages/Root";
//import Home from "./pages/Home";
import Login from "./pages/Login";
// import Link from "./pages/Link";
// import Member from "./pages/Member";
// import ForgetPassword from "./pages/ForgetPassword";
import { lazy, Suspense } from "react";

//router Section

const Root = lazy(() => import("./pages/Root"));
const Home = lazy(() => import("./pages/Home"));
const ForgetPassword = lazy(() => import("./pages/ForgetPassword"));
const Link = lazy(() => import("./pages/Link"));
const Member = lazy(() => import("./pages/Member"));

const router = createBrowserRouter([
     {
          path: "/",
          element: (
               <Suspense fallback={<p className=" text-center">loading...</p>}>
                    <Root />
               </Suspense>
          ),
          children: [
               {
                    index: true,
                    element: (
                         <Suspense
                              fallback={
                                   <p className=" text-center">loading...</p>
                              }
                         >
                              <Home />
                         </Suspense>
                    ),
               },
               {
                    path: "publishrates",
                    element: <p>publish rates</p>,
               },
               {
                    path: "/auth",
                    children: [
                         { path: "signin", element: <Login isUser={true} /> },
                         { path: "signup", element: <Login isUser={false} /> },
                         {
                              path: "forgetpassword",
                              element: (
                                   <Suspense
                                        fallback={
                                             <p className=" text-center">
                                                  loading...
                                             </p>
                                        }
                                   >
                                        <ForgetPassword />
                                   </Suspense>
                              ),
                         },
                    ],
               },
               { path: "member", element: <Member /> },
          ],
     },
     {
          path: "/l/:linkId",
          element: (
               <Suspense fallback={<p className=" text-center">loading...</p>}>
                    <Link />
               </Suspense>
          ),
     },
]);

function App() {
     return <RouterProvider router={router} />;
}

export default App;
