import { Navigate, Outlet } from "react-router";
import { useAuth } from "./authContext";

function PrivateRouteLayout() {
  const {loading, isAuthenticated} = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return <Outlet/>
}


export default PrivateRouteLayout;