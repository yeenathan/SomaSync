import { Navigate, Outlet } from "react-router";
import { useAuth } from "./authContext";

function PrivateRouteLayout() {
  const {isAuthenticated} = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace/>
  }
  return <Outlet/>
}


export default PrivateRouteLayout;