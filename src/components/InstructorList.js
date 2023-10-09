import {useEffect, useState} from "react";
import {axiosClient} from "../api/axiosDefaults";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import InstructorCard from "./InstructorCard";
import SectionTitle from "./SectionTitle";

function InstructorList({title, query}) {
    const [instructors, setInstructors] = useState({results: []});
    useEffect(() => {
        const handleMount = async () => {
            try {
                const instructors = await axiosClient.get(`/instructors/?${query}`);
                setInstructors(instructors.data);
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
                {instructors?.results?.map((instructor) => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <InstructorCard instructor={instructor} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default InstructorList;
