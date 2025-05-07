import { useAuth } from "@/utils/authContext.tsx";

function Welcome() {
  const { userInfo } = useAuth();
  return (
    <div className="text-2xl ">
      <p>Welcome, {userInfo.name}</p>
    </div>
  )
}

export default Welcome;