import { getUsername } from "@/utils/WP";

function Welcome() {
  return (
    <div className="text-2xl ">
      <p>Welcome, { getUsername() }</p>
    </div>
  )
}

export default Welcome;