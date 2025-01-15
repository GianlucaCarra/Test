import { Container } from "./style";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Form() {
  return (
    <Container>
      <form action="" className="login-form">
        <div className="inp">
          <InputField name="E-mail" />
          <InputField name="Senha" />
          <InputField name="Senha" />
          <InputField name="Senha" />
        </div>
    
        <div className="btn">
        <Button name="LogIn" />
        </div>
      </form>

    </Container>
  )
}

export default Form;