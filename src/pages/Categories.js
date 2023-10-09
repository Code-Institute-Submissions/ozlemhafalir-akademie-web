import React from 'react';
import CategoryList from "../components/CategoryList";
import Container from "react-bootstrap/Container";

function Categories({query}) {
    return (
        <Container>
            <CategoryList title={"All Categories"}/>
        </Container>
    );
}

export default Categories;
