import React from 'react';
import Container from "react-bootstrap/Container";
import CourseList from "../components/CourseList";

function Courses({query}) {
    return (
        <Container>
            <CourseList title={"All Categories"}/>
        </Container>
    );
}

export default Courses;
