import { useOutletContext, useParams } from "react-router";

function Session() {
  const params = useParams();
  const pages:Array<any> = useOutletContext();
  const page = pages.filter((page) => {
    return page.id === Number(params.sessionid);
  })[0];
  return(
    <div dangerouslySetInnerHTML={{__html: page.content.rendered}}/>
  )
}

export default Session;