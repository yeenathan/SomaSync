import { useOutletContext, useParams } from "react-router";

function SessionChapter() {
  const params = useParams();
  const {posts, categories}: {posts:Array<any>, categories:Array<any>} = useOutletContext();
  const post = posts.filter((post) => {
    return post.id === Number(params.chapterid);
  })[0];
  return(
    <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
  )
}

export default SessionChapter;