import Styled from "styled-components";

export const P = Styled.p.attrs(
  (props: { colortext: string, size: string }) => props
)`
    color: ${(props) => props.colortext};
    font-size: ${(props) => props.size};

`;
