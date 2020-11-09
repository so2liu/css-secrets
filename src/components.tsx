import styled from "styled-components";

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
`;

export const Vertical = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;
