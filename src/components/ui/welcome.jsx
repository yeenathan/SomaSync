import { getUsername } from "@/utils/WP";

function Welcome() {
  console.log(getUsername());
  return (
    <div className="text-2xl ">
      <p>Welcome, { getUsername() }</p>
    </div>
  )
}

export default Welcome;