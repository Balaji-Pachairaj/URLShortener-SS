import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import classes from "./general.module.css";
import { NavLink } from "react-router-dom";
const MainNav = () => {
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" className={classes.mainNav}>
                    <Container>
                         <Navbar.Brand className="ms-5 fs-1 fw-bold">
                              <span className=" text-primary">Vip</span>Links
                         </Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse
                              id="responsive-navbar-nav"
                              className=" d-lg-flex justify-content-lg-end"
                         >
                              <Nav className="me-lg-5 ms-5 fs-3 fw-semibold">
                                   <Nav.Link className="me-4 ">
                                        <NavLink
                                             to="/"
                                             className={({ isActive }) => {
                                                  return isActive
                                                       ? " text-decoration-underline"
                                                       : "";
                                             }}
                                        >
                                             Home
                                        </NavLink>
                                   </Nav.Link>
                                   {/* <Nav.Link className="me-4">
                                        {" "}
                                        <NavLink
                                             to="/publishrates"
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? " text-decoration-underline"
                                                       : ""
                                             }
                                        >
                                             Publish rates
                                        </NavLink>
                                   </Nav.Link> */}
                                   <Nav.Link className="me-4">
                                        <NavLink
                                             to="/auth/signin"
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? " text-decoration-underline"
                                                       : ""
                                             }
                                        >
                                             Login
                                        </NavLink>
                                   </Nav.Link>
                                   <Nav.Link className="me-4">
                                        <NavLink
                                             to="auth/signup"
                                             className={({ isActive }) =>
                                                  isActive
                                                       ? " text-decoration-underline"
                                                       : ""
                                             }
                                        >
                                             Sign up
                                        </NavLink>
                                   </Nav.Link>
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default MainNav;
