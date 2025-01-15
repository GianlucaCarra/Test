import { Container } from "./style";
import InputField from "../../components/InputField";
import Button from "../../components/Button";

function Form() {
  return (
    <Container>
      <form action="" className="login-form">
        <div className="inp">
          <InputField name="Escolha seu Usuario" />
          <InputField name="Escolha o banco" />
          <InputField name="Escolha a data" />
          <InputField name="Escolha o horario" />
        </div>
    
        <div className="btn">
        <Button name="Continuar" />
        </div>
      </form>

    </Container>
  )
}

export default Form;