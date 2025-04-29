import { useParams } from "react-router";
import SessionContent from "@/sessions/sessionContent";

function Session() {
  const params = useParams();
  const session = SessionContent.filter((session) => {
    return session.id === Number(params.sessionid);
  })[0] || {
    title: `session ${params.sessionid} not found`,
  };
  return(
    <div>
      <h1>{session.title}</h1>
      <h4>{session.subtitle}</h4>
      {session.content}
    </div>
  )
}

export default Session;