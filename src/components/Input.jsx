import Styled from "styled-components";

// export const myInput = Styled.input`

// `

export default function Input(props) {
  return (
    <input
      type={props.type}
      class="form-control"
      id={props.id}
      placeholder={props.placeholder}
    />
  );
}
