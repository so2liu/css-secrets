import React from "react";
import { Vertical } from "../components";
import BackgroundPosition from "./BackgroundPosition";
import CompleteBg from "./CompleteBg";
import InnerBorderRadius from "./InnerBorderRadius";
import MultiBorder from "./MultiBorder";
import SlideBg from "./SlideBg";
import TransparentBorder from "./TransparentBorder";

const Ch2 = () => {
    return (
        <Vertical>
            <h2>Ch2</h2>
            <TransparentBorder />
            <MultiBorder />
            <BackgroundPosition />
            <InnerBorderRadius />
            <SlideBg />
            <CompleteBg />
        </Vertical>
    );
};

export default Ch2;
