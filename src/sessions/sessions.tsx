import { useOutletContext } from "react-router";
import SessionCategory from "@/components/sessionCategory";
import { Link } from "react-router";

function Sessions() {
  const {posts, categories}:{posts: Array<any>, categories: Array<any>} = useOutletContext();
  return(
    <div className="flex flex-col gap-4 min-w-full">
      {
        categories.map((category:any, i:number) => {
          return(
            <Link to={`/sessions/${category.id}`}>
              <SessionCategory key={i} title={category.name}/>
            </Link>
          ) 
        })
      }
    </div>
  )
}

export default Sessions;