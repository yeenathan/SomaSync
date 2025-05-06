import { RegisterNewUser } from "@/utils/WP";
import { useState } from "react";

function RegistrationForm() {
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
      RegisterNewUser(formData.username, formData.password, formData.email);
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
        <input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="password" required />
        <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm;