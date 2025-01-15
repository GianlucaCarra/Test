import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;

  span {
    font-family: Arial, Helvetica, sans-serif;
    color: whitesmoke;
  }

  input {
    border: 1px solid whitesmoke;
    border-radius: 5px;
    height: 40px;
    padding: 0 10px;
    color: whitesmoke;
    background-color: #0F0D0D;
  }

  input:focus {
    outline: 0;
  }
`;