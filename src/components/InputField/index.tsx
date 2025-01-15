import IInputField from "../../types/IInputField";
import { Container } from "./style";

function InputField({name}: IInputField) {
  return (
    <Container>
      <span>{name}</span>
      <input type="text" />
    </Container>
  );
}

export default InputField;