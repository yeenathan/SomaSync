import { Link } from "react-router";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

function LoginPage() {
  return(
    <div>
      <LoginForm/>
      <p>Don't have an account? <Link to={"/register"}>Register</Link></p>
    </div>
  )
}

function RegisterPage() {
  return(
    <div>
      <RegistrationForm/>
      <p>Already registered? <Link to={"/login"}>Log in</Link></p>
    </div>
  )
}

export { LoginPage, RegisterPage };