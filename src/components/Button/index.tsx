import IButton from "../../types/IButton";
import { Container } from "./style";

function Button({name, onClick}: IButton) {
  return (
    <Container onClick={onClick} href="/form">
      {name}
    </Container>
  );
}

export default Button;