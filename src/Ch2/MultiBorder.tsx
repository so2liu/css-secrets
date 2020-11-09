import React from "react";
import styled from "styled-components";
import { Div } from "../components";

const MultiBorder = () => {
  return (
    <Div>
      <Old />
      <New>
        <ul>
          <li>
            投影不影响布局，不受box-sizing的影响，只能通过margin和padding来模拟空间
          </li>
          <li>不影响鼠标事件</li>
          <li>不能产生虚线效果</li>
        </ul>
      </New>
      <New2></New2>
    </Div>
  );
};

export default MultiBorder;

const Old = styled.div`
  min-width: 100px;
  min-height: 100px;
  box-shadow: 0 0 0 10px #655;
  background: red;
`;

const New = styled.div`
  min-width: 100px;
  min-height: 100px;
  box-shadow: 0 0 0 10px #655, 0 0 0 15px deeppink,
    0 2px 5px 15px rgba(0, 0, 0, 0.6);
  background: red;
`;

const New2 = styled.div`
  min-width: 100px;
  min-height: 100px;
  border: 10px solid #655;
  outline: 5px dotted deeppink;
  background: yellowgreen;
`;
