import React from "react";
import styled from "styled-components";
import { Div } from "../components";

const SlideBg = () => {
    return (
        <>
            <h3>条纹背景</h3>
            <Div>
                <Old />
                <New></New>
                <Newer />
                <EvenNewer />
            </Div>
        </>
    );
};

export default SlideBg;

const Old = styled.div`
    width: 100px;
    height: 100px;
    background: linear-gradient(#fb3 33%, #58a 0, #58a 66%, yellowgreen 0);
    background-size: 100% 30px;
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
