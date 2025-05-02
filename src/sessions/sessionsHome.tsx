import { useOutletContext } from "react-router";
import SessionCategory from "@/components/sessionCategory";
import { Link } from "react-router";

function SessionsHome() {
  const pages:Array<any> = useOutletContext();
  return(
    <div>
      {
        pages.map((page:any, i:number) => {
          return(
            <Link to={`/sessions/${page.id}`}>
              <SessionCategory key={i} title={page.title.rendered}/>
            </Link>
          ) 
        })
      }
    </div>
  )
}

export default SessionsHome;