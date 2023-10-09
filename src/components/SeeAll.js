import React from 'react';
import Button from "react-bootstrap/Button";
import buttonStyles from "../styles/Button.module.css";

function SeeAll(props) {
    return (
        <div className="d-grid gap-2">
            <Button href={props.href} variant="link" className={buttonStyles.Link}>See All</Button>
        </div>
    );
}

export default SeeAll;
