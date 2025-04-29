import { Outlet } from "react-router"; //children

function SessionLayout() {
  return(
    <div>
      <div>
        nav
      </div>
      {<Outlet/>}
    </div>
  )
}

export default SessionLayout;