import { Link } from "react-router";
import BackButton from "../components/ui/backButton";

function EditProfile() {
  return(
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
        <header className="mb-4 flex flex-row gap-4 items-center">
              <BackButton />
              <Link to="/" className="text-3xl"><h2>Settings</h2></Link>
            </header>

      <div>
          
      </div>
    </div>
  )
}

export default EditProfile;