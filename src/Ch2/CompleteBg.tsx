import React from "react";
import styled from "styled-components";
import { Div } from "../components";

const CompleteBg = () => {
    return (
        <>
            <h3>复杂的背景图案</h3>
            <Div>
                <Old />
                <New></New>
                <Newer />
                <EvenNewer />
            </Div>
        </>
    );
};

export default CompleteBg;

const Old = styled.div`
    width: 100px;
    height: 100px;
    background: white;

    background-image: linear-gradient(
            90deg,
            rgba(200, 0, 0, 0.5) 50%,
            transparent 0
        ),
        linear-gradient(rgba(200, 0, 0, 0.5) 50%, transparent 0);
    background-size: 30px 30px;
`;

const New = styled.div`
    width: 100px;
    height: 100px;
    background: linear-gradient(
        45deg,
        #fb3 25%,
        black 0%,
        black 50%,
        #fb3 0,
        #fb3 75%,
        black 0
    );
    background-size: 42px 42px;
`;

const Newer = styled.div`
    width: 100px;
    height: 100px;
    background: repeating-linear-gradient(
        45deg,
        #fb3,
        #fb3 15px,
        #58a 0,
        #58a 30px
    );
`;

const EvenNewer = styled.div`
    width: 100px;
    height: 100px;
    background: #58a;
    background-image: repeating-linear-gradient(
        45deg,
        hsla(0, 0%, 100%, 0.1),
        hsla(0, 0%, 100%, 0.1) 15px,
        transparent 0,
        transparent 30px
    );
`;
