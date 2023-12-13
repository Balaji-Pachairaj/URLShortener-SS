import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import classes from "../components/Login/Login.module.css";
function ForgetPassword() {
     return (
          <div className="d-flex justify-content-center mt-5 mb-5">
               <Card className={classes.forget}>
                <Card.Title  className=" text-center">
                    Forget Password 
                </Card.Title>
                    <Form>
                         <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                         >
                              <Form.Label>Email address</Form.Label>
                              <Form.Control
                                   type="email"
                                   placeholder="Enter email"
                              />
                              <Form.Text className="text-muted">
                                   We'll never share your email with anyone
                                   else.
                              </Form.Text>
                         </Form.Group>

                         <Button variant="primary" type="submit">
                              Sent Email
                         </Button>
                    </Form>
               </Card>
          </div>
     );
}

export default ForgetPassword;
