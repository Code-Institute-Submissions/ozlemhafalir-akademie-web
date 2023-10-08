import React, {useState} from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import {Link} from "react-router-dom";


function Signin() {

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const {username, password} = signInData;
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Container>
                        <h1>Signin</h1>
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
                            <Button
                                type="submit"
                            >
                                Sign in
                            </Button>
                        </Form>
                    </Container>
                    <Container>
                        <Link to="/signup">
                            Don't have an account? <span>Sign up now!</span>
                        </Link>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}

export default Signin;