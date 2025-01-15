import IButton from "../../types/IButton";
import { Container } from "./style";

function ButtonText({name}: IButton) {
  return (
    <Container>
      {name}
    </Container>
  );
}

export default ButtonText;