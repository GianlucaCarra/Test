import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #0F0D0D;
  height: 100vh;
  overflow: scroll;

  > img {
    margin: 10vh 0;
    height: 200px;
    width: 200px;
    object-fit: cover;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 40px;

    .inp {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
    }
  }
`;