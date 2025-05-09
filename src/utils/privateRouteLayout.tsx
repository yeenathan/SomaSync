import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./authContext";
import { getUserMeta } from "./WP";
import { useEffect, useState } from "react";


function PrivateRouteLayout() {
  const {loading, isAuthenticated} = useAuth();
  const [onboarding, setOnboarding] = useState(null);
  const [metaLoading, setMetaLoading] = useState(true);
  const location = useLocation();

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
      finally {
        setMetaLoading(false);
      }
    }
    if (isAuthenticated) {
      fetchUserMeta();
    } else setMetaLoading(false);
  },[location.pathname])

  if (loading || metaLoading) {
    return <div>Loading...</div>
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>
  }
  if (!onboarding && location.pathname !== "/onboarding") {
    return <Navigate to="/onboarding" replace/>
  }
  return <Outlet context={{setOnboarding}}/>
}


export default PrivateRouteLayout;