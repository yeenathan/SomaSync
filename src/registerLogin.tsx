import { Link } from "react-router";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

function LoginPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-8 p-8">
      <div className="flex flex-col justify-center w-full md:w-lg md:max-w-1/2 items-center gap-6">
        <h1 className="text-3xl font-bold">Login</h1>
        <LoginForm />
        <p>Don't have an account? <Link to={"/register"} className="text-blue-600 hover:underline">Register</Link></p>
      </div>
      <img src="/somasync-logo.png" className="md:w-xl md:max-w-1/3 max-w-96" alt="Somasync Logo" />
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen gap-8 p-8">
      <div className="flex flex-col justify-center w-full md:w-lg md:max-w-1/2 items-center gap-6">
        <h1 className="text-3xl font-bold">Register</h1>
        <RegistrationForm />
        <p>Already registered? <Link to={"/login"} className="text-blue-600 hover:underline">Log in</Link></p>
      </div>
      <img src="/somasync-logo.png" className="md:w-xl md:max-w-1/3 max-w-96" alt="Somasync Logo" />
    </div>
  );
}

export { LoginPage, RegisterPage };