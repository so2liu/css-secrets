import React from "react";
import styled from "styled-components";
import { Div } from "../components";

const InnerBorderRadius = () => {
    return (
        <>
            <h3>边框内圆角</h3>
            <Div>
                <New>outline不跟着border走，而box-shadow会</New>
            </Div>
        </>
    );
};

export default InnerBorderRadius;

const New = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 0.8em;
    padding: 1em;
    background: tan;
    box-shadow: 0 0 0 0.6em #655;
    outline: 0.7em solid #655;
`;
