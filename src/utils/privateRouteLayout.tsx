import { Navigate, Outlet } from "react-router";
import { useAuth } from "./authContext";
import { getUserMeta } from "./WP";

const userMeta = await getUserMeta();

function PrivateRouteLayout() {
  const {loading, isAuthenticated} = useAuth();

  if (loading) {
    return <div>Loading...</div>
  }
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>
  }
  // if (!userMeta.meta.doneOnboarding && isAuthenticated) {
  //   return <Navigate to="/onboarding" replace/>
  // }
  return <Outlet/>
}


export default PrivateRouteLayout;