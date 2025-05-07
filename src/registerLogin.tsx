import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

function LoginPage() {
  return(
    <LoginForm/>
  )
}

function RegisterPage() {
  return(
    <RegistrationForm/>
  )
}

export { LoginPage, RegisterPage };