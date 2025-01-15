import { Container } from "./style";
import Logo from "../../assets/logo.jpeg";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import ButtonText from "../../components/ButtonText";

function LogIn() {
  return (
    <Container>
      <img id="logo" src={Logo} /> 

      <form action="" className="login-form">
        <div className="inp">
        <InputField name="E-mail" />
        <InputField name="Senha" />
        </div>
    
        <div className="btn">
        <Button name="LogIn" />
        <Button name="Garanta seu acesso aqui!" />
        <ButtonText name="Esqueceu sua senha?" />
        </div>

          
      </form>

    </Container>
  )
}

export default LogIn;