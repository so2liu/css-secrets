import React from "react";
import styled from "styled-components";
import { Div } from "../components";

const TransparentBorder = () => {
  return (
    <Div>
      <Old />
      <New />
    </Div>
  );
};

export default TransparentBorder;

const Old = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: red;
`;

const New = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
  background: red;
  background-clip: padding-box;
`;
