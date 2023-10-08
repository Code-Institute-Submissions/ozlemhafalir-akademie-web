import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useCurrentUser, useSetCurrentUser} from "../contexts/CurrentUserContext";
import {NavDropdown} from "react-bootstrap";
import axios from "axios";
import {removeTokenTimestamp} from "../utils/utils";

function Navigation() {
    const currentUser = useCurrentUser();
    console.log(currentUser);
    const setCurrentUser = useSetCurrentUser();
    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            removeTokenTimestamp();
        } catch (err) {
            // console.log(err);
        }
    };
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {currentUser ? (
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2">
                                    {currentUser.email}
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={handleSignOut}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <Nav.Link href="/signin">Signin</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
