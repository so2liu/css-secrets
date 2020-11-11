import React from "react";
import styled from "styled-components";
import { Div } from "../components";
import img from "./pirates.png";

const BackgroundPosition = () => {
    return (
        <>
            <h3>灵活的背景定位</h3>
            <Div>
                <New>Background-Origin</New>
            </Div>
        </>
    );
};

export default BackgroundPosition;

const New = styled.div`
    color: white;
    width: 500px;
    height: 200px;
    padding: 1rem;
    border: 10px solid hsla(0, 0%, 100%, 0.5);
    background: url(${img}) no-repeat black;
    background-size: 140px 80px;
    background-origin: content-box;
    background-position: top left;
`;
