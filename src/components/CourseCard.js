import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import buttonStyles from "../styles/Button.module.css";

function CourseCard({course}) {
    return (
        <a style={{
            textDecoration: "none",
        }} href={`/course/${course.slug}`} className={buttonStyles.Link}>
            <Card style={{border: "none", alignItems: "center", textAlign: "center"}}>
                <Card.Img src={course.image} style={{maxWidth: "150px"}}>
                </Card.Img>
                <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>
                        {course.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </a>
    );
}

export default CourseCard;
