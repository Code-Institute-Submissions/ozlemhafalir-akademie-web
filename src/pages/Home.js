import React from 'react';
import CategoryList from "../components/CategoryList";
import Banner from "../components/Banner";
import Container from "react-bootstrap/Container";

function Home() {
    return (
        <>
            <Banner headline={"Learn something new, today!"}/>
            <Container>
                <CategoryList title={'Featured Categories'} query={'featured=1'}/>
            </Container>
        </>
    );
}

export default Home;