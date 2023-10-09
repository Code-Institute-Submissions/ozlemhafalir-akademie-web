import React from 'react';
import InstructorList from "../components/InstructorList";
import Container from "react-bootstrap/Container";

function Instructors() {
    return (
        <Container>
            <InstructorList title={"All Instructors"}/>
        </Container>
    );
}

export default Instructors;
