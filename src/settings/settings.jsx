import TextSize from "../utils/textSize";
import ThemeToggle from "../utils/themeToggle";
import { Outlet } from "react-router-dom";
import BackButton from "../components/ui/backButton";
import { Link } from "react-router-dom";
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from "react";
import { getUserInfo } from "@/utils/WP";

function Settings() {
  const [userData, setUserData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchMeta() {
      try {
        const data = await getUserInfo();
        setUserData(data);
        setLoading(false);
      }
      catch (e) {
        setUserData(undefined);
        setLoading(true);
        console.log("Error: ", e);
      }
    }
    fetchMeta();
  },[]);

  if (loading) {
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
      <header className="mb-4 flex flex-row gap-4 items-center">
        <BackButton />
        <Link to="/" className="text-3xl"><h2>Settings</h2></Link>
      </header>


   <main className="flex flex-col items-center justify-center w-full px-4 gap-6">
  <div className="text-center w-full max-w-md">
    <img
      src={userData.avatar_urls["96"]}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      alt="Somasync Logo"
    />
    <div className="mb-6">
      <p className="font-bold text-lg">{userData.name}</p>
      <p className="text-sm">{userData.email}</p>
    </div>
    {/* <Link className="font-bold " to="profile">Edit Profile</Link> */}
  </div>


  <div className="w-full max-w-md flex flex-col gap-4">
    <div className="settingsButton flex items-center h-20 bg-gray-100 rounded-xl px-4">
      <div className="flex items-center gap-3">
        <AccessibilityIcon sx={{ fontSize: 30 }} className="" />
        <Link to="accessibility" className="text-base font-medium">Accessibility</Link>
      </div>
      <ArrowForwardIosIcon sx={{ fontSize: 24 }} className="ml-auto " />
    </div>

    <div className="settingsButton flex items-center h-20 bg-gray-100 rounded-xl px-4">
      <div className="flex items-center gap-3">
        <LoginIcon sx={{ fontSize: 30 }} className="" />
        <Link to="" className="text-base font-medium">Log Out</Link>
      </div>
      <ArrowForwardIosIcon sx={{ fontSize: 24 }} className="ml-auto " />
    </div>
  </div>
</main>


    </div>
  );
}

export default Settings;
