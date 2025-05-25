import { Link } from "react-router";
import BackButton from "../components/ui/backButton";
import FileUploadIcon from '@mui/icons-material/FileUpload';
function EditProfile() {
  return (
    <div className="flex flex-col p-4 md:p-8 w-full h-full">
      <header className="mb-4 flex flex-row gap-4 items-center">
        <BackButton />
        <Link to="/" className="text-3xl"><h2>Edit Profile</h2></Link>
      </header>

      <main className="flex flex-col items-center justify-center w-full gap-4">
        <div className="">
          <div className="flex flex-row gap-4">
            <img
              src="/profile.png"
              className="md:w-54 md:h-54 w-28 rounded-full object-cover mb-4"
              alt="Somasync Logo"
            />
            <div className="flex flex-col items-center mb-4">
              <div className="md:w-[216px] md:h-[216px] w-28 h-28 rounded-full bg-black flex flex-col items-center justify-center text-white text-center px-2">
                <FileUploadIcon sx={{ fontSize: 60 }} className="mb-2 text-2xl" />
                <span className="md:text-sm text-xs">New photo</span>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <form className="max-w-2xl mx-auto space-y-8">
              <fieldset>
                <legend className="font-bold text-2xl mb-4">Personal Information</legend>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="name" className="w-32 font-medium">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="pronouns" className="w-32 font-medium">Pronouns</label>
                    <input
                      type="text"
                      id="pronouns"
                      name="pronouns"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="She/Her"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-bold text-2xl mb-4">Contact</legend>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="email" className="w-32 ">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="janedoe@email.com"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="phone" className="w-32 ">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="address" className="w-32 ">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="123 Main St, City, ZIP"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend className="font-bold text-2xl mb-4">Emergency Contact</legend>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="email" className="w-32 ">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="janedoe@email.com"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="phone" className="w-32 ">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                    <label htmlFor="address" className="w-32 ">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="flex-1 border-b border-gray-400 focus:outline-none focus:border-black px-1 py-1"
                      placeholder="123 Main St, City, ZIP"
                    />
                  </div>
                </div>
              </fieldset>

            </form>

          </div>
        </div>
      </main>
    </div>
  )
}

export default EditProfile;