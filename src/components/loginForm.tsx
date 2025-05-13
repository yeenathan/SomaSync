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
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required 
          className="bg-gray-100 p-4 rounded-xl"
        />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required
          className="bg-gray-100 p-4 rounded-xl"
        />
        <button type="submit" className="p-4 rounded-xl hover:bg-[var(--accent)] border border-gray-200" style={{cursor: "pointer"}}>Login</button>
      </form>
      {
        failedLogin && <p className="text-red-500">Failed to log in</p>
      }
    </>
  )
}

export default LoginForm;