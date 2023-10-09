import React from 'react';
import bannerStyles from '../styles/Banner.module.css';

function Banner(props) {
    return (
        <div className={`${bannerStyles.banner} bg-banner text-white text-center p-4`}>
            <h1>{props.headline}</h1>
        </div>
    );
}

export default Banner;
