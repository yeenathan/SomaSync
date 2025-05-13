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
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
      <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required
        className="bg-gray-100 p-4 rounded-xl"
      />
      <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required
        className="bg-gray-100 p-4 rounded-xl"
      />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required
        className="bg-gray-100 p-4 rounded-xl"
      />
      <button className="p-4 rounded-xl hover:bg-[var(--accent)] border border-gray-200" style={{cursor: "pointer"}} type="submit">Register</button>
    </form>
  )
}

export default RegistrationForm;