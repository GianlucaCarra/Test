import IButton from "../../types/IButton";
import { Container } from "./style";

function Button({name}: IButton) {
  return (
    <Container>
      {name}
    </Container>
  );
}

export default Button;