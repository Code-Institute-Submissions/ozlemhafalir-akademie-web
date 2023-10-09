import {useEffect, useState} from "react";
import {axiosClient} from "../api/axiosDefaults";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CourseCard from "./CourseCard";
import SectionTitle from "./SectionTitle";

function CourseList({title, query}) {
    const [courses, setCourses] = useState({results: []});
    useEffect(() => {
        const handleMount = async () => {
            try {
                const courses = await axiosClient.get(`/courses/?${query}`);
                setCourses(courses.data);
            } catch (err) {
                console.log(err);
            }
        };

        handleMount();
    }, []);
    return (
        <Container>
            {title && <Row><SectionTitle title={title}/></Row>}
            <Row>
                {courses?.results?.map((course) => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CourseCard course={course}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CourseList;
