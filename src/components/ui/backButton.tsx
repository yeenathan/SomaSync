import { useLocation, Link } from "react-router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton() {
   const location = useLocation();

  function getParentPath(pathname: string) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "/";
    if (segments[segments.length-2] === "chapter" || segments[segments.length-2] === "activity") {
      segments.pop();
      segments.pop();
    } else {
      segments.pop();
    }
    return "/" + segments.join("/");
  }

  return(
    <Link to={getParentPath(location.pathname)}>
      <ArrowBackIcon/>
    </Link>
  )
}

export default BackButton;