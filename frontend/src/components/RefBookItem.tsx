import React, {} from 'react';
import {useLocation, } from "react-router-dom";
import '../styles/RefBookItem.css'

function RefBookItem() {
    const location = useLocation();
    const {title, description} = location.state;

    return (
        <div id='text_rf'>
            <h2> {title}</h2>
            <hr></hr>
            <p>{description}</p>
        </div>
    )
}

export default RefBookItem;