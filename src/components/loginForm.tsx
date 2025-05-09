import { login } from "@/utils/WP";
import { useState } from "react";
import { useAuth } from "@/utils/authContext";
import { useNavigate } from "react-router";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const { setAuthorized, fetchUserInfo } = useAuth();
  const navigate = useNavigate();
  const [failedLogin, setFailedLogin] = useState(false);

  function handleChange(e:any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e:any) {
    e.preventDefault();
    try {
      await login(formData.username, formData.password, formData.email);
      setAuthorized();

      await fetchUserInfo();
      navigate("/");
    }
    catch (err) {
      console.log(err);
      setFailedLogin(true);
    }
  }
  return(
    <div>
      <p>Login:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required />
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email" />
        <button type="submit">Submit</button>
      </form>
      {
        failedLogin && <p>Failed to log in</p>
      }
    </div>
  )
}

export default LoginForm;