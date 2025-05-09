import { Link } from "react-router";
import { useNavigate } from "react-router";
import { updateUserMeta } from "./utils/WP";

function Onboarding() {
  const navigate = useNavigate();

  async function handleclick(e) {
    e.preventDefault();
    await updateUserMeta("doneOnboarding", true);
    navigate("/");
  }
  
  return(
    <div>
      <h1>onboarding</h1>
      <Link to="/" onClick={handleclick}>Finish onboarding</Link>
    </div>
  )
}

export default Onboarding;