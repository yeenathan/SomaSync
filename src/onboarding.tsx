import { Link, useOutletContext } from "react-router";
import { useNavigate } from "react-router";
import { updateUserMeta } from "./utils/WP";

function Onboarding() {
  const navigate = useNavigate();
  const {setOnboarding} = useOutletContext();

  async function handleclick(e) {
    e.preventDefault();
    await updateUserMeta("doneOnboarding", true);
    setOnboarding(true);
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