import {useEffect, useState} from "react";
import {axiosClient} from "../api/axiosDefaults";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CategoryCard from "./CategoryCard";
import SectionTitle from "./SectionTitle";

function CategoryList({title, query}) {
    const [categories, setCategories] = useState({results: []});
    useEffect(() => {
        const handleMount = async () => {
            try {
                const categories = await axiosClient.get(`/categories/?${query}`);
                setCategories(categories.data);
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
                {categories?.results?.map((category) => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                        <CategoryCard category={category}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CategoryList;
