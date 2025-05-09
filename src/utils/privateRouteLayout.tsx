import { Navigate, Outlet } from "react-router";
import { useAuth } from "./authContext";
import { getUserMeta } from "./WP";
import { useEffect, useState } from "react";


function PrivateRouteLayout() {
  const {loading, isAuthenticated} = useAuth();
  const [onboarding, setOnboarding] = useState(null);

  useEffect(() => {
    async function fetchUserMeta() {
      try {
        const userMeta = await getUserMeta();
        const doneOnboarding = userMeta.meta.doneOnboarding;
        setOnboarding(doneOnboarding);
      }
      catch (e) {
        setOnboarding(false);
      }
    }
    if (isAuthenticated) fetchUserMeta();
  })

  if (loading) {
    return <div>Loading...</div>
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>
  }
  if (!onboarding) {
    // return <Navigate to="/onboarding" replace/>
  }
  return <Outlet/>
}


export default PrivateRouteLayout;