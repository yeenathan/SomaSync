import { registerNewUser } from "@/utils/WP";
import { useState } from "react";
import { useNavigate } from "react-router";

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  function handleChange(e:any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e:any) {
    e.preventDefault();
    try {
      registerNewUser(formData.username, formData.password, formData.email);
      navigate("/login");
    }
    catch (err) {
      console.log(err);
    }
  }
  return(
    <div>
      <p>Registration:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="username" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required />
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email"/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm;