import React from 'react';
import CategoryList from "../components/CategoryList";
import Banner from "../components/Banner";
import Container from "react-bootstrap/Container";
import SeeAll from "../components/SeeAll";
import InstructorList from "../components/InstructorList";

function Home() {
    return (
        <>
            <Banner headline={"Learn something new, today!"}/>
            <Container>
                <CategoryList title={'Featured Categories'} query={'featured=1'}/>
                <SeeAll href={'/categories'}/>
                <InstructorList title={'Featured Instructors'} query={'featured=1'}/>
                <SeeAll href={'/instructors'}/>
            </Container>
        </>
    );
}

export default Home;