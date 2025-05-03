import { Link, useOutletContext, useParams } from "react-router";

function SessionChapter() {
  function getNextChapterSlug() {
    const next = Number(post.slug.slice(-1))+1;
    if (next > maxPosts) return "";
    return post.slug.slice(0, post.slug.length-1)+next;
  }
  
  const params = useParams();
  const posts: Array<any> = useOutletContext();

  const filteredPosts = posts.filter((post) => {
    return post.slug.slice(0,8) === params.sessionid;
  });
  const post = posts.filter((post) => {
    return post.slug === params.chapterid
  })[0];
  
  const maxPosts = filteredPosts.length;

  return(
    <div>
      <div dangerouslySetInnerHTML={{__html: post.content.rendered}}/>
      <Link to={`/sessions/${params.sessionid}/${getNextChapterSlug()}`}>Next</Link>
    </div>
  )
}

export default SessionChapter;