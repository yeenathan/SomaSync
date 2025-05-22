import { Navigate, Outlet, useLocation } from "react-router";
import { useAuth } from "./authContext";
import { getUserMeta } from "./WP";
import { useEffect, useState } from "react";
import NavigationRail from "@/components/ui/navigationRail";


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
  if (!onboarding && location.pathname !== "/onboarding" && isAuthenticated) {
    return <Navigate to="/onboarding" replace/>
  }
  return(
<div className="flex flex-col md:flex-row h-screen">
  <div className="hidden md:block w-20" />
  <NavigationRail />
  <div className="flex-1 overflow-auto">
    <Outlet context={{ setOnboarding }} />
  </div>
</div>

  )
}


export default PrivateRouteLayout;