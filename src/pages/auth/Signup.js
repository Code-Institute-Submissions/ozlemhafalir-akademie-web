import React, {useState} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {Link} from "react-router-dom";


function Signup() {

    const [signUpData, setSignUpData] = useState({
        username: "",
        password: "",
        password2: "",
    });
    const {username, password, password2} = signUpData;
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Container>
                        <h1>Signup</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label className="d-none">Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={username}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label className="d-none">Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="password2">
                                <Form.Label className="d-none">Confirm password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm password"
                                    name="password2"
                                    value={password2}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Button
                                type="submit"
                            >
                                Signup
                            </Button>
                        </Form>
                    </Container>
                    <Container>
                        <Link to="/signin">
                            Do you have an account? <span>Signin!</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;