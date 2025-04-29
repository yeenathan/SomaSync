import { useParams } from "react-router";

function Session() {
  let params = useParams();
  return(
    <div>
      Session number {params.sessionid}
    </div>
  )
}

export default Session;