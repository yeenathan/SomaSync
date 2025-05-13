import { Link } from "react-router";
import LoginForm from "./components/loginForm";
import RegistrationForm from "./components/registrationForm";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col justify-center min-w-lg items-center gap-6">
          <h1 className="text-3xl font-bold">Login</h1>
          <LoginForm />
          <p>Don't have an account? <Link to={"/register"} className="text-blue-600 hover:underline">Register</Link></p>
        </div>
        <img src="/somasync-logo.png" className="flex-1 max-w-xl" alt="Somasync Logo" />
      </div>
    </div>
  );
}

function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col justify-center min-w-lg items-center gap-6">
          <h1 className="text-3xl font-bold">Register</h1>
          <RegistrationForm />
          <p>Already registered? <Link to={"/login"} className="text-blue-600 hover:underline">Log in</Link></p>
        </div>
        <img src="/somasync-logo.png" className="flex-1 max-w-xl" alt="Somasync Logo" />
      </div>
    </div>
  );
}

export { LoginPage, RegisterPage };